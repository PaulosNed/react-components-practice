import React from "react";

interface AvatarProps {
    avatar: string
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  return (
    <div>
      <img className="rounded-t-lg w-[300px] h-[200px]" src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
