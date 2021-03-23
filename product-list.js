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

function Products(props) {
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
    )
}

export default Products;