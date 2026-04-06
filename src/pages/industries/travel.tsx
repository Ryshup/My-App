import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  travelTimeline,
  travelSplitFeatures,
  travelVerticalTabs,
} from "../../data/pages/travelData";

export default function TravelPage() {
  const heroStats = [
    { number: 8, label: "Years of Travel Tech Experience" },
    { number: 1300, label: "Travel Solutions Delivered" },
    { number: 260, label: "Travel Experts" },
    { number: 91, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Our Offerings in Travel"
        description1="From intelligent booking platforms and personalized travel recommendations to real-time itinerary management and customer support, AIRITHM empowers travel companies with technology that delights travelers and drives revenue growth."
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={travelTimeline}
          title="Our Travel Technology Expertise"
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
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Our Travel Solutions to Scale
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
            From sophisticated booking platforms integrating GDS data to
            mobile-first applications with offline capabilities, AIRITHM
            delivers end-to-end travel technology solutions that enhance
            customer experiences and increase bookings.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building intuitive platforms that simplify travel
            planning, provide personalized recommendations, enable seamless
            payments, and support travelers throughout their journey.
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
        <SplitFeature features={travelSplitFeatures} />
      </Box>

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={travelTimeline}
          title="Travel Technology Evolution"
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
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Partner with AIRITHM for Your Travel Needs
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnering with AIRITHM means working with a team committed to
            transforming travel technology. We combine industry expertise with
            cutting-edge innovation to deliver platforms that increase bookings,
            improve customer satisfaction, and grow your business. With AIRITHM,
            you stay ahead in the competitive travel market.
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

        <VerticalTabsFeature tabs={travelVerticalTabs} />
      </Box>
    </>
  );
}
