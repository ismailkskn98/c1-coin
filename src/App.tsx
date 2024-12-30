import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRouter from "./routes/routes";
import Particles from "@/components/ui/particles";

function App() {
  return (
    <main className="relative w-full h-full min-h-screen space-y-14 fluid gridContainer bg-[url(/gggrain.svg)] overflow-x-hidden">
      <Header />
      <Particles className="absolute inset-0 z-0 fluid" quantity={200} ease={40} color="#fff" refresh staticity={50} />
      <AppRouter />
      <Footer />
    </main>
  );
}

export default App;
