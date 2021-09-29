import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';

const SliderItem = (props) => {
    const { news } = props;
    return (
        <Carousel className="slider">
            {
                news.map(nw => <Carousel.Item key={nw.url}>
                    <img
                        className="d-block w-100"
                        src={nw.urlToImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{nw.title}</h3>
                        <p>{nw.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>

    );
};

export default SliderItem;