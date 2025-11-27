'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { hydrateFromLocalStorage } from '@/lib/features/tasks/tasksSlice'

export default function HydrateTasks() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Carrega as tasks do localStorage após o componente montar
    dispatch(hydrateFromLocalStorage())
  }, [dispatch])

  return null
}