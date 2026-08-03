import logoImage from '/uniosunlogo.png'
import './App.css'

function App() {
  return (
    <div className="page">
      <main className="container">
        <div className="logo-area">
          <img className="logo-mark" src={logoImage} alt="UniOsunPulse logo" />
          <h1 className="brand">UniOsunPulse</h1>
          <p className="tagline">Your campus community, updated in real time.</p>
        </div>

        <div className="card">
          <h2 className="card-title">About the app</h2>
          <p className="about-text">
            UniOsunPulse keeps you connected to campus life. Get the latest news, alerts, and community updates in one place.
          </p>

          <a className="download-button" href="/uniosunpulse.apk" download>
            <span className="download-icon" aria-hidden="true">⬇</span>
            Download for Android
          </a>

          <p className="hint">
            APK will be downloaded directly to your device.
          </p>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} UniOsunPulse</span>
        </footer>
      </main>
    </div>
  )
}

export default App
