var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();

client.connect({ token: "NDA5Nzk3NTA1ODI0NDU2NzA2.DVo2cg.Vwd2JZ_7pG6MUs0_RXZ31aVMeWA" });


client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
if (e.message.content.toLowerCase() == "hello there")
e.message.channel.sendMessage("General Kenobi");
});

client.login(process.env.BOT_TOKEN);
