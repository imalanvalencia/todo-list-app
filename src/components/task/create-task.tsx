import { useState } from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import TaskForm from './task-form'

interface Props {
  children?: {
    button: JSX.Element
  }
}

// TODO: Improve this description
const FORM_TITLE = 'Create a Task'
const FORM_DESCRIPTION =
  'Fill the input and ...., Click save when you&apos;re done.'

export default function CreateTask({ children }: Props) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 425px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children?.button}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{FORM_TITLE}</DialogTitle>
            <DialogDescription>{FORM_DESCRIPTION}</DialogDescription>
          </DialogHeader>
          <TaskForm
            closeForm={(s) => {
              setOpen(s)
            }}
          />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children?.button}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{FORM_TITLE}</DrawerTitle>
          <DrawerDescription>{FORM_DESCRIPTION}</DrawerDescription>
        </DrawerHeader>
        <TaskForm
          className="px-4"
          closeForm={(s) => {
            setOpen(s)
          }}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
