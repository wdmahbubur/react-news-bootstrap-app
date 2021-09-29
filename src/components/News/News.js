import React from 'react';
import { Col, Card } from 'react-bootstrap';

const News = (props) => {
    const { content, publishedAt, title, urlToImage, url } = props.news;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title><a href={url}>{title}</a></Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>Publish Time: {publishedAt}</Card.Footer>
            </Card>
        </Col>
    );
};

export default News;