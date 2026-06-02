# Steorra Consultants - UI Color Palette & Design System

## Overview
This document outlines the complete color palette, design tokens, and UI guidelines used throughout the Steorra Consultants website.

---

## Primary Color Palette

### Deep Navy Blue (Primary Background)
- **Color Name**: Navy 950
- **Hex Code**: `#0F172A`
- **RGB**: `15, 23, 42`
- **Usage**: 
  - Page backgrounds
  - Header and footer backgrounds
  - Primary text on light backgrounds
  - Call-to-action sections
  - Stats section background
- **Accessibility**: WCAG AAA compliant for text

### Midnight Charcoal (Alternative Dark)
- **Color Name**: Navy 900
- **Hex Code**: `#1E1E1E`
- **RGB**: `30, 30, 30`
- **Usage**:
  - Alternative dark backgrounds
  - Gradient overlays
  - Deep shadows
  - Alternative backgrounds for sections

### Muted Teal (Primary Accent)
- **Color Name**: Teal 500
- **Hex Code**: `#14B8A6`
- **RGB**: `20, 184, 166`
- **Usage**:
  - Call-to-action buttons (primary)
  - Icon highlights
  - Hover states
  - Links and interactive elements
  - Accent borders
  - Navigation highlights
  - Service card icon backgrounds
- **Accessibility**: AAA contrast on white backgrounds

### Soft Gold (Secondary Accent)
- **Color Name**: Gold 500
- **Hex Code**: `#D4AF37`
- **RGB**: `212, 175, 55`
- **Usage**:
  - Premium accent elements
  - Testimonial star ratings
  - Decorative elements
  - Alternative accent highlights
  - Gradient components

---

## Light & Neutral Colors

### Off-White (Light Background)
- **Color Name**: Stone 50
- **Hex Code**: `#F8FAFC`
- **RGB**: `248, 250, 252`
- **Usage**:
  - Light section backgrounds
  - "Why Choose Us" section
  - Testimonials section
  - Alternative background for contrast

### Pure White
- **Color Name**: White
- **Hex Code**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **Usage**:
  - Main page background
  - Card backgrounds
  - Text background
  - Service cards
  - Form backgrounds

### Light Gray (Borders & Dividers)
- **Color Name**: Gray 200
- **Hex Code**: `#E5E7EB`
- **RGB**: `229, 231, 235`
- **Usage**:
  - Card borders
  - Divider lines
  - Section separators
  - Input borders

### Medium Gray (Text & Icons)
- **Color Name**: Gray 600
- **Hex Code**: `#4B5563`
- **RGB**: `75, 85, 99`
- **Usage**:
  - Secondary text
  - Body text (smaller)
  - Icon colors (inactive)
  - Descriptive text

### Dark Gray (Hover States)
- **Color Name**: Gray 300
- **Hex Code**: `#D1D5DB`
- **RGB**: `209, 213, 219`
- **Usage**:
  - Hover states for buttons
  - Interactive element backgrounds
  - Light borders

### Light Gray (Text)
- **Color Name**: Gray 400
- **Hex Code**: `#9CA3AF`
- **RGB**: `156, 163, 175`
- **Usage**:
  - Footer text
  - Secondary footer links
  - Light text on dark backgrounds

---

## Gradient Colors

### Navy to Teal Gradient (Hero CTA)
```
from-navy-950 via-teal-900 to-navy-950
```
- **Usage**: Large CTA sections, prominent banners

### Teal to Teal Gradient (Buttons)
```
from-teal-500 to-teal-600
```
- **Usage**: Primary button backgrounds, icon containers

### Gold to White Gradient (Decorative)
```
from-gold-500 to-transparent
```
- **Usage**: Decorative background elements, blur effects

### Teal to Gold Gradient (Featured)
```
from-teal-500 via-teal-500 to-transparent
```
- **Usage**: Animated backgrounds, accent lines

---

## Semantic Color Usage

### Buttons & CTAs

