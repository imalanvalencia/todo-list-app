import Task from '@/components/task/task'
import { useTasks } from '@/hooks/use-tasks'

export default function TaskList(): JSX.Element {
  const { tasks, changeTaskStatus } = useTasks()

  return (
    <ul>
      {tasks.map(({ id, title, completed, category, priority, date, time }) => {
        const toggleTaskStatus = () => {
          changeTaskStatus({ id })
        }

        return (
          <Task
            key={id}
            title={title}
            completed={completed}
            priority={priority}
            date={date}
            time={time}
            category={category}
            toggleTaskStatus={toggleTaskStatus}
          />
        )
      })}
    </ul>
  )
}
