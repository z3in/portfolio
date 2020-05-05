import React from "react";

import ContactSvg from "../../svg/ContactsSvg";
import FbBubble from "../../svg/FbBubble";
import TwitterBubble from "../../svg/TwitterBubble";
import s from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={s.Contacts}>
      <div className={s.ContactsDetails}>
        <div className={s.ContactsSvg}>
          <ContactSvg />
        </div>
        <div className={s.ContactsBlockDetails}>
          <div>
            <h3>Email</h3>
          </div>
          <div>sebaschianrobin@gmail.com</div>
          <div>
            <h3>Mobile Number</h3>
          </div>
          <div>+639954976003</div>
          <hr color="#111" height="1" />
          <div className={s.socialmedia}>
            <div className={s.bubbles}>
              <FbBubble /> <span>facebook.com/sebaschianrobin</span>
            </div>
            <div className={s.bubbles}>
              <TwitterBubble /> <span>twitter.com/sebaschianrobin</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.ContactsSendForm}>
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
