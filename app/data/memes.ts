export type Meme = {
  id: number;
  emoji: string;
  caption: string;
  color: string;
  // Which categories this meme belongs to. An empty list [] means NO category.
  categoryIds: string[];
  // Optional real media. If missing, the meme shows its emoji instead.
  media?: { type: "image" | "gif" | "clip"; src: string };
};

// Fake data for now. Newest first. Later this comes from the database.
export const memes: Meme[] = [
  { id: 1, emoji: "😂", caption: "Me when the code works first try", color: "#7c3aed", categoryIds: [] },
  { id: 2, emoji: "🐱", caption: "Cat said no", color: "#0ea5e9", categoryIds: ["animals"], media: { type: "image", src: "/memes/cat.jpg" } },
  { id: 3, emoji: "⚽", caption: "Referee after VAR", color: "#16a34a", categoryIds: ["football"], media: { type: "gif", src: "/memes/goal.gif" } },
  { id: 4, emoji: "💼", caption: "Monday morning energy", color: "#ea580c", categoryIds: ["work"] },
  { id: 5, emoji: "🎓", caption: "Exam week survival kit", color: "#db2777", categoryIds: ["school"] },
  { id: 6, emoji: "🎤", caption: "When the beat drops", color: "#9333ea", categoryIds: ["bongo"], media: { type: "clip", src: "/memes/dance.mp4" } },
  { id: 7, emoji: "🎮", caption: "One more game, I swear", color: "#0d9488", categoryIds: ["gaming"] },
  { id: 8, emoji: "🤡", caption: "Posted without any category", color: "#ca8a04", categoryIds: [] },
  { id: 9, emoji: "🐶", caption: "Dog vs vacuum cleaner", color: "#2563eb", categoryIds: ["animals"] },
  { id: 10, emoji: "🤝", caption: "Interview after 4 years of school", color: "#be123c", categoryIds: ["school", "work"] },

  // Bongo
  { id: 11, emoji: "🎶", caption: "Playing the song again for the 50th time", color: "#7e22ce", categoryIds: ["bongo"] },
  { id: 12, emoji: "🕺", caption: "Me at the party when my song starts", color: "#c026d3", categoryIds: ["bongo"] },
  { id: 13, emoji: "📻", caption: "Radio DJ at 2am", color: "#6d28d9", categoryIds: ["bongo"] },

  // Football
  { id: 14, emoji: "🥅", caption: "Goalkeeper watching the ball go in", color: "#15803d", categoryIds: ["football"] },
  { id: 15, emoji: "🟨", caption: "Defender after one soft touch", color: "#a16207", categoryIds: ["football"] },
  { id: 16, emoji: "📺", caption: "Fans after the transfer news", color: "#166534", categoryIds: ["football"] },

  // Work
  { id: 17, emoji: "📧", caption: "This could have been an email", color: "#c2410c", categoryIds: ["work"] },
  { id: 18, emoji: "☕", caption: "Coffee is the real boss", color: "#9a3412", categoryIds: ["work"] },
  { id: 19, emoji: "🕔", caption: "Waiting for 5 PM like", color: "#b45309", categoryIds: ["work"] },

  // School
  { id: 20, emoji: "📚", caption: "I will start studying tomorrow", color: "#be185d", categoryIds: ["school"] },
  { id: 21, emoji: "😴", caption: "Lecturer: 'This will be quick'", color: "#a21caf", categoryIds: ["school"] },
  { id: 22, emoji: "📝", caption: "Assignment due in 5 minutes", color: "#9d174d", categoryIds: ["school"] },

  // Animals
  { id: 23, emoji: "🐔", caption: "Chicken crossing with confidence", color: "#1d4ed8", categoryIds: ["animals"] },
  { id: 24, emoji: "🐐", caption: "Goat when you carry the food", color: "#0369a1", categoryIds: ["animals"] },
  { id: 25, emoji: "🦜", caption: "Parrot repeating the family secrets", color: "#0e7490", categoryIds: ["animals"] },

  // Gaming
  { id: 26, emoji: "🕹️", caption: "Lag at the final round", color: "#0f766e", categoryIds: ["gaming"] },
  { id: 27, emoji: "🔋", caption: "Phone at 1% during the boss fight", color: "#047857", categoryIds: ["gaming"] },
  { id: 28, emoji: "👾", caption: "Noob team vs me carrying", color: "#115e59", categoryIds: ["gaming"] },

  // Mixed and uncategorized
  { id: 29, emoji: "🤣", caption: "No category, just vibes", color: "#854d0e", categoryIds: [] },
  { id: 30, emoji: "🏆", caption: "Won the match, lost the exam", color: "#9f1239", categoryIds: ["football", "school"] },
  { id: 31, emoji: "💻", caption: "Debugging at midnight", color: "#1e40af", categoryIds: ["work", "gaming"] },
];