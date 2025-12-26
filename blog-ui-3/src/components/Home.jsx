import { useEffect } from "react";
import EditorsNote from "./EditorsNote";
import HeroSection from "./HeroSection";
import LatestPosts from "./LatestPosts";
import MiniAnalyticsCard from "./MiniAnalyticsCard";
import PopularAllTimeSlider from "./PopularAllTimeSlider";
import TopicMomentumStrip from "./TopicMomentumStrip";
import TrendingPostsRight from "./TrendingPostsRight";
import TrendingTopics from "./TrendingTopics";
import { applySEO } from "../utils/seo";
import { SITE_SEO } from "../config/seo.config";
import InlineContentAd from "./InlineContentAd";
import SidebarAd from "./SidebarAd";

const Home = () => {
  useEffect(() => {
    applySEO({
      title: SITE_SEO.defaultTitle,
      description: SITE_SEO.defaultDescription,
      url: SITE_SEO.siteUrl,
    });
  }, []);
  return (
    <main
      className="
        pt-5
        bg-white
        min-h-screen
      "
    >
      {/* HERO / INTRO */}
      <HeroSection />
      <TrendingTopics />
      <TopicMomentumStrip />

      {/* SPLIT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.8fr] gap-16">

          {/* LEFT */}
          <div>
            <EditorsNote />
            <LatestPosts />
             <InlineContentAd />
          </div>

          {/* RIGHT */}
          <div className="space-y-16">
            <TrendingPostsRight />
            <PopularAllTimeSlider />
            <SidebarAd />
            <MiniAnalyticsCard />
          </div>
      </div>
      </section>
    </main>
  );
};

export default Home;
