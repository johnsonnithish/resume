import TitleBar from "../components/TitleBar"
import Columns from "../components/Columns"
export default function Certificates() {
  const cards=[
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>UDEMY</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Python Data Analysis and Visualisation</h3><br />
      <div
        style={{
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('../src/assets/imgs/certificates/Udemy_1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>UDEMY</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>SQL</h3><br /> <br />
      <div
        style={{
          position: 'relative',
          top: '3px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('../src/assets/imgs/certificates/Udemy_2.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>WORKSHOP</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Chat Bots</h3><br />
      <div
        style={{
          position: 'relative',
          top: '8px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('../src/assets/imgs/certificates/AI-Powered_ChatBots_Workshop.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>NPTEL</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Data Analytics</h3><br />
      <div
        style={{
          position: 'relative',
          top: '20px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('../src/assets/imgs/certificates/Data Analytics with Python.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>NPTEL</h1> <br />
      <h3 style={{fontFamily: 'Akira'}}>Python</h3><br />
      <div
        style={{
          position: 'relative',
          top: '20px',
          width: 400,
          height: 250,
          margin: '0 auto',
          backgroundImage: "url('../src/assets/imgs/certificates/The Joy of Computing using Python.jpg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>,
  ]
  return(
    <>
      <TitleBar title="Certificates" />
      <div style={{position: 'relative', top: '100px'}}>
        <Columns
          items={cards}
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