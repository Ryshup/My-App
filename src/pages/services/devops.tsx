import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  devopsServices,
  devopsSplitFeatures,
  devopsVerticalTabs,
} from "../../data/pages/devopsData";

export default function DevOpsPage() {
  const heroStats = [
    { number: 8, label: "Years in DevOps" },
    { number: 1300, label: "Pipelines Built" },
    { number: 200, label: "DevOps Engineers" },
    { number: 100, label: "Deployment Success Rate" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="DevOps & Infrastructure Solutions"
        description1="Enable faster, more reliable software delivery with modern DevOps practices. From CI/CD pipelines to infrastructure automation, we transform your deployment processes."
        stats={heroStats}
        ctaText="Accelerate Deployments"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={devopsServices}
          title="Our DevOps Transformation"
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
            Modern DevOps Excellence
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
            We implement modern DevOps practices that automate infrastructure,
            accelerate deployments, and enable continuous improvement of your
            development and operations processes.
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
        <SplitFeature features={devopsSplitFeatures} />
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
          data={devopsServices}
          title="Our DevOps Excellence Journey"
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
            Why Choose Our DevOps Team
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
            With expertise in cloud platforms, containerization, and modern
            tooling, our DevOps team helps organizations achieve faster
            deployments, better reliability, and lower costs.
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
        <VerticalTabsFeature tabs={devopsVerticalTabs} />
      </Box>
    </>
  );
}
