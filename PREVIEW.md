# Preview Guide

## How to Preview SEAO-RENTALS Cameroon Platform

This guide explains different ways to preview and test the SEAO-RENTALS equipment rental platform.

## 🚀 Quick Start

### Quick Verification Script

Before starting, you can run our verification script to check your environment:

```bash
./scripts/verify-preview.sh
```

This will verify that Node.js, npm, and all dependencies are properly installed.

### Method 1: Development Preview (Recommended for Development)

Run the development server for live preview with hot-reloading:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

**Benefits:**
- ✅ Instant hot-reload on file changes
- ✅ Full development tools and debugging
- ✅ Fast iteration and testing
- ✅ All features available in real-time

### Method 2: Production Preview (Recommended for Testing)

Build the application and preview the production version:

```bash
npm install
npm run build
npm run preview
```

The production build will be served at `http://localhost:4173`

**Benefits:**
- ✅ Tests production-optimized build
- ✅ Verifies build process works correctly
- ✅ Performance testing with minified code
- ✅ Identifies build-time issues

### Method 3: Direct Build Inspection

After building, you can also serve the `dist` folder with any static server:

```bash
npm run build

# Option A: Using Python
python3 -m http.server 8000 -d dist

# Option B: Using Node.js http-server
npx http-server dist -p 8000

# Option C: Using serve
npx serve dist
```

## 📋 What to Preview

### Core Features to Test

#### 1. **Equipment Browsing**
- Navigate to equipment categories (Generators, GPS Trackers, Tools)
- View equipment details and specifications
- Check image galleries and descriptions
- Test filtering and search functionality

#### 2. **Booking System**
- Click "Book Now" on any equipment
- Fill out the booking form with customer details
- Select rental dates on the calendar
- Verify form validation works

#### 3. **Agreement Signing**
- Complete a booking to trigger agreement flow
- Review the rental agreement terms
- Test digital signature capture (draw, type, or upload)
- Verify agreement is saved after signing

#### 4. **Calendar Integration**
- Check the availability calendar
- Verify booked dates show as "reserved"
- Test date range selection
- Confirm real-time booking updates

#### 5. **Backend Portal** (Admin Only)
- Login with owner credentials
- Access via the Gear icon in header
- Review analytics dashboard
- Check booking and agreement management
- Test equipment CRUD operations

#### 6. **Language Toggle**
- Switch between French and English
- Verify all UI elements translate correctly
- Test forms and notifications in both languages
- Check agreement templates in both languages

#### 7. **Mobile Responsiveness**
- Resize browser window to mobile sizes
- Test touch interactions
- Verify mobile menu works
- Check form inputs on small screens

#### 8. **Additional Features**
- Loyalty rewards program
- Invoice management
- Payment information (Orange Money, MTN MoMo)
- WhatsApp quick booking
- Service requests
- Equipment comparison
- Package deals
- Insurance options

## 🎯 Preview Checklist

Use this checklist when previewing the platform:

### Visual & UI
- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Fonts load properly (Space Grotesk, Inter)
- [ ] Colors match brand palette (navy, sky blue, orange)
- [ ] Animations are smooth
- [ ] Icons render correctly (Phosphor Icons)
- [ ] No layout shifts or broken styles

### Functionality
- [ ] Equipment browsing works
- [ ] Booking flow completes successfully
- [ ] Agreement signing functions properly
- [ ] Calendar displays correctly
- [ ] Backend portal accessible (with credentials)
- [ ] Language toggle switches properly
- [ ] Forms validate input correctly
- [ ] Navigation menu works on all screen sizes

### Performance
- [ ] Pages load quickly
- [ ] No console errors in browser DevTools
- [ ] Smooth animations without lag
- [ ] Images load progressively
- [ ] App feels responsive

### Mobile Testing
- [ ] Responsive on phone screens (320px-480px)
- [ ] Responsive on tablets (768px-1024px)
- [ ] Touch targets are large enough
- [ ] Text is readable without zooming
- [ ] Forms work on mobile keyboards

