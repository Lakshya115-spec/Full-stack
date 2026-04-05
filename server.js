const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/bank", require("./routes/bankRoutes"));
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
