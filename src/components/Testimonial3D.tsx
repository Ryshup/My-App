import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

interface Testimonial3DProps {
  testimonials: Testimonial[];
}

type Direction = "left" | "right" | "up" | "down" | null;

// Card content component - defined outside main component
const CardContent = ({
  testimonialIndex,
  testimonials,
}: {
  testimonialIndex: number;
  testimonials: Testimonial[];
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
    }}
  >
    {/* QUOTE ICON + TEXT */}
    <Box>
      <Box sx={{ mb: 3, color: "#015190" }}>
        <FormatQuoteIcon sx={{ fontSize: 40, color: "#015190" }} />
      </Box>

      <Typography
        sx={{
          fontSize: 18,
          lineHeight: 1.8,
          color: "#1f2937",
          fontWeight: 500,
          fontFamily: '"Inter", sans-serif',
        }}
      >
        "{testimonials[testimonialIndex].text}"
      </Typography>
    </Box>

    {/* USER PROFILE */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          bgcolor: "#015190",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {testimonials[testimonialIndex].avatar}
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
            color: "#1f2937",
            mb: 0.5,
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          {testimonials[testimonialIndex].name}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            color: "#9ca3af",
            fontWeight: 400,
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {testimonials[testimonialIndex].role}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default function Testimonial3D({ testimonials }: Testimonial3DProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(null);
  const [hoverDir, setHoverDir] = useState<Direction>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Navigation handlers with 3D rotations
  const navigate = (dir: Direction) => {
    if (!dir) return;
    setDirection(dir);

    if (dir === "right" || dir === "down") {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (dir === "left" || dir === "up") {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  // Auto-rotate down every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Track global mouse position for custom cursor
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (hoverDir) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [hoverDir]);

  // Detect hover zones (top, bottom, left, right edges)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const edge = 100;

    if (y < edge) setHoverDir("up");
    else if (y > rect.height - edge) setHoverDir("down");
    else if (x < edge) setHoverDir("left");
    else if (x > rect.width - edge) setHoverDir("right");
    else setHoverDir(null);
  };

  // Calculate 3D rotations based on direction
  const get3DRotations = () => {
    switch (direction) {
      case "up":
        return { exitX: -90, enterX: 90 };
      case "down":
        return { exitX: 90, enterX: -90 };
      case "right":
        return { exitY: 90, enterY: -90 };
      case "left":
        return { exitY: -90, enterY: 90 };
      default:
        return { exitX: 0, enterX: 0, exitY: 0, enterY: 0 };
    }
  };

  const rotations = get3DRotations();

  // Render custom cursor arrow
  const renderArrow = () => {
    if (!hoverDir) return null;

    const arrowIcon = {
      left: <ArrowBackIcon sx={{ fontSize: 20 }} />,
      right: <ArrowForwardIcon sx={{ fontSize: 20 }} />,
      up: <ArrowUpwardIcon sx={{ fontSize: 20 }} />,
      down: <ArrowDownwardIcon sx={{ fontSize: 20 }} />,
    };

    return createPortal(
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          top: `${mousePos.y}px`,
          left: `${mousePos.x}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 99999,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(255,255,255,0.95)",
            borderRadius: "50%",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.25)",
            color: "#111",
          }}
        >
          {arrowIcon[hoverDir]}
        </Box>
      </motion.div>,
      document.body,
    );
  };

  return (
    <>
      {renderArrow()}

      {/* 3D STAGE */}
      <Box
        sx={{
          perspective: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          cursor: hoverDir ? "none" : "default",
          minHeight: "500px",
        }}
      >
        {/* OUTER GRADIENT CONTAINER */}
        <Box
          sx={{
            width: 650,
            height: 380,
            borderRadius: "16px",
            background: "linear-gradient(135deg, #f3f4f6 0%, #f59e0b 100%)",
            boxShadow: "0px 40px 100px rgba(0,0,0,0.3)",
            p: 4,
            position: "relative",
            overflow: "hidden",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverDir(null)}
          onClick={() => {
            if (hoverDir) navigate(hoverDir);
          }}
        >
          {/* 3D CUBE CONTAINER */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait">
              {/* BACKGROUND FACE (3 layers back) */}
              <motion.div
                key={`back-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: "12px",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    opacity: 0.4,
                  }}
                >
                  <CardContent
                    testimonialIndex={(index + 2) % testimonials.length}
                    testimonials={testimonials}
                  />
                </Box>
              </motion.div>

              {/* MIDDLE FACE (1 layer back) */}
              <motion.div
                key={`middle-${index}`}
                initial={{
                  rotateX:
                    rotations.enterX !== 0 ? rotations.enterX : undefined,
                  rotateY:
                    rotations.enterY !== 0 ? rotations.enterY : undefined,
                  opacity: 0.6,
                }}
                animate={{
                  rotateX: 0,
                  rotateY: 0,
                  opacity: 0.6,
                }}
                exit={{
                  rotateX: rotations.exitX !== 0 ? rotations.exitX : undefined,
                  rotateY: rotations.exitY !== 0 ? rotations.exitY : undefined,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Inner white card for middle face */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: "12px",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    opacity: 0.7,
                  }}
                >
                  <CardContent
                    testimonialIndex={(index + 1) % testimonials.length}
                    testimonials={testimonials}
                  />
                </Box>
              </motion.div>

              {/* CURRENT FACE (FRONT - Main visible face) */}
              <motion.div
                key={`front-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  rotateX: rotations.exitX !== 0 ? rotations.exitX : undefined,
                  rotateY: rotations.exitY !== 0 ? rotations.exitY : undefined,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Inner white card for current face */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: "12px",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent
                    testimonialIndex={index}
                    testimonials={testimonials}
                  />
                </Box>
              </motion.div>

              {/* NEXT FACE (ENTERING from back) */}
              <motion.div
                key={`next-${index}`}
                initial={{
                  rotateX:
                    rotations.enterX !== 0 ? rotations.enterX : undefined,
                  rotateY:
                    rotations.enterY !== 0 ? rotations.enterY : undefined,
                  opacity: 0.3,
                }}
                animate={{
                  rotateX: 0,
                  rotateY: 0,
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transformOrigin: "center",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Inner white card for next face */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: "12px",
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <CardContent
                    testimonialIndex={index}
                    testimonials={testimonials}
                  />
                </Box>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Box>

        {/* PAGINATION INDICATORS (RIGHT SIDE) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            position: "absolute",
            right: 20,
          }}
        >
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: index === i ? 1 : 0.3,
                width: index === i ? 8 : 4,
              }}
              transition={{ duration: 0.3 }}
            >
              <Box
                onClick={() => {
                  const newDir = i > index ? "down" : i < index ? "up" : null;
                  if (newDir) {
                    setIndex(i);
                    setDirection(newDir);
                  }
                }}
                sx={{
                  height: 8,
                  width: index === i ? 8 : 4,
                  borderRadius: "4px",
                  bgcolor: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow:
                    index === i ? "0 0 12px rgba(255,255,255,0.6)" : "none",
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </>
  );
}
