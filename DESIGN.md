---
name: BasicPosh Aesthetic
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#251a03'
  on-tertiary-container: '#938260'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#f6e0b8'
  tertiary-fixed-dim: '#d9c49e'
  on-tertiary-fixed: '#251a03'
  on-tertiary-fixed-variant: '#534528'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built on the philosophy of **Sophisticated Essentialism**. It balances the "Basic"—functional, clean, and unadorned—with the "Posh"—premium, intentional, and high-contrast. The target audience seeks quality and reliability across diverse product categories, from personal care to tech accessories.

The visual style is a blend of **Minimalism** and **Modern Corporate**, utilizing heavy whitespace to allow high-quality product photography to serve as the primary visual driver. The emotional response should be one of "attainable luxury": the interface stays out of the way to highlight product excellence, using subtle gold accents to signal premium value without being ostentatious.

## Colors

The palette is anchored by **Posh Black** (#121212), a deep charcoal that provides a high-contrast foundation for typography and structural elements. **Basic White** (#FFFFFF) serves as the primary canvas, ensuring a breathable and clean environment.

**Canvas Grey** (#F5F5F5) is used for secondary surfaces and background grouping to prevent visual fatigue. The accent color, **Champagne Gold** (#DBC6A0), is applied sparingly to high-value touchpoints—such as primary call-to-actions, member badges, or limited edition indicators—reinforcing the premium nature of this design system.

## Typography

This design system uses **Inter** exclusively to achieve a systematic, modern, and neutral appearance. The hierarchy relies on substantial weight differences and generous leading to ensure legibility and an editorial feel.

Headlines use semi-bold and bold weights with tighter letter-spacing for a "posh" impactful look, while body text utilizes standard weights with increased line heights to emphasize the "basic" focus on utility and comfort. Labels are often treated with uppercase transforms and slight tracking to distinguish them as functional metadata.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a curated, boutique-store aesthetic. A 12-column grid is used with a maximum container width of 1280px. 

Spacing is governed by an 8px base unit. To achieve the "Basic" minimalist look, internal component padding should be generous (typically 16px or 24px), while section margins should be large (64px+) to create distinct visual pauses between content blocks. On mobile, the grid collapses to a single column with 20px side margins, prioritizing large-scale product imagery.

## Elevation & Depth

Depth is conveyed through **Low-Contrast Outlines** and **Tonal Layers** rather than heavy shadows. This maintains the "Basic" clean-line aesthetic.

- **Level 0 (Base):** Basic White background.
- **Level 1 (Cards/Sections):** Subtle 1px borders in Canvas Grey or a slight background shift to Canvas Grey.
- **Level 2 (Interaction):** When an element is hovered or active, a very soft, highly-diffused ambient shadow (0px 4px 20px rgba(0,0,0,0.05)) may be applied to suggest lift without breaking the minimalist plane.
- **Overlays:** Modals and menus use a Posh Black backdrop with 20% opacity to maintain focus on the elevated element.

## Shapes

The design system utilizes **Soft** roundedness (0.25rem). This choice maintains the structural integrity and "clean lines" of the brand while avoiding the clinical feel of perfectly sharp corners. It strikes a balance between the precision of tech (phone cases) and the softness of lifestyle products (wigs and detergent). 

Large containers like product cards or hero sections should use the `rounded-lg` (0.5rem) token to feel more approachable.

## Components

### Buttons
- **Primary:** Solid Posh Black with White text. Rectangular with soft corners. No gradients.
- **Secondary:** Outline style using 1px Posh Black border.
- **Accent:** Solid Champagne Gold with Posh Black text, reserved for "Add to Cart" or "Buy Now."

### Input Fields
- Minimalist bottom-border only or a light 1px grey border. 
- Focus state switches the border to Posh Black.
- Labels are small, uppercase, and positioned above the field.

### Product Cards
- No borders or very light Canvas Grey borders.
- Image takes up 80% of the card area.
- Typography is left-aligned with a bold price point.

### Chips & Tags
- Used for categories (e.g., "Human Hair," "Eco-Friendly," "Hard Shell").
- Small font size, light grey background, no border.

### Navigation
- Global header is sticky, Basic White, with a thin 1px bottom border.
- Links use the `label-md` style for a refined, professional appearance.