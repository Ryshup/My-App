import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Testimonial3D from "../../components/Testimonial3D";
import Capabilities from "../../components/Capabilities";
import SplitFeature from "../../components/SplitFeature";
import StickyTimeline from "../../components/StickyTimeline";
import VerticalTabsFeature from "../../components/VerticalTabsFeature";
import InteractiveArticleList from "../../components/InteractiveArticleList";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/**
 * TEMPLATE: Use this to create new landing pages quickly
 *
 * ⚠️  IMPORTANT: This is a DOCUMENTATION template at the root level.
 * The imports use ../../ paths which are CORRECT when this file is copied to:
 *    src/pages/[category]/[your-page].tsx
 * 
 * Steps:
 * 1. Copy this entire file to: src/pages/[category]/[your-page].tsx
 * 2. The ../../ imports will automatically work in that nested location
 * 3. Replace all [YOUR_CATEGORY], [YOUR_TITLE], [YOUR_DESCRIPTION] placeholders
 * 4. Add/remove components as needed
 * 5. Register the page in App.tsx with lazy loading
 * 6. Done!
 */

export default function TemplatePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* HERO SECTION - Customize this */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          color: "white",
          py: 12,
          px: 6,
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* Back Button */}
          <Button
            onClick={() => navigate("/")}
            startIcon={<ArrowBackIcon />}
            sx={{
              color: "#015190",
              mb: 3,
              "&:hover": { color: "#6AC0E6" },
            }}
          >
            Back to Home
          </Button>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "32px", md: "48px" },
              mb: 4,
              lineHeight: 1.2,
            }}
          >
            [YOUR_TITLE]
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: 16,
              color: "#999",
              maxWidth: "600px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            [YOUR_DESCRIPTION]
          </Typography>
        </Box>
      </Box>

      {/* COMPONENT SECTION 1 - Add or remove components as needed */}
      <Box
        sx={{ width: "100%", bgcolor: "#000", color: "white", px: 6, py: 8 }}
      >
        <Capabilities capabilitiesTitle="[YOUR_CATEGORY] Capabilities" />
      </Box>

      {/* COMPONENT SECTION 2 */}
      <Box
        sx={{ width: "100%", bgcolor: "#111", color: "white", px: 6, py: 8 }}
      >
        <Testimonial3D />
      </Box>

      {/* COMPONENT SECTION 3 */}
      <Box
        sx={{ width: "100%", bgcolor: "#000", color: "white", px: 6, py: 8 }}
      >
        <StickyTimeline />
      </Box>

      {/* COMPONENT SECTION 4 */}
      <Box
        sx={{ width: "100%", bgcolor: "#111", color: "white", px: 6, py: 8 }}
      >
        <SplitFeature />
      </Box>

      {/* COMPONENT SECTION 5 */}
      <Box
        sx={{ width: "100%", bgcolor: "#000", color: "white", px: 6, py: 8 }}
      >
        <VerticalTabsFeature />
      </Box>

      {/* COMPONENT SECTION 6 */}
      <Box
        sx={{ width: "100%", bgcolor: "#111", color: "white", px: 6, py: 8 }}
      >
        <InteractiveArticleList />
      </Box>

      {/* CUSTOM CTA SECTION - Completely customize this! */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#015190",
          color: "white",
          py: 12,
          px: 6,
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            [YOUR_CTA_HEADLINE]
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              mb: 6,
              color: "#ccc",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            [YOUR_CTA_DESCRIPTION]
          </Typography>

          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              px: 6,
              py: 2,
              bgcolor: "#fff",
              color: "#015190",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            [YOUR_CTA_BUTTON]
          </Button>
        </Box>
      </Box>
    </>
  );
}
