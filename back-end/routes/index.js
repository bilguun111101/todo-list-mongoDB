const router = require("express").Router();

// routes will be here ...

router.get("/", (req, res) => {
    res.send(`Welcome to the home page`);
})



module.exports = router;