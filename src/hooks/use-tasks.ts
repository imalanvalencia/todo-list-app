import { TasksContext } from '@/context/tasks'
import { useContext } from 'react'

export const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext)

  return { tasks, setTasks }
}
