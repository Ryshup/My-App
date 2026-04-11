import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  logisticsTimeline,
  logisticsSplitFeatures,
  logisticsVerticalTabs,
} from "../../data/pages/logisticsData";

export default function LogisticsPage() {
  const heroStats = [
    { number: 6, label: "Years of Industry Experience" },
    { number: 1000, label: "Digital Solutions Delivered" },
    { number: 200, label: "Technology Experts" },
    { number: 90, label: "Projects Delivered on Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Intelligent Logistics Software Solutions"
        subtitle="On the road to transformation with transportation technology solutions"
        bodyParagraph1="Harnessing the power of digital development in transportation and logistics, leaders gain better visibility of their supply chains, access real-time data, and accelerate order fulfilment with advanced technology solutions."
        bodyParagraph2="Leap ahead by leveraging the latest technologies such as IoT, machine learning, predictive analytics, and blockchain."
        description1=""
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={logisticsTimeline}
          title="Intelligent Logistics Software Services for Streamlined Operations"
          subtitle="Modern logistics demands innovative technology to keep operations smooth and efficient. At AIRITHM, we develop complete logistics software solutions that help businesses automate processes, optimize workflows, and improve overall operational and delivery performance."
        />
      </Box>

      {/* 🔹 Solutions Intro - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 0 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Accelerating Growth Through Modern Logistics Solutions
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              marginBottom: "12px",
              textAlign: "justify",
            }}
          >
            We create systems that are reliable, easy to use, and optimized for
            real-world performance. Whether you're a growing business or a
            global enterprise, our solutions are tailored to your unique needs
            helping you stay agile and competitive in a fast-paced logistics
            environment.
          </p>
        </Box>
      </Box>

      {/* 🔹 Split Features - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: 2,
          pb: 6,
        }}
      >
        <SplitFeature features={logisticsSplitFeatures} />
      </Box>

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={logisticsTimeline}
          title="AI Transforming Transportation & Logistics"
          subtitle="Artificial Intelligence is reshaping the logistics industry by enabling smarter operations, faster deliveries, and enhanced decision-making. At AIRITHM, we integrate AI-driven capabilities into logistics solutions to improve efficiency, visibility, and overall performance."
        />
      </Box>

      {/* 🔹 Why Partner Section - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: { xs: 4, md: 6 },
          pb: 2,
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "24px",
              textAlign: "justify",
            }}
          >
            Why Partner with AIRITHM for Logistics Software Development
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            As a trusted transportation and logistics software development
            company, we empower businesses to transform operations, enhance data
            capabilities, and gain full supply chain visibility. By combining
            advanced technologies with our unique context intelligence, we
            deliver actionable insights that help partners anticipate
            challenges, make smarter decisions, and build more connected,
            efficient, and agile logistics ecosystems.
          </p>
        </Box>
      </Box>

      {/* 🔹 Tabs Section - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: 6,
          pb: 2,
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 2 }}>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "8px",
            }}
          ></h3>
        </Box>

        <VerticalTabsFeature tabs={logisticsVerticalTabs} />
      </Box>
    </>
  );
}
