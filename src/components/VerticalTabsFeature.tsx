import { Box, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VerticalTabItem {
  title: string;
  description: string;
  image?: string;
}

interface VerticalTabsFeatureProps {
  tabs: VerticalTabItem[];
}

// Default image for fallback
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200";

export default function VerticalTabsFeature({
  tabs,
}: VerticalTabsFeatureProps) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(40);

  // 🔥 MOVE INDICATOR PERFECTLY
  useEffect(() => {
    const el = itemRefs.current[active];
    if (el) {
      setIndicatorTop(el.offsetTop + el.clientHeight / 2 - 20);
      setIndicatorHeight(el.clientHeight);
    }
  }, [active, tabs.length]);

  const items = tabs && tabs.length > 0 ? tabs : [];

  return (
    <Box
      sx={{
        display: "flex",
        height: "520px",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#111",
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* LEFT PANEL */}
      <Box
        sx={{
          width: "35%",
          position: "relative",
          px: 4,
          py: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* VERTICAL LINE */}
        <Box
          sx={{
            position: "absolute",
            right: 20,
            top: 0,
            bottom: 0,
            width: "2px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        {/* ACTIVE INDICATOR */}
        <Box
          sx={{
            position: "absolute",
            right: 20,
            width: "2px",
            background: "#fff",
            borderRadius: "2px",
            transition: "all 0.4s ease",
            top: indicatorTop,
            height: indicatorHeight * 0.6,
          }}
        />

        {/* MENU */}
        {items.map((item, i) => {
          const isActive = active === i;

          return (
            <Box
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el as HTMLDivElement | null;
              }}
              onClick={() => setActive(i)}
              sx={{
                py: 2,
                cursor: "pointer",
                opacity: isActive ? 1 : 0.35,
                transition: "all 0.3s",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          width: "65%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          px: 6,
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE */}
        {items.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${items[active].image || DEFAULT_IMAGE})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            />
          </AnimatePresence>
        )}

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {items.length > 0 && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ zIndex: 1 }}
            >
              {/* NUMBER */}
              <Typography
                sx={{
                  fontSize: "64px",
                  fontWeight: 700,
                  color: "#2563eb",
                  mb: 2,
                }}
              >
                {String(active + 1).padStart(2, "0")}
              </Typography>

              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#fff",
                  mb: 2,
                }}
              >
                {items[active].title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  color: "#bbb",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                }}
              >
                {items[active].description}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
