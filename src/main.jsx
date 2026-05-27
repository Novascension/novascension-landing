import React from 'react'
import { createRoot } from 'react-dom/client'
import { Mail, Camera, PlayCircle, Music2 } from 'lucide-react'
import './styles.css'
import mainLogo from './assets/novascension-main.png'
import wealthLogo from './assets/novascension-wealth.png'
import growthLogo from './assets/novascension-growth.png'

const paths = [
  {
    title: 'Wealth',
    url: 'https://wealth.novascension.com',
    logo: wealthLogo,
    accent: 'wealth',
    description: 'Financial education. Financial freedom.',
  },
  {
    title: 'Growth',
    url: 'https://growth.novascension.com',
    logo: growthLogo,
    accent: 'growth',
    description: 'Digital marketing education. Strategies that scale.',
  },
]

function App() {
  return (
    <main className="site">
      <div className="stars" />
      <div className="nebula nebula-left" />
      <div className="nebula nebula-right" />
      <div className="earth-glow" />

      <section className="landing">
        <div className="halo-pulse" />
        <img src={mainLogo} alt="NovaScension" className="main-logo-fixed" />

        <h1 className="path-title">Choose Your Path of Ascension</h1>

        <div className="path-grid-fixed">
          {paths.map((path) => (
            <a key={path.title} href={path.url} className={`path-card-fixed ${path.accent}`}>
              <img src={path.logo} alt={`NovaScension ${path.title}`} className="path-logo-fixed" />
              <p>{path.description}</p>
            </a>
          ))}
        </div>

        <p className="mission">Building pathways to wealth, growth, and human advancement.</p>

        <footer>
  <div className="footer-icons">
  <a
    href="mailto:support@novascension.com"
    aria-label="Email"
  >
    <Mail size={20} />
  </a>

  <a
    href="https://www.instagram.com/novascension/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Camera size={20} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61589984984026"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <span style={{fontSize: '14px', fontWeight: 'bold'}}>f</span>
  </a>

  <a
    href="https://www.tiktok.com/@novascension"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
  >
    <Music2 size={20} />
  </a>

  <a
    href="https://www.youtube.com/@Novascension"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <PlayCircle size={21} />
  </a>
</div>

  <p className="copyright">
    © 2026 NovaScension. All Rights Reserved.
  </p>
</footer>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)