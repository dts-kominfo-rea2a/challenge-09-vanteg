// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../App.css";

const Contact = (props) => {
  return (
    <>
      <div className="felx">
        <div>
          <img src={props.data.photo} className="gambar"></img>
        </div>
        <div>
          <h3>{props.data.name}</h3>
          <p>{props.data.phone}</p>
          <p>{props.data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
