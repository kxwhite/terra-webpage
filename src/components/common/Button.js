import './Button.css'

export default function Button({text, colour}) {
  return (
    <button
      style={{
        backgroundColor: colour === "white" ? "white" : "#008AFF",
        color: colour === "white" ? "#008AFF" : "white",
      }}
      className="btn"
    >
      {text}
    </button>
  );
}
