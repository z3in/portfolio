import React from "react";

import ContactSvg from "./svg/ContactsSvg";
import FbBubble from "./svg/FbBubble";
import TwitterBubble from "./svg/TwitterBubble";

export default function Contact() {
  return (
    <div className="Contacts">
      <div className="Contacts-Details">
        <div className="Contacts-Svg">
          <ContactSvg />
        </div>
        <div className="Contacts-Block-Details">
          <div>
            <h3>Email</h3>
          </div>
          <div>sebaschianrobin@gmail.com</div>
          <div>
            <h3>Mobile Number</h3>
          </div>
          <div>+639954976003</div>
          <hr color="#111" height="1" />
          <div className="social-media">
            <div className="bubbles">
              <FbBubble /> <span>www.facebook.com/sebaschianrobin</span>
            </div>
            <div className="bubbles">
              <TwitterBubble /> <span>www.twitter.com/sebaschianrobin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Contacts-Send-Form">
        <div>SEND ME A MESSAGE</div>
        <label>Name</label>
        <input />
        <label>Email Address</label>
        <input />
        <label>Message</label>
        <textarea></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}
