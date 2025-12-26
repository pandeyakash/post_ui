import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CarouselBanner from "./components/CarouselBanner";
import HomeContent from "./components/HomeContent";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
import FooterPreAd from "./components/FooterPreAd";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <CarouselBanner />
              <HomeContent />
            </>
          }
        />

        {/* Post Detail */}
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>

      <FooterPreAd/>
      <Footer />
    </Router>
  );
}

export default App;
