import "../style/MV.css";
// import MVCard from "./MVCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MV() {
  const [data, setData] = useState([]); //retirve data
  // const retirveData = async () => {
  //   const response = await api.get("/mountains");
  //   return response.data;
  // };

  const getMVData = () => {
    axios
      .get("https://jg-mv-project.herokuapp.com/mountains")
      .then((response) => {
        const rd = response.data;
        setData(rd);
        console.log(rd);
        console.log("data has been recived");
      })
      .catch(() => {
        alert("error");
      });
  };

  const deleteHandler = (id) => {
    // axios
    //   .delete(`https://jg-mv-project.herokuapp.com/${id}`)
    //   .then((resp) => resp.data);
    axios
      .delete(`https://jg-mv-project.herokuapp.com/${id}`)
      .then((response) => {
        console.log(response);
      });
    // make delete request to create Invenotry
    // update the inventory
    // getMVData();
  };

  const mv = data.map((ele, index) => {
    return (
      <div
        classnName="card"
        style={{
          width: "30vw",
          height: "60vh",
          borderStyle: "solid",
          marginBottom: "2rem",
          backgroundColor: "white",
        }}
      >
        <div classnName="img-sec">
          <img
            className="image"
            style={{ width: "100%", height: "45%" }}
            src={ele.image_url}
            alt={ele.name}
          />
        </div>

        <div classnName="info-sec">
          <p style={{ textTransform: "capitalize" }}>{ele.name}</p>
          <p>{ele.location}</p>
          <p>{ele.desc}</p>
          <button
            onClick={deleteHandler(ele.id)}
            style={{ padding: ".5.5rem", backgroundColor: "#fe5f55" }}
          >
            {" "}
            DELETE
          </button>
        </div>
      </div>
    );
  });

  useEffect(() => getMVData(), []);
  return (
    <div className="MV">
      <h1>MV</h1>
      <div className="index">{mv}</div>
    </div>
  );
}

export default MV;
