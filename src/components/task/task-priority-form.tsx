import FlagIcon from '@/components/icons/flag'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

const priorities = Array(10).fill(1)

export default function TaskPriorityForm({ control }) {
  return (
    <FormField
      control={control}
      name="task-priority"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Choose Priority</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex justify-center items-center gap-4 flex-wrap pb-4 max-h-52 overflow-auto"
            >
              {priorities.map((_, i) => {
                const priorityStr = String(i + 1)
                return (
                  <FormItem key={i} className="bg-transparent">
                    <FormControl>
                      <RadioGroupItem value={priorityStr} className="hidden" />
                    </FormControl>
                    <FormLabel
                      className={cn(
                        field.value === priorityStr
                          ? 'bg-indigo-400'
                          : 'bg-zinc-800',
                        'flex flex-col rounded-md justify-center items-center w-20 h-20 !m-0 opacity-80'
                      )}
                    >
                      <div className="w-8 h-8">
                        <FlagIcon />
                      </div>
                      {priorityStr}
                    </FormLabel>
                  </FormItem>
                )
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
