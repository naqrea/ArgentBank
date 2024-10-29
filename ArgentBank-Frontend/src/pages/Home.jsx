import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="features">
        <Feature
          imgSrc="./img/icon-chat.webp"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          imgSrc="./img/icon-money.webp"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          imgSrc="./img/icon-security.webp"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </main>
  );
};

export default Home;
