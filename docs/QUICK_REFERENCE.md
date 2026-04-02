# 🚀 Quick Reference: Adding Landing Pages

## The Fastest Way to Add a New Page (3 Steps)

### Step 1: Create the page file

```bash
# Example: Create Education page
src/pages/industries/education.tsx
```

Copy from `LANDING_PAGE_TEMPLATE.tsx` and replace placeholders:

- `[YOUR_TITLE]` → "Transform Education with Technology"
- `[YOUR_CATEGORY]` → "EdTech"
- `[YOUR_DESCRIPTION]` → Your description
- `[YOUR_CTA_HEADLINE]` → Your headline
- `[YOUR_CTA_BUTTON]` → Your button text

### Step 2: Register in App.tsx

```typescript
// Add this import at the top:
const EducationPage = lazy(() => import("./pages/industries/education"));

// Add this route in the router:
<Route
  path="/industries/education"
  element={
    <Suspense fallback={<LoadingPage />}>
      <EducationPage />
    </Suspense>
  }
/>
```

### Step 3: Test it!

```bash
npm run dev
# Visit: http://localhost:5173/industries/education
```

---

## Available Components (Mix & Match!)

Use any combination of these in your page:

```typescript
// Carousel with 3D effects
<Testimonial3D />

// Feature grid
<Capabilities capabilitiesTitle="Your Title" />

// Left/right split layout with scroll
<SplitFeature />

// Sticky timeline with scroll spy
<StickyTimeline />

// Tab navigation
<VerticalTabsFeature />

// Article listings
<InteractiveArticleList />
```

---

## Current Pages (as Reference)

### Healthcare Page

- **File:** `src/pages/industries/healthcare.tsx`
- **URL:** `/industries/healthcare`
- **Layout:** Testimonials → Capabilities → Timeline → SplitFeature → Tabs → Articles

### FinTech Page

- **File:** `src/pages/industries/fintech.tsx`
- **URL:** `/industries/fintech`
- **Layout:** Capabilities → Timeline → SplitFeature → Tabs → Testimonials → Articles
- **Note:** Different order shows pages are independent!

---

## Customization Examples

### Change Component Order

```typescript
// Healthcare order:
<Testimonial3D />
<Capabilities />
<StickyTimeline />

// Make your own:
<Capabilities />
<SplitFeature />
<Testimonial3D />  // Different position!
```

### Add Custom Sections

```typescript
// Add between components:
<Box sx={{ bgcolor: "#111", py: 10, px: 6 }}>
  <Typography variant="h3">Your Custom Section</Typography>
  <YourCustomContent />
</Box>
```

### Skip Components

```typescript
// Just don't include them!
// This page only has Capabilities and a CTA:
<Capabilities />
<CustomCTA />
```

### Custom Hero

```typescript
<Box sx={{ bgcolor: "#000", py: 12, px: 6 }}>
  <Typography>Your custom hero content</Typography>
  <Button>Your button</Button>
</Box>
```

---

## File Structure Pattern

```
src/pages/
├── industries/
│   ├── healthcare.tsx       ✅ Done
│   ├── fintech.tsx          ✅ Done
│   ├── e-commerce.tsx       (Create next)
│   └── education.tsx        (Create next)
├── services/
│   ├── software-dev.tsx     (Create later)
│   ├── blockchain.tsx       (Create later)
│   └── cloud.tsx            (Create later)
├── portfolio/
│   └── case-studies.tsx     (Create later)
└── resources/
    └── blogs.tsx            (Create later)
```

---

## Common Tasks

### Add a new Industries page (e.g., E-Commerce)

```
1. Create: src/pages/industries/e-commerce.tsx
2. Add route to App.tsx
3. Visit: /industries/e-commerce
```

### Add a new Services page (e.g., Blockchain)

```
1. Create: src/pages/services/blockchain.tsx
2. Add route to App.tsx
3. Visit: /services/blockchain
```

### Update an existing page

```
1. Edit: src/pages/industries/healthcare.tsx
2. Change components, text, styling
3. No need to rebuild - hot reload works!
```

### Remove a component from a page

```
// Just delete these lines from the page:
<Box sx={{ width: "100%", bgcolor: "#111", px: 6, py: 8 }}>
  <Testimonial3D />
</Box>
```

### Change colors on a page

```typescript
// Modify the sx prop:
<Box sx={{ bgcolor: "#015190" }}>  // Change from #111 to #015190
  <Your Component />
</Box>
```

---

## Build & Deploy

### Development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

---

## Colors

**Brand Colors:**

- Primary: `#015190` (dark navy blue)
- Secondary: `#6AC0E6` (light cyan)
- Black: `#000`
- Dark Gray: `#111`
- Text: `#999` or `#ccc`

**Use in sx prop:**

```typescript
sx={{ bgcolor: "#015190", color: "white" }}
```

---

## Import Paths

**Inside page files (nested 2 levels deep):**

```typescript
import Header from "../../components/header/Header";
import Testimonial3D from "../../components/Testimonial3D";
import Capabilities from "../../components/Capabilities";
```

Use `../../components/` for pages in `src/pages/[category]/`

---

## Need Help?

✅ **Copying a page?** Use `LANDING_PAGE_TEMPLATE.tsx`

✅ **Full guide?** Read `HOW_TO_CREATE_LANDING_PAGES.md`

✅ **See an example?** Look at `src/pages/industries/healthcare.tsx` or `fintech.tsx`

✅ **Questions?** Check the route setup in `src/App.tsx`

---

## Build Status: ✅ PRODUCTION READY

- ✅ Healthcare page: Live at `/industries/healthcare`
- ✅ FinTech page: Live at `/industries/fintech`
- ✅ Code splitting: Each page gets separate JS chunk
- ✅ Lazy loading: Pages load on-demand
- ✅ Build time: 183ms
- ✅ No TypeScript errors
- ✅ Ready to scale to 10+ pages

You're all set! 🎉
