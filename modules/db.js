var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/game';


MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to mongo server");
  db.close();
});

function insertScore(counter) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    var name = counter.name;
    var score = counter.score;

    //console.log(score+" "+name);

    db.collection('game').find({name : name}).toArray(function(err,result){
      //console.log(result.length);
      if(result.length > 0){
        if(result[0].score < score){
          db.collection('game').update({name:name},{$set:{score:score}}, function (err, r) {
            assert.equal(null, err);
            db.close();
          });
        }
      }
      else{
        db.collection('game').insert(counter, function (err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
            db.close();

    });
      }
    
  
      
  });
});
}


function getScore(func) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    db.collection('game').find({}).sort({ score: -1 }).limit(5).toArray(function (err, counter) {
      assert.equal(err, null);
      func(counter);
      db.close();
    });
  });
}


module.exports.insertScore = insertScore;
module.exports.getScore = getScore;