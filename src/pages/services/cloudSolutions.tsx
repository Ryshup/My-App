import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  cloudSolutionsServices,
  cloudSolutionsSplitFeatures,
  cloudSolutionsVerticalTabs,
} from "../../data/pages/cloudSolutionsData";

export default function CloudSolutionsPage() {
  const heroStats = [
    { number: 11, label: "Years in Cloud" },
    { number: 1800, label: "Cloud Migrations" },
    { number: 260, label: "Cloud Architects" },
    { number: 97, label: "Infrastructure Excellence" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Cloud Solutions & Migration"
        description1="Accelerate your digital transformation with expert cloud migration and infrastructure solutions. We ensure seamless transitions to AWS, Azure, or GCP with zero downtime and optimized costs."
        stats={heroStats}
        ctaText="Start Your Cloud Journey"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={cloudSolutionsServices}
          title="Our Cloud Migration Process"
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
            Enterprise-Grade Cloud Solutions
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
            Move to the cloud with confidence. Our cloud experts handle
            everything from assessment to deployment, ensuring optimized costs,
            maximum security, and seamless operations.
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
        <SplitFeature features={cloudSolutionsSplitFeatures} />
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
          data={cloudSolutionsServices}
          title="Our Cloud Excellence"
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
            Why Trust Our Cloud Experts
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
            With certifications across all major cloud providers and a track
            record of successful migrations, our team delivers cloud solutions
            that balance innovation, reliability, and cost efficiency.
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
        <VerticalTabsFeature tabs={cloudSolutionsVerticalTabs} />
      </Box>
    </>
  );
}
