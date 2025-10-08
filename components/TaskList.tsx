'use client'

import { useAppSelector } from '@/lib/hooks'
import TaskItem from './TaskItem'

export default function TaskList() {
  const tasks = useAppSelector((state) => state.tasks.tasks)

  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
