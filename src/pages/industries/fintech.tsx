import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  fintechTimeline,
  fintechEvolutionTimeline,
  fintechSplitFeatures,
  fintechSplitFeatures1,
  fintechVerticalTabs,
} from "../../data/pages/fintechData";

export default function FintechPage() {
  const heroStats = [
    { number: 8, label: "Years of FinTech Experience" },
    { number: 1200, label: "Financial Solutions Delivered" },
    { number: 250, label: "Finance Experts" },
    { number: 95, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="Indulge yourself with Programmed Banking"
        description1="Banking Solutions"
        subtitle="World is growing exponentially and with that growth the new ways of Banking is also getting evolved. Today banking isn't just about accounts or loans but also about context, care & confidence, It is expected that banks refine and ease up their complex patterns with digital transformation. AIRM Builds on Analyzing, breaking down the compound raw data and ensuring the decisions are viable, faster and secure in real time."
        bodyParagraph1="With our patented solution, LumiQ at the center, AIRM brings scattered data together, simplifies it, and makes it easier to scale. LumiQ reads data in context, connects it in real time, and gives Banking teams the clarity they need to act without hesitation. "
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={fintechTimeline}
          title="BANKING WITH FUTURISTIC AI PLATFORM"
          subtitle={`Banking world has been redefined in the modern era, with multiple account types, loans, UPI payments, portfolios, stocks, and many other financial services. Managing all these can become a tedious task, while perceived threats to system and data integrity from malware and other cybersecurity issues continue to grow.

          Hence, it is very prudent to have a trustworthy, promising and reliable banking solution. LUMIQ's Context Intelligent Platform embeds real-time situational awareness into every workflow, helping banks make faster decisions, improve security, streamline operations, and deliver better customer experiences.`}
        />
      </Box>

      {/* 🔹 What We Do - White Background */}
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
            Ease-up the sophisticated Banking Protocols
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
            We modernized the Banking systems and improved the parameters with
            more stability, security and User friendly manner with accordance to
            the modern age banking, For better engagement with the end users,
            optimum reach, seamless connectivity. We provide what you needs.
          </p>
        </Box>
      </Box>

      {/* 🔹 What We Do Features - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: 2,
          pb: 6,
        }}
      >
        <SplitFeature features={fintechSplitFeatures} />
      </Box>

      {/* 🔹 Ingenious Solution Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <Box
          sx={{
            px: { xs: 2, md: 1 },
            pt: { xs: 4, md: 8 },
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
                textAlign: "justify",
              }}
            >
              Ingenious Solution that is Reshaping the Banking World
            </h2>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#ccc",
                lineHeight: 1.8,
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              We build the platforms, tools, and infrastructure needed to turn
              that vision into reality, thanks to our LUMIQ technology which
              ensures that your teams concentrate on what really counts:
              delivering effective banking solutions.
            </p>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#ccc",
                lineHeight: 1.8,
                marginBottom: "32px",
                textAlign: "justify",
              }}
            >
              With AIRITHM's intelligent quality engineering ecosystem, CoreQ
              ensures banking applications remain stable, compliant, and
              transaction-ready, while EvalQ enables organizations to
              confidently validate AI-driven banking experiences, intelligent
              financial workflows, and automated decision-making systems.
            </p>
          </Box>
        </Box>
      </Box>

      {/* 🔹 Banking Applications We Offer - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <Box
          sx={{
            px: { xs: 2, md: 1 },
            pt: 0,
            pb: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
                textAlign: "justify",
              }}
            >
              Banking Applications We Offer
            </h2>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
                gap: 3,
              }}
            >
              {[
                {
                  title: "UPI/Bank Transaction Application",
                  description:
""                },
                {
                  title: "Intra-Day Trading and Stock Exchange Platform",
                  description:
""                },
                {
                  title: "Mutual Funds and SIP Platform",
                  description:
""                },
                {
                  title: "Gold, Bonds & Securities Transaction Platform",
                  description:
""                },
              ].map((app, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: "#111",
                    p: { xs: 3, md: 4 },
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #333",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
                      transform: "translateY(-4px)",
                      bgcolor: "#1a1a1a",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      bgcolor: "#0052CC",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <span style={{ color: "#fff", fontSize: "20px" }}>
                      {String.fromCharCode(65 + index)}
                    </span>
                  </Box>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "12px",
                      lineHeight: 1.4,
                    }}
                  >
                    {app.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#ccc",
                      lineHeight: 1.8,
                    }}
                  >
                    {app.description}
                  </p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 🔹 AI Timeline Section - White Background */}
      <Box sx={{ width: "100%", bgcolor: "#f5f3f0" }}>
        <StickyTimeline
          data={fintechEvolutionTimeline}
          title="Revolutionizing the Banking System with AI Driven Solutions."
          subtitle="With the help of Artificial Intelligence we are Pioneering the Banking Domain to a whole new level. Facilitating Decision making to Workflow adaptation and Optimized viable solutions."
          bgcolor="#f5f3f0"
        />
      </Box>

      {/* 🔹 Grow your Wealth Section - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 1 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Grow your Wealth, with our solutions Yourself.
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#ddd",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building scalable, compliant, and high-security
            systems that reduce transaction costs, improve customer experience,
            and enable faster innovation in financial services.
          </p>
        </Box>
      </Box>

      {/* 🔹 Split Features Section - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 1 },
          pt: 0,
          pb: 6,
        }}
      >
        <SplitFeature features={fintechSplitFeatures1} />
      </Box>

      {/* 🔹 Wise Banking Section - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#f5f3f0",
          px: { xs: 2, md: 1 },
          pt: { xs: 4, md: 8 },
          pb: { xs: 4, md: 8 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto", mb: 3 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Wise Banking everyday keeps your assets Growing far way
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#000",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnership with AIRM would be all about utilizing innovation and
            expertise to develop customized IT solutions that enhance patient
            care and streamline operations while setting new standards in
            Banking.
          </p>
        </Box>

        <VerticalTabsFeature tabs={fintechVerticalTabs} />
      </Box>
    </>
  );
}
