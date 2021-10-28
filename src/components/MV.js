import "../style/MV.css";
// import MVCard from "./MVCard";
import React, { useState, useEffect } from "react";
import axios from "axios";

function MV() {
  const [data, setData] = useState([null]); //retirve data
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

  const display = () => {
    console.log(data[0].name);
  };

  const deleteHandler = (id) => {
    axios.delete(`https://jg-mv-project.herokuapp.com/${id}`);
  };

  const mv = data.map((ele, index) => {
    return (
      <div classnName="card" key={data[index].id}>
        <div classnName="img-sec">
          <img src={data[index].img_url} alt={data[index].name} />
        </div>

        <div classnName="info-sec">
          <p>{data[index].name}</p>
          <p>{data[index].location}</p>
          <p>{data[index].desc}</p>
          <button onClick={deleteHandler(data[index.id])}> DELETE</button>
        </div>
      </div>
    );
  });

  useEffect(() => getMVData(), []);
  return (
    <div className="MV">
      <h1>MV</h1>

      <button onClick={display}></button>
      <div>{mv}</div>
    </div>
  );
}

export default MV;
