import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

// class Products extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className="productCards">
//                 <img className="productImage" src={this.props.item.image} />
//                 <h3 className="productHeaders">{this.props.item.name} - {this.props.item.price}</h3>
//                 <p>{this.props.item.description}</p>
//             </div>
//         )
//     }
// }

const ProductsInfo = () => {
    const cardInfo = [
        {
            id: "1",
            name: "Lion",
            price: "$1,000",
            description: "",
            image: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg"
        },
        {
            id: "2",
            name: "Tiger",
            price: "$3,000",
            description: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG"
        },
        {
            id: "3",
            name: "lion",
            price: "$1,000",
            description: "",
            image: "https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
        },
        {
            id: "4",
            name: "lion",
            price: "1,000",
            description: "",
            image: ""
        },
        {
            id: "5",
            name: "lion",
            price: "$1,000",
            description: "",
            image: ""
        },
        {
            id: "6",
            name: "lion",
            price: "$1,000",
            description: "",
            image: ""
        },
    ];

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