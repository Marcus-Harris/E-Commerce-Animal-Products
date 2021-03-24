import React, { useState } from 'react';
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
      image: "https://images.unsplash.com/photo-1567732310772-bb589efdbb03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
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
      description: "Snakes live in almost every corner of the world. They are found in forests, deserts, swamps and grasslands.They have no limbs, no moveable eyelids, and no ear openings",
      image: "https://images.unsplash.com/photo-1550172268-9a48af98ac5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
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
    {
      id: "7",
      name: "Panda",
      price: "$1,000",
      description: "Kevin",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      show: false
    },
    {
      id: "8",
      name: "Sting Ray",
      price: "$1,000",
      description: "Stingy the stingy ray",
      image: "https://images.unsplash.com/photo-1513039235271-5937eefe2959?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3RpbmclMjByYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      show: false
    },
    {
      id: "9",
      name: "Parrot",
      price: "$1,000",
      description: "Edward the parrot",
      image: "https://thumbs-prod.si-cdn.com/g-KDLxcm1UG30jZJuqmbTmIGhgQ=/fit-in/1600x0/https://public-media.si-cdn.com/filer/81/19/81199c94-e8aa-4438-9db5-0d76b77ec2ee/istock_000014986932_medium.jpg",
      show: false
    },
  ];
  
  // isFlipped array to store flip status for each card,every card is display-false
  const [isFlipped, setFlip] = useState([false, false, false, false, false, false, false, false, false]);

  const handleClickFlip = (i) => {

    //setFlip = (i) =>{isFlipped[i] = true} ;
    let newArr = [...isFlipped];
    newArr[i] = true;
    setFlip(newArr);
    console.log("+++++ " + i)

  }

  const handleClickUnFlip = (i) => {

    //setFlip(false) ;
    let newArr = [...isFlipped];
    newArr[i] = false;
    setFlip(newArr);

  }


  const renderCard = (card, index) => {
    return (
      // isFlipped is a parameter which will decide which div to be display 
      <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">

        {/* div without flip */}
        <div className="cards front-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Img variant="top" src={card.image} />
          </Card>
          <button className="descButton" onClick={() => handleClickFlip(index)}>Details</button>
        </div>

        {/* div with unflip */}

        <div className="cards back-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Body >
              <Card.Title style={{ display: 'block' }}  >{card.name} - {card.price}</Card.Title>
              <Card.Text>
                {card.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <button className="descButton" onClick={() => handleClickUnFlip(index)}>Show {card.name}</button>
        </div>
      </ReactCardFlip>
    );
  };
  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default ProductsInfo;
