import TagIcon from '@/components/icons/tag'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

const categories = [
  {
    label: 'general',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'work',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'grocery',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'sport',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'design',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'home',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'movie',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'music',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'social',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'university',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  },
  {
    label: 'health',
    color: 'bg-red-400',
    icon: <TagIcon />,
    iconColor: 'text-red-900',
    accentColor: 'bg-red-600'
  }
]

export default function TaskCategoryForm({ control }) {
  return (
    <FormField
      control={control}
      name="task-category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Choose Category</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex justify-center items-center gap-4 flex-wrap pb-4 max-h-52 overflow-auto"
            >
              {categories.map(
                ({ label, color, icon, iconColor, accentColor }) => (
                  <FormItem key={label} className="bg-transparent">
                    <FormControl>
                      <RadioGroupItem value={label} className="hidden" />
                    </FormControl>
                    <FormLabel
                      className={cn(
                        field.value === label ? accentColor : color,
                        'flex flex-col rounded-md justify-center items-center capitalize w-20 h-20 !m-0 opacity-80'
                      )}
                    >
                      <div className={cn(iconColor, 'w-8 h-8')}>{icon}</div>
                      {label}
                    </FormLabel>
                  </FormItem>
                )
              )}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
