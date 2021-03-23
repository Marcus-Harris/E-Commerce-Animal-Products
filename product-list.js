import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

const ProductsInfo = () => {
    const cardInfo = [
        {
            id: "1",
            name: "Lion",
            price: "$6,000",
            description: "",
            image: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg"
        },
        {
            id: "2",
            name: "Tiger",
            price: "$6,500",
            description: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG"
        },
        {
            id: "3",
            name: "Snake",
            price: "$1,000",
            description: "",
            image: "https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        },
        {
            id: "4",
            name: "Zebra",
            price: "$2,500",
            description: "",
            image: "https://images.unsplash.com/photo-1509870796364-6959d105b09c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "5",
            name: "Octopus",
            price: "$8,000",
            description: "",
            image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
        {
            id: "6",
            name: "Jellyfish",
            price: "$1,000",
            description: "",
            image: "https://images.unsplash.com/photo-1501561942-ec1065e470aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"

        },
    ];

    const renderCard = (card, index) => {
        return (
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.name} - {card.price}</Card.Title>
                        <Card.Text>
                            {card.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    };
    return <div className="grid">{cardInfo.map(renderCard)}</div>;
};
export default ProductsInfo;

const renderCard = (card, index) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    {props.item.description}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};
return <div className = "grid">{cardInfo.map(renderCard)}</div>;
};
export default ProductsInfo;
