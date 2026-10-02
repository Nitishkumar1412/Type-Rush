const easyWords = [
  "the", "and", "you", "that", "was", "for", "are", "with", "his", "they",
  "this", "have", "from", "one", "had", "word", "but", "not", "what", "all",
  "were", "when", "your", "can", "said", "there", "use", "each", "which", "she",
  "how", "their", "will", "other", "about", "out", "many", "then", "them", "these",
  "some", "her", "would", "make", "like", "him", "into", "time", "has", "look",
  "two", "more", "write", "see", "number", "way", "could", "people", "my", "than",
  "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long",
  "down", "day", "did", "get", "come", "made", "may", "part", "home", "play",
];

const mediumWords = [
  "because", "before", "different", "between", "another", "country", "picture",
  "against", "problem", "thought", "should", "morning", "student", "outside",
  "company", "history", "quickly", "kitchen", "journey", "silence", "monitor",
  "weather", "balance", "network", "library", "century", "chicken", "diamond",
  "freedom", "gravity", "harvest", "imagine", "justice", "keyboard", "lantern",
  "machine", "natural", "options", "package", "quality", "reading", "science",
  "traffic", "uniform", "village", "warning", "yellow", "answer", "basket",
  "capture", "dolphin", "engine", "festival", "garden", "holiday", "island",
];

const hardWords = [
  "extraordinary", "responsibility", "opportunity", "environment", "development",
  "communication", "understanding", "relationship", "organization", "temperature",
  "international", "professional", "imagination", "architecture", "technology",
  "experience", "democracy", "philosophy", "psychology", "restaurant",
  "approximately", "unfortunately", "performance", "independent", "intelligence",
  "revolution", "entrepreneur", "laboratory", "mathematics", "neighborhood",
  "pronunciation", "sophisticated", "transportation", "vocabulary", "acknowledge",
  "characteristic", "determination", "enthusiastic", "furthermore", "hypothesis",
  "infrastructure", "jurisdiction", "miscellaneous", "perseverance", "questionnaire",
];

export const quotes = [
  "The best way to predict the future is to create it.",
  "Slow and steady wins the race.",
  "Practice makes progress, not perfection.",
  "Every expert was once a beginner.",
  "Small steps every day lead to big results.",
  "Dream big, work hard, stay humble.",
  "Do not watch the clock, do what it does, keep going.",
  "Fall seven times, stand up eight.",
  "A journey of a thousand miles begins with a single step.",
  "Discipline is the bridge between goals and success.",
  "Stay hungry, stay curious, keep learning.",
  "Hard work beats talent when talent does not work hard.",
  "Focus on being better, not on being perfect.",
  "Great things never come from comfort zones.",
  "Your only limit is your mind.",
  "Success is the sum of small efforts repeated daily.",
  "Code is like humor, when you have to explain it, it is bad.",
  "First solve the problem, then write the code.",
  "Make it work, make it right, make it fast.",
  "Simplicity is the soul of good design.",
  "Action is the foundation of all success.",
  "Believe you can and you are halfway there.",
  "Learn something new every single day.",
  "Consistency is what turns average into excellent.",
];

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export const makeText = (level, count = 300) => {
  if (level === "quotes") {
    const mixed = [...quotes].sort(() => Math.random() - 0.5);
    return mixed.join(" ");
  }

  let list = easyWords;
  if (level === "medium") list = mediumWords;
  if (level === "hard") list = hardWords;

  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(list[Math.floor(Math.random() * list.length)]);
  }
  return result.join(" ");
};