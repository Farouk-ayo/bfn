import { VotingCategory } from "../../src/types";
import { founders } from "./founder-data";

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
export const votingCategories: VotingCategory[] = [
  {
    id: "best-pitch-energy",
    title: "Best Pitch Energy",
    emoji: "⚡️",
    description:
      "The founder who brought the room to life — energy, passion, and presence! Tap to vote for the pitch that fired you up most.",
    candidates: shuffleArray(founders),
  },
  {
    id: "future-unicorn",
    title: "Most Likely to Build a Unicorn",
    emoji: "🦄",
    description:
      "The startup that feels destined for big things. Tap your pick — who's on the billion-dollar path?",
    candidates: shuffleArray(founders),
  },
  {
    id: "innovation-spark",
    title: "Innovation Spark",
    emoji: "💡",
    description:
      "The boldest, smartest, or most original idea of the day. Vote for the innovation that wowed you.",
    candidates: shuffleArray(founders),
  },
  {
    id: "crowd-favorite",
    title: "Crowd Favorite",
    emoji: "💜",
    description:
      "Who stole the show today? Give your heart (and your tap) to your favorite founder.",
    candidates: shuffleArray(founders),
  },
  {
    id: "design-visionary",
    title: "Design That Pops",
    emoji: "🎨",
    description:
      "Beautiful decks. Seamless storytelling. Visuals that left a mark. Tap to vote for the founder who turned design into their superpower.",
    candidates: shuffleArray(founders),
  },
  {
    id: "the-connector",
    title: "The Connector",
    emoji: "🤝",
    description:
      "Some founders pitch. Others build bridges. Vote for the person who radiated collaboration, community, and genuine connection throughout the program.",
    candidates: shuffleArray(founders),
  },
  {
    id: "memorable-tagline",
    title: "Most Memorable Tagline",
    emoji: "🔊",
    description:
      "\"That's going on a T-shirt.\" Vote for the line, slogan, or soundbite you can't stop repeating from today's pitches.",
    candidates: shuffleArray(founders),
  },
  {
    id: "pitch-mvp",
    title: "Pitch MVP",
    emoji: "🏅",
    description:
      "The complete package — presence, story, clarity, confidence. Tap to vote for the founder who owned the stage like a pro.",
    candidates: shuffleArray(founders),
  },
];
