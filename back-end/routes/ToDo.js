const Task = require("../models/ToDo");
const express = require("express");
const router = express.Router();

// save data ********
router.post("/", async(req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        console.warn(`post of routes/ToDo.js`, error);
    }
})

// get data &&&&&&&&&
router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        console.warn(`get of routes/ToDo.js`, error);
    }
})

// change data ^^^^^^^^^^^^^^^^
router.put("/:id", async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate({_id: req.params.id}, req.body);
        res.send(task);
    } catch (error) {
        console.warn(`put of routes/ToDo.js`, error);
    }
})

// delete data --------------------
router.delete("/:id", async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        console.warn(`delete of routes/ToDo.js`, error);
    }
})



module.exports = router;