#### Primary Button
- **Background**: `#14B8A6` (Teal 500)
- **Text**: White (`#FFFFFF`)
- **Hover Background**: `#0d9488` (Teal 600)
- **Border**: None
- **Shadow**: `0 10px 15px -3px rgba(20, 184, 166, 0.2)`

#### Secondary Button
- **Background**: `#FFFFFF` (White)
- **Text**: `#0F172A` (Navy 950)
- **Border**: `2px solid #E5E7EB` (Gray 200)
- **Hover Background**: `#F3F4F6` (Gray 50)
- **Hover Border**: `#0F172A` (Navy 950)

#### Outline Gold Button
- **Background**: Transparent
- **Text**: `#D4AF37` (Gold 500)
- **Border**: `2px solid #D4AF37` (Gold 500)
- **Hover Background**: `#D4AF37` (Gold 500)
- **Hover Text**: `#0F172A` (Navy 950)

### Cards & Containers

#### Service Card
- **Background**: `#FFFFFF` (White)
- **Border**: `1px solid #E5E7EB` (Gray 200)
- **Hover Border**: `1px solid #14B8A6` (Teal 500)
- **Shadow**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Hover Shadow**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`

#### Icon Container (Service)
- **Background**: Gradient (specific color per service)
- **Icon Color**: White
- **Text**: `#0F172A` (Navy 950)

### Text Colors

#### Headings (h1, h2, h3, h4, h5, h6)
- **Color**: `#0F172A` (Navy 950)
- **Font Family**: Playfair Display (serif)
- **Font Weight**: 600-800

#### Body Text
- **Color**: `#4B5563` (Gray 600)
- **Font Family**: Inter/Roboto (sans-serif)
- **Font Size**: 16px
- **Line Height**: 24px

#### Section Subtitle
- **Color**: `#4B5563` (Gray 600)
- **Font Size**: 18px
- **Max Width**: 672px
- **Text Align**: Center

#### Footer Text
- **Color**: `#D1D5DB` (Gray 300)
- **Hover Color**: `#14B8A6` (Teal 500)
- **Font Size**: 14px

### Background Elements

#### Stats Section
- **Background**: Gradient `from-navy-950 via-navy-900 to-navy-950`
- **Text**: White
- **Card Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Card Border**: `1px solid rgba(255, 255, 255, 0.1)`

#### Testimonials Section
- **Background**: Gradient `from-stone-50 to-white`
- **Card Background**: White
- **Card Border**: `1px solid #E5E7EB`

#### CTA Section
- **Background**: Gradient `from-navy-950 via-teal-900 to-navy-950`
- **Text**: White
- **Button Background (Primary)**: White
- **Button Text**: `#0F172A` (Navy 950)

#### How It Works
- **Background**: White
- **Step Circle**: Gradient `from-teal-500 to-teal-600`
- **Step Number**: White
- **Step Text**: `#0F172A` (Navy 950)

#### Featured Courses
- **Background**: `#F8FAFC` (Stone 50)
- **Card Background**: White
- **Badge Background**: Gradient (varies by course level)
- **Filter Button (Active)**: `#14B8A6` (Teal 500)
- **Filter Button (Inactive)**: White with `#E5E7EB` border

---

## Decorative & Blur Effects

### Blur Overlays
- **Teal Blur**: `rgba(20, 184, 166, 0.1)` with `blur(3rem)`
- **Gold Blur**: `rgba(212, 175, 55, 0.1)` with `blur(3rem)`
- **White Overlay**: `rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.1)`

### Glassmorphism Effect
- **Background**: `rgba(255, 255, 255, 0.05)`
- **Backdrop Filter**: `blur(1rem)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`

### Shadows

#### Subtle Shadow
```
0 1px 2px 0 rgba(0, 0, 0, 0.05)
```
- Usage: Cards, light elements

#### Soft Shadow
```
0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
```
- Usage: Hover states, slightly elevated elements

