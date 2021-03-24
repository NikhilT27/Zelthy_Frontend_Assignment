import React, { useState, useEffect } from "react";

export default function ProfileImg({ name }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      `https://avatars.dicebear.com/v2/avataaars/${name}.svg?mood[]=happy`
    );
  }, [name]);

  return (
    <>
      <div className="each-user-profile-box">
        <img src={image} className="each-user-profile-img" />
      </div>
    </>
  );
}
