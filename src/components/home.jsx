import Hero from "./hero";
import LoanCalculator from "./loanCalculator";
import '../styles/home.css';
import FAQ from "./faq";
import WhyUs from "./whyUs";
import CreditInfo from "./creditInfo";
import AgentSection from "./agentSection";

const Home = () => {
  return (
    <>
      <Hero />
      <CreditInfo />
      <AgentSection />
      <LoanCalculator />
      <WhyUs />
      <FAQ />
    </>
  )
}

export default Home;