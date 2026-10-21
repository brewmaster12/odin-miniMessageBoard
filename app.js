const express = require("express")
const app = express()

const indexRouter = require("./routes/indexRouter.js")
const newMessageRouter = require("./routes/newMessageRouter.js")
const messageDetailsRouter = require("./routes/messageDetailsRouter.js")
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)
app.use("/new", newMessageRouter)
app.use("/details", messageDetailsRouter)

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini message board app - listening on port ${PORT}`)
})