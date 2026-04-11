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
        subtitle="Technology is transforming healthcare like never before."
        bodyParagraph1="We help healthcare organizations deliver accessible, innovative, and patient-centric care through advanced technology and solution development."
        bodyParagraph2="In a world where patients expect high-quality services anytime, anywhere, and at affordable costs, healthcare providers need a connected, always-on delivery model. By rewiring operations and building cross-industry ecosystems, our development and IT solutions enable intelligent, connected, and personalized care keeping the patient at the center of every decision and enhancing the overall healthcare experience."
        description1=""
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={healthcareServices}
          title="Healthcare IT Excellence Transforming Care Through Development & Technology"
          subtitle="We simplify complex healthcare systems into secure, efficient, and future-ready digital experiences tailored to your organization's needs. Our development services help healthcare providers, payers, and organizations improve patient care, streamline operations, and enhance digital engagement."
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
            Innovative Solutions That Redefine the Way Healthcare Works
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
            We design intelligent ecosystems, secure infrastructures, and
            advanced digital care platforms delivering scalable, compliant, and
            high-performing solutions that elevate patient outcomes and
            operational efficiency.
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
          title="Transforming Healthcare Through AI-Driven Intelligent Automation"
          subtitle="AI is embedded into every layer of our solutions, enabling smarter decisions, adaptive workflows, and continuous optimization. We go beyond basic automation to build intelligent, secure, and scalable systems that evolve with modern healthcare needs."
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
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: -4 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Why Partner with us for Healthcare & life Science
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnering with AIRITHM means leveraging innovation and expertise to
            deliver tailored IT solutions that enhance patient care, streamline
            operations, and set new standards in healthcare IT.
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
