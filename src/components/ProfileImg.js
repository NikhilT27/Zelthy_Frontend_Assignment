import React from "react";

export default function ProfileImg({ name }) {
  return (
    <>
      <div className="each-user-profile-box">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?mood[]=happy`}
          className="each-user-profile-img"
        />
      </div>
    </>
  );
}
