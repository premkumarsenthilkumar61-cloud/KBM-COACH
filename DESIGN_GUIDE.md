# KBM COACH Portfolio - Design Guide

## 🎨 Brand Colors

### Primary Colors
- **Primary Orange**: `#ff6b35` - Main brand color used for CTAs, highlights, and primary elements
- **Primary Dark**: `#e55a2b` - Darker shade for hover states and depth
- **Secondary Navy**: `#004e89` - Professional corporate color for contrast
- **Secondary Dark**: `#003d6b` - Darker navy for depth and variations

### Accent Colors
- **Gold**: `#f7b731` - Used for special highlights, badges, and ratings
- **Success Green**: `#2ecc71` - For "After" badges and positive indicators
- **WhatsApp Green**: `#25D366` - Specific for WhatsApp integration

### Neutral Colors
- **Dark**: `#1a1a2e` - Headers and footer background
- **Text Dark**: `#2d3436` - Primary text color
- **Text Light**: `#636e72` - Secondary text, descriptions
- **Light Background**: `#f8f9fa` - Section backgrounds
- **White**: `#ffffff` - Clean backgrounds
- **Border**: `#e1e8ed` - Subtle borders and dividers

## 📐 Layout Structure

### Sections
1. **Hero Section** - Full viewport height with overlay
2. **About Us** - Two-column grid layout
3. **Services** - Four-column responsive grid
4. **Portfolio** - Three-column masonry grid with filters
5. **Work Process** - Five-step horizontal timeline
6. **Why Choose Us** - Six-card grid layout
7. **Testimonials** - Three-column card layout
8. **Contact** - Two-column (info + map)
9. **Footer** - Four-column grid

### Container
- Max-width: `1200px`
- Padding: `0 20px`

### Spacing
- Section Padding: `100px 0`
- Element Gap: `30px` (default grid gap)

## 🔤 Typography

### Font Family
- Primary: `'Poppins', sans-serif` (Google Fonts)

### Font Sizes
- **Hero Title**: `72px` (Desktop) / `36px` (Mobile)
- **Hero Subtitle**: `36px` (Desktop) / `20px` (Mobile)
- **Section Title**: `42px` (Desktop) / `28px` (Mobile)
- **Card Title**: `22px`
- **Body Text**: `16px`
- **Small Text**: `14px`
- **Tiny Text**: `12px`

### Font Weights
- Light: `300`
- Regular: `400`
- Semi-bold: `600`
- Bold: `700`
- Extra-bold: `800`

## 🎯 Component Styles

### Buttons
- **Primary Button**: 
  - Background: Gradient (Orange)
  - Padding: `15px 40px`
  - Border-radius: `50px` (pill shape)
  - Font-weight: `600`
  - Transform on hover: `translateY(-3px)`

- **Secondary Button**:
  - Background: Transparent
  - Border: `2px solid white`
  - Hover: White background with primary color text

### Cards
- Border-radius: `20px`
- Box-shadow: `0 4px 16px rgba(0, 0, 0, 0.12)`
- Hover effect: `translateY(-10px)` with enhanced shadow
- Padding: `40px 30px`

### Icons
- Icon Container Size: `80px x 80px`
- Icon Font Size: `36px`
- Border-radius: `20px` (squares) or `50%` (circles)
- Background: Gradient or solid color

## 📱 Responsive Breakpoints

### Desktop Large
- `1200px` and above - Full layout

### Desktop
- `1024px` - Standard desktop, some grid adjustments

### Tablet
- `768px - 1023px` - Two-column layouts, adjusted typography

### Mobile
- `Below 768px` - Single column, hamburger menu, stacked layouts

### Small Mobile
- `Below 480px` - Further reduced typography and spacing

## 🎭 Animations & Effects

### Transitions
- Default: `all 0.3s ease`
- Cards: `0.6s ease` for scroll animations

### Hover Effects
1. **Cards**: Lift up (`translateY(-10px)`)
2. **Buttons**: Lift + enhanced shadow
3. **Images**: Scale (`scale(1.05)`)
4. **Links**: Color change + underline animation
5. **Icons**: Rotate or bounce on certain elements

### Scroll Animations
- Fade in + slide up from bottom
- Intersection Observer API
- Threshold: `0.1`
- Offset: `-100px`

### Special Animations
- **Hero Logo**: Bounce animation (2s infinite)
- **Scroll Arrow**: Float animation (3s infinite)
- **Counter Stats**: Number count-up on scroll
- **Navigation**: Slide-in underline on hover

## 🖼️ Image Guidelines

### Portfolio Images
- Recommended size: `800x600px`
- Aspect ratio: `4:3`
- Format: JPEG or WebP
- Optimization: Compress for web

### Hero Background
- Recommended size: `1920x1080px`
- Format: JPEG
- Quality: High-resolution, compressed

### Workshop/Facility
- Recommended size: `800x600px`
- Show clean, professional environment
- Good lighting and composition

## 🎨 Gradient Styles

### Primary Gradient
```css
linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)
```

### Secondary Gradient
```css
linear-gradient(135deg, #004e89 0%, #003d6b 100%)
```

### Overlay Gradient
```css
linear-gradient(135deg, rgba(0, 78, 137, 0.9) 0%, rgba(255, 107, 53, 0.8) 100%)
```

## 🔍 SEO & Accessibility

### Meta Tags
- Title tag included
- Meta description included
- Viewport meta tag for responsive design
- Charset UTF-8

### Accessibility
- ARIA labels on buttons
- Alt text on images
- Semantic HTML5 elements
- Keyboard navigation support
- Sufficient color contrast

### Performance
- Lazy loading images
- Optimized CSS and JS
- Minimal external dependencies
- Fast page load

## 📄 Print Optimization

### Print-specific Styles
- Hide navigation and interactive elements
- Optimize font sizes for print
- Ensure all sections are visible
- Page break controls
- Link URLs displayed

### Recommended Print Settings
- Paper size: A4
- Orientation: Portrait
- Margins: Default
- Background graphics: On
- Scale: 100%

## 🎯 Call-to-Actions (CTAs)

### Primary CTAs
1. "Our Services" button in hero
2. "Get in Touch" button in hero
3. WhatsApp contact buttons
4. Phone number links

### Secondary CTAs
1. Navigation links
2. Footer links
3. Email links
4. Social media icons

## 🌟 Special Features

### Badges & Labels
- "BEFORE/AFTER" badges on portfolio items
- "FLAGSHIP SERVICE" badge on featured service
- "15+ Years" experience badge in About section
- Star ratings in testimonials

### Interactive Elements
1. Portfolio filter buttons
2. Scroll-to-top button
3. Mobile hamburger menu
4. Smooth scroll navigation
5. Hover overlays on portfolio items

## 📊 Statistics Display

### Counter Animation
- Appears on scroll
- Counts up from 0
- Format: Number + Symbol (e.g., "500+", "100%")

### Stat Cards
- Grid layout (3 columns)
- Icon + Number + Label
- Background color on hover
- Transform effect

## 🗺️ Contact Section

### Information Cards
- Icon with colored background
- Clear hierarchy
- Clickable phone/email links
- WhatsApp integration
- Google Maps embed

### Map Integration
- Full-width iframe
- Height: 450px
- Location: Pudukkottai, Tamil Nadu
- Responsive on mobile

## 📱 Mobile Optimization

### Mobile Navigation
- Hamburger icon (3 lines)
- Full-screen menu overlay
- Close on link click
- Smooth transitions

### Touch Interactions
- Larger tap targets (min 44x44px)
- Swipe support on portfolio
- Touch-friendly spacing
- No hover-dependent functionality

---

**Design Philosophy**: Clean, modern, professional, and conversion-focused. The design emphasizes trust, quality, and ease of contact while showcasing the company's work and expertise.
