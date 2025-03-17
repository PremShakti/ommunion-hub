import "./App.css";
import CNavbar from "./components/common/CNavbar";
import { CSidebar } from "./components/common/CSidebar";
import Footer from "./components/common/Footer";
import Allroutes from "./components/routing/Allroutes";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider className="bg-custom-gradient">
      <div className="sm:hidden">
        <CSidebar />
      </div>
      <main className="  w-full min-h-screen">
        <CNavbar />

        <Allroutes />

        <Footer />
      </main>
    </SidebarProvider>
  );
}

export default App;
