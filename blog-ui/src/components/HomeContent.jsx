import FeaturedPost from "./FeaturedPost";
import TopicsSection from "./TopicsSection";
import PostsList from "./PostsList";
import ContinueReading from "./ContinueReading";
import QuickReadsAccordion from "./QuickReadsAccordion";
import TrendingPosts from "./TrendingPosts";
import LatestComments from "./LatestComments";
import { useEffect } from "react";
import SidebarAd from "./SidebarAd";
import FeaturedInlineAd from "./FeaturedInlineAd";

const HomeContent = () => {
  useEffect(() => {
    setMeta({
      title: SEO.home.title,
      description: SEO.home.description,
      url: SEO.siteUrl,
    });
  }, []);
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left */}
        <div className="lg:col-span-8">
          <FeaturedPost />
          <FeaturedInlineAd />
          <TopicsSection />
          <PostsList />
          <ContinueReading />
        </div>

        {/* Right */}
        <div className="lg:col-span-4 space-y-6">
          <QuickReadsAccordion />
          <SidebarAd />
          <TrendingPosts />
          <LatestComments />
        </div>

      </div>
    </section>
  );
};

export default HomeContent;
