import type { FC } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data.js";
import "../../styles/comps/PlanetPage.css";

const Planet: FC = () => {
  let params = useParams();
  return (
    <main>
      <menu>
        <p>Overview</p>
        <p>Structure</p>
        <p>Surface</p>
      </menu>

      {data
        .filter((item) => item.name === params.planetId)
        .map((item, index) => (
          <section key={index}>
            <img
              className={`${item.name} planet-img`}
              src={item.images.planet}
              alt={`planet ${item.name}`}
            />
            <article>
              <h1>{item.name}</h1>
              <p>{item.overview.content}</p>
            </article>
            <p className="source">
              Source:{" "}
              <a href={item.overview.source}>
                Wikipedia <img src="/assets/icon-source.svg"></img>
              </a>
            </p>
            <Details
              rotation={item.rotation}
              revolution={item.revolution}
              radius={item.radius}
              temp={item.temperature}
            />
          </section>
        ))}
    </main>
  );
};

export default Planet;

interface IDetails {
  rotation: string;
  revolution: string;
  radius: string;
  temp: string;
}
const Details: FC<IDetails> = ({ rotation, revolution, radius, temp }) => (
  <div className="details-container">
    <div>
      <p>Rotaion Time</p>
      <h6>{rotation}</h6>
    </div>
    <div>
      <p>Revoltion Time</p>
      <h6>{revolution}</h6>
    </div>
    <div>
      <p>Radius</p>
      <h6>{radius}</h6>
    </div>
    <div>
      <p>Average temp</p>
      <h6>{temp}</h6>
    </div>
  </div>
);
