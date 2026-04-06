import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  blockchainTimeline,
  blockchainSplitFeatures,
  blockchainVerticalTabs,
} from "../../data/pages/blockchainData";

export default function BlockchainPage() {
  const heroStats = [
    { number: 6, label: "Years of Blockchain Experience" },
    { number: 500, label: "Blockchain Solutions Delivered" },
    { number: 180, label: "Blockchain Experts" },
    { number: 96, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Our Offerings in Blockchain"
        description1="From smart contract development and decentralized applications to enterprise blockchain solutions and Web3 platforms, AIRITHM delivers blockchain technology that enables trust, transparency, and transformation across industries."
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={blockchainTimeline}
          title="Our Blockchain Expertise"
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
            Our Blockchain Solutions to Scale
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
            From audited smart contracts and enterprise permissioned blockchains
            to DeFi protocols and NFT platforms, AIRITHM delivers secure,
            scalable blockchain solutions that enable new business models and
            create lasting value.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building blockchain systems that are not only
            technically robust but also compliant with regulations, sustainable,
            and designed with user experience excellence.
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
        <SplitFeature features={blockchainSplitFeatures} />
      </Box>

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={blockchainTimeline}
          title="Blockchain Technology Evolution"
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
            Partner with AIRITHM for Your Blockchain Needs
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnering with AIRITHM means working with a team pioneering
            blockchain innovation responsibly. We combine deep blockchain
            expertise with enterprise discipline to deliver solutions that
            transform industries through decentralization. With AIRITHM, you
            build trustless systems that create competitive advantage and unlock
            new revenue streams.
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

        <VerticalTabsFeature tabs={blockchainVerticalTabs} />
      </Box>
    </>
  );
}
