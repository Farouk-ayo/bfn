import { useState } from "react";
import { VotingCategory } from "../../../types";
import Confetti from "../components/ui/Confetti";
import { votingCategories } from "../../../../data/2025/voting-data";
import CategoryCard from "../components/voting/CategoryCard";
import CandidateModal from "../components/voting/CandidateModal";
import { Link } from "react-router-dom";
import { hasVotedInCategory } from "../../../services/voting.service";
import { useVotingStatus } from "../../../hooks/useVoting";

const VotingSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<VotingCategory | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voteUpdate, setVoteUpdate] = useState(0);
  const votingStatus = useVotingStatus();
  console.log(votingStatus);

  const handleVote = () => {
    setShowConfetti(true);
    setVoteUpdate((prev) => prev + 1);
    setSelectedCategory(null);

    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Count how many categories user has voted in
  const totalVotes = votingCategories.filter((cat) =>
    hasVotedInCategory(cat.id)
  ).length;

  // Check if voting is open
  const isVotingOpen = votingStatus === "open";
  console.log(isVotingOpen);

  return (
    <section
      id="voting"
      className="w-full py-16 sm:py-24 bg-black px-4 sm:px-8"
    >
      <Confetti show={showConfetti} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-maldives">
            Tap to Vote Here
          </h2>

          <div className="w-24 h-1 bg-coolBlue mx-auto mb-6" />

          <p className="text-xl sm:text-2xl text-coolBlue mb-6 font-maldives">
            "Celebrate the 2025 Cohort—Your Way!"
          </p>

          {isVotingOpen ? (
            <>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-4 ">
                You've read their stories and seen their ventures, now it's your
                turn! Tap through the cards below and vote for the founders who
                stood out to you today. Help celebrate the vibes, creativity,
                and energy that make this cohort unforgettable.
              </p>

              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto ">
                You can vote in as many categories as you like. When you tap a
                card, your pick is recorded instantly and you'll see a little
                confetti burst 🎉 to make it official!
              </p>
            </>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-400 text-lg ">
                {votingStatus === "closed"
                  ? "Voting has ended. Check out the winners on the leaderboard!"
                  : "Voting is currently paused. Check back soon!"}
              </p>
            </div>
          )}

          {totalVotes > 0 && (
            <div
              key={voteUpdate}
              className="mt-6 inline-block bg-coolBlue/10 border border-coolBlue rounded-full px-6 py-3"
            >
              <span className="text-coolBlue font-bold">
                🎊 You've voted in {totalVotes}{" "}
                {totalVotes === 1 ? "category" : "categories"}!
              </span>
            </div>
          )}

          {/* Leaderboard Link */}
          <div className="mt-8">
            <Link
              to="/yearbook-2025/leaderboard"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-coolBlue to-[#5ab8d8] hover:from-[#5ab8d8] hover:to-coolBlue text-black px-8 py-3 rounded-full font-bold transition-all"
            >
              🏆 View Leaderboard
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        {isVotingOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {votingCategories.map((category, idx) => (
              <div
                key={category.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <CategoryCard
                  category={category}
                  onClick={() => setSelectedCategory(category)}
                  voteUpdate={voteUpdate}
                />
              </div>
            ))}
          </div>
        )}

        {/* BFN Community Platform Waitlist - Mobile optimized */}
        <section className=" px-4 sm:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="text-4xl sm:text-5xl mb-4">🚀</div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-maldives">
                Join the BFN Community Platform Waitlist
              </h3>
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-2 max-w-2xl mx-auto">
                Sign up to stay connected with the BFN family and be the first
                to explore our new platform for founders, mentors, and
                supporters.
              </p>
              <a
                href="https://airtable.com/app93eVF3hi8TvY8U/pagvZ8fViwD63QVIX/form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-coolBlue hover:bg-[#5ab8d8] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 active:scale-95"
              >
                Join Waitlist ✨
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedCategory && (
        <CandidateModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          onVote={handleVote}
        />
      )}
    </section>
  );
};

export default VotingSection;
