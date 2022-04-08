
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="You Complete e-Commerce platform. Start Selling & Growing"
        description=""
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Responsive layout, adaptable to any device."
        description=""
        mockupImg={assets.homeCards}
        reverse
      />
      <SectionWrapper 
        title="User friendly admin panel."
        description=""
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Features />
      {/* <Download /> */}

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center">
        <p className={`${styles.pText} ${styles.whiteText}`}>&copy;Copyright 2022. {" "}
        <span className="bold">Othmane Hanyf</span>
        </p>
      </div>
    </>
  );
}

export default App;
