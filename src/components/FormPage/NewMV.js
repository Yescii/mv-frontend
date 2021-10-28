import React, { useState } from "react";
import axios from "axios";

function NewMV() {
  const [name, setName] = useState([""]); //retirve data
  const [image_url, setImage] = useState([""]); //retirve data
  const [location, setLocation] = useState([""]); //retirve data
  const [desc, setDesc] = useState([""]); //retirve data
  const submitHandler = (event) => {
    event.preventDefault(); // the page will not reload when the form is submit
    const postData = {
      name,
      desc,
      image_url,
      location,
    };

    axios
      .post("https://jg-mv-project.herokuapp.com/create", postData)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="NewMV">
      <div class="wrapper">
        <div class="title">
          <h1>Create</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div class="input-fields">
            Name:{" "}
            <input
              type="text"
              class="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            Image:{" "}
            <input
              type="text"
              class="input"
              value={image_url}
              onChange={(e) => setImage(e.target.value)}
            />
            <br />
            Location:{" "}
            <input
              type="text"
              class="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
          </div>
          <div class="msg">
            <textarea
              placeholder="Message"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <input class="btn" type="submit" value="ADD" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMV;
