import Header from './components/Header/Header';
import PresentationSection from './components/PresentationSection/PresentationSection';
import LinksSection from './components/LinksSection/LinksSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import StartSection from './components/StartSection/StartSection';

import './styles/generics/reset.css';
import './styles/elements/base.css';
import './styles/settings/colors.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <PresentationSection />
        <LinksSection />
        <StatisticsSection />
        <StartSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
