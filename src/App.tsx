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
const EcommercePage = lazy(() => import("./pages/industries/ecommerce"));
const EducationPage = lazy(() => import("./pages/industries/education"));
const RealEstatePage = lazy(() => import("./pages/industries/realestate"));
const LogisticsPage = lazy(() => import("./pages/industries/logistics"));
const TravelPage = lazy(() => import("./pages/industries/travel"));
const MediaPage = lazy(() => import("./pages/industries/media"));
const GamingPage = lazy(() => import("./pages/industries/gaming"));
const AISolutionsPage = lazy(() => import("./pages/industries/aiSolutions"));
const BlockchainPage = lazy(() => import("./pages/industries/blockchain"));

// Lazy load service pages
const ProductDesignPage = lazy(() => import("./pages/services/productDesign"));
const AppDevPage = lazy(() => import("./pages/services/appDev"));
const SoftwareDevPage = lazy(() => import("./pages/services/softwareDev"));
const LegacyModernizationPage = lazy(
  () => import("./pages/services/legacyModernization"),
);
const BlockchainDevPage = lazy(() => import("./pages/services/blockchainDev"));
const CloudSolutionsPage = lazy(
  () => import("./pages/services/cloudSolutions"),
);
const CybersecurityPage = lazy(() => import("./pages/services/cybersecurity"));
const IoTSolutionsPage = lazy(() => import("./pages/services/iotSolutions"));
const ARVRSolutionsPage = lazy(() => import("./pages/services/arvrSolutions"));
const QATestingPage = lazy(() => import("./pages/services/qaTesting"));
const DevOpsPage = lazy(() => import("./pages/services/devops"));

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
          <Route
            path="/industries/ecommerce"
            element={
              <Suspense fallback={<LoadingPage />}>
                <EcommercePage />
              </Suspense>
            }
          />
          <Route
            path="/industries/education"
            element={
              <Suspense fallback={<LoadingPage />}>
                <EducationPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/realestate"
            element={
              <Suspense fallback={<LoadingPage />}>
                <RealEstatePage />
              </Suspense>
            }
          />
          <Route
            path="/industries/logistics"
            element={
              <Suspense fallback={<LoadingPage />}>
                <LogisticsPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/travel"
            element={
              <Suspense fallback={<LoadingPage />}>
                <TravelPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/media"
            element={
              <Suspense fallback={<LoadingPage />}>
                <MediaPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/gaming"
            element={
              <Suspense fallback={<LoadingPage />}>
                <GamingPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/aiSolutions"
            element={
              <Suspense fallback={<LoadingPage />}>
                <AISolutionsPage />
              </Suspense>
            }
          />
          <Route
            path="/industries/blockchain"
            element={
              <Suspense fallback={<LoadingPage />}>
                <BlockchainPage />
              </Suspense>
            }
          />

          {/* ==================== SERVICE ROUTES ==================== */}
          <Route
            path="/services/productDesign"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ProductDesignPage />
              </Suspense>
            }
          />
          <Route
            path="/services/appDev"
            element={
              <Suspense fallback={<LoadingPage />}>
                <AppDevPage />
              </Suspense>
            }
          />
          <Route
            path="/services/softwareDev"
            element={
              <Suspense fallback={<LoadingPage />}>
                <SoftwareDevPage />
              </Suspense>
            }
          />
          <Route
            path="/services/legacyModernization"
            element={
              <Suspense fallback={<LoadingPage />}>
                <LegacyModernizationPage />
              </Suspense>
            }
          />
          <Route
            path="/services/blockchainDev"
            element={
              <Suspense fallback={<LoadingPage />}>
                <BlockchainDevPage />
              </Suspense>
            }
          />
          <Route
            path="/services/cloudSolutions"
            element={
              <Suspense fallback={<LoadingPage />}>
                <CloudSolutionsPage />
              </Suspense>
            }
          />
          <Route
            path="/services/cybersecurity"
            element={
              <Suspense fallback={<LoadingPage />}>
                <CybersecurityPage />
              </Suspense>
            }
          />
          <Route
            path="/services/iotSolutions"
            element={
              <Suspense fallback={<LoadingPage />}>
                <IoTSolutionsPage />
              </Suspense>
            }
          />
          <Route
            path="/services/arvrSolutions"
            element={
              <Suspense fallback={<LoadingPage />}>
                <ARVRSolutionsPage />
              </Suspense>
            }
          />
          <Route
            path="/services/qaTesting"
            element={
              <Suspense fallback={<LoadingPage />}>
                <QATestingPage />
              </Suspense>
            }
          />
          <Route
            path="/services/devops"
            element={
              <Suspense fallback={<LoadingPage />}>
                <DevOpsPage />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
