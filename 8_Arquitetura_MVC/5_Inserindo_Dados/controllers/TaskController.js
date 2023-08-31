const Task = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create');
    }

    static async saveTask(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        try {
            await Task.create(task);
        } catch (error) {
            console.log(error);
        }


        res.redirect('/tasks');
    }

    static showTasks(req, res) {
        res.render('tasks/all');
    }
}