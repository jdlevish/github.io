const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config()
console.log(process.env)

app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://" + process.env.MONGOUSER + ":" + process.env.MONGOPASS + "@cluster0.ddnbo.azure.mongodb.net/contact?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });
// app.post("/api/contact", (req, res) => {
//     var body = req.body
//     console.log(body)
//     contact.create(body)
//         .then(dbContact => {
//             res.json(dbContact);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
