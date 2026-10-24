import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <span>{num}</span>
      <h1>Home</h1>
      <h3>Edited By Omar</h3>
    </div>
  );
};

export default Home;
