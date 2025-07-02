import HeroText from '../components/HeroText'; 
import { Particles } from '../components/Particles';
const Hero = () => {
  return (
    
    <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Particles
              className="absolute inset-0 -z-50"
              quantity={100}
              ease={80}
              color={"#ffffff"}
              refresh
            />
      
    </section>
  );
};

export default Hero;