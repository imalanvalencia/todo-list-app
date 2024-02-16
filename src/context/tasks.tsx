import { createContext, useState } from 'react'

export const TasksContext = createContext()

export function TasksProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [tasks, setTasks] = useState([])
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
