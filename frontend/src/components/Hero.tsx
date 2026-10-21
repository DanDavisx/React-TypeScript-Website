import { useEffect, useState } from 'react'
import firstImage from '../images/car.jpg'
import secondImage from '../images/bmw.jpg'
import thirdImage from '../images/mini.jpg'

const bannerImages = [firstImage, secondImage, thirdImage]
const imageIntervalMs = 5000


export default function Hero() {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setImageIndex((currentIndex) => {
            return (currentIndex + 1) % bannerImages.length
            })
        }, imageIntervalMs)

        return () => {
            window.clearInterval(intervalId)
        }
    }, [])
    return (
    <section className="hero" id="home">
        <div className="hero-visual" aria-hidden="true">
        <div className="hero-mask">
            {bannerImages.map((image, index) => (
            <div
                key={image}
                className={
                index === imageIndex
                    ? 'hero-slide is-active'
                    : 'hero-slide'
                }
                style={{
                backgroundImage: `url("${image}")`,
                }}
            ></div>
            ))}
        </div>
        </div>

        <div className="hero-content">
        <h1>Just Here For The Cars.</h1>
        </div>
    </section>
    )
}