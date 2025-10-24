import { HeroLanding } from "@/components/sections/HeroLanding";
import { VisionSection } from "@/components/sections/VisionSection";
import { InnovationsSection } from "@/components/sections/InnovationsSection";
import { HumanElementSection } from "@/components/sections/HumanElementSection";
import { SystemsFlowSection } from "@/components/sections/SystemsFlowSection";
import { WhyVeralogixSection } from "@/components/sections/WhyVeralogixSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--base)]">
      <HeroLanding />
      <VisionSection />
      <InnovationsSection />
      <HumanElementSection />
      <SystemsFlowSection />
      <WhyVeralogixSection />
      <SecuritySection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
