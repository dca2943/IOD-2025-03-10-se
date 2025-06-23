import { useMood } from "./MoodContext";

function Emoji() {
  const { emoji, changeMood } = useMood();
  return (
    <div style={{ fontSize: "2rem" }}>
      Mood: {emoji}
      <br />
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
