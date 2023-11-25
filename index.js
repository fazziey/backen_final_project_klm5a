const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const jobRouter = require("./routes/jobRouter");
const jobAppRouter = require("./routes/jobAppRouter");
const companyRoute = require("./routes/companyRouter");

const PORT = 3000;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", jobRouter);
app.use("/api", jobAppRouter);
app.use("/api", companyRoute);

app.listen(PORT, () => {
  console.log("Running on port: " + PORT);
});
