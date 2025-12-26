import EditorsPicks from "./EditorsPicks";
import FeaturedStoryRow from "./FeaturedStoryRow";
import FeaturedThemesSection from "./FeaturedThemesSection";
import HeroCarousel from "./HeroCarousel";
import ReaderReactions from "./ReaderReactions";
import StoryFeed from "./StoryFeed";
import StoryInsightsAccordion from "./StoryInsightsAccordion";

const HomeContent = () => {
  return (
    <main className="relative bg-[#071821] text-white">

      {/* HERO */}
      <HeroCarousel />

      {/* MAIN CONTENT */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-20">
            <FeaturedStoryRow />
            <FeaturedThemesSection />
            <StoryFeed />
          </div>

          {/* RIGHT COLUMN – NORMAL SCROLL */}
          <aside className="hidden lg:block relative">
            <div className="space-y-14">

              {/* RIGHT-SIDE COMPONENTS */}
              <StoryInsightsAccordion />
              <EditorsPicks />
              <ReaderReactions />

              {/* <TrendingStories /> */}
              {/* <TopicsWidget /> */}
              {/* <AdCard /> */}
              {/* <NewsletterBox /> */}

            </div>
          </aside>

        </div>
      </section>

    </main>
  );
};

export default HomeContent;
