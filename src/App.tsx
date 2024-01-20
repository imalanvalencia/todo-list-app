import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import checklist_guy from "@/assets/checklist-guy.svg";

export default function App() {
  return (
    <div className="flex flex-col min-w-full w-[425px] min-h-screen backdrop-blur-lg bg-clip-padding backdrop-filter">
      <Header />
      <main className="flex-grow text-center px-6">
        <section>
          <img src={checklist_guy} alt="checklist guy" className="mx-auto" />
          <h2 className="text-xl">What do you want to do today?</h2>
          <p className="text-lg font-light">Tap + to add your tasks</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
