import { useEffect, useRef } from "react";

const LINE_HEIGHT = 48;

function TypingBox({ text, typed, inputRef, onChange, onRestart }) {
  const boxRef = useRef();

  useEffect(() => {
    const box = boxRef.current;
    const current = box.querySelector(".current");
    if (current) {
      const line = Math.floor(current.offsetTop / LINE_HEIGHT);
      box.scrollTop = Math.max(0, line - 1) * LINE_HEIGHT;
    }
  }, [typed]);

  const blockKeys = (e) => {
    const blocked = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Enter"];
    if (blocked.includes(e.key)) e.preventDefault();
    if (e.key === "Escape") onRestart();
  };

  return (
    <div className="card" onClick={() => inputRef.current && inputRef.current.focus()}>
      <div className="text-box" ref={boxRef}>
        {text ? (
          text.split("").map((ch, i) => {
            let cls = "char";
            if (i < typed.length) cls += typed[i] === ch ? " correct" : " wrong";
            else if (i === typed.length) cls += " current";
            return (
              <span key={i} className={cls}>
                {ch}
              </span>
            );
          })
        ) : (
          <span className="empty">Write your text below and click "Use this text".</span>
        )}
      </div>

      <input
        ref={inputRef}
        className="hidden-input"
        value={typed}
        onChange={onChange}
        onKeyDown={blockKeys}
        onPaste={(e) => e.preventDefault()}
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />

      <div className="hint-row">
        <p>Start typing to begin the timer. Press Esc to restart.</p>
        <button className="btn outline small" onClick={onRestart}>
          ↻ Restart
        </button>
      </div>
    </div>
  );
}

export default TypingBox;