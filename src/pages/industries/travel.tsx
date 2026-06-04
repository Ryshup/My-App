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
  travelevoloutionTimeline,
  travelSplitFeatures1,
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
        title="Be Planned and Prompt for Your Travel"
        subtitle="Itineraries all planned and set for Trips, Tours with the Help of AI integration is the modern way of travelling hassle & stress free. AIRM assists our users to get Exquisite travelling experience, from daily commuting to weekend getaways & from monthly business tours to a yearly destination voyage. Everything can managed using our AIRM Tool."
        bodyParagraph1="With our Patented solution, LumiQ at the center, AIRM brings all the different parameters of the travelling requirements scattered around under one system, analyzes it and creates better travelling and pre-planned solutions so that the user can make a better decision without any confusion or trouble."
        description1=""
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={travelTimeline}
          title="Al that will understands your Itineraries"
          subtitle="Modern day Travelling has been a challenge for users as one bad experience can ruin almost the entire trip. LUMIQ’s Context Intelligence Platform embeds real-time situational awareness into every workflow from the User’s Planning, decision making to Booking and travelling."
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
            Simplifying your Travel with your Likings.
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
            Here in LumiQ we created a system that brings all the viable resources available in the market for travelling in user centric manner. Our Systems Studies, analyzes and monitor User’s requirements and provides them with such options so that the user can make better, faster and reliable travel decisions for an Individual to the organization level.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our Systems predominantly focus upon finer connectivity & gather around all the scattered data with which there will minimal risk of uncertainty and unpleasant experiences. 
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

{/* 🔹 Smart Travel Solutions - Black Background */}
<Box sx={{ width: "100%", bgcolor: "#000" }}>
<Box
sx={{
px: { xs: 2, md: 1 },
pt: { xs: 4, md: 8 },
pb: { xs: 4, md: 8 },
}}

>

```
<Box sx={{ maxWidth: "1400px", mx: "auto" }}>
```

```
  <h2
    style={{
      fontSize: "clamp(28px, 5vw, 48px)",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "24px",
      textAlign: "justify",
    }}
  >
    Designed to Redefine Travel Experiences
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
    With the vision of transforming travel experiences into seamless digital journeys, we engineer platforms, tools, and infrastructure that bring innovation into real-world travel operations. Powered by LUMIQ, our solutions help businesses focus on what matters most: delivering connected, personalized, and efficient travel experiences.
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
    With AIRITHM’s intelligent quality engineering ecosystem, CoreQ ensures travel applications remain reliable, scalable, and performance-ready, while EvalQ enables organizations to confidently validate AI-driven engagement platforms, intelligent booking experiences, and personalized travel interactions.
  </p>
</Box>
```

  </Box>
</Box>

{/* 🔹 Travel Applications We Develop - Black Background */}
<Box sx={{ width: "100%", bgcolor: "#000" }}>
<Box
sx={{
px: { xs: 2, md: 1 },
pt: 0,
pb: { xs: 4, md: 8 },
}}

>

```
<Box sx={{ maxWidth: "1400px", mx: "auto" }}>
```

```
  <h2
    style={{
      fontSize: "clamp(28px, 5vw, 48px)",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "24px",
      textAlign: "justify",
    }}
  >
    Travel Applications We Develop
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
        title: "Cab, Auto & Bike Rental Applications",
        description:
""      },
      {
        title: "Online Travel Agency (OTA) Platforms",
        description:
""      },
      {
        title: "Bus, Train, Flight & Cruise Booking Apps",
        description:
""      },
      {
        title: "AI-Driven User Engagement Platforms",
        description:
""      },
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
```

  </Box>
</Box>


      {/* 🔹 AI Timeline Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#f5f3f0" }}>
        <StickyTimeline
          data={travelevoloutionTimeline}
          title="An AI that will Quench your Next Quest."
          subtitle="Our AI Technology is integrated in with multiple layers of travel solutions that optimizes the work flow and automation, enhances the decision making with scalable solution. "
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
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#f5f3f0",
              marginBottom: "16px",
              textAlign: "justify",
            }}
          >
            Ease & Elevate your Expedition Encounters.
          </h2>

          {/* <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              marginBottom: "12px",
              textAlign: "justify",
            }}
          >
            Here in LumiQ we created a system that brings all the viable resources available in the market for travelling in user centric manner. Our Systems Studies, analyzes and monitor User’s requirements and provides them with such options so that the user can make better, faster and reliable travel decisions for an Individual to the organization level.
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Our Systems predominantly focus upon finer connectivity & gather around all the scattered data with which there will minimal risk of uncertainty and unpleasant experiences. 
          </p> */}
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
        <SplitFeature features={travelSplitFeatures1} />
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
            Travel with a Trending Trustworthy Partner
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            Partnership with AIRM would be all about utilizing innovation and expertise to develop customized IT solutions that enhance traveller’s care and streamline operations while setting new standards in the Travel Industry.
          </p>
                    <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
            With Evolving Travel Industry we set out expertise in Managing an Individual to a Multi phase Travel expedition, Our AI systems calibrates the tours requirement and charts them accordingly whether it’s a business trip, a solo quest, a Honeymoon, Family vacay or a weekend getaway, we manage solution in all the tiers of travel with significant solutions and eased up opportunities.           </p>
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
