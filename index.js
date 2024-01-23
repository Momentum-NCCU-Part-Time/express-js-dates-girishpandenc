const express = require("express");
const querystring = require("node:querystring");
const cors = require ("cors");
const morgan = require ("morgan");
const dayjs = require ("dayjs");
dayjs().format()

const port = 3000;

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.get('/api/dates/today', (req, res) => {
  const todayDate = dayjs().format("ddd MMM DD, YYYY");
  const todayDateSimple = dayjs().format("YYYY-MM-DD");
  let format = req.query.format
  if (format == 'simple') {
      res.status(200).json({"date": todayDateSimple})
  }else {
      res.status(200).json({"date": todayDate})
  }
})


app.get('*', function (req, res) {
  res.status(404).json({ error: 'route not found' })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});