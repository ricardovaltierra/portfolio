import styles from './style';
import {
  Navbar, Hero, Social, Portfolio, Skills, Footer,
} from './components';
import SEO from './components/SEO';

const App = () => (
  <>
    <SEO />
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
          <Skills />
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
