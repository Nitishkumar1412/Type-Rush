import { useState, useEffect, useRef } from "react";
import { makeText, randomQuote } from "./words";
import Logo from "./components/BrandLogo";
import KeyboardBackground from "./components/KeyboardBackground";
import Controls from "./components/Controls";
import TypingBox from "./components/TypingBox";
import Result from "./components/Result";
import Leaderboard from "./components/Leaderboard";
import ProgressChart from "./components/ProgressChart";
import "./App.css";

const countCorrect = (typed, text) => {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === text[i]) correct++;
  }
  return correct;
};

const getWpm = (typed, text, seconds) => {
  if (seconds === 0) return 0;
  return Math.round(countCorrect(typed, text) / 5 / (seconds / 60));
};

function App() {
  const [duration, setDuration] = useState(30);
  const [level, setLevel] = useState("easy");
  const [customText, setCustomText] = useState("");
  const [text, setText] = useState(() => makeText("easy"));
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState("idle");
  const [elapsed, setElapsed] = useState(0);
  const [samples, setSamples] = useState([]);
  const [keys, setKeys] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [tagline] = useState(() => randomQuote());
  const [name, setName] = useState(() => localStorage.getItem("typing-name") || "");
  const [results, setResults] = useState(
    () => JSON.parse(localStorage.getItem("typing-results")) || []
  );
  const inputRef = useRef();

  useEffect(() => {
    if (status !== "running") return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  useEffect(() => {
    if (status !== "running" || elapsed === 0) return;
    setSamples((s) => [...s, { second: elapsed, wpm: getWpm(typed, text, elapsed) }]);
    if (elapsed >= duration) setStatus("finished");
  }, [elapsed]);

  useEffect(() => {
    if (status !== "finished" || typed.length === 0) return;
    const seconds = Math.max(elapsed, 1);
    const entry = {
      id: Date.now(),
      name: name.trim() || "Guest",
      wpm: getWpm(typed, text, seconds),
      accuracy: keys === 0 ? 0 : Math.round(((keys - mistakes) / keys) * 100),
      duration,
      level,
      date: new Date().toLocaleDateString(),
    };
    setResults((prev) => [...prev, entry].slice(-50));
  }, [status]);

  useEffect(() => {
    localStorage.setItem("typing-results", JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem("typing-name", name);
  }, [name]);

  const resetTest = (newLevel = level, newCustom = customText) => {
    setText(newLevel === "custom" ? newCustom : makeText(newLevel));
    setTyped("");
    setStatus("idle");
    setElapsed(0);
    setSamples([]);
    setKeys(0);
    setMistakes(0);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  };

  const changeDuration = (sec) => {
    setDuration(sec);
    resetTest();
  };

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
    resetTest(newLevel);
  };

  const applyCustom = (value) => {
    const clean = value.replace(/\s+/g, " ").trim();
    setCustomText(clean);
    setLevel("custom");
    resetTest("custom", clean);
  };

  const handleChange = (e) => {
    if (status === "finished" || !text) return;

    let value = e.target.value;
    if (value.length > text.length) value = value.slice(0, text.length);
    if (status === "idle") setStatus("running");

    if (value.length > typed.length) {
      setKeys(keys + 1);
      const last = value.length - 1;
      if (value[last] !== text[last]) setMistakes(mistakes + 1);
    }

    setTyped(value);

    if (value.length === text.length) {
      const seconds = Math.max(elapsed, 1);
      setSamples((s) => {
        const lastSample = s[s.length - 1];
        if (lastSample && lastSample.second === seconds) return s;
        return [...s, { second: seconds, wpm: getWpm(value, text, seconds) }];
      });
      setStatus("finished");
    }
  };

  const clearResults = () => {
    if (window.confirm("Clear all saved scores?")) setResults([]);
  };

  const seconds = Math.max(elapsed, 1);
  const liveWpm = elapsed === 0 ? 0 : getWpm(typed, text, elapsed);
  const accuracy = keys === 0 ? 100 : Math.round(((keys - mistakes) / keys) * 100);

  return (
    <>
      <KeyboardBackground />

      <div className="app">
        <header className="top">
          <div className="brand">
            <Logo />
            <h1>TypeRush</h1>
          </div>
          <p className="tagline">“{tagline}”</p>
        </header>

        <Controls
          duration={duration}
          level={level}
          onDuration={changeDuration}
          onLevel={changeLevel}
          onApplyCustom={applyCustom}
        />

        {status !== "finished" ? (
          <>
            <div className="stats">
              <div>
                <span>Time</span>
                <b>{duration - elapsed}s</b>
              </div>
              <div>
                <span>WPM</span>
                <b>{liveWpm}</b>
              </div>
              <div>
                <span>Accuracy</span>
                <b>{accuracy}%</b>
              </div>
            </div>

            <TypingBox
              text={text}
              typed={typed}
              inputRef={inputRef}
              onChange={handleChange}
              onRestart={() => resetTest()}
            />
          </>
        ) : (
          <Result
            wpm={getWpm(typed, text, seconds)}
            accuracy={accuracy}
            correct={countCorrect(typed, text)}
            mistakes={mistakes}
            seconds={seconds}
            samples={samples}
            onRestart={() => resetTest()}
          />
        )}

        <div className="grid">
          <Leaderboard
            results={results}
            name={name}
            setName={setName}
            onClear={clearResults}
          />
          <ProgressChart results={results} />
        </div>

        <footer className="footer">Built by Nitish Kumar</footer>
      </div>
    </>
  );
}

export default App;