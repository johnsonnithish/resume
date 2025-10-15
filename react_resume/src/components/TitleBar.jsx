import { useNavigate } from "react-router-dom";
import "./TitleBar.css";

export default function TitleBar({ title, homePath = "/" }) {
  const navigate = useNavigate();

  return (
    <div className="title-div">
      <button
        className="back-btn"
        onClick={() => navigate(homePath)}
        aria-label="Go to Home"
      >
        Back
      </button>

      <h1 className="main-title">{title}</h1>
    </div>
  );
}
