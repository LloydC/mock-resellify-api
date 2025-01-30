const router = require("express").Router();

const Setting = require("../models/Setting.model");

router.get("/", (req, res, next) => {
    Setting.find()
            .then(settings => res.json(settings))
            .catch(err => console.error(err))
 
});

module.exports = router;
