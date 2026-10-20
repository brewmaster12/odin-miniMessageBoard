const express = require("express")
const app = express()

const indexRouter = require("./routes/indexRouter.js")
const newMessageRouter = require("./routes/newMessageRouter.js")

app.use("/new", newMessageRouter)
app.use("/", indexRouter)


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini message board app - listening on port ${PORT}`)
})