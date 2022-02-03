const dotenv = require("dotenv");
dotenv.config();

const { MONGOOSE_URI } = process.env;

const CorsConfig = {
  origin: ["http://localhost:5000", "https://localhost:5000"],
};

module.exports = { MONGOOSE_URI, CorsConfig };