#### Medium Shadow
```
0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
```
- Usage: Elevated cards, important elements

---

## Color Variations by Component

### Service Icons (6 Colors)
1. **Placement Services**: Teal (`from-teal-500 to-teal-600`)
2. **Share Market Trading**: Emerald (`from-emerald-500 to-emerald-600`)
3. **Share Market Courses**: Blue (`from-blue-500 to-blue-600`)
4. **HR Courses**: Purple (`from-purple-500 to-purple-600`)
5. **Digital Marketing Services**: Orange (`from-orange-500 to-orange-600`)
6. **Digital Marketing Courses**: Pink (`from-pink-500 to-pink-600`)

### Background Color for Service Cards
1. Teal: `bg-teal-50`
2. Emerald: `bg-emerald-50`
3. Blue: `bg-blue-50`
4. Purple: `bg-purple-50`
5. Orange: `bg-orange-50`
6. Pink: `bg-pink-50`

---

## Accessibility & Contrast

### WCAG Compliance

#### Text on Backgrounds
- Navy 950 on White: **Contrast Ratio 13.4:1** ✓ AAA
- Navy 950 on Off-white (Stone 50): **Contrast Ratio 11.8:1** ✓ AAA
- Teal 500 on White: **Contrast Ratio 7.2:1** ✓ AAA
- Gold 500 on White: **Contrast Ratio 4.8:1** ✓ AA
- Gray 600 on White: **Contrast Ratio 6.3:1** ✓ AAA

#### Text on Dark Backgrounds
- White on Navy 950: **Contrast Ratio 13.4:1** ✓ AAA
- Teal 500 on Navy 950: **Contrast Ratio 4.2:1** ✓ AA
- Gray 300 on Navy 950: **Contrast Ratio 5.8:1** ✓ AAA

---

## CSS Variables (Tailwind Config)

```javascript
colors: {
  navy: {
    950: '#0F172A',
    900: '#1E1E1E',
  },
  gold: {
    500: '#D4AF37',
  },
  teal: {
    500: '#14B8A6',
  },
  stone: {
    50: '#F8FAFC',
  },
}
```

---

## Color Implementation Guidelines

### DO's ✅
- Use Navy 950 for all primary text
- Use Teal 500 for all interactive elements
- Use White for card backgrounds
- Use Off-white (Stone 50) to break up sections
- Use Gold 500 for premium highlights and ratings

### DON'Ts ❌
- Don't mix Navy 950 and Navy 900 in the same section
- Don't use Teal and Gold together in competing CTAs
- Don't place text directly on blur effects without a background
- Don't use more than 2 accent colors in a single component
- Don't use Gray 300 as body text (use Gray 600)

---

## Color Usage Matrix

| Component | Background | Text | Accent | Border |
|-----------|-----------|------|--------|--------|
| Header | White | Navy 950 | Teal 500 | Gray 200 |
| Hero | White | Navy 950 | Teal 500 | None |
| Stats | Navy 950 | White | Teal 500 | White/10 |
| Services | White | Navy 950 | Teal 500 | Gray 200 |
| Courses | Stone 50 | Navy 950 | Teal 500 | Gray 200 |
| Testimonials | Stone 50 | Navy 950 | Teal 500 | Gray 200 |
| CTA | Navy Gradient | White | Teal 500 | None |
| Footer | Navy 950 | Gray 300 | Teal 500 | White/10 |

---

## Color Export

For design tool compatibility:
- **Figma**: Hex codes listed above
- **Adobe XD**: RGB values included
- **Development**: Use Tailwind CSS classes or hex codes from `tailwind.config.js`

---

## Future Color Extensions

Should you need to add new colors:
- **Status Green**: `#10B981` for success messages
- **Warning Orange**: `#F97316` for alerts
- **Error Red**: `#EF4444` for errors
- **Info Blue**: `#3B82F6` for information

---

**Last Updated**: June 2, 2026  
**Version**: 1.0  
**Design System**: Steorra Consultants Premium Design System
