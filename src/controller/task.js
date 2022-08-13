
const { Task } = require("../model")

async function createTask(name, time, userId) {
    let task
    try {
        task = await Task.create({ name, time, userId});
    } catch (error) {
        console.log("error:", error)

        return { status: 'error', data: null, error: error }
    }

    return { status: 'sucess', data: task , error: null }

}

async function getTaskWithUser(taskId){
    let taskInfo
    taskInfo = await Task.findByPk(taskId, {include :["user"]})
    return taskInfo
}

module.exports = { createTask, getTaskWithUser }