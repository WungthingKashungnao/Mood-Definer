import "./app.css";
import useSound from "use-sound";
import sounds from "./audios/sounds";
import { useEffect, useState } from "react";

function App() {
  const [randomSound, setRandomSound] = useState(0); //state to select random sound from array
  const [playSound] = useSound(sounds[randomSound]);

  useEffect(() => {
    playSound();
    console.log(sounds.length);
  }, [randomSound]);

  const hanldePlay = () => {
    let anySound = Math.floor(Math.random() * 19);
    setRandomSound(anySound);
  };
  return (
    <div className="App">
      <button className="btn" onClick={hanldePlay}>
        Set The Vibe!
      </button>
    </div>
  );
}

export default App;
