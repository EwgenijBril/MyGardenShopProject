import React from "react";
import { WhatsAppOutlined, InstagramOutlined } from "@ant-design/icons";
import s from "./index.module.css";

export default function Footer() {
  return (
    <section className="wrapper" id="contacts">
      <div className={s.footer_container}>
        <div className={s.contacts_container}>
          <h2>Contact</h2>
          <p>+49 176 99988999</p>
          <div className={s.icons_container}>
            <InstagramOutlined />
            <WhatsAppOutlined />
          </div>
        </div>
        <div className={s.address_block}>
          <h2>Address</h2>
          <h3>
            Marktplatz 19, <br /> 72250 Freudenstadt
          </h3>
          <h4>Working Hours</h4>
          <p>24 hours a day</p>
        </div>
      </div>
    </section>
  );
}
