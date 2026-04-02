import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

interface HeroStat {
  number: number;
  label: string;
}

interface HeroHeaderProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
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
  subtitle,
  description1,
  description2,
  stats,
  ctaText = "Consult Our Experts",
  onCtaClick,
}: HeroHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f3f0",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 4, lg: 8 },
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE - CONTENT */}
        <Box>
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "56px" },
              fontWeight: 900,
              color: "#000",
              lineHeight: 1.2,
              mb: 3,
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {title}
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: 600,
              color: "#333",
              mb: 4,
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {subtitle}
          </Typography>

          {/* DIVIDER LINE */}
          <Box
            sx={{
              height: "2px",
              width: "80px",
              bgcolor: "#ccc",
              mb: 4,
            }}
          />

          {/* DESCRIPTION 1 */}
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#555",
              lineHeight: 1.7,
              mb: 3,
              maxWidth: "600px",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {description1}
          </Typography>

          {/* DESCRIPTION 2 */}
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              color: "#555",
              lineHeight: 1.7,
              mb: 6,
              maxWidth: "600px",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            {description2}
          </Typography>

          {/* CTA BUTTON */}
          <Button
            onClick={onCtaClick}
            sx={{
              bgcolor: "#0052CC",
              color: "#fff",
              px: 4,
              py: 1.5,
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

        {/* RIGHT SIDE - STATS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: { xs: 3, md: 4 },
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                pb: 3,
                borderBottom: "2px solid #e0e0e0",
              }}
            >
              {/* STAT NUMBER */}
              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 900,
                  color: "#000",
                  mb: 1,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                <AnimatedCounter target={stat.number} />
              </Typography>

              {/* STAT LABEL */}
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  color: "#666",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
