/*
We will create another client that will listen for changes in the “presence” topic. Create a new file inside client folder and name it as client2.js. Update it as below
This will subscribe to client one. Remember, both the client communiate using Mosca server that we just created.
*/
var mqtt = require('mqtt');
client = mqtt.createClient(1883,'localhost');
client.subscribe('presence');

client.on('message',function(topic,message){
console.log("topic is: ",topic.toString());
console.log("message is: ",message.toString());

});

console.log("client Started ...");
