import { VotingCategory } from "../../src/types";
import { founders } from "./founder-data";

export const votingCategories: VotingCategory[] = [
  {
    id: "best-pitch-energy",
    title: "Best Pitch Energy",
    emoji: "⚡️",
    description:
      "The founder who brought the room to life — energy, passion, and presence! Tap to vote for the pitch that fired you up most.",
    candidates: founders.slice(0, 3),
  },
  {
    id: "future-unicorn",
    title: "Most Likely to Build a Unicorn",
    emoji: "🦄",
    description:
      "The startup that feels destined for big things. Tap your pick — who's on the billion-dollar path?",
    candidates: founders.slice(3, 6),
  },
  {
    id: "innovation-spark",
    title: "Innovation Spark",
    emoji: "💡",
    description:
      "The boldest, smartest, or most original idea of the day. Vote for the innovation that wowed you.",
    candidates: founders.slice(6, 9),
  },
  {
    id: "crowd-favorite",
    title: "Crowd Favorite",
    emoji: "💜",
    description:
      "Who stole the show today? Give your heart (and your tap) to your favorite founder.",
    candidates: founders.slice(9, 12),
  },
  {
    id: "design-visionary",
    title: "Design That Pops",
    emoji: "🎨",
    description:
      "Beautiful decks. Seamless storytelling. Visuals that left a mark. Tap to vote for the founder who turned design into their superpower.",
    candidates: founders.slice(12, 15),
  },
  {
    id: "the-connector",
    title: "The Connector",
    emoji: "🤝",
    description:
      "Some founders pitch. Others build bridges. Vote for the person who radiated collaboration, community, and genuine connection throughout the program.",
    candidates: founders.slice(15, 18),
  },
  {
    id: "memorable-tagline",
    title: "Most Memorable Tagline",
    emoji: "🔊",
    description:
      "\"That's going on a T-shirt.\" Vote for the line, slogan, or soundbite you can't stop repeating from today's pitches.",
    candidates: founders.slice(18, 21),
  },
  {
    id: "pitch-mvp",
    title: "Pitch MVP",
    emoji: "🏅",
    description:
      "The complete package — presence, story, clarity, confidence. Tap to vote for the founder who owned the stage like a pro.",
    candidates: founders.slice(21, 24),
  },
];
