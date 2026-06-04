import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  ecommerceTimeline,
  ecommerceSplitFeatures,
  ecommerceVerticalTabs,
  entertainmentEvolutionTimeline,
} from "../../data/pages/entertainmentData";

export default function EcommercePage() {
  const heroStats = [
    { number: 7, label: "Years of E-commerce Experience" },
    { number: 1500, label: "E-commerce Solutions Delivered" },
    { number: 280, label: "E-commerce Experts" },
    { number: 92, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="With Data & Analysis to On Time Entertainment"
        subtitle="OTT platforms and other social applications aligned with AI Technologies, has been an eminent part of understanding, channelizing & enhancing user experience to a next level. AIRM is playing a pivotal role in interpreting the provider’s preferences and choices towards the content with real time data."
        bodyParagraph1="With our patented solution, LumiQ at the center, AIRM brings scattered data together, simplifies it, and makes it easier to scale. LumiQ reads data in context, connects it in real time, and gives Platform user choices, content, upcoming events and recommendation based upon their likes/dislikes and nature of the user’s fondness."
        description1=""
        
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={ecommerceTimeline}
          title="AI That levitates your streaming & social context"
          subtitle="User behavior is evolving with a wide range of content and polymorphic entertainment options. LUMIQ’s context Intelligent Platform entrenches the user’s preferences based upon real time data."
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
            Designed to Elevate the User Experience & convenience
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
We filter out the abundant streaming content and events happening across the region and available on numerous other platforms and bring it to user with accordance to what the user is, what user likes, when and how the user wants it to be presented or exhibited. If you are striving for increased engagement from viewers, more efficient daily processes or greater connectivity throughout the viewer’s experience. we build around what your organization actually needs.
          </p>
{/* 
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our focus is on building omnichannel experiences, optimizing
            checkout flows, and leveraging data analytics to increase average
            order value, reduce cart abandonment, and build lasting customer
            loyalty.
          </p> */}
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
        <SplitFeature features={ecommerceSplitFeatures} />
      </Box>

{/* 🔹 Next-Gen Entertainment Solutions - Black Background */}
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
        Next-Gen Solutions Transforming the Entertainment Industry
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
        We build the platforms, tools, and infrastructure that power modern
        entertainment experiences. With LUMIQ at the core, our solutions help
        organizations connect audiences with the content, events, and
        experiences they care about most while simplifying operations and
        increasing engagement.
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
        AIRITHM’s intelligent quality engineering ecosystem ensures that
        entertainment platforms remain scalable, stable, and performance-ready.
        CoreQ helps maintain platform reliability and quality, while EvalQ
        enables organizations to validate AI-driven recommendations,
        personalized user experiences, audience engagement workflows, and
        intelligent content discovery systems with confidence.
      </p>
    </Box>
  </Box>
</Box>

{/* 🔹 Applications We Offer - Black Background */}
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
        Entertainment Applications We Offer
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
            title: "Automated Event & Ticket Booking Platform",
            description:
""          },
          {
            title: "Unified Streaming Platform",
            description:
""          },
          {
            title: "Trends & Content Discovery Platform",
            description:
""          },
          {
            title: "Social & Community Engagement Applications",
            description:
""          },
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

      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#f5f3f0" }}>
        <StickyTimeline
          data={entertainmentEvolutionTimeline}
          title="Transforming Entertainment through AI Driven Intelligent automation"
          subtitle="The technology of artificial intelligence is integrated into all layers of our Entertainment solutions, facilitating decision-making, workflow adaptation, and optimization. Rather than limiting ourselves to just the automation part of things, we create intelligent and scalable solutions."
        bgcolor = "#f5f3f0"
        />
      </Box>

      {/* 🔹 Why Partner Section - White Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
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
              color: "#f5f3f0",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Evolve with the Evolutionary Partner
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#f5f3f0",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Step in with our AI and it would be all about moving ahead with the new world Innovations, expertise to develop the customized IT Solutions and upgrade the AI experience in the world of Entertainment.
          </p>
        </Box>
      </Box>

      {/* 🔹 Tabs Section - Black Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
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

        <VerticalTabsFeature tabs={ecommerceVerticalTabs} />
      </Box>
    </>
  );
}
