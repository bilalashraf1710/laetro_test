import React from "react";
import Profile from '../../../assests/images/profile.jpg'

type Props = {};

const Avatar = (props: Props) => {
  return (
    <div className="border-2 border-grey-200 rounded-full w-[70px] h-[70px] overflow-hidden">
      <img src={Profile} alt="avatar"/>
    </div>
  );
};

export default Avatar;
