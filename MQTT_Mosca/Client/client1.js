/*
Line 1 : We require MQTT

Line 3 : We connect to the server

Line 5 : We subscribe to a topic named “presence”

Line 8 : We publish a message to “presence”

Line 10 : We close the close the client

*/

var mqtt = require('mqtt')
client = mqtt.createClient(1883,'localhost');
client.subscribe('presence');
console.log('Client publishing ..');
client.publish('presence', 'bullshit ' + Date());
client.end();
