import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
const ProductsInfo = (i) => {
    const cardInfo = [
        {
            id: "1",
            name: "Lion",
            price: "$6,000",
            description: "Asiatic Lion, always lives in a Pride, Found mostly in Africa and Asia",
            image: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
            show: false
        },
        {
            id: "2",
            name: "Tiger",
            price: "$6,500",
            description: "The nine subspecies of Tigers are restricted to small pockets of Asia.",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG",
            show: false
        },
        {
            id: "3",
            name: "Snake",
            price: "$1,000",
            description: " Snakes live in almost every corner of the world. They are found in forests, deserts, swamps and grasslands.They have no limbs, no moveable eyelids, and no ear openings.",
            image: "https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
            show: false
        },
        {
            id: "4",
            name: "Zebra",
            price: "$2,500",
            description: "Three species of zebras live in Africa. They also have great hearing and an excellent sense of taste and smell",
            image: "https://images.unsplash.com/photo-1509870796364-6959d105b09c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            show: false
        },
        {
            id: "5",
            name: "Octopus",
            price: "$8,000",
            description: "The octopus can only be found in salt water, but they live in all the oceans. They are considered the most intelligent of all the invertebrates",
            image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            show: false
        },
        {
            id: "6",
            name: "Jellyfish",
            price: "$1,000",
            description: "These creatures have global distribution. You can find them in every ocean on Earth",
            image: "https://images.unsplash.com/photo-1501561942-ec1065e470aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            show: false
        },
    ];
    const MouseIn = (e) => {
        console.log("++++++ Inside hover: " + i) ;
        //e.target.style.background = 'red';
        e.target.style.display= 'none';
        //return cardInfo ;
    }
    const MouseOut = (e) => {
        console.log("++++++ Inside hover: " ) ;
        //e.target.style.background = 'white';
        e.target.style.display= 'block';
        //return cardInfo ;
    }
    const renderCard = (card, index) => {
        return (
            <div className="cards">
                <Card  style={{ width: '18rem' }}   >
                    <Card.Img  onMouseOver={MouseIn} onMouseOut={MouseOut} variant="top" src={card.image} />
                    <Card.Body >
                        <Card.Title style = {{display:'block'}}  >{card.name} - {card.price}</Card.Title>
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
