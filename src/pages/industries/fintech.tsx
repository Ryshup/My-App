import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../../components/header/Header";
import Testimonial3D from "../../components/Testimonial3D";
import Capabilities from "../../components/Features/Capabilities";
import StickyTimeline from "../../components/Features/StickyTimeline";
import SplitFeature from "../../components/SplitFeature";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import InteractiveArticleList from "../../components/Features/InteractiveArticleList";
import {
  fintechTestimonials,
  fintechCapabilities,
  fintechTimeline,
  fintechSplitFeatures,
  fintechVerticalTabs,
  fintechArticles,
} from "../../data/pages/fintechData";

export default function FintechPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          color: "white",
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        <Button
          onClick={() => navigate("/")}
          sx={{
            color: "white",
            mb: 4,
            textTransform: "none",
            fontSize: "14px",
          }}
          startIcon={<ArrowBackIcon />}
        >
          Back to Home
        </Button>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: "20px 0 16px 0",
          }}
        >
          FinTech Solutions
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Next-generation financial technology solutions for modern banking.
        </p>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          color: "white",
          py: 10,
          px: { xs: 2, md: 6 },
        }}
      >
        <h2 style={{ marginBottom: "40px", fontSize: "32px", fontWeight: 600 }}>
          Financial Partner Testimonials
        </h2>
        <Testimonial3D testimonials={fintechTestimonials} />
      </Box>
      <Capabilities data={fintechCapabilities} title="FinTech Capabilities" />
      <StickyTimeline data={fintechTimeline} title="Our FinTech Evolution" />
      <Box sx={{ width: "100%", bgcolor: "#000", px: { xs: 2, md: 6 }, py: 8 }}>
        <h2 style={{ color: "white", marginBottom: "40px", fontSize: "32px" }}>
          FinTech Services
        </h2>
        <SplitFeature features={fintechSplitFeatures} />
      </Box>
      <Box sx={{ width: "100%", bgcolor: "#000", px: { xs: 2, md: 6 }, py: 8 }}>
        <h2 style={{ color: "white", marginBottom: "40px", fontSize: "32px" }}>
          Our FinTech Process
        </h2>
        <VerticalTabsFeature tabs={fintechVerticalTabs} />
      </Box>
      <h2
        style={{
          color: "black",
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "32px",
          paddingLeft: "24px",
        }}
      >
        FinTech Insights
      </h2>
      <InteractiveArticleList data={fintechArticles} />
    </>
  );
}
