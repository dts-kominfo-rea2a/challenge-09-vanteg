// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../App.css";

const Contact = (props) => {
  return (
    <div>
      {props.data.map((value) => {
        return (
          <>
            <div className="felx">
              <div>
                <img src={value.photo} className="gambar"></img>
              </div>
              <div>
                <h3>{value.name}</h3>
                <p>{value.phone}</p>
                <p>{value.email}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Contact;
