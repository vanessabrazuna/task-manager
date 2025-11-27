'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Edit2, Check, X } from 'lucide-react'
import { useAppDispatch } from '@/lib/hooks'
import { toggleTask, editTask } from '@/lib/features/tasks/tasksSlice'
import type { Task } from '@/lib/features/tasks/tasksSlice'
import DeleteTaskDialog from './DeleteTaskDialog'

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditTitle(task.title)
  }

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      dispatch(editTask({ id: task.id, title: editTitle.trim() }))
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditTitle(task.title)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit()
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <Card className={`p-4 ${task.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-center space-x-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={handleToggle}
          className="flex-shrink-0"
        />
        
        {isEditing ? (
          <div className="flex-1 flex items-center space-x-2">
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1"
              autoFocus
            />
            <Button size="sm" variant="ghost" onClick={handleSaveEdit}>
              <Check className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={handleCancelEdit}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
              {task.title}
            </span>
            <div className="flex space-x-1">
              <Button size="sm" variant="ghost" onClick={handleEdit}>
                <Edit2 className="h-4 w-4" />
              </Button>

              <DeleteTaskDialog 
                taskId={task.id} 
                taskTitle={task.title} 
              />
            </div>
          </>
        )}
      </div>
    </Card>
  )
}