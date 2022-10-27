const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = model("to-do-list", taskSchema);