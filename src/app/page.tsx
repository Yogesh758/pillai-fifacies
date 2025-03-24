import Navbar from "@/components/ui/navbar";
import FifaForm from "@/components/ui/pillaififaCiesForm";
import TopBar from "@/components/ui/TopBar";


export default function Home() {
  return (
    <div /*className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:p-5 font-[family-name:var(--font-geist-sans)]"*/>
      <main className="flex flex-col row-start-2">
        <TopBar />
        <Navbar />
        <FifaForm />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
