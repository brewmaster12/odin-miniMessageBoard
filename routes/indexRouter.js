const { Router } = require("express")
const indexRouter = Router()
const db = require("../db.js")
const messages = db.messages;

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages })
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date()
  });
  res.redirect("/");
});

module.exports = indexRouter