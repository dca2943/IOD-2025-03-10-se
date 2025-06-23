import { createContext, useContext, useState } from "react";

const MoodContext = createContext();

export function MoodProvider({ children }) {
  const [emoji, setEmoji] = useState("😊");

  const changeMood = () => {
    const moods = ["😎", "🥳", "😤", "🤓", "😴", "😊"];
    const next = moods[Math.floor(Math.random() * moods.length)];
    setEmoji(next);
  };

  return (
    <MoodContext.Provider value={{ emoji, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  return useContext(MoodContext);
}
