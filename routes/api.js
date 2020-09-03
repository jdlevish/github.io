const router = require("express").Router();
const contact = require("../models/contact.js");
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});


router.post("/api/contact", (req, res) => {
    var body = req.body
    console.log(body.mailingList)
    if (body.mailingList == 'false') {
        res.send("thank you")
    } else {
        console.log(body)
        contact.create(body)
            .then(dbContact => {
                res.json(dbContact);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
});


module.exports = router;