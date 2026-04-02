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

const items = [
  { icon: <CodeIcon />, text: "Building eCommerce on cloud-based scalable systems" },
  { icon: <PsychologyIcon />, text: "Adding AI-enabled personalization and recommendation systems" },
  { icon: <SecurityIcon />, text: "Adoption of secure payment, encryption, MFA, fraud control" },
  { icon: <InsightsIcon />, text: "Compliance with GDPR, PCI-DSS and global laws" },
  { icon: <StorageIcon />, text: "Advanced analytics and reporting for insights" },
];

export default function Capabilities() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", py: 12, px: 6 }}>
      
      {/* TITLE */}
      <Typography align="center" fontSize={28} fontWeight={600} mb={8}>
        — Our Core Capabilities —
      </Typography>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 3,
        }}
      >
        {items.map((item, i) => {
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

                  // subtle base border (like reference)
                  border: "1px solid rgba(255,255,255)",

                  // glow only on active
                  boxShadow: isActive
                    ? `0 12px 40px ${PRIMARY}88`
                    : "none",

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

                      // subtle glow using secondary
                      filter: isActive
                        ? `drop-shadow(0 0 8px ${SECONDARY})`
                        : "none",
                    }}
                  >
                    {item.icon}
                  </Box>
                </motion.div>

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: 15,
                    textAlign: "center",
                    color: isActive ? "#fff" : "#fff",
                    lineHeight: 1.6,
                    transition: "none",
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