import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Background />
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;