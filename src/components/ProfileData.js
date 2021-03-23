import React from "react";

import envelope from "../images/envelope.svg";
import telephone from "../images/telephone.svg";
import www from "../images/www.svg";

export default function ProfileData({ userData }) {
  return (
    <>
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
              <span className="each-user-detail">
                http://{userData.website}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
