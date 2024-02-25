import { TasksContext } from '@/context/tasks'
import { useContext } from 'react'

export const useTasks = () => {
  const context = useContext(TasksContext)

  if (context === undefined)
    throw new Error('useTasks must be used within a TasksProvider')

  return context
}
