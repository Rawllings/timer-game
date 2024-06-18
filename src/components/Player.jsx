import { useState, useRef } from "react";

export default function Player() {
  const namePlayer = useRef();

  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setPlayerName(e.target.value);
  // };

  const handleSubmit = () => {
    setPlayerName(namePlayer.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          type="text"
          // value={playerName}
          // onChange={handleChange}
          ref={namePlayer}
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
