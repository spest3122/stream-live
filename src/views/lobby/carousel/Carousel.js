import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Example1 from '../../../static/image/carousel/example1.png'
import Example2 from '../../../static/image/carousel/example2.png'
import Example3 from '../../../static/image/carousel/example3.png'

const CarouselSection = () => {
    return (
        <section className="content-carousel">
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                <img src={Example1} />
                <img src={Example2} />
                <img src={Example3} />
            </Carousel>
        </section>
    )
}

export default CarouselSection