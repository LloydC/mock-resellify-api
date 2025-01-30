const router = require("express").Router();

const User = require("../models/User.model");

router.get("/", (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.error(err))
});

router.post("/", (req, res, next) => {
    User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => console.error(err))
})

module.exports = router;
