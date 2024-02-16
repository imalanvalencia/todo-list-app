import TaskList from './task-list'
import { useTasks } from '@/hooks/use-tasks'
import checklist_guy from '@/assets/checklist-guy.svg'

export default function TaskSection() {
  const { tasks } = useTasks()
  return <>{tasks.length === 0 ? <NoTasks /> : <TaskList />}</>
}

function NoTasks() {
  return (
    <>
      <img src={checklist_guy} alt="checklist guy" className="mx-auto" />
      <h2 className="text-xl">What do you want to do today?</h2>
      <p className="text-lg font-light">Tap + to add your tasks</p>
    </>
  )
}
