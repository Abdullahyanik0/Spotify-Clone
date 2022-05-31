import React from "react";
import Section from "components/Section";

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Coolio - Underworld",
      description: "Original Soundtrack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3ygE3ogI1WnVO5plyR5NWI8uNvP_Ie1XDKS5gtH8KQ&s",
    },
    {
      id: 2,
      title: "Tarkan - Gülümse Kaderine",
      description: "Original Soundtrack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3ygE3ogI1WnVO5plyR5NWI8uNvP_Ie1XDKS5gtH8KQ&s",
    },
    {
      id: 3,
      title: "Contra - Flowlarım Çok Zengin",
      description: "Original Soundtrack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3ygE3ogI1WnVO5plyR5NWI8uNvP_Ie1XDKS5gtH8KQ&s",
    },
    {
      id: 4,
      title: "Allame - Allame Sendromu",
      description: "Original Soundtrack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3ygE3ogI1WnVO5plyR5NWI8uNvP_Ie1XDKS5gtH8KQ&s",
    },
    {
      id: 5,
      title: "Tyler Durden - Benim Adım",
      description: "Original Soundtrack",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3ygE3ogI1WnVO5plyR5NWI8uNvP_Ie1XDKS5gtH8KQ&s",
    },
  ];

  return <div>
    <Section title="Recent played" more="/" items={items}/>
  </div>;
};

export default Home;
