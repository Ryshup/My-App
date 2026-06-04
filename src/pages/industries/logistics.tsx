import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  logisticsTimeline,
  logisticsSplitFeatures,
  logisticsVerticalTabs,
  logisticsevolutionTimeline,
  logisticsSplitFeatures2,
} from "../../data/pages/logisticsData";

export default function LogisticsPage() {
  const heroStats = [
    { number: 6, label: "Years of Industry Experience" },
    { number: 1000, label: "Digital Solutions Delivered" },
    { number: 200, label: "Technology Experts" },
    { number: 90, label: "Projects Delivered on Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="From Data to Better Decisions in Logistics"
        subtitle="Logistic industry is in demand for delivering goods faster, real-time tracking and efficient supply chain management. This comes with some challenges like unpredictable disruptions, system complexity and multiple integrations. AI also helps in improve efficiency, identifying system failures before they occur, optimizing delivery routes, forecasting demands, reduces costs and enhance customer satisfaction."
        bodyParagraph1="With our patented solution, LumiQ at the center, AIRM brings scattered data together, simplifies it, and makes it easier to scale. LumiQ reads data in context, connects it in real time, and gives logistics teams the clarity they need to act without hesitation."
        // bodyParagraph2="Leap ahead by leveraging the latest technologies such as IoT, machine learning, predictive analytics, and blockchain."
        description1=""
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={logisticsTimeline}
          title="Transforming Logistics with Contextual AI"
          subtitle={`Logistics decisions are never made in a void. LUMIQ's Context Intelligent Platform embeds real-time situational awareness into every workflow from Supply chain management to real-time tracking so your systems act on meaning, not just data.

          LumiQ helps logistics companies make smarter decisions using real-time data and AI. It improves delivery efficiency, tracking, and overall supply chain performance.`}
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
            Built for the Complexity Modern Logistics Runs On
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
            We transform complex logistics operations into systems that are intelligent, scalable, and built for efficiency. Whether you are aiming for faster deliveries, streamlined daily operations, or better connectivity across the supply chain, we build solutions around what your business actually needs.
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
        <SplitFeature features={logisticsSplitFeatures} />
      </Box>

{/* 🔹 Smart Logistics Solutions - Black Background */}
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
        Smart Solutions That Move Logistics Forward
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
        We build the platforms, tools, and infrastructure needed to turn that vision into reality,
        powered by our LUMIQ technology which ensures that your teams focus on what really matters:
        delivering efficient, reliable, and scalable logistics operations.
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
        With AIRITHM’s intelligent quality engineering ecosystem, CoreQ ensures logistics applications
        remain scalable, stable, and operationally efficient, while EvalQ enables organizations to
        confidently validate AI-driven supply chain intelligence, predictive systems, and automated decision-making workflows.
      </p>
    </Box>
  </Box>
</Box>

{/* 🔹 Logistics Applications We Develop - Black Background */}
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
        Logistics Applications We Develop
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
            title: "Real-time Shipment Tracking System",
            description:
""          },
          {
            title: "Smart Route Optimization System",
            description:
""          },
          {
            title: "Demand Forecasting & Inventory Management",
            description:
""          },
          {
            title: "Supply Chain Visibility Dashboard",
            description:
""          },
          {
            title: "Intelligent Warehouse Management System",
            description:
""          },
          {
            title: "Predictive Maintenance Management",
            description:
""          },
          {
            title: "Automated Pricing & Cost Optimization Engine",
            description:
""          },
          {
            title: "AI-powered Test Automation Platform",
            description:
""          },
        ].map((app, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "#111",
              p: { xs: 3, md: 4 },
              borderRadius: "12px",
              border: "1px solid #333",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                bgcolor: "#1a1a1a",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
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

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#f5f3f0" }}>
        <StickyTimeline
          data={logisticsevolutionTimeline}
          title="Transforming Logistics with AI-driven intelligent automation"
          subtitle="AI is integrated into every layer of our logistics solutions to improve operational efficiency, decision-making, and process automation. Instead of focusing only on automation, we build intelligent and scalable systems that help logistics businesses adapt quickly and operate more efficiently in real-world environments."
        bgcolor="#f5f3f0"
        />
      </Box>

     {/* 🔹 Solutions Intro - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
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
              color: "#f5f3f0",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Built for the Complexity Modern Logistics Runs On
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#f5f3f0",
              lineHeight: 1.7,
              marginBottom: "12px",
              textAlign: "justify",
            }}
          >
            We transform complex logistics operations into systems that are intelligent, scalable, and built for efficiency. Whether you are aiming for faster deliveries, streamlined daily operations, or better connectivity across the supply chain, we build solutions around what your business actually needs.
          </p>
        </Box>
      </Box>

      {/* 🔹 Split Features - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 1 },
          pt: 2,
          pb: 6,
        }}
      >
        <SplitFeature features={logisticsSplitFeatures2} />
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
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 700,
              color: "#000",
              marginBottom: "24px",
              textAlign: "justify",
            }}
          >
            Smarter Logistics Starts with the Right Partner
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#000",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnership with us would be all about utilizing innovation and expertise to develop customized IT solutions that enhance patient care and streamline operations while setting new standards in logistics IT.
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

        <VerticalTabsFeature tabs={logisticsVerticalTabs} />
      </Box>
    </>
  );
}
