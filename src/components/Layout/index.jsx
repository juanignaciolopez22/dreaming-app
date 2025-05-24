import Background from "../Background";
import Navbar from "../Navbar";
import Footer from "../Footer";

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