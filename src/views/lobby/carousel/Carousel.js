import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Example1 from '../../../static/image/carousel/example1.png'
import Example2 from '../../../static/image/carousel/example2.png'
import Example3 from '../../../static/image/carousel/example3.png'
import { useHistory } from 'react-router-dom';

const CarouselSection = () => {
    const history = useHistory();
    const data = [
        {
            id: 1,
            img: Example1,
        },
        {
            id: 2,
            img: Example2,
        },
        {
            id: 3,
            img: Example3,
        },
    ]
    return (
        <section className="content-carousel">
            <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                onClickItem={(index, item) => history.push('/main/'+item.props.id)}
                dynamicHeight={false}
            >
                {data.map((item) => (
                    <img className="carousel-image" src={item.img} key={'key'+item.id} id={item.id}></img>
                ))}
            </Carousel>
        </section>
    )
}

export default CarouselSection