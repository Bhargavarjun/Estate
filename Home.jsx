import React from 'react';
import HeroSelection from '../../subComponents/HeroSelection';
import Luxury from '../../subComponents/luxury'; // Ensure the correct import
import Regions from '../../subComponents/Regions';
import OurSpecialites from '../../subComponents/OurSpecialites';
import About from '../../subComponents/About';
import contact from '../../subComponents/contact';
const Home = () => {
    return (
       <>
          <article className="page">
            <HeroSelection />
            <Regions />
            <OurSpecialites />
            <Luxury /> {/* Fixed component name */}
            <About/>
            <contact/>
          </article>
       </>
    );
};

export default Home;
