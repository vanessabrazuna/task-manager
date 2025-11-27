'use client'

import { useState } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { deleteTask } from '@/lib/features/tasks/tasksSlice'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Trash2 } from 'lucide-react'

interface DeleteTaskDialogProps {
  taskId: string
  taskTitle: string
}

export default function DeleteTaskDialog({ taskId, taskTitle }: DeleteTaskDialogProps) {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteTask(taskId))
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Task</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this task? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Task: <span className="font-medium text-foreground">{taskTitle}</span>
          </p>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}