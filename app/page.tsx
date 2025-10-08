import ReduxProvider from "@/components/ReduxProvider"
import TaskManager from "@/components/TaskManager"

export default function Home() {
  return (
    <ReduxProvider>
      <TaskManager />
    </ReduxProvider>
  )
}