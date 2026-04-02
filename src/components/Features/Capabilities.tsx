import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SecurityIcon from "@mui/icons-material/Security";
import InsightsIcon from "@mui/icons-material/Insights";
import StorageIcon from "@mui/icons-material/Storage";

const PRIMARY = "#015190";
const SECONDARY = "#6AC0E6";

interface CapabilityItem {
  icon: "code" | "psychology" | "security" | "insights" | "storage";
  text: string;
}

interface CapabilitiesProps {
  data: CapabilityItem[];
  title?: string;
}

// Icon mapping
const iconMap = {
  code: <CodeIcon />,
  psychology: <PsychologyIcon />,
  security: <SecurityIcon />,
  insights: <InsightsIcon />,
  storage: <StorageIcon />,
};

/**
 * CAPABILITIES COMPONENT
 *
 * Displays a grid of capability cards with icons and hover animations
 * Matches original design with scale animations and glow effects
 * Fully prop-based and reusable across all pages
 */

export default function Capabilities({
  data,
  title = "Our Capabilities",
}: CapabilitiesProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 12, px: { xs: 2, md: 6 } }}>
      {/* TITLE */}
      <Typography
        align="center"
        fontSize={28}
        fontWeight={600}
        mb={8}
        sx={{
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        — {title} —
      </Typography>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 3,
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {data.map((item, i) => {
          const isActive = active === i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  height: 260,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 3,
                  borderRadius: "20px",

                  // ✅ SOLID COLOR (NO MIX)
                  bgcolor: isActive ? PRIMARY : "transparent",

                  // subtle base border
                  border: "1px solid rgba(255,255,255, 0.2)",

                  // glow only on active
                  boxShadow: isActive ? `0 12px 40px ${PRIMARY}88` : "none",

                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                {/* ICON */}
                <motion.div
                  animate={{ scale: isActive ? 1.15 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: "#fff",
                      fontSize: "40px",

                      // subtle glow using secondary
                      filter: isActive
                        ? `drop-shadow(0 0 8px ${SECONDARY})`
                        : "none",
                    }}
                  >
                    {iconMap[item.icon]}
                  </Box>
                </motion.div>

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "#fff",
                    lineHeight: 1.6,
                    transition: "none",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
}
