// useState is a React hook
import { useState } from "react";

// save in MoodChanger.jsx
export const MoodChanger = () => {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood} {mood} {""}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={() => setMood("hungry")}>Skip Lunch</button>
      {/* ++ Add these buttons and some of your own
to MoodChanger and try it out! */}
    </div>
  );
};
