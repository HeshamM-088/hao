import { useState } from "react";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <span>{num}</span>
    </div>
  );
};

export default Home;
