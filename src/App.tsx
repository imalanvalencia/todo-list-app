import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import CreateTask from '@/components/create-task'

export default function App() {
  return (
    <div className="flex flex-col px-4 min-w-full min-h-screen">
      <Header />
      <main className="flex-grow place-self-center">
        <CreateTask />
      </main>
      <Footer/>
    </div>
  )
}






