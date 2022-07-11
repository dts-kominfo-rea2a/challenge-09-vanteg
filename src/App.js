import "./App.css";
import React from "react";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import contacts from "./data/contacts.json";
import Contact from "./components/Contact";
import Header from "./components/Header";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />

      {contacts.map((value) => {
        return <Contact data={value} />;
      })}
    </div>
  );
};

export default App;
