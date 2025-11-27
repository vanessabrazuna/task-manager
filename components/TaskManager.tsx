'use client'

import { Card } from '@/components/ui/card'
import TaskList from './TaskList'
import TaskSearchBar from './TaskSearchBar'
import AddTaskDialog from './AddTaskDialog'
import HydrateTasks from './HydrateTasks'
import { useAppSelector } from '@/lib/hooks'

export default function TaskManager() {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length

  return (
    <>
      <HydrateTasks />
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Task Manager</h1>
          <p className="text-muted-foreground">
            Keep track of your tasks with Redux state management
          </p>
          {totalTasks > 0 && (
            <p className="text-sm text-muted-foreground">
              {completedTasks} of {totalTasks} tasks completed
            </p>
          )}
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex gap-2 w-full">
              <div className="flex-1">
                <TaskSearchBar />
              </div>
              <AddTaskDialog />
            </div>
            <TaskList />
          </div>
        </Card>
      </div>
    </>
  )
}