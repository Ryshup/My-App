import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import type { SvgIconComponent } from "@mui/icons-material";

import { useState, useRef } from "react";
import MegaMenu from "./MegaMenu";

/* ================= TYPES ================= */

type MenuItem = string | { label: string; route: string };

type Section = {
  title: string;
  icon: SvgIconComponent;
  items: MenuItem[];
};

type MenuData = {
  sections: Section[];
};

type MenuKey = "services" | "industries" | "portfolio" | "resources";

/* ================= NAV ITEMS ================= */

const navItems: { label: string; key?: MenuKey }[] = [
  { label: "InventivAI" },
  { label: "About" },
  { label: "Services", key: "services" },
  { label: "Industries", key: "industries" },
  { label: "Portfolio", key: "portfolio" },
  { label: "Resources", key: "resources" },
];

/* ================= MENU DATA ================= */

const menuData: Record<MenuKey, MenuData> = {
  services: {
    sections: [
      {
        title: "PRODUCT DEVELOPMENT & ENGINEERING",
        icon: CodeIcon,
        items: [
          "Product Design",
          "Application Development",
          "Software Development",
          "QA and Testing",
          "DevOps",
          "Product Management",
        ],
      },
      {
        title: "DIGITAL TRANSFORMATION",
        icon: SettingsIcon,
        items: [
          "Legacy Application Modernization",
          "Blockchain",
          "Cloud",
          "Cybersecurity",
          "IoT",
          "AR/VR",
        ],
      },
      {
        title: "CONSULTING SERVICES",
        icon: BusinessCenterIcon,
        items: [
          "IT Consulting",
          "Software Consulting",
          "FinTech Consulting",
          "Mobile Consulting",
        ],
      },
    ],
  },

  industries: {
    sections: [
      {
        title: "INDUSTRIES",
        icon: BusinessCenterIcon,
        items: [
          { label: "FinTech", route: "/industries/fintech" },
          { label: "Healthcare", route: "/industries/healthcare" },
          { label: "E-commerce", route: "/industries/ecommerce" },
          { label: "Education", route: "/industries/education" },
          { label: "Real Estate", route: "/industries/realestate" },
        ],
      },
      {
        title: "MORE",
        icon: SettingsIcon,
        items: ["Logistics", "Travel", "Media", "Gaming"],
      },
      {
        title: "SPECIALIZED",
        icon: CodeIcon,
        items: ["AI Solutions", "Blockchain Industry"],
      },
    ],
  },

  portfolio: {
    sections: [
      {
        title: "OUR WORK",
        icon: CodeIcon,
        items: ["Case Studies", "Success Stories", "Client Projects"],
      },
      {
        title: "HIGHLIGHTS",
        icon: SettingsIcon,
        items: ["Top Apps", "Enterprise Solutions"],
      },
      {
        title: "SHOWCASE",
        icon: BusinessCenterIcon,
        items: ["Design Work", "Mobile Apps", "Web Apps"],
      },
    ],
  },

  resources: {
    sections: [
      {
        title: "LEARN",
        icon: CodeIcon,
        items: ["Blogs", "Guides", "Whitepapers"],
      },
      {
        title: "MEDIA",
        icon: SettingsIcon,
        items: ["Press Releases", "News"],
      },
      {
        title: "TOOLS",
        icon: BusinessCenterIcon,
        items: ["Calculators", "Reports"],
      },
    ],
  },
};

/* ================= COMPONENT ================= */

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = (menu: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#000" }}>
        <Toolbar
          sx={{
            minHeight: 90,
            display: "flex",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          {/* LOGO */}
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Airithm
          </Typography>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                onMouseEnter={() => {
                  if (item.key) handleOpen(item.key);
                }}
                onMouseLeave={handleClose}
                sx={{
                  position: "relative",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  py: 1,

                  // 🔴 THIS IS WHERE rotate goes
                  "&:hover .arrow-icon": {
                    transform: "translateY(-3px) rotate(180deg)",
                  },

                  "& .arrow-icon": {
                    transition: "transform 0.25s ease",
                  },

                  "&:hover .underline": {
                    width: "100%",
                  },
                }}
              >
                <Typography>{item.label}</Typography>

                {item.key && (
                  <KeyboardArrowDownIcon
                    className="arrow-icon"
                    fontSize="small"
                    sx={{
                      transition: "transform 0.25s ease",
                    }}
                  />
                )}

                <Box
                  className="underline"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 2,
                    width: 0,
                    bgcolor: "#015190",
                    transition: "width 0.3s",
                  }}
                />
              </Box>
            ))}

            <Button
              variant="contained"
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* MOBILE BUTTON */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MEGA MENU */}
      {openMenu && (
        <MegaMenu
          sections={menuData[openMenu].sections}
          onMouseEnter={() => handleOpen(openMenu)}
          onMouseLeave={handleClose}
        />
      )}

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          {navItems.map((item) => (
            <Box key={item.label}>
              {item.key ? (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item.label}</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    {menuData[item.key].sections.map((section) => (
                      <Box key={section.title} sx={{ mb: 2 }}>
                        <Typography fontWeight={600}>
                          {section.title}
                        </Typography>

                        {section.items.map((i, idx) => {
                          const itemLabel = typeof i === "string" ? i : i.label;
                          return (
                            <Typography key={idx} sx={{ ml: 1 }}>
                              {itemLabel}
                            </Typography>
                          );
                        })}
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Typography sx={{ py: 1 }}>{item.label}</Typography>
              )}
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
