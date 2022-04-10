import List from './List'
import TaskModel from './TaskModel'

export default class Board {
  constructor(title) {
    this.title = title
    this.lists = []
    // this.initializeDefaultLists()
  }
  initializeDefaultLists() {
    const defaultListTitles = [
      'TO DO',
      'IN PROGRESS',
      'IN REVIEW',
      'BACKLOG',
      'DONE',
    ]

    // this code is for generating mock tasks to use for creating ui
    for (let i = 0; i < defaultListTitles.length; i++) {
      const newList = new List(defaultListTitles[i])
      const tasks = []
      for (let j = 0; j < 3; j++) {
        const newTask = new TaskModel(
          i + '-' + j,
          'task title goes here',
          ['planning', 'spike'],
          'this is the description',
        )
        tasks.push(newTask)
      }
      newList.tasks = tasks
      this.lists.push(newList)
    }
  }
}
