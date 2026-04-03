import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

interface HeroStat {
  number: number;
  label: string;
}

interface HeroHeaderProps {
  title: string;
  description1: string;
  stats: HeroStat[];
  ctaText?: string;
  onCtaClick?: () => void;
}

/**
 * HERO HEADER COMPONENT
 *
 * Features: Animated counter stats, responsive layout
 * Displays header with left content and right-side stats
 * Stats count up from 0 to target number on mount
 */

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const increment = target / 50; // Animate over 50 frames
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}+</span>;
};

export default function HeroHeader({
  title,
  description1,
  stats,
  ctaText = "Consult Our Experts",
  onCtaClick,
}: HeroHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f3f0",
        py: { xs: 8, md: 8 },
        px: { xs: 2, md: 1 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* TOP DIVIDER LINE */}
        <Box
          sx={{
            height: "1px",
            width: "100%",
            bgcolor: "#999",
          }}
        />

        {/* MAIN CONTENT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1px 1fr" },
            gap: { xs: 6, lg: 0 },
            alignItems: "start",
            position: "relative",
            minHeight: "300px",
          }}
        >
          {/* LEFT SIDE - TITLE & DESCRIPTION */}
          <Box sx={{ pr: { lg: 6 } }}>
            {/* TITLE */}
            <Typography
              sx={{
                fontSize: "clamp(28px, 6vw, 56px)",
                fontWeight: 900,
                color: "#000",
                lineHeight: 1.2,
                mb: 6,
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              {title}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#555",
                lineHeight: 1.8,
                fontFamily: '"DM Sans", sans-serif',
                textAlign: "justify",
              }}
            >
              {description1}
            </Typography>
          </Box>

          {/* CENTER - VERTICAL DIVIDER */}
          <Box
            sx={{
              width: "1px",
              height: "100%",
              minHeight: "300px",
              bgcolor: "#999",
              display: { xs: "none", lg: "block" },
            }}
          />

          {/* RIGHT SIDE - STATS GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: { xs: 4, md: 6 },
              pl: { lg: 6 },
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={index}
                sx={{
                  pb: 3,
                  borderBottom: "1px solid #999",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* STAT NUMBER */}
                <Typography
                  sx={{
                    fontSize: "clamp(24px, 4vw, 44px)",
                    fontWeight: 900,
                    color: "#000",
                    mb: 1,
                    fontFamily: '"DM Sans", sans-serif',
                    lineHeight: 1.1,
                  }}
                >
                  <AnimatedCounter target={stat.number} />
                </Typography>

                {/* STAT LABEL */}
                <Typography
                  sx={{
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    color: "#666",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    fontFamily: '"DM Sans", sans-serif',
                    textAlign: "justify",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* BOTTOM DIVIDER LINE */}
        <Box
          sx={{
            height: "1px",
            width: "100%",
            bgcolor: "#999",
          }}
        />

        {/* CENTERED BUTTON AT BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 1,
          }}
        >
          <Button
            onClick={onCtaClick}
            sx={{
              bgcolor: "#0052CC",
              color: "#fff",
              px: 5,
              py: 2,
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              fontFamily: '"DM Sans", sans-serif',
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#0041A3",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 24px rgba(0, 82, 204, 0.3)",
              },
            }}
          >
            {ctaText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