### Browser Compatibility
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🔧 Troubleshooting Preview Issues

### Build Fails

**Error**: TypeScript compilation errors
```bash
# Run with type checking disabled
npm run build
```

**Error**: Missing dependencies
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Preview Server Won't Start

**Error**: Port already in use
```bash
# Kill process on port (Mac/Linux)
npm run kill
# or
lsof -ti:4173 | xargs kill

# Kill process on port (Windows)
netstat -ano | findstr :4173
taskkill /PID <process_id> /F
```

**Error**: Build directory not found
```bash
# Ensure build completed successfully
npm run build
# Then run preview
npm run preview
```

### Application Shows Errors

**Issue**: KV storage errors in console
- This is normal in preview mode
- Data persists in browser localStorage
- Clear browser storage to reset data

**Issue**: Features not working
- Check browser console for JavaScript errors
- Verify build completed without warnings
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Performance Issues

**Issue**: Slow loading
- Use production preview (`npm run preview`) instead of dev
- Check network tab in DevTools
- Verify images are optimized
- Consider CDN for static assets

## 📸 Screenshot Recommendations

When sharing previews, capture these key screens:

1. **Homepage** - Shows brand identity and equipment categories
2. **Equipment Detail** - Displays equipment information and booking CTA
3. **Booking Form** - Demonstrates user data collection
4. **Agreement Signing** - Shows digital signature capture
5. **Calendar View** - Displays availability and reservations
6. **Backend Dashboard** - Illustrates admin analytics
7. **Mobile View** - Proves responsive design
8. **Language Toggle** - Demonstrates bilingual support

## 🌐 Deployment Preview

For public preview links, deploy to a hosting platform:

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```
Gets a public preview URL instantly.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
npm run deploy
```
(After configuring gh-pages in package.json)

## 📱 Sharing Preview with Stakeholders

### For Technical Review
- Share the local preview URL (requires VPN/network access)
- Deploy to staging environment
- Record a screen recording walkthrough
- Share build artifacts (zip the `dist` folder)

### For Non-Technical Review
- Deploy to a public URL (Vercel, Netlify)
- Create a demo video with Loom or similar
- Prepare a PDF with screenshots and descriptions
- Schedule a live demo session

## 🎥 Demo Mode

To show the platform in its best light:

1. **Prepare Sample Data**
   - Add 3-5 equipment bookings
   - Sign a couple agreements
   - Generate some invoices

2. **Set Test Credentials**
   - Have owner login ready for backend demo
   - Test with both French and English

3. **Optimize Performance**
   - Clear browser cache before demo
   - Close unnecessary tabs
   - Use production build

4. **Prepare Talking Points**
   - 58 integrated features
   - Bilingual support
   - Complete booking to agreement flow
   - Real-time calendar integration
   - Backend administration tools

## 📚 Additional Resources

- [README.md](./README.md) - Platform overview and features
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment guide
- [QUICK_START.md](./QUICK_START.md) - Getting started guide
- [NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md) - Feature navigation
- [BACKEND_PORTAL.md](./BACKEND_PORTAL.md) - Admin portal guide

## 💡 Tips for Best Preview Experience

1. **Use Latest Browser** - Chrome, Edge, Firefox, or Safari latest versions
2. **Clear Cache** - Start fresh for accurate testing
3. **Enable JavaScript** - Required for React application
4. **Check Console** - Monitor for any warnings or errors
5. **Test All Features** - Follow the preview checklist above
6. **Try Both Languages** - Verify French and English work correctly
7. **Test Mobile** - Use browser DevTools device emulation
8. **Verify Data Persistence** - Bookings and agreements should save

## 🆘 Support

If you encounter issues during preview:

- **Email**: seaointeralia1@gmail.com
- **WhatsApp**: +237 697 661 092
- **GitHub Issues**: [Report a bug](https://github.com/judeniba/Seao-Rentals-Cameroon/issues)

---

**SEAO-RENTALS** - Votre énergie, notre engagement / Your energy, our commitment
