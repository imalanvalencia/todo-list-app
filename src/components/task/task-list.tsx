import Task from './task'
import { useTasks } from '@/hooks/use-tasks'

export default function TaskList(): JSX.Element {
  const { tasks } = useTasks()
  return (
    <ul>
      {tasks.map(({ id, title, description }) => (
        <Task key={id} title={title} description={description} />
      ))}
    </ul>
  )
}
