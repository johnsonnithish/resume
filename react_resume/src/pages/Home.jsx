import Particles from '../components/background/Particles';
import Blocks from '../components/Blocks';

function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Background Particles (can receive mouse) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto', // make sure the canvas can get events
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content (let events pass through by default) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          pointerEvents: 'none', // <-- key: don't block the canvas
        }}
      >
        <h1 style={{ color: 'white', pointerEvents: 'none', fontFamily: 'Akira'}}>Johnson Nithish</h1>

        {/* Re-enable events only where needed */}
        <div style={{ pointerEvents: 'auto' }}>
          <Blocks
            items={[
              { label: "Education",   to: "/education" },
              { label: "Projects",    to: "/projects" },
              { label: "Skills",to: "/skills" },
              { label: "Experience",  to: "/experience" },
            ]}
          />
          <p style={{color: 'white', textAlign: 'center', fontSize: '10px'}}>who says job-hunting musn't be fun</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
