'use client'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { setSearchQuery } from '@/lib/features/tasks/tasksSlice'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function TaskSearchBar() {
  const searchQuery = useAppSelector((state) => state.tasks.searchQuery)
  const dispatch = useAppDispatch()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
  }

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="pl-10 w-full"
      />
    </div>
  )
}
