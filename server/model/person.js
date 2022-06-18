const mongoose = require("mongoose");
const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    family: { type: String, required: true },
    age: { type: String, required: true },
 
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.models?.Person || mongoose.model("Person", personSchema);
