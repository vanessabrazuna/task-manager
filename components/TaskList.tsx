'use client'

import { useAppSelector } from '@/lib/hooks'
import TaskItem from './TaskItem'

export default function TaskList() {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const searchQuery = useAppSelector((state) => state.tasks.searchQuery)

  // Filter tasks based on search query
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    )
  }

  if (filteredTasks.length === 0 && searchQuery) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tasks found matching "{searchQuery}"</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
