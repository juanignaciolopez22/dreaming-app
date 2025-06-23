import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DreamsGallery from "./components/DreamsGallery";
import DreamersPanel from "./components/DreamersPanel";
import DreamGalleryModal from "./components/DreamsGallery/components/DreamGalleryModal";
function App() {
  return (
    <BrowserRouter basename="/dreaming-app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dreamers" element={<DreamersPanel />} />
          <Route path="/gallery" element={<DreamsGallery />} />
          <Route path="/gallery/:dreamId" element={<DreamGalleryModal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;