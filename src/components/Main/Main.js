import React, { useEffect, useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import News from '../News/News';
import SliderItem from '../SliderItem/SliderItem';


const Main = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0cc42014ac114a61b492d15a3885522c')
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])

    const [sliderItem, setSliderItem] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0cc42014ac114a61b492d15a3885522c')
            .then(res => res.json())
            .then(data => setSliderItem(data.articles));
    }, [])

    return (
        <div>

            {/* Carousel Section */}
            <Container>
                <SliderItem news={sliderItem}></SliderItem>
            </Container>

            {/* Card Section */}
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        news.map(nw => <News key={nw.url} news={nw}></News>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Main;