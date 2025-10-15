import TitleBar from "../components/TitleBar";
import Columns from "../components/Columns";
import "./Experience.css";

export default function Experience() {
  const cards = [
    (
      <div className="experience-card">
        <h1 className="experience-title">OASYS CYBERNETICS</h1>

        <div className="line-wrap">
          <span className="dot">●</span>
          <div className="line line-right" />
        </div>
          <p style={{fontFamily: 'Typewriter'}}>
            Owned the Leave Application module in RASA: designed intents/entities, slot filling, and multi-turn stories/rules; built custom actions (actions.py) for robust date parsing/validation, including overlap/weekend/holiday checks and error recovery.

            Drove accuracy and maintainability: iteratively tuned NLU using log analysis, authored setup/training/deployment, and maintained clean commits via Git workflows.
          </p>
      </div>
    ),
    (
      <div className="experience-card">
        <h1 className="experience-title">YOURS?</h1>

        <div className="line-wrap">
          <div className="line line-left" />
          <span className="dot">●</span>
        </div>
      </div>
    ),
  ];

  return (
    <>
      <TitleBar title="Experience" />
      <div className="experience-wrap">
        <Columns
          items={cards}
          allowHtml
          maxWidth="960px"
          columnWidth={380}
          columnHeight={450}
          gap={20}
          scrollerBg="#07f"
          columnBg="#f6f7f8ff"
        />
      </div>
    </>
  );
}
