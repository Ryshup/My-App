import Header from "../../components/header/Header";
import HeroHeader from "../../components/HeroHeader";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import { Box } from "@mui/material";
import {
  mediaTimeline,
  mediaSplitFeatures,
  mediaVerticalTabs,
  financeevolutionTimeline,
  financeSplitFeatures1,
} from "../../data/pages/financeData";

export default function MediaPage() {
  const heroStats = [
    { number: 10, label: "Years of Media Tech Experience" },
    { number: 1600, label: "Media Solutions Delivered" },
    { number: 300, label: "Media Experts" },
    { number: 97, label: "Projects Delivered On Time" },
  ];

  return (
    <>
      <Header />

      <HeroHeader
        title="From Data to Better Decisions in Finance "
        subtitle="The Finance industry one of the fastest growing industries as there is rise in digital banking, fintech platforms, online payments and AI-driven financial services. However, Financial organizations have more focus on faster transactions, personalized customer experiences, fraud prevention and smarter risk management. AI could play vital role here by enabling intelligent automation, fraud monitoring, predictive insights and smarter financial decision making which will make Finance ecosystem more efficient and secured."
        bodyParagraph1="With our patented solution, LumiQ at the center, AIRM brings scattered data together, simplifies it, and makes it easier to scale. LumiQ reads data in context, connects it in real time, and gives Finance teams the clarity they need to act without hesitation."
        description1=""
        stats={heroStats}
        ctaText="Consult Our Experts"
        onCtaClick={() => console.log("CTA clicked")}
      />

      {/* 🔹 Services Section - Black Background */}
      <Box sx={{ width: "100%", bgcolor: "#000" }}>
        <StickyTimeline
          data={mediaTimeline}
          title="Smarter Financial Operations with Contextual AI"
          subtitle={`Financial decisions should be reliable and smart. LUMIQ's Context Intelligent Platform offers financial operations by understanding customer behavior, transactions patterns and financial trends in real time.

          LumiQ helps Fintech in terms of smarter fraud detection, personalized financial experiences, intelligent compliance monitoring and adaptive decision making which makes system more scalable, secure and future ready.`}
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
            Built for the Way Modern Finance Works 
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
            We transform financial operations into systems that are intelligent, secure, and for efficient system. Whether you are aiming for faster transactions, smarter financial decisions, improved customer experiences, basically we build solutions around what your business needs. Our focus is on fintech organizations to adapt changing market demands for future ready system. 
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
        <SplitFeature features={mediaSplitFeatures} />
      </Box>

{/* 🔹 Smart Finance Solutions - Black Background */}
<Box sx={{ width: "100%", bgcolor: "#000" }}>
<Box
sx={{
px: { xs: 2, md: 1 },
pt: { xs: 2, md: 5 },
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
    Smart Solutions That Transform Finance
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
    We build intelligent platforms, tools, and digital infrastructure that
    help financial institutions create better customer experiences and
    smarter financial operations. Powered by our LUMIQ technology, our
    solutions enable fintech platforms, banks, and financial organizations
    to focus on what matters most: delivering secure, efficient, and
    data-driven financial services.
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
    With AIRITHM’s intelligent quality engineering ecosystem, CoreQ ensures
    financial applications remain secure, compliant, and performance-ready,
    while EvalQ enables organizations to confidently validate AI-driven
    financial models, fraud detection systems, risk management platforms,
    and intelligent decision-making workflows.
  </p>
</Box>
```

  </Box>
</Box>

{/* 🔹 Finance Applications We Develop - Black Background */}
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
    Finance Applications We Develop
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
        title: "AI-Powered Fraud Detection",
        description:
""      },
      {
        title: "Smart Financial Risk Analysis Platform",
        description:
""      },
      {
        title: "Personalized Financial Advisor System",
        description:
""      },
      {
        title: "Automated Loan Approval & Credit Scoring Application",
        description:
""      },
      {
        title: "Budget Management System",
        description:
""      },
      {
        title: "Real-Time Transaction Monitoring & Compliance System",
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
          data={financeevolutionTimeline}
          title="Transforming Finance with AI-driven intelligent learning"
          subtitle="AI is integrated into every layer of our finance solutions to improve operational efficiency, decision-making, and customer experiences. Instead of focusing only on automation, we build smart and secure systems that help financial businesses adapt quickly and deliver more effective financial services in modern digital way."
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
            Real outcomes. Real Finance impact. 
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
            Our solutions helps organizations in the finance industry to transform financial operations and customer experiences by improving efficiency, reliability, smart decision making and most important security. 
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
        <SplitFeature features={financeSplitFeatures1} />
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
            Smarter Finance Starts with the Right Partner
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "#333",
              lineHeight: 1.7,
              textAlign: "justify",
            }}
          >
Partnership with us would be all about utilizing innovation and expertise to develop customized IT solutions that enhance customer experiences and streamline financial operations while setting new standards in Finance IT.
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

        <VerticalTabsFeature tabs={mediaVerticalTabs} />
      </Box>
    </>
  );
}
