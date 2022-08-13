

const express = require('express')
var bodyParser = require('body-parser');
const controller = require("./controller")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const { user, task } = controller;


app.post("/create-user", async (req, res) => {
  let lastName = req.body.lastName
  let firstName = req.body.firstName
  if (lastName === undefined || firstName === undefined) {
    res.json({ code: 403, status: 'fail', error: "invalid input" })
    return
  }
  let result = await user.createUser(firstName, lastName)
  if (result.status === "sucess") {
    res.json({ code: 200, status: 'success', data: result.data })
  } else {
    res.json({ code: 500, status: 'fail', data: null, error: "fail from create on db" })
  }

})

app.post("/create-task", async (req, res) => {
  let name = req.body.name
  let time = req.body.time
  let userId= req.body.userId
  if (name === undefined || time === undefined) {
    res.json({ code: 403, status: 'fail', error: "invalid input" })
    return
  }
  let result = await task.createTask(name, time, userId)

  if (result.status === "sucess") {
    res.json({ code: 200, status: 'success', data: result.data })
  } else {
    res.json({ code: 500, status: 'fail', data: null, error: "fail from create on db" })
  }
})


app.get('/all-user', async (req, res) => {
  let users;
  users = await user.getAllUser()
  res.json(users)
})

// router
// api
app.get("/user-by-name", async (req, res) => {
  let users;
  users = await user.getUserByName()
  res.json(users)
})

app.get("/user-with-task/:userId", async (req, res) => {
  let userId = req.params.userId
  let userInfo = await user.getUserWithTask(userId)
  res.json(userInfo)
})

app.get("/task-with-user/:taskId", async(req, res)=>{
  let taskId = req.params.taskId
  let taskInfo =  await task.getTaskWithUser(taskId)
  res.json(taskInfo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
