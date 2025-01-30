const router = require("express").Router();

const Setting = require("../models/Setting.model");

router.get("/", (req, res, next) => {
    Setting.find()
            .then(settings => res.json(settings))
            .catch(err => console.error(err))
 
});

router.post("/", (req, res, next) => {
    Setting.create(req.body)
            .then(newSetting => res.json(newSetting))
            .catch(err => console.error(err))
 
});

module.exports = router;
