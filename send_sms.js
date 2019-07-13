const key = require("./key.js");

const accountSid = key.accountSid;
const authToken = key.authToken;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: key.fromNumber,
    to: key.toNumber
  })
  .then(message => console.log(message.sid));
