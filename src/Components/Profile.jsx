import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Profile.css";
import { useState } from "react";

const Profile = ({ setshowprofile }) => {
  const [image, setimage] = useState("");
  const [showform, setshowform] = useState(true);
  const [name, setname] = useState("");
  const [dob, setdob] = useState("");
  const [height, setheight] = useState("");
  const [religion, setreligion] = useState("");

  const imageHandler = (e) => {
    setimage(URL.createObjectURL(e.target.files[0]));
  };

  const nameHandler = (event) => {
    setname(event.target.value);
  };
  const dobHandler = (event) => {
    setdob(event.target.value);
  };
  const heightHandler = (event) => {
    setheight(event.target.value);
  };
  const religionHandler = (event) => {
    setreligion(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setshowform(false);
  };
  return (
    <div className="profile">
      <div className="header">
        <h2>Profile</h2>
        <button onClick={() => setshowprofile(false)}>Logout</button>
      </div>
      <div className="main_container">
        <div className="profilepic_container">
          <Avatar className="pic" src={image} />
          <div className="change_picture">
            <input onChange={imageHandler} type="file" />
            Change Picture
          </div>
        </div>
        {showform && (
          <div className="form">
            <input onChange={nameHandler} type="text" placeholder="User Name" />
            <input
              onChange={dobHandler}
              id="date"
              type="date"
              placeholder="Date of Birth"
            />
            <input onChange={heightHandler} type="text" placeholder="Height" />
            <input
              onChange={religionHandler}
              type="text"
              placeholder="Religion"
            />
            <button onClick={submitHandler}>Submit</button>
          </div>
        )}

        {!showform && (
          <div className="detail">
            <p>Name: {name}</p>
            <p>Date of Birth: {dob}</p>
            <p>Height: {height}</p>
            <p>Religion: {religion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
