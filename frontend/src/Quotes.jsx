import React, {useState} from "react";
import axios from "axios";

function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    axios.get("http://localhost:5000/",  { crossdomain: true }).then(response => {
      console.log(response.data);
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }


  return (
    <div> 
      {/* Button to request Quote from backend */}
      <button onClick={getQuote}>
        Show Me a Quote!
      </button>
      {/* Prop of text that will be filled with quote from backend */}
      <h1>{text}</h1>
      <h3>{"-" + author} </h3>
    </div>
  )
}

export default Quotes;