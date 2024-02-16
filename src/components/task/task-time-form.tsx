import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '../ui/input'
import { currentYYYYMMDD } from '@/utils/date'

export default function TaskTimeForm({ control }) {
  return (
    <>
      <FormField
        control={control}
        name="task-date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Choose Date</FormLabel>
            <Input type="date" {...field} min={currentYYYYMMDD} />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="task-time"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Choose Time</FormLabel>
            <Input type="time" {...field} /* value={currentHHMM} */ required />
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
