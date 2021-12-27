import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/light.svg";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Footer = () => {

  const [contact, setContact] = useState([
    {
    info:"119 M, Laboratories Complex, Indian Institute of Information Technology Design and Manufacturing Kancheepuram, Melakottaiyur, Vandalur-Kelambakkam Road, Chennai - 600 127",
    mail: "smile@iiitdm.ac.in",
    number: "+91-44-27476378"

}
  ]);

  return (
    <div className="container-fluid bg-dark text-light py-5 px-3 my-0">
      <div className="row">
        <div className="col-sm-8 py-4">
          <img src={Logo} alt="" height="150px" />
        </div>
        <div className="col-sm-4">
          {contact.map((contact, index) => (
            <div>
              <p>
                <b>Information: </b>
                {contact.info}
              </p>
              <p>
                <b>Mail: </b>
                {contact.mail}
              </p>
              <p>
                <b>Number: </b>
                {contact.number}
              </p>
            </div>
           ))}
        </div>
      </div>
      <hr style={{ borderTop: "1px solid rgba(255,255,255,.25)" }} />
      <div className="row d-flex justify-content-center ">
        <div className="m-2">
          <EmailShareButton
            subject={"Reg: SMILE New Website is Up !"}
            body={"Website ->   "}
            url={"https://project-smile.netlify.app/"}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
        <div className="m-2">
          <LinkedinShareButton
            title="SMILE Website"
            desc="SMILE New Website is Up"
            source={"https://project-smile.netlify.app/"}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </div>
        <div className="m-2">
          <TwitterShareButton
            title="SMILE Website"
            via="SMILE Lab"
            hashtags={["SMILE", "Lab", "IIITDMK"]}
            related={"SMILELab"}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div className="m-2">
          <WhatsappShareButton
            title="SMILE Website"
            url={"https://project-smile.netlify.app/"}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
