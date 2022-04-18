import React from "react";
import { Button, Card } from "react-bootstrap";
import profile from '../../images/pro.jpg'
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const About = () => {

    const handleLove = () =>{
        toast(`❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`)
    }

    const about = `Hello !!. Recently i have finished my graduation from Daffodil International University in CSE. After finishing my BSC i was too much confused what should i do. Then one of my friend Muib suggest me this Course. Now I can feel i have skill and i can do a good job also. My future plan is to be a best developer. I am also interested in AI. Web development will be my first step to go forward to AI. Big thanks to PH team... You guys are awesome.`;
    
  return (
    <div className="container mx-auto mt-5">
      <Card style={{ width: "75rem" }}>
        <Card.Img style={{width: '200px'}} variant="top" src={profile} />
        <Card.Body>
          <Card.Title>Assrafuzzaman Nur</Card.Title>
          <Card.Text>
            {about}
          </Card.Text>
          <Button onClick={handleLove} variant="light">❤️</Button>
          <ToastContainer/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
