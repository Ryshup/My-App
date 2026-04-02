import { Box, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: "memory" | "phone" | "trending" | "security" | "awesome";
}

interface StickyTimelineProps {
  data: TimelineItem[];
  title?: string;
}

// Icon mapping
const iconMap = {
  memory: <MemoryIcon sx={{ fontSize: 24 }} />,
  phone: <PhoneIphoneIcon sx={{ fontSize: 24 }} />,
  trending: <TrendingUpIcon sx={{ fontSize: 24 }} />,
  security: <SecurityIcon sx={{ fontSize: 24 }} />,
  awesome: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
};

/**
 * STICKY TIMELINE COMPONENT
 *
 * Vertical timeline with sticky left column and scrollable content
 * Features: Icons, sticky positioning, smooth layout
 * Fully prop-based and reusable across all pages
 * All design and animation features from original preserved
 */

export default function StickyTimeline({
  data,
  title = "Our Journey",
}: StickyTimelineProps) {
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
              top: "120px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 28, md: 42 },
                fontWeight: 700,
                lineHeight: 1.3,
                mb: 4,
                color: "#fff",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#999",
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.8,
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              [Our Core Capabilities] 
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
            {data.map((item, i) => (
              <Box
                key={i}
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
                    color: "#ffffff",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {item.icon ? (
                    iconMap[item.icon]
                  ) : (
                    <MemoryIcon sx={{ fontSize: 24 }} />
                  )}
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 600,
                      mb: 2,
                      color: "#fff",
                      fontFamily: '"DM Sans", sans-serif',
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
                      fontFamily: '"DM Sans", sans-serif',
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
