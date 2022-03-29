const express = require('express');
const app = express();
const { BirthdayService } = require('./service')

app.get("/api/birthdayGreetings", async (req,res) => {
  const { date, medium } = req.query
  const service = BirthdayService({ get: () => []})
  const greetings = await service.getBirthDayGreetings(date, medium)
  res.send(greetings)
})

app.listen(3000, () => {
  console.log("Listening on port 3000.")
})

module.exports = {
  app
}