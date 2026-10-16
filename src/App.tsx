import logoImage from '/uniosunlogo.png';
import './App.css';

function App() {
  return (
    <div className="page">
      <main className="container">
        <div className="logo-area">
          <img className="logo-mark" src={logoImage} alt="UniOsunInfo logo" />
          <h1 className="brand">UniOsunInfo</h1>
          <p className="tagline">
            Your campus community, updated in real time.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">About the app</h2>
          <p className="about-text">
            UniOsunInfo keeps you connected to campus life. Get the latest
            news, alerts, and community updates in one place.
          </p>

          <a
            className="download-button"
            href="https://github.com/Samueladura/UniOsunInfo/releases/download/v1.0.0/app-release.apk"
            download>
            <span className="download-icon" aria-hidden="true">
              ⬇
            </span>
            Download for Android
          </a>

          <p className="hint">
            APK will be downloaded directly to your device.
          </p>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} UniOsunInfo</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
