import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import type { SvgIconComponent } from "@mui/icons-material";

type MenuItem = string | { label: string; route: string };

type Section = {
  title: string;
  icon: SvgIconComponent;
  items: MenuItem[];
};

type MegaMenuProps = {
  sections: Section[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function MegaMenu({
  sections,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // 🔴 Fake submenu data (you can later move to real data)
  const subMenuData: Record<string, string[]> = {
    "Software Development": [
      "Software Integration",
      "Enterprise Software Development",
      "SaaS Development",
      "Software Development Outsourcing",
    ],
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100vw",
        ml: "-8px",
        bgcolor: "white",
        p: 5,
        zIndex: 1000,
        boxShadow: "0px 10px 40px rgba(0,0,0,0.15)",
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 6,
        }}
      >
        {sections.map((section) => (
          <Box key={section.title}>
            {/* HEADER */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <section.icon sx={{ fontSize: 18, color: "#2563eb" }} />
              <Typography fontWeight={700} fontSize={14} color="#6b7280">
                {section.title}
              </Typography>
            </Box>

            {/* ITEMS */}
            {section.items.map((item) => {
              const itemLabel = typeof item === "string" ? item : item.label;
              const itemRoute =
                typeof item === "string" ? undefined : item.route;
              const isActive = activeItem === itemLabel;
              const hasSubmenu = subMenuData[itemLabel];

              const handleItemClick = () => {
                if (itemRoute) {
                  navigate(itemRoute);
                }
              };

              return (
                <Box key={itemLabel} sx={{ position: "relative" }}>
                  {/* MAIN ITEM */}
                  <Box
                    onClick={handleItemClick}
                    onMouseEnter={() => setActiveItem(itemLabel)}
                    onMouseLeave={() => setActiveItem(null)}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 1.5,
                      px: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      bgcolor: isActive ? "#e8f0ff" : "transparent",
                      color: isActive ? "#2563eb" : "inherit",
                      "&:hover": {
                        bgcolor: "#f8fafc",
                      },
                    }}
                  >
                    <Typography fontSize={15}>{itemLabel}</Typography>

                    {hasSubmenu ? (
                      isActive ? (
                        <RemoveIcon fontSize="small" />
                      ) : (
                        <AddIcon fontSize="small" />
                      )
                    ) : (
                      <AddIcon fontSize="small" />
                    )}
                  </Box>

                  {/* SUBMENU */}
                  {isActive && hasSubmenu && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: "100%",
                        top: 0,
                        width: 260,
                        bgcolor: "white",
                        borderRadius: 2,
                        boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                        p: 2,
                        zIndex: 2000,
                      }}
                    >
                      {subMenuData[itemLabel].map((sub: string) => (
                        <Typography
                          key={sub}
                          sx={{
                            py: 1,
                            borderBottom: "1px solid #eee",
                            "&:last-child": { borderBottom: "none" },
                          }}
                        >
                          {sub}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box
        sx={{
          mt: 5,
          p: 4,
          bgcolor: "#f5efe6",
          borderRadius: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600}>
          Didn’t find what you're looking for? Let us know your needs.
        </Typography>

        <Button variant="contained" sx={{ borderRadius: "999px", px: 3 }}>
          Schedule Free Consultation
        </Button>
      </Box>
    </Box>
  );
}
