var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "deathbot9879",
        password: "oauth:erdww9kv4kse22ql4ah7vighwe4pc7"
    },
    channels: ["#deathman9879"]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("chat", function (channel, userstate, message, self) {

    if (self) return;

    if (message === "hi"){
        client.action("deathman9879", "Hi there!");
    }

});