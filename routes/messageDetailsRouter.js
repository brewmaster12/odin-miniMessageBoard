const { Router } = require("express")
const messageDetailsRouter = Router()
const db = require("../db.js")
const messages = db.messages;

messageDetailsRouter.get("/:messageId", (req, res) => {
    const index = req.params.messageId;
    const message = messages[index];
    res.render("details", { title: "Message details", message: message })
})

module.exports = messageDetailsRouter