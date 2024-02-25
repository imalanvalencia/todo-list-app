import type { ITask, TListOfTasks } from '@/components/task/tasks'
import { currentHHMM, currentYYYYMMDD } from '@/utils/date'
import { createContext, useState } from 'react'

type TaskIdandStatus = Pick<ITask, 'id' | 'completed'>

interface ITaskContext {
  tasks: TListOfTasks
  addTask: (task: ITask) => void
  removeAllTask: () => void
  changeTaskStatus: ({ id, completed }: TaskIdandStatus) => void
}

const defaultTask: TListOfTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    description: 'awesome react course',
    date: currentYYYYMMDD,
    time: currentHHMM,
    completed: false,
    category: 'work',
    priority: '1'
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    description: 'awesome react course',
    date: currentYYYYMMDD,
    time: currentHHMM,
    completed: true,
    category: 'work',
    priority: '1'
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    description: 'awesome react course',
    date: currentYYYYMMDD,
    time: currentHHMM,
    completed: false,
    category: 'work',
    priority: '1'
  },
  {
    id: crypto.randomUUID(),
    title: 'Learn React',
    description: 'awesome react course',
    date: currentYYYYMMDD,
    time: currentHHMM,
    completed: false,
    category: 'work',
    priority: '1'
  }
]

export const TasksContext = createContext<ITaskContext>({
  tasks: [],
  addTask: () => {},
  removeAllTask: () => {},
  changeTaskStatus: () => {}
})

export function TasksProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [tasks, setTasks] = useState<TListOfTasks>(defaultTask)

  const addTask = (task: ITask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...task,
        completed: false,
        id: crypto.randomUUID()
      }
    ])
  }

  const removeAllTask = () => {
    setTasks([])
  }

  const changeTaskStatus = ({ id }: TaskIdandStatus) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, removeAllTask, changeTaskStatus }}
    >
      {children}
    </TasksContext.Provider>
  )
}
