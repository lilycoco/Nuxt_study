const express = require('express');
const app = express();

app.get("/auth", (req, res) => {
  res.send({abcrr:"API server works fine"});
  // return "API server works fine"

})

app.get("/board", (req, res) => {
  // res.send("othero");
  console.log(req)
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req + '</small>'
  res.send(responseText)
})

module.exports = {
  path: '/',
  handler: app
}