import React, { useState, useEffect } from "react";
import axios from "axios";
import envelope from "../images/envelope.svg";
import telephone from "../images/telephone.svg";
import www from "../images/www.svg";
import heart from "../images/heart.svg";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";

export default function EachUser({ data }) {
  const [userData, setUserData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
  });

  const [liked, setLiked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="each-user-box">
      <div className="each-user-profile-box">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${userData.name}.svg?mood[]=happy`}
          className="each-user-profile-img"
        />
      </div>
      <div className="each-user-main-data">
        <h3>{userData.name}</h3>

        <ul>
          <li>
            <div className="each-user-detail-box">
              <img src={envelope} alt="" className="each-user-symbol" />
              <span className="each-user-detail">{userData.email}</span>
            </div>
          </li>
          <li>
            <div className="each-user-detail-box">
              <img src={telephone} alt="" className="each-user-symbol" />
              <span className="each-user-detail">{userData.phone}</span>
            </div>
          </li>
          <li>
            <div className="each-user-detail-box">
              <img src={www} alt="" className="each-user-symbol" />
              <span className="each-user-detail">{userData.website}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="each-user-option">
        <button onClick={() => setLiked(!liked)}>
          {liked ? (
            <img src={heart} alt="" className="each-user-symbol" />
          ) : (
            <img src={telephone} alt="" className="each-user-symbol" />
          )}
        </button>
        <button onClick={() => setOpenModal(!openModal)}>
          <img src={pen} alt="" className="each-user-symbol" />
        </button>
        {openModal ? (
          <div className="modal-box">
            <div className="modal-content">
              <div className="modal-title">
                <h2>Basic Modal</h2>
                <button onClick={() => setOpenModal(!openModal)}>
                  <img src={trash} alt="" className="modal-close" />
                </button>
              </div>
              <form>
                <div>
                  <label>Name: </label>
                  <input type="text" placeholder={userData.name}></input>
                </div>
                <div>
                  <label>Email: </label>
                  <input type="text" placeholder={userData.email}></input>
                </div>
                <div>
                  <label>Phone: </label>
                  <input type="text" placeholder={userData.phone}></input>
                </div>
                <div>
                  <label>Website: </label>
                  <input type="text" placeholder={userData.website}></input>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
        <button onClick={() => setUserData({})}>
          <img src={trash} alt="" className="each-user-symbol" />
        </button>
      </div>
    </div>
  );
}
