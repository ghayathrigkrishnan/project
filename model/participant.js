var mongoose = require("mongoose")
var studentSchema = mongoose.Schema({
    name: String,
    email: String,
    college: String,
    event: String,
    participationType: String,  // default
    teamSize: Number
});
var studentModel = mongoose.model("participant",studentSchema);
module.exports = studentModel;