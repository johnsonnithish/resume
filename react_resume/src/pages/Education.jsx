import TitleBar from '../components/TitleBar';
import Columns from '../components/Columns';
import './Education.css';

function Education() {
  const cards = [
    (
      <div className="edu-card">
        <h1 className="edu-title">Schooling</h1>
        <h3 className="edu-subtitle">DON BOSCO MATRICULATION HIGHER SECONDARY SCHOOL</h3>

        <img
          src="/imgs/education/DB_Egmore_Logo.png"
          alt="Don Bosco Matriculation Higher Secondary School"
          className="edu-logo is-small"
        /> <br />

        <p className="edu-metrics">SSLC: 92%</p>
        <p className="edu-metrics">Higher Secondary: 91%</p>
      </div>
    ),
    (
      <div className="edu-card">
        <h1 className="edu-title">Undergrad</h1>
        <h3 className="edu-subtitle">SAVEETHA ENGINEERING COLLEGE</h3>

        <img
          src="/imgs/education/saveetha_university.png"
          alt="Saveetha Engineering College"
          className="edu-logo is-large"
        />

        <p className="edu-metrics">CGPA: 8.05</p>
        <p className="edu-metrics">First Class</p>
      </div>
    ),
  ];

  return (
    <>
      <TitleBar title="EDUCATION" />
      <div className="education-page">
        <Columns
          items={cards}
          allowHtml
          maxWidth="960px"
          columnWidth={380}
          columnHeight={500}
          gap={20}
          scrollerBg="#07f"
          columnBg="#f6f7f8ff"
          classNames={{ column: 'edu-column' }}
        />
      </div>
    </>
  );
}

export default Education;
