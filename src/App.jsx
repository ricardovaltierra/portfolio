import styles from  "./style";
import { Navbar } from "./components";

const App = () => (
  <div className="bg-primary">
    <Navbar />

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero section here
      </div>
    </div>
  </div>
);

export default App;