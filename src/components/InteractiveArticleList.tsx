import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const PRIMARY = "#015190";
const SECONDARY = "#6AC0E6";

const data = [
  {
    category: "Blog Post",
    title: "The Truth About Finding Your First Engineering Job",
    desc: "Even for senior engineers, job searches can be confusing...",
  },
  {
    category: "Blog Post",
    title: "30 Questions to Ask Before Joining a Startup",
    desc: "You're trying to evaluate the company while impressing...",
  },
  {
    category: "Job Collection",
    title: "19 Hot Crypto Startups Hiring Remotely",
    desc: "Either Crypto has a great PR team or the internet is booming...",
  },
  {
    category: "Job Collection",
    title: "18 Innovative Space Startups",
    desc: "Few tech sectors are capturing imagination like space...",
  },
];

export default function ArticleList() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {data.map((item, i) => {
        const isActive = hovered === i;

        return (
          <Box
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 4,
              px: 3,
              borderRadius: "16px",
              cursor: "pointer",

              transition: "all 0.3s ease",

              // ✅ CLEAN SOLID HOVER (NO GRADIENT)
              bgcolor: isActive ? PRIMARY : "transparent",

              // ✅ SOFT GLOW USING PRIMARY
              boxShadow: isActive
                ? `0 10px 30px ${PRIMARY}66`
                : "none",

              transform: isActive ? "scale(1.01)" : "scale(1)",
            }}
          >
            {/* CATEGORY */}
            <Typography
              sx={{
                width: "15%",
                fontSize: "14px",
                color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "0.3s",
              }}
            >
              {item.category}
            </Typography>

            {/* TITLE */}
            <Typography
              sx={{
                width: "45%",
                fontSize: "22px",
                fontWeight: 500,
                color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                transition: "0.3s",
              }}
            >
              {item.title}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                width: "30%",
                fontSize: "15px",
                color: isActive ? "#ddd" : "rgba(255,255,255,0.4)",
                transition: "0.3s",
              }}
            >
              {item.desc}
            </Typography>

            {/* BUTTON */}
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",

                // ✅ STRICT COLOR SYSTEM
                bgcolor: isActive ? SECONDARY : PRIMARY,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.12)" : "scale(1)",
              }}
            >
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}