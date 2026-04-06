import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  gamingTimeline,
  gamingSplitFeatures,
  gamingVerticalTabs,
} from "../../data/pages/gamingData";

export default function GamingPage() {
  const heroStats = [
    { number: 7, label: "Years of Game Development" },
    { number: 850, label: "Gaming Solutions Delivered" },
    { number: 240, label: "Game Developers" },
    { number: 94, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Our Offerings in Gaming"
        description1="From indie mobile games to AAA console titles, VR/AR experiences, and cloud gaming platforms, AIRITHM develops engaging games and gaming infrastructure that captivate players worldwide and build thriving gaming communities."
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline data={gamingTimeline} title="Our Gaming Expertise" />
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
            Our Gaming Solutions to Scale
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
            From cross-platform game engines and multiplayer backend
            infrastructure to social features and monetization systems, AIRITHM
            delivers comprehensive gaming solutions that engage players and
            drive sustainable revenue models.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building immersive experiences with high
            performance, active communities, fair gameplay, and ethical
            monetization that keeps players engaged for years.
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
        <SplitFeature features={gamingSplitFeatures} />
      </Box>

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={gamingTimeline}
          title="Gaming Technology Evolution"
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
            Partner with AIRITHM for Your Gaming Needs
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnering with AIRITHM means working with a team passionate about
            creating games that matter. We combine artistic vision with
            technical expertise to deliver games that entertain, engage, and
            build lasting communities. With AIRITHM, you create gaming
            experiences that players love and that succeed commercially.
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

        <VerticalTabsFeature tabs={gamingVerticalTabs} />
      </Box>
    </>
  );
}
