import React , {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';
// this is required for flip
import ReactCardFlip from 'react-card-flip';

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
            description: "",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/81/2012_Suedchinesischer_Tiger.JPG",
            show: false
        },
        {
            id: "3",
            name: "Snake",
            price: "$1,000",
            description: "This is snake",
            image: "https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
            show: false
        },
        {
            id: "4",
            name: "Zebra",
            price: "$2,500",
            description: "",
            image: "https://images.unsplash.com/photo-1509870796364-6959d105b09c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            show: false
        },
        {
            id: "5",
            name: "Octopus",
            price: "$8,000",
            description: "",
            image: "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            show: false
        },
        {
            id: "6",
            name: "Jellyfish",
            price: "$1,000",
            description: "",
            image: "https://images.unsplash.com/photo-1501561942-ec1065e470aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            show: false

        },
    ];
// isFlipped array to store flip status for each card,every card is display-false
    const [ isFlipped,setFlip] = useState([false, false, false, false, false, false]) ;

    const handleClickFlip = (i) => {
        
        //setFlip = (i) =>{isFlipped[i] = true} ;
        let newArr = [...isFlipped];
        newArr[i] = true ;
        setFlip(newArr) ;
        console.log("+++++ " + i)
        
    }

    const handleClickUnFlip = (i) => {
       
        //setFlip(false) ;
        let newArr = [...isFlipped];
        newArr[i] = false ;
        setFlip(newArr) ;
        
    }

   
    const renderCard = (card, index) => {
        return (
            // isFlipped is a parameter which will decide which div to be display 
            <ReactCardFlip  isFlipped={isFlipped[index]} flipDirection="horizontal">
            
                {/* div without flip */}
                <div className="cards">
                    <Card  style={{ width: '18rem' }}   >
                    <Card.Img  variant="top" src={card.image} />   
                        
                    </Card>
                    <button onClick={() => handleClickFlip(index)}>Click to flip</button>
                </div>
               
                 {/* div with unflip */}
               
                <div className="cards">
                    <Card  style={{ width: '18rem' }}   >                    
                        <Card.Body >                        
                            <Card.Title style = {{display:'block'}}  >{card.name} - {card.price}</Card.Title>
                            
                            <Card.Text>
                                {card.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <button onClick={() => handleClickUnFlip(index)}>Click to Unflip</button>       
                </div>
                
             </ReactCardFlip>
        );
    };
    return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default ProductsInfo;
