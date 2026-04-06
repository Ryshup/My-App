import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  qaTestingServices,
  qaTestingSplitFeatures,
  qaTestingVerticalTabs,
} from "../../data/pages/qaTestingData";

export default function QATestingPage() {
  const heroStats = [
    { number: 9, label: "Years in QA" },
    { number: 2100, label: "Applications Tested" },
    { number: 250, label: "QA Specialists" },
    { number: 99, label: "Bug Detection Rate" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="QA and Testing Services"
        description1="Ensure flawless software quality with comprehensive testing solutions. Our QA experts deliver bug-free, high-performance applications through rigorous testing and continuous quality assurance."
        stats={heroStats}
        ctaText="Ensure Quality"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline data={qaTestingServices} title="Our QA Methodology" />
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
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 4, md: 8 },
          }}
        >
          <Box
            component="h2"
            sx={{
              fontSize: {
                xs: "clamp(24px, 5vw, 40px)",
                md: "clamp(32px, 4vw, 48px)",
              },
              fontWeight: 700,
              color: "#000",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Testing Solutions
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: {
                xs: "clamp(14px, 4vw, 16px)",
                md: "clamp(16px, 2vw, 18px)",
              },
              color: "#6b7280",
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            From unit testing to end-to-end validation, we deliver comprehensive
            QA services ensuring software quality, reliability, and performance
            across all platforms.
          </Box>
        </Box>
      </Box>

      {/* 🔹 Split Features - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pb: { xs: 4, md: 8 },
        }}
      >
        <SplitFeature features={qaTestingSplitFeatures} />
      </Box>

      {/* 🔹 Evolution Timeline - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 1 },
          py: { xs: 4, md: 8 },
        }}
      >
        <StickyTimeline
          data={qaTestingServices}
          title="Our Quality Assurance Excellence"
        />
      </Box>

      {/* 🔹 Partnership Intro - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 4, md: 8 },
          }}
        >
          <Box
            component="h2"
            sx={{
              fontSize: {
                xs: "clamp(24px, 5vw, 40px)",
                md: "clamp(32px, 4vw, 48px)",
              },
              fontWeight: 700,
              color: "#000",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose Our QA Team
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: {
                xs: "clamp(14px, 4vw, 16px)",
                md: "clamp(16px, 2vw, 18px)",
              },
              color: "#6b7280",
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            Our expert QA team brings years of experience, advanced testing
            tools, and proven methodologies to ensure your software meets the
            highest quality standards.
          </Box>
        </Box>
      </Box>

      {/* 🔹 Vertical Tabs Feature - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pb: { xs: 6, md: 12 },
        }}
      >
        <VerticalTabsFeature tabs={qaTestingVerticalTabs} />
      </Box>
    </>
  );
}
