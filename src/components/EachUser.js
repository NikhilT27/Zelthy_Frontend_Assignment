import React, { useState, useEffect } from "react";

import ProfileImg from "../components/ProfileImg";
import ProfileData from "../components/ProfileData";

import heart from "../images/heart.svg";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";
import emptyHeart from "../images/emptyHeart.svg";
import close from "../images/close.svg";

export default function EachUser({ data }) {
  const [imageName, setImageName] = useState(data.name);
  const [userData, setUserData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [liked, setLiked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function onChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function getFormData(name) {
    return formData[name] !== "" ? formData[name] : userData[name];
  }

  function onFormSubmit(event) {
    event.preventDefault();
    setOpenModal(!openModal);
    let name = getFormData("name");
    let email = getFormData("email");
    let phone = getFormData("phone");
    let website = getFormData("website");

    setUserData({
      name,
      email,
      phone,
      website,
    });
  }

  if (Object.keys(userData).length === 0 && userData.constructor === Object) {
    return <></>;
  } else {
    return (
      <div className="each-user-box">
        <ProfileImg name={imageName} />
        <ProfileData userData={userData} />

        <div className="each-user-option">
          <button
            className="each-user-option-button"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <img src={heart} alt="" className="each-user-symbol" />
            ) : (
              <img src={emptyHeart} alt="" className="each-user-symbol" />
            )}
          </button>
          <div class="each-user-option-vertical-line"></div>
          <button
            className="each-user-option-button"
            onClick={() => setOpenModal(!openModal)}
          >
            <img src={pen} alt="" className="each-user-symbol" />
          </button>

          <div class="each-user-option-vertical-line"></div>
          <button
            className="each-user-option-button"
            onClick={() => setUserData({})}
          >
            <img src={trash} alt="" className="each-user-symbol" />
          </button>
        </div>

        {openModal ? (
          <div className="modal-box">
            <div className="modal-content">
              <div className="modal-title">
                <h3>Basic Modal</h3>
                <button onClick={() => setOpenModal(!openModal)}>
                  <img src={close} alt="" className="modal-close" />
                </button>
              </div>
              <form onSubmit={onFormSubmit} className="modal-form">
                <div className="modal-form-option">
                  <label>
                    {formData.name === "" ? (
                      <span className="modal-form-warning">* </span>
                    ) : (
                      <></>
                    )}
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder={userData.name}
                    onChange={onChange}
                    className="modal-form-input"
                  ></input>
                </div>
                <div className="modal-form-option">
                  <label>
                    {formData.email === "" ? (
                      <span className="modal-form-warning">* </span>
                    ) : (
                      <></>
                    )}
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder={userData.email}
                    onChange={onChange}
                    className="modal-form-input"
                  ></input>
                </div>
                <div className="modal-form-option">
                  <label>
                    {formData.phone === "" ? (
                      <span className="modal-form-warning">* </span>
                    ) : (
                      <></>
                    )}
                    Phone:{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder={userData.phone}
                    onChange={onChange}
                    className="modal-form-input"
                  ></input>
                </div>
                <div className="modal-form-option">
                  <label>
                    {formData.website === "" ? (
                      <span className="modal-form-warning">* </span>
                    ) : (
                      <></>
                    )}
                    Website:{" "}
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    placeholder={userData.website}
                    onChange={onChange}
                    className="modal-form-input"
                  ></input>
                </div>
                <div className="modal-form-submit">
                  <button
                    onClick={() => setOpenModal(!openModal)}
                    className="modal-form-button modal-cancel"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="modal-form-button modal-ok">
                    OK
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
