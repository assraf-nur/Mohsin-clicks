import React from "react";
import git from '../../images/git.png'
import facebook from '../../images/facebook.png'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-dark mt-5">
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 text-white mt-3 mb-3">All copyright ©️ {year} reserved by "Mohsin-Click"</div>
          </div>
          <div className="col">
            <div className="p-3 text-white">Connect with me VIA...
            <br />
              <a href="https://github.com/assraf-nur" className="btn btn-light d-flex w-25 gap-3 font-bold mx-auto" target="_blank">
                <img style={{width: '30px'}} src={git} alt="" />
                GitHub</a>
                <br />
                <a href="https://www.facebook.com/assrafnur/" className="btn btn-light d-flex w-25 gap-2 font-bold mx-auto" target="_blank">
                <img style={{width: '30px'}} src={facebook} alt="" />
                Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
