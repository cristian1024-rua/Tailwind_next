export default function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ..."
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh'
      }}>
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        padding: '2rem', 
        borderRadius: '16px', 
        backgroundColor: 'black', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', 
        maxWidth: '700px', 
        width: '90%',  
        height: 'auto', 
        flexWrap: 'wrap', 
        alignItems: 'center', 
      }}>
        
        <div style={{ flexShrink: 0, flexBasis: '300px', maxWidth: '100%', display: 'flex', justifyContent: 'flex-start' }}>
          <img
            alt="Card background"
            style={{ 
              objectFit: 'cover', 
              borderRadius: '16px', 
              width: '90%',  
              height: '300px', 
              marginLeft: '-60px', 
              marginTop: '-10px', 
            }} 
            src="Imagee.jpg"
          />
        </div>

        <div style={{ 
          paddingLeft: '1rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          color: 'white', 
          flex: '1' 
        }}>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0 0' }}>Jess Wilson</p>
          <small style={{ color: '#ddd', fontSize: '1rem' }}>UX Engineer</small>
          <small style={{ color: '#ddd', fontSize: '1rem' }}>Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.</small>

          <div style={{ display: 'flex', marginTop: '1rem', gap: '1rem' }}>
            <button style={{backgroundColor: 'black', color: 'white', border: '2px solid white',borderRadius: '20px', padding: '1rem 1.5rem', cursor: 'pointer'
            }}>
              PROFILE
            </button>
            <button style={{backgroundColor: 'white', color: 'black', border: 'none',borderRadius: '20px', padding: '1rem 1.5rem', cursor: 'pointer'
            }}>
              FOLLOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}