import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  iotSolutionsServices,
  iotSolutionsSplitFeatures,
  iotSolutionsVerticalTabs,
} from "../../data/pages/iotSolutionsData";

export default function IoTSolutionsPage() {
  const heroStats = [
    { number: 7, label: "Years in IoT" },
    { number: 850, label: "IoT Projects" },
    { number: 200, label: "IoT Engineers" },
    { number: 94, label: "Connected Devices" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="IoT Solutions & Connected Devices"
        description1="Build smart, connected solutions that drive efficiency and innovation. From industrial IoT to smart devices, we deliver scalable platforms that transform your business."
        stats={heroStats}
        ctaText="Connect Your Devices"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={iotSolutionsServices}
          title="Our IoT Development Journey"
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
            End-to-End IoT Solutions
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
            From device firmware to cloud analytics, we deliver complete IoT
            platforms that enable real-time monitoring, predictive analytics,
            and intelligent automation at scale.
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
        <SplitFeature features={iotSolutionsSplitFeatures} />
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
          data={iotSolutionsServices}
          title="Our IoT Excellence"
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
            Why Choose Our IoT Team
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
            Our expertise spans hardware development, firmware engineering,
            cloud infrastructure, and analytics to deliver IoT solutions that
            scale from dozens to millions of devices.
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
        <VerticalTabsFeature tabs={iotSolutionsVerticalTabs} />
      </Box>
    </>
  );
}
