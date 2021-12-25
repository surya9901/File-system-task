const port = process.env.PORT || 5000

const express = require("express")
const app = express();
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors({
    origin: "*"
}))

const fs = require("fs")

app.get("/", (req, res) => {
    res.send("Working")
})

app.post("/", (req, res) => {
    var currentDate = new Date();
    var dateTime = currentDate.getDate() + "-"
        + (currentDate.getMonth() + 1) + "-"
        + currentDate.getFullYear() + " @ "
        + currentDate.getHours() + "."
        + currentDate.getMinutes() + "."
        + currentDate.getSeconds();

    fs.appendFile(`./SampleFolder/${dateTime}.txt`, dateTime, (err) => {
        if (!err) {
            res.send("Saved")
        }
        else {
            res.send("Not Saved")
        }
    });
})

app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})