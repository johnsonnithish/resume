import { useNavigate } from "react-router-dom";
import './Block.css'
export default function Blocks({ items }) {
  const navigate = useNavigate();
  return (
    <div className="blocks-container">
      {items.map(({ label, to }, i) => (
        <button key={i} className="block-name" onClick={() => navigate(to)}>
          {label}
        </button>
      ))}
    </div>
  );
}
