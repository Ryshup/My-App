import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  healthcareTimeline,
  healthcareSplitFeatures,
  healthcareVerticalTabs,
  healthcareServices,
} from "../../data/pages/healthcareData";

export default function HealthcarePage() {
  const heroStats = [
    { number: 6, label: "Years of Industry Experience" },
    { number: 1000, label: "Digital Solutions Delivered" },
    { number: 200, label: "Technology Experts" },
    { number: 90, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Healthcare IT Services and Solutions"
        description1="From strategic consulting and custom development to continuous support and AI-driven innovation, AIRITHM helps healthcare organizations build secure, scalable, and intelligent digital systems."
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={healthcareServices}
          title="Meeting All Your Healthcare IT Needs with Technical Excellence – Our Services "
        />
      </Box>

      {/* 🔹 Solutions Intro - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 0 }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Innovative Healthcare IT Solutions We Build
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.7,
              marginBottom: "12px",
              textAlign: "justify",
            }}
          >
            From intelligent data systems and secure infrastructures to advanced
            digital care platforms, AIRITHM delivers end-to-end healthcare
            solutions tailored to evolving industry needs.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building scalable, compliant, and high-performance
            systems that enhance patient care, streamline operations, and enable
            smarter decision-making.
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
        <SplitFeature features={healthcareSplitFeatures} />
      </Box>

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={healthcareTimeline}
          title="AI influence in this segment"
        />
      </Box>

      {/* 🔹 Why Partner Section - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: 6,
          pb: 2,
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: -4 }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Why Partner with AIRITHM for Your Healthcare IT Needs
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnering with AIRITHM means working with a team committed to
            reshaping healthcare through technology. We combine innovation and
            expertise to deliver tailored IT solutions that improve patient care
            and streamline operations. With AIRITHM, you go beyond meeting
            expectations—you define new standards for excellence in healthcare
            IT.
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

        <VerticalTabsFeature tabs={healthcareVerticalTabs} />
      </Box>
    </>
  );
}
