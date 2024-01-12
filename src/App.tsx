import * as React from 'react'
import { Minus, Plus } from 'lucide-react'

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

export default function App() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>Open message drawer</button>
      </DrawerTrigger>

      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Hola a todos!</DrawerTitle>
            <DrawerDescription>
              Soy alan valencia setupndio(no se como se escribe) este prejecto
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <button>Cancel button</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

