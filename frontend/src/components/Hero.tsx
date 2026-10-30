import { useEffect, useState } from 'react'
import skylineImage from '../images/car.jpg'
import miniImage from '../images/mini.jpg'
import './Hero.css'
import '../styles/base.css'

const bannerImages = [skylineImage, miniImage]
const imageIntervalMs = 5000

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const intervalId = window.setInterval(() => {
      setImageIndex((currentIndex) => (currentIndex + 1) % bannerImages.length)
    }, imageIntervalMs)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        {bannerImages.map((image, index) => (
          <img
            key={image}
            className={`hero-slide${index === imageIndex ? ' is-active' : ''}`}
            src={image}
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 id="hero-title">
          <span>Just</span>
          <span>here</span>
          <span>for</span>
          <span>the</span>
          <span>cars</span>
        </h1>
        <p>A personal journal of road tests and ownership experiences, covering how cars drive and what they’re like to live with.</p>
        <button type="button" className="btn btn-b1">Explore Articles</button>
      </div>

      <div className="hero-controls" role="group" aria-label="Banner slideshow">
        {bannerImages.map((image, index) => (
          <button
            key={image}
            className={`hero-pagination${index === imageIndex ? ' is-active' : ''}`}
            type="button"
            aria-label={`Show photograph ${index + 1}`}
            aria-pressed={index === imageIndex}
            onClick={() => setImageIndex(index)}
          >
            <span aria-hidden="true" />
          </button>
        ))}
        <button
          className="hero-playback"
          type="button"
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          onClick={() => setIsPaused((paused) => !paused)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            {isPaused ? <path d="M5 3 13 8 5 13Z" /> : <path d="M4 3h3v10H4zM10 3h3v10h-3z" />}
          </svg>
        </button>
      </div>
    </section>
  )
}
