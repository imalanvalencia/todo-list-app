export interface ITask {
  id: string
  title: string
  description: string
  date: string
  time: string
  category: string
  priority: string
  completed: boolean
}

interface ICategory {
  label: string
  color: string
  icon: JSX.Element
  iconColor: string
  accentColor: string
}

export type TListOfTasks = ITask[]
