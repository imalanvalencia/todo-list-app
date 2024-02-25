import Task from '@/components/task/task'
import { useTasks } from '@/hooks/use-tasks'

export default function TaskList(): JSX.Element {
  const { tasks } = useTasks()

  return (
    <ul>
      {tasks.map(({ id, title, completed, category, priority, date, time }) => {
        return (
          <Task
            key={id}
            id={id}
            title={title}
            completed={completed}
            priority={priority}
            date={date}
            time={time}
            category={category}
          />
        )
      })}
    </ul>
  )
}
