const mongoose = require("mongoose");

const schema = mongoose.Schema;

const roleSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Role", roleSchema);