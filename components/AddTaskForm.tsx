'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks'
import { addTask } from '@/lib/features/tasks/tasksSlice'

export default function AddTaskForm() {
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTask({ title: title.trim() }))
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
      />
      <Button type="submit" disabled={!title.trim()}>
        <Plus className="h-4 w-4 mr-2" />
        Add Task
      </Button>
    </form>
  )
}
