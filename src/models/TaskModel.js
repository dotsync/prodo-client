export default class TaskModel {
    constructor(id, title, tags, description) {
        this.createdDate = new Date()
        this.tags = tags;
        this.title = title
        this.description = description;
        this.taskId = id;
    }
}