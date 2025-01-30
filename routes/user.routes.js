const router = require("express").Router();

const User = require("../models/User.model");

router.get("/", (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.error(err))
});

module.exports = router;
