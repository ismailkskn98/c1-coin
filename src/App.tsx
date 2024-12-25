import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRouter from "./routes/routes";

function App() {
  return (
    <main className="w-full h-full space-y-14 gridContainer bg-[#C07825] bg-[url('/pattern.svg')]">
      <Header />
      <AppRouter />
      <Footer />
    </main>
  );
}

export default App;