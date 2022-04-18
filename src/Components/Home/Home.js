import React from "react";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div>
      <div className="">
        <Banner></Banner>
        <Services></Services>
        <CustomerReview></CustomerReview>
      </div>
      <div className="position-absolute bottom-00 w-100 start-50 translate-middle-x">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
