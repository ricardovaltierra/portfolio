import styles from './style';
import {
  Navbar, Hero, Social, Portfolio,
} from './components';

const App = () => (
  <div className="bg-primary">
    <Navbar />

    <div className={`bg-primary ${styles.flexStart} mt-10`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Social />
        <Portfolio />
      </div>
    </div>
  </div>
);

export default App;
