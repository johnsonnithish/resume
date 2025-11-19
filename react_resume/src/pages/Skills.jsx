import TitleBar from "../components/TitleBar"
import Columns from "../components/Columns"
import './Skills.css'
export default function Skills() {
  const cards_certs=[
    <div style={{textAlign: 'center'}}>
      <h1>UDEMY</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Python Data Analysis and Visualisation</h3><br />
      <div
        style={{
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('/imgs/certificates/Udemy_1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1>UDEMY</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>SQL</h3><br /> <br />
      <div
        style={{
          position: 'relative',
          top: '3px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('/imgs/certificates/Udemy_2.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1>WORKSHOP</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Chat Bots</h3><br />
      <div
        style={{
          position: 'relative',
          top: '8px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('/imgs/certificates/AI-Powered_ChatBots_Workshop.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1>NPTEL</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Data Analytics</h3><br />
      <div
        style={{
          position: 'relative',
          top: '20px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('/imgs/certificates/Data Analytics with Python.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1>NPTEL</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Python</h3><br />
      <div
        style={{
          position: 'relative',
          top: '20px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('/imgs/certificates/The Joy of Computing using Python.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    
  ]
  const cards_skills=[
    <div>
      <h1 style={{fontFamily: 'Akira', textAlign: 'center'}}>Data Visualization</h1>
      <ul>
        <li>Tableau</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Seaborn</li>
        <li>MatplotLib</li>
      </ul>
    </div>,
    <div>
      <h1 style={{fontFamily: 'Akira', textAlign: 'center'}}>Front-End</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Streamlit</li>
      </ul>
    </div>,
    <div>
      <h1 style={{fontFamily: 'Akira', textAlign: 'center'}}>back-End</h1>
      <ul>
        <li>MySQL</li>
        <li>Fast API</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
    </div>,
    <div>
      <h1 style={{fontFamily: 'Akira', textAlign: 'center'}}>AI/Machine Learning</h1>
      <ul>
        <li>RASA</li>
        <li> Scikit-Learn</li>
        <li>Prompt Engineering</li>
        <li>Google ADK</li>
      </ul>
    </div>,
  ]
  return(
    <>
      <TitleBar title="Skills" />
      <div style={{position: 'relative', top: '100px'}}>
        <h1 style={{fontFamily: "Akira", color: '#0b5cff', textAlign: 'center', fontSize: '50px'}}>Certificates</h1>
        <Columns
          items={cards_certs}
          allowHtml
          maxWidth="960px"
          columnWidth={380}
          columnHeight={500}
          gap={20}
          scrollerBg="#07f"
          columnBg="#f6f7f8ff"
        />
        <h1 style={{fontFamily: "Akira", color: '#0b5cff', textAlign: 'center', fontSize: '50px'}}>Domains</h1>
        <Columns
          items={cards_skills}
          allowHtml
          maxWidth="960px"
          columnWidth={380}
          columnHeight={500}
          gap={20}
          scrollerBg="#07f"
          columnBg="#f6f7f8ff"
        />
      </div>
    </>
  )
}