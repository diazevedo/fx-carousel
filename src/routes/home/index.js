import { h } from "preact";
import style from "./style.css";

import Card from "../../components/Card";

const Home = () => (
  <div class={style.home}>
    <h1>Choose from popular bundles</h1>
    <div className="bundle-type">
      <button className={style.button}>12 month plan</button>
      <button className={style.button}>Month to month</button>
    </div>

    <div>
      <p>12 months plans</p>
      <p>New customers only. Switch your bundle anytime</p>
    </div>

    <Card />
  </div>
);

export default Home;
