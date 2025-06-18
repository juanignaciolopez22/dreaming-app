import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Background />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;