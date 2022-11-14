import styles from "./style";
import { Navbar, Hero } from "./components";

const App = () => (
  <div className="bg-primary">
    <Navbar />

    <div className={`bg-primary ${styles.flexStart} mt-10`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  </div>
);

export default App;
