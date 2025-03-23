import React from "react";
import User from "/user/user1.jpg";

export default function UserImage() {
  return (
    <div className="size-[2.5rem] rounded-full overflow-hidden border">
      <img src={User} className="size-full object-cover" />
    </div>
  );
}
