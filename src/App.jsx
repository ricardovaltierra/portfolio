import styles from './style';
import {
  Hero, Social, Portfolio, Skills,
} from './components';
import SEO from './components/SEO';

const App = () => (
  <>
    <SEO />
    <div className="bg-primary">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Social />
          <Portfolio />
          <Skills />
        </div>
      </div>
    </div>
  </>
);

export default App;
