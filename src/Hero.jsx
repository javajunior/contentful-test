import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Tilde fit artisan, authentic ethical deep v woke fanny pack roof
            party knausgaard kombucha migas. Subway tile mustache cray yuccie
            meggings DIY la croix ramps salvia gentrify palo santo echo park
            selvage chambray hammock. Keytar ramps tacos pour-over yuccie
            single-origin coffee 90's umami DSA. IPhone small batch pork belly,
            asymmetrical coloring book activated charcoal sustainable fam cray
            hoodie wayfarers church-key retro typewriter. Biodiesel kombucha air
            plant tacos tousled.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
