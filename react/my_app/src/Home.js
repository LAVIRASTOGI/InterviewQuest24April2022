import React, { useEffect, useState } from "react";

function Home({ nameval }) {
    let [name]=useState(nameval)
  useEffect(() => {
    console.log("rerending" + nameval);
  });
  return <div>Home{name}</div>;
}

export default Home;
