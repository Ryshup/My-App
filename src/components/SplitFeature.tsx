import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

interface SplitFeatureItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface SplitFeatureProps {
  features: SplitFeatureItem[];
}

// Default icons for fallback
const defaultIcons = [
  <SupportAgentIcon key="0" />,
  <CodeIcon key="1" />,
  <StorageIcon key="2" />,
  <PaymentIcon key="3" />,
  <PhoneIphoneIcon key="4" />,
];

export default function SplitFeature({ features }: SplitFeatureProps) {
  const [active, setActive] = useState(0);

  // Use provided items, fallback to empty array
  const items = features && features.length > 0 ? features : [];

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1200px",
        mx: "auto",
        borderRadius: "20px",
        overflow: "hidden",
        bgcolor: "#111",
        height: "400px", // ✅ FIXED HEIGHT
      }}
    >
      {/* LEFT PANEL */}
      <Box
        sx={{
          width: "45%",
          height: "100%", // ✅ IMPORTANT
          bgcolor: "#015190",
          color: "#fff",
          px: 5,
          py: 5,
          overflowY: "auto",

          /* ✅ WHITE SCROLLBAR */
          scrollbarWidth: "thin",
          scrollbarColor: "#ffffff transparent",

          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ffffff",
            borderRadius: "10px",
          },
        }}
      >
        {items.map((item, index) => {
          const isActive = active === index;

          return (
            <Box
              key={item.id}
              onClick={() => setActive(index)}
              sx={{
                py: 2.5,
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                opacity: isActive ? 1 : 0.6,
                transition: "all 0.25s ease",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {/* NUMBER */}
                <Typography
                  sx={{
                    fontSize: "19px",
                    fontWeight: 400,
                    opacity: 0.8,
                    minWidth: "28px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}.
                </Typography>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400, // ✅ NO BOLD
                    lineHeight: 1.4,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          width: "55%",
          bgcolor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          px: 6,
          py: 5,
        }}
      >
        <AnimatePresence mode="wait">
          {items.length > 0 && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%" }}
            >
              <Box>
                {/* ICON */}
                <Box
                  sx={{
                    mb: 3,
                    width: 44,
                    height: 44,
                    bgcolor: "#015190",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {items[active].icon ||
                    defaultIcons[active % defaultIcons.length]}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    mb: 2,
                    color: "#fff",
                    fontFamily: '"DM Sans", sans-serif',
                  }}
                >
                  {items[active].title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    fontSize: 15,
                    color: "#aaa",
                    lineHeight: 1.6,
                    maxWidth: "480px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {items[active].description}
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
