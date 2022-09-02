const mongoose = require("mongoose");

const schema = mongoose.Schema;

const logoutSchema = new schema(
    {
        jwtToken: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Logout",logoutSchema)