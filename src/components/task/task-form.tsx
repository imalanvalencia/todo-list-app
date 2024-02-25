import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { type ComponentProps, useState } from 'react'

import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import TaskIcon from '../icons/task'
import TimeIcon from '../icons/time'
import FlagIcon from '../icons/flag'
import TagIcon from '../icons/tag'
import SendIcon from '../icons/send'
import TaskDetailsForm from './task-details-form'
import TaskTimeForm from './task-time-form'
import {
  currentHHMM,
  currentYYYYMMDD,
  regexDate,
  regexTime
} from '@/utils/date'
import TaskCategoryForm from './task-category-form'
import TaskPriorityForm from './task-priority-form'
import { useTasks } from '@/hooks/use-tasks'

// FIXME: the date regex dont work fine

const formSchema = z.object({
  'task-title': z.string({ required_error: 'Title is required' }),
  'task-description': z.string().optional(),
  'task-date': z.string().regex(regexDate),
  'task-time': z.string().regex(regexTime),
  'task-category': z.string().optional(),
  'task-priority': z.string()
})

interface IProps extends ComponentProps<'form'> {
  closeForm: (value: boolean) => void
}

export default function TaskForm({ className, closeForm }: IProps) {
  const { addTask } = useTasks()
  const [step, setStep] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      'task-title': '',
      'task-description': '',
      'task-date': currentYYYYMMDD,
      'task-time': currentHHMM,
      'task-category': 'general',
      'task-priority': '10'
    }
  })

  const onSubmit = (newTask: z.infer<typeof formSchema>) => {
    closeForm(false)
    const parseTask = {
      title: newTask['task-title'],
      description: newTask['task-description'],
      date: newTask['task-date'],
      time: newTask['task-time'],
      category: newTask['task-category'],
      priority: newTask['task-priority']
    }
    addTask(parseTask)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-3', className)}
      >
        {step === 1 && <TaskDetailsForm control={form.control} />}
        {step === 2 && <TaskTimeForm control={form.control} />}
        {step === 3 && <TaskCategoryForm control={form.control} />}
        {step === 4 && <TaskPriorityForm control={form.control} />}

        <div className="flex justify-between mt-4">
          <nav className="flex items-center gap-2">
            <Button
              type="button"
              className={cn(step === 1 && 'text-indigo-500')}
              onClick={() => {
                setStep(1)
              }}
              variant="ghost"
            >
              <TaskIcon className="size-6" />
            </Button>
            <Button
              type="button"
              className={cn(step === 2 && 'text-indigo-500')}
              onClick={() => {
                setStep(2)
              }}
              variant="ghost"
            >
              <TimeIcon className="size-6" />
            </Button>
            <Button
              type="button"
              className={cn(step === 3 && 'text-indigo-500')}
              onClick={() => {
                setStep(3)
              }}
              variant="ghost"
            >
              <TagIcon className="size-6" />
            </Button>
            <Button
              type="button"
              className={cn(step === 4 && 'text-indigo-500')}
              onClick={() => {
                setStep(4)
              }}
              variant="ghost"
            >
              <FlagIcon className="size-6" />
            </Button>
          </nav>

          {step === 5 ? (
            <Button
              type="submit"
              className="bg-indigo-400 hover:bg-indigo-700 active:bg-indigo-700"
            >
              <SendIcon />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => {
                setStep(step + 1)
              }}
              variant="outline"
            >
              <SendIcon />
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
