import { Badge } from '@/components/ui/badge'
import FlagIcon from '../icons/flag'
import { Card, CardContent, CardTitle } from '../ui/card'
import { type ITask } from './tasks'
import { cn } from '@/lib/utils'

interface Props extends Omit<ITask, 'id' | 'description'> {
  toggleTaskState: () => void
}

const Todo: React.FC<Props> = ({
  title,
  time,
  date,
  category,
  priority,
  completed,
  toggleTaskState
}: Props) => (
  <Card
    className={cn('w-full', completed && 'bg-indigo-500')}
    onClick={toggleTaskState}
  >
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
  title,
  time,
  date,
  category,
  priority,
  completed,
  toggleTaskState
}: Props) => {
  return (
    <li className="bg-neutral-800 w-full min-h-16 flex">
      <Todo
        title={title}
        time={time}
        date={date}
        category={category}
        priority={priority}
        completed={completed}
        toggleTaskState={toggleTaskState}
      />
    </li>
  )
}

export default Task
