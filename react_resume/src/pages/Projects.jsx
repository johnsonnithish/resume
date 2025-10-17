import TitleBar from "../components/TitleBar"
import Columns from "../components/Columns"
import "./Projects.css";

export default function Projects() {
  const cards=[
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>GameBoxd</h1> <br />
      <img src="/imgs/projects/GameBoxd_log.png" />
      <p>I have always wanted a site like this to exist, so I built it, on <strong>React JS</strong> myself.
        This is a site that lets you track and review video games you have played, want to play and collections of custom made lists.
        It is inspired by letterboxd.com, a similar site for movies. The database is powered by <strong>IGDB</strong>.
        This is still very much a work in progress, and I plan to add many more features in the future.
      </p>
      <a href="https://gameboxd-htyv.onrender.com/">GameBoxd</a>
      <div className="image-grid">
        <img src="/imgs/projects/gb_1.png"  />
        <img src="/imgs/projects/gb_2.png"  />
        <img src="/imgs/projects/gb_3.png"  />
        <img src="/imgs/projects/gb_4.png"  />
      </div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>Rasa Bot</h1> <br />
      <div
        style={{
          width: 150,
          height: 50,
          margin: '0 auto',            
          display: 'grid'
        }}
      >
        <img
          src="/imgs/projects/rasa_logo.png"
          alt="Rasa"
          style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
        />
      </div>
      <br />
      <br />
      <p>A Rasa chatbot that takes care of the leave application and answering FAQs from the companies policy. The chatbot is developed through <strong>RASA</strong> framework, with exhaustive training on <strong>Natual Language Processing</strong> and intent triggers.</p><br />
      <div className="image-grid">
        <img src="/imgs/projects/rasa_1.png"  />
        <img src="/imgs/projects/rasa_2.png"  />
        <img src="/imgs/projects/rasa_3.png"  />
        <img src="/imgs/projects/rasa_4.png"  />
      </div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>Solar Accessories</h1> <br />
      <div
        style={{
          width: 190,
          height: 50,
          margin: '0 auto',            
          display: 'grid'
        }}
      >
        <img
          src="/imgs/projects/Solar-Panel.png"
          alt="Rasa"
          style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
        />
      </div><br /><br /><br /><br /><br />
      <p>A energy storing wearable cell, prototype, that could theoritically store the solar energy gained throughout the day and charge your devices. This college mini-project has high potential and a definite venture I am looking forward to explore.
      </p>
      <div className="image-grid image-grid--crop">
        <img src="/imgs/projects/solar_1.jpg" />
        <img src="/imgs/projects/solar_2.jpg" />
        <img src="/imgs/projects/solar_3.jpg" />
        <img src="/imgs/projects/solar_4.jpg" />
      </div>
    </div>,
    <div style={{textAlign: 'center'}}>
      <h1 style={{fontFamily: 'Akira'}}>Spam Classifier</h1> <br />
      <div
        style={{
          width: 150,
          height: 50,
          margin: '0 auto',            
          display: 'grid'
        }}
      >
        <img
          src="/imgs/projects/sc_1.png"
          alt="Rasa"
          style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <p style={{marginTop: '70px'}}>A web-app, build using React JS that classifies your text as Spam or Not Spam. Using the four well trained models, Multinomial Naive Bayes, Support Vector Machine, Logistic Regression and Random Forest, the web-app sends out an API call recieved by the app.py that uses the selected model to predict the verdict.</p><br />
    </div>,
    <div style={{
      display: 'flex',
      alignItems: 'center',     // vertical
      justifyContent: 'center', // horizontal
      minHeight: '450px'        // or '100vh' to center on the screen
    }}>
      <h1 style={{ fontFamily: 'Akira', margin: 0 }}>THIS?</h1>
    </div>
  ]
  return(
    <>
    <TitleBar title="Projects" />
    <div style={{position: 'relative', top: '100px'}}>
      <Columns
        items={cards}
        allowHtml
        maxWidth="960px"
        columnWidth={380}
        columnHeight={620}
        gap={20}
        scrollerBg="#07f"
        columnBg="#fcfcfcff"
      />
    </div>
    </>
  )
}