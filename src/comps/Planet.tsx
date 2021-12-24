import type { FC } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data.js";

const Planet: FC = () => {
  let params = useParams();
  return (
    <div>
      {data
        .filter((item) => item.name === params.planetId)
        .map((item) => (
          <main>
            <p>{item.name}</p>
            <img src={item.images.planet} alt={`planet ${item.name}`} />
          </main>
        ))}
    </div>
  );
};

export default Planet;
