import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";

// Layer 1: Data
import {
  homeTestimonials,
  homeCapabilities,
  homeTimeline,
  homeSplitFeatures,
  homeVerticalTabs,
  homeArticles,
} from "./data/pages/homeData";

// Layer 2: Components
import Header from "./components/header/Header";
import Testimonial3D from "./components/Testimonial3D";
import Capabilities from "./components/Features/Capabilities";
import SplitFeature from "./components/SplitFeature";
import StickyTimeline from "./components/Features/StickyTimeline";
import VerticalTabsFeature from "./components/VerticalTabsFeature";
import InteractiveArticleList from "./components/Features/InteractiveArticleList";

// Lazy load industry pages
const HealthcarePage = lazy(() => import("./pages/industries/healthcare"));
const FintechPage = lazy(() => import("./pages/industries/fintech"));

const theme = createTheme({
  typography: {
    fontFamily:
      '"DM Sans", "Inter", system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: { fontFamily: '"DM Sans", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"DM Sans", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"DM Sans", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"DM Sans", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"DM Sans", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"DM Sans", sans-serif', fontWeight: 600 },
    body1: { fontFamily: '"Inter", sans-serif', fontWeight: 400 },
    body2: { fontFamily: '"Inter", sans-serif', fontWeight: 400 },
    button: { fontFamily: '"DM Sans", sans-serif', fontWeight: 600 },
  },
});

// Loading fallback component
function LoadingPage() {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Loading page...</Typography>
    </Box>
  );
}

// HOME PAGE CONTENT COMPONENT
function HomePage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* TESTIMONIAL SECTION */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          color: "white",
          py: 10,
          px: { xs: 2, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            fontWeight: 600,
          }}
        >
          Words From Our C-Suite Partners
        </Typography>

        <Testimonial3D testimonials={homeTestimonials} />
      </Box>

      {/* 🔥 CAPABILITIES SECTION */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
        }}
      >
        <Capabilities data={homeCapabilities} title="Our Core Capabilities" />
      </Box>
      {/* 🔥 NEW STICKY TIMELINE SECTION */}
      <StickyTimeline data={homeTimeline} />
      {/* 🔥 SPLIT FEATURE SECTION */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 6 },
          py: 8,
        }}
      >
        <SplitFeature features={homeSplitFeatures} />
      </Box>

      {/* 🔥 NEW VERTICAL TABS FEATURE SECTION */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#000",
          px: { xs: 2, md: 6 },
          py: 8,
        }}
      >
        <VerticalTabsFeature tabs={homeVerticalTabs} />
      </Box>
      <InteractiveArticleList data={homeArticles} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* INDUSTRIES PAGES */}
          <Route
            path="/industries/healthcare"
            element={
              <Suspense fallback={<LoadingPage />}>
                <HealthcarePage />
              </Suspense>
            }
          />
          <Route
            path="/industries/fintech"
            element={
              <Suspense fallback={<LoadingPage />}>
                <FintechPage />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
