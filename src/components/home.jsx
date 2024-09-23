import Hero from "./hero";
import LoanCalculator from "./loanCalculator";
import '../styles/home.css';
import FAQ from "./faq";
import WhyUs from "./whyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <LoanCalculator />
      <WhyUs />
      <FAQ />
    </>
  )
}

export default Home;