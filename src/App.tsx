import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { Footer } from "./components/Footer";
import { Atmosphere } from "./components/Atmosphere";
import { IntroSplash } from "./components/MotionLayer";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Packages } from "./pages/Packages";
import { Book } from "./pages/Book";
import { Contact } from "./pages/Contact";
import { useLang } from "./i18n";

export default function App() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    document.title = "Aarthi Mahal · Heritage Marriage Hall";
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, lang]);

  return (
    <div className="app-shell">
      <Atmosphere />
      <IntroSplash />
      <AppHeader />
      <main className="app-main" ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </main>
      <BottomNav />
    </div>
  );
}
