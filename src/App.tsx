import React from "react";
import "./App.css";
import { Profile } from "./models/Profile";
import Card from "./components/Card";

function App() {

  //static profiles to be displayed
  const profiles: Profile[] = [
    {
      id: 1,
      name: "Paulos Dessie",
      link: "https://vercel.com/paulosned/ethio-house-marketplace",
      bio: "Enthusiastic software developer",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcK9KRJhd4ekBT7AVZA72wB1tj8Sjx_dW2BA&usqp=CAU",
    },
    {
      id: 3,
      name: "Kebede Yifraw",
      link: "https://vercel.com/paulosned/ethio-house-marketplace",
      bio: "Enthusiastic Full stack developer",
      avatar:
        "https://previews.123rf.com/images/mimagephotography/mimagephotography1507/mimagephotography150700007/42152023-close-up-portrait-of-a-happy-young-black-man-smiling-with-headphones-on-white-background.jpg",
    },
    {
      id: 4,
      name: "Demese Tasew",
      bio: "Enthusiastic Full stack developer",
      avatar:
        "https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=1024x1024&w=is&k=20&c=4D2eIvgmf9p4-fzjBTTUkRO_dYNIJKzXcmKzLRjifeM=",
    },
  ];

  //main screen
  return (
    <div className="w-full min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-slate-200 rounded-xl p-10">

        {/* Cards section */}
        <div className="flex justify-center flex-wrap gap-8">
          {profiles.map((profile: Profile) => (
            <Card
              id={profile.id}
              name={profile.name}
              bio={profile.bio}
              avatar={profile.avatar}
              link={profile.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
