const mongoose = require("mongoose");

//add weatherSchema
const weatherSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("weather", weatherSchema);
