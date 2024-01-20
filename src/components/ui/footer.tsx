import CalendarIcon from "@/components/icons/calendar";
import HomeIcon from "@/components/icons/home";
import CreateTask from "@/components/task/create-task";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full backdrop-blur-3xl rounded-t-2xl bg-[#0e0e0fde]">
      <nav className="flex justify-center items-center gap-8 py-2 px-6 backdrop-blur-sm">
        <a
          href="/"
          className="text-indigo-400 hover:text-indigo-200 text-center font-light"
        >
          <HomeIcon className="size-6 fill-current mx-auto" />
          Home
        </a>
        <CreateTask>
          {{
            button: (
              <Button className="size-16 text-3xl rounded-full bg-indigo-400 hover:bg-indigo-800 p-2 text-center text-white -mt-12">
                +
              </Button>
            ),
          }}
        </CreateTask>
        <a
          href="/"
          className="text-indigo-400 hover:text-indigo-200 text-center font-light"
        >
          <CalendarIcon className="size-6 fill-current mx-auto" />
          Calendar
        </a>
      </nav>
    </footer>
  );
}
