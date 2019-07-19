var createError = require("http-errors");
//const http = require('http');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

var indexRouter = require("./routes/index");
var reservationsRouter = require("./routes/reservations");

var parser = require("./util.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/reservations", reservationsRouter);

let resList = [];
module.exports.resList = resList;

//SLACK BOT: https://gitlab.frmwrk.nl/frmwrk-general/codebot/commit/6d4fd31513cdce46624936d1a607fa91f1edb32d?view=inline

app.post("/slack", (req, res) => {
  console.log(req.body);
  const body = req.body.text;
  const user_name = req.body.user_name;
  const parsedSlack = parser(body);
  parsedSlack["userName"] = user_name;
  resList.push(parsedSlack);
  console.log(resList);
  res.send("Submitted");
});

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  const body = req.body.Body;
  console.log(req.body);

  const parsedBody = parser(body);
  if (parsedBody === null) {
    twiml.message(
      "The restaurant is not open during that time. Make a new reservation"
    );
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  } else {
    const fromPhone = req.body.From;
    parsedBody["phoneNumber"] = fromPhone;
    resList.push(parsedBody);

    console.log("Res List: ", resList);

    //need to send resList to reservations.js

    twiml.message("Thank you for making a reservation.");

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
