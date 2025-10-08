import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false,
        createdAt: new Date().toISOString()
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const task = state.tasks.find(task => task.id === action.payload.id)
      if (task) {
        task.title = action.payload.title
      }
    }
  }
})

export const { addTask, toggleTask, deleteTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer
