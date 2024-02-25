import { Badge } from '@/components/ui/badge'
import FlagIcon from '../icons/flag'
import { Card, CardContent, CardTitle } from '../ui/card'
import { type ITask } from './tasks'
import { cn } from '@/lib/utils'
import { Checkbox } from '../ui/checkbox'
import { useTasks } from '@/hooks/use-tasks'
import { type CheckedState } from '@radix-ui/react-checkbox'

interface Props extends Omit<ITask, 'description'> {}

const Todo: React.FC<Props> = ({
  title,
  time,
  date,
  category,
  priority,
  completed
}: Props) => (
  <Card className={cn('w-full select-none', completed && 'bg-indigo-500')}>
    <CardTitle className="text-base ">{title}</CardTitle>
    <CardContent className="w-full inline-flex justify-between text-white text-xs">
      <p className="text-sm">
        {date} At {time}
      </p>

      <div className="inline-flex gap-2 text-white text-xs">
        <Badge>
          <FlagIcon className="size-3" /> <span>{category}</span>
        </Badge>
        <Badge variant="outline">
          <FlagIcon className="size-3" /> <span>{priority}</span>
        </Badge>
      </div>
    </CardContent>
  </Card>
)

const Task: React.FC<Props> = ({
  id,
  title,
  time,
  date,
  category,
  priority,
  completed
}: Props) => {
  const { changeTaskStatus } = useTasks()

  const handleChange = (checked: CheckedState) => {
    changeTaskStatus({ id, completed: Boolean(checked) })
  }

  return (
    <li className="bg-neutral-800 w-full min-h-16 flex">
      <Checkbox
        id={`task-${id}`}
        checked={completed}
        onCheckedChange={handleChange}
        hidden
      />
      <label htmlFor={`task-${id}`} className="w-full">
        <Todo
          title={title}
          time={time}
          date={date}
          category={category}
          priority={priority}
          completed={completed}
        />
      </label>
    </li>
  )
}

export default Task
