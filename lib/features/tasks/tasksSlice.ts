import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

interface TasksState {
  tasks: Task[]
  searchQuery: string
}

const initialState: TasksState = {
  tasks: [
    {
      id: '1',
      title: 'Complete project documentation',
      completed: false,
      createdAt: '2024-01-15T09:00:00.000Z'
    },
    {
      id: '2',
      title: 'Review code changes',
      completed: true,
      createdAt: '2024-01-14T14:30:00.000Z'
    },
    {
      id: '3',
      title: 'Update dependencies',
      completed: false,
      createdAt: '2024-01-13T11:15:00.000Z'
    },
    {
      id: '4',
      title: 'Write unit tests',
      completed: false,
      createdAt: '2024-01-12T16:45:00.000Z'
    },
    {
      id: '5',
      title: 'Design user interface mockups',
      completed: true,
      createdAt: '2024-01-11T10:20:00.000Z'
    },
    {
      id: '6',
      title: 'Set up CI/CD pipeline',
      completed: false,
      createdAt: '2024-01-10T13:30:00.000Z'
    },
    {
      id: '7',
      title: 'Conduct team meeting',
      completed: true,
      createdAt: '2024-01-09T15:00:00.000Z'
    },
    {
      id: '8',
      title: 'Optimize database queries',
      completed: false,
      createdAt: '2024-01-08T09:45:00.000Z'
    },
    {
      id: '9',
      title: 'Implement authentication system',
      completed: false,
      createdAt: '2024-01-07T12:00:00.000Z'
    },
    {
      id: '10',
      title: 'Create API documentation',
      completed: true,
      createdAt: '2024-01-06T14:15:00.000Z'
    },
    {
      id: '11',
      title: 'Fix bug in payment processing',
      completed: false,
      createdAt: '2024-01-05T11:30:00.000Z'
    },
    {
      id: '12',
      title: 'Deploy to staging environment',
      completed: true,
      createdAt: '2024-01-04T16:20:00.000Z'
    },
    {
      id: '13',
      title: 'Refactor legacy code',
      completed: false,
      createdAt: '2024-01-03T08:45:00.000Z'
    },
    {
      id: '14',
      title: 'Update user onboarding flow',
      completed: false,
      createdAt: '2024-01-02T13:10:00.000Z'
    },
    {
      id: '15',
      title: 'Configure monitoring alerts',
      completed: true,
      createdAt: '2024-01-01T10:00:00.000Z'
    },
    {
      id: '16',
      title: 'Implement dark mode toggle',
      completed: false,
      createdAt: '2023-12-31T15:30:00.000Z'
    },
    {
      id: '17',
      title: 'Add data validation',
      completed: false,
      createdAt: '2023-12-30T12:45:00.000Z'
    },
    {
      id: '18',
      title: 'Create backup strategy',
      completed: true,
      createdAt: '2023-12-29T09:15:00.000Z'
    },
    {
      id: '19',
      title: 'Update security policies',
      completed: false,
      createdAt: '2023-12-28T14:00:00.000Z'
    },
    {
      id: '20',
      title: 'Plan next sprint',
      completed: false,
      createdAt: '2023-12-27T11:20:00.000Z'
    }
  ],
  searchQuery: ''
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
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  }
})

export const { addTask, toggleTask, deleteTask, editTask, setSearchQuery } = tasksSlice.actions
export default tasksSlice.reducer
