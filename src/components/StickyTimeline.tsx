import { Box, Typography } from "@mui/material";
import { useRef } from "react";

import MemoryIcon from "@mui/icons-material/Memory";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const features = [
  {
    title: "Mobile-First Shopping Experiences",
    description:
      "With fast-loading, touch-optimized design, we create mobile commerce platforms built for performance and scale...",
    icon: <PhoneIphoneIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Business-Aligned Development",
    description:
      "We tailor every platform to support business models, market demands, and customer behavior...",
    icon: <TrendingUpIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Enterprise-Level Security Standards",
    description:
      "We prioritize security-first architecture with encryption, secure payments, and GDPR compliance...",
    icon: <SecurityIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "AI-Powered Shopping & Interfaces",
    description:
      "We build AI-driven recommendations, smart search, and intelligent commerce features...",
    icon: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
  },
  {
    title: "Specialized Cross-Platform Teams",
    description:
      "Our teams include domain experts in mobile, web, and cloud development...",
    icon: <MemoryIcon sx={{ fontSize: 24 }} />,
  },
];

export default function StickyTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 12, px: { xs: 2, md: 6 } }}>
      {/* ✅ FIXED CONTAINER */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          gap: 8,
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* LEFT (STICKY) */}
        <Box sx={{ width: { md: "40%" }, flexShrink: 0 }}>
          <Box
            sx={{
              position: "sticky",
              top: "120px", // 🔥 adjust based on header
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 28, md: 42 },
                fontWeight: 700,
                lineHeight: 1.3,
                mb: 4,
                color: "#fff",
              }}
            >
              What Makes Appinventiv the Engine Behind Next-Gen eCommerce Mobile
              App Development Services
            </Typography>

            <Typography
              sx={{
                color: "#999",
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.8,
              }}
            >
              Appinventiv delivers future-ready eCommerce solutions built for
              performance, scalability, and customer engagement.
            </Typography>
          </Box>
        </Box>

        {/* RIGHT (SCROLL CONTENT) */}
        <Box sx={{ width: { md: "60%" }, position: "relative" }}>
          {/* VERTICAL LINE */}
          <Box
            sx={{
              position: "absolute",
              left: "26px",
              top: 0,
              bottom: 0,
              width: "2px",
              bgcolor: "rgba(255,255,255,0.1)",
              textAlign: "justify",
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {features.map((item, i) => (
              <Box
                key={i}
                ref={(el) => {
                  refs.current[i] = el as HTMLDivElement | null;
                }}
                sx={{
                  display: "flex",
                  gap: 4,
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    minWidth: 56,
                    borderRadius: "50%",
                    bgcolor: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255,255,255,0.1)",
                    color: "##ffffff",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {item.icon}
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 600,
                      mb: 2,
                      color: "#fff",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 15 },
                      lineHeight: 1.7,
                      color: "#999",
                      maxWidth: "600px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
