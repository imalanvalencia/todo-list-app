import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import TaskSection from './components/task/task-section'
import { TasksProvider } from './context/tasks'

export default function App() {
  return (
    <div className="flex flex-col mx-auto min-w-[320px] w-full max-w-[425px] min-h-screen backdrop-blur-lg bg-clip-padding backdrop-filter">
      <Header />
      <TasksProvider>
        <main className="flex-grow text-center px-6">
          <TaskSection />
        </main>
        <Footer />
      </TasksProvider>
    </div>
  )
}
