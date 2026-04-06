import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  cybersecurityServices,
  cybersecuritySplitFeatures,
  cybersecurityVerticalTabs,
} from "../../data/pages/cybersecurityData";

export default function CybersecurityPage() {
  const heroStats = [
    { number: 12, label: "Years in Security" },
    { number: 2200, label: "Organizations Protected" },
    { number: 290, label: "Security Experts" },
    { number: 100, label: "Breach Prevention Rate" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Cybersecurity & Protection"
        description1="Protect your organization from evolving threats with comprehensive cybersecurity solutions. From vulnerability assessments to 24/7 threat monitoring, we keep your systems secure."
        stats={heroStats}
        ctaText="Secure Your Infrastructure"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={cybersecurityServices}
          title="Our Security Framework"
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
            Multi-Layered Security Solutions
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
            Our defense-in-depth approach combines preventive, detective, and
            responsive security measures to ensure comprehensive protection
            against modern threats and compliance requirements.
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
        <SplitFeature features={cybersecuritySplitFeatures} />
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
          data={cybersecurityServices}
          title="Our Security Excellence"
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
            Why Choose Our Security Team
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
            Our certified ethical hackers and security experts bring proactive
            threat detection, rapid incident response, and regulatory compliance
            expertise to protect your organization.
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
        <VerticalTabsFeature tabs={cybersecurityVerticalTabs} />
      </Box>
    </>
  );
}
