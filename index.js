const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
dotEnv.config();
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.post('/', (req, res) => {
//     const request = req.body;
//     console.log(request);
// })
const formroute = require("./routes/formRoute")
//routes

app.use("/api", formroute)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});