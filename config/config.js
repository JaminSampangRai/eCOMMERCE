require("dotenv").config();


module.exports = {
    PORT: process.env.PORT || 3001,
    secret: "auth-secret-key",
}