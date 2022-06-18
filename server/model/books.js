const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    writer: { type: String, required: true },
    madeYear: { type: String, required: true },
    text: { type: String, required: true },
    Photo: {type: Schema.Types.ObjectId, ref: "Media"},
    date: { type: Date, default: Date.now, required: true },
    category: {
      type: String,
      enum: ["Literary" , "history" , "psychology" ,"Economical", "child","etc"],
      required:true,
    },
  },
  {
    timestamps: true,
  }
);
bookSchema.pre(/^find/, function () {
  this.populate('Photo')
   
   
});
module.exports = mongoose.models?.Books || mongoose.model("Books", bookSchema);
