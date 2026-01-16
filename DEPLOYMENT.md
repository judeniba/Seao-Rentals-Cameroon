# Deployment Guide

## SEAO-RENTALS Cameroon Equipment Rental Platform

This guide covers deploying the SEAO-RENTALS platform to production.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- Hosting provider account (Vercel, Netlify, or similar)

## Environment Setup

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Application
VITE_APP_TITLE="SEAO-RENTALS Cameroun"
VITE_APP_DESCRIPTION="Professional equipment rental platform"

# Contact Information
VITE_CONTACT_EMAIL="seaointeralia1@gmail.com"
VITE_CONTACT_PHONE="+237697661092"
VITE_CONTACT_WHATSAPP="+237697661092"

# Payment Integration (Optional - for production)
# VITE_ORANGE_MONEY_API_KEY="your-orange-money-api-key"
# VITE_MTN_MOMO_API_KEY="your-mtn-momo-api-key"

# Analytics (Optional)
# VITE_GA_TRACKING_ID="your-google-analytics-id"
```

## Build Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 3. Preview Production Build

```bash
npm run preview
```

This serves the production build locally at `http://localhost:4173`

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Configure**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

3. **Configure** (`netlify.toml`):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**:
   ```typescript
   export default defineConfig({
     base: '/cameroon-equipment-r/',
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### Option 4: Custom Server (VPS/Cloud)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Serve with nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/seao-rentals/dist;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Enable gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

3. **Set up SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment Checklist

### Essential Checks

- [ ] Application loads correctly at production URL
- [ ] All equipment categories display properly
- [ ] Booking flow works end-to-end
- [ ] Agreement signing functionality works
- [ ] Backend portal accessible with admin credentials
- [ ] Language toggle (French/English) works
- [ ] Mobile responsiveness verified
- [ ] WhatsApp links work correctly
- [ ] Contact forms submit successfully

### Performance Optimization

- [ ] Enable CDN for static assets
- [ ] Configure cache headers
- [ ] Enable Brotli/Gzip compression
- [ ] Optimize images (convert to WebP)
- [ ] Enable HTTP/2
- [ ] Set up monitoring (Sentry, LogRocket)

### Security Configuration

- [ ] Configure HTTPS/SSL certificate
- [ ] Set security headers (CSP, HSTS, X-Frame-Options)
- [ ] Enable CORS if needed for API calls
- [ ] Configure rate limiting
- [ ] Set up DDoS protection
- [ ] Regular security audits (`npm audit`)

### SEO & PWA

- [ ] Submit sitemap to Google Search Console
- [ ] Verify PWA functionality (offline mode)
- [ ] Test PWA installation on mobile devices
- [ ] Configure robots.txt
- [ ] Set up Google Analytics/Plausible
- [ ] Add structured data (JSON-LD)

## Mobile Payment Integration

### Production Setup

For production deployment, you'll need to integrate with actual payment gateways:

#### Orange Money API
1. Register at [Orange Developer Portal](https://developer.orange.com/)
2. Obtain API credentials
3. Add credentials to environment variables
4. Update payment service to use production endpoints

#### MTN Mobile Money API
1. Register at [MTN Developer Portal](https://momodeveloper.mtn.com/)
2. Subscribe to Collection API
3. Obtain API key and user ID
4. Configure production endpoints

## Monitoring & Maintenance

### Application Monitoring

**Recommended Tools**:
- **Sentry**: Error tracking and performance monitoring
- **Google Analytics**: User behavior and traffic analysis
- **Uptime Robot**: Availability monitoring
- **LogRocket**: Session replay and debugging

### Regular Updates

```bash
# Check for dependency updates
npm outdated

# Update dependencies
npm update

# Security audit
npm audit

# Fix security issues
npm audit fix
```

### Backup Strategy

- **Code**: Git repository (GitHub)
- **User Data**: Regular KV storage exports
- **Agreements**: Download signed agreements weekly
- **Database**: If using external DB, set up automated backups

## Troubleshooting

### Build Failures

**Issue**: TypeScript errors during build
```bash
# Check for type errors
npm run build
```

**Solution**: Review error messages and fix type issues in source files

### Runtime Errors

**Issue**: KV storage not working
- Verify GitHub Spark environment is properly configured
- Check browser console for storage errors
- Clear browser storage and test again

**Issue**: Payment flow not working
- Verify mobile money API credentials
- Check network requests in browser DevTools
- Review payment service logs

### Performance Issues

**Issue**: Slow page load
- Audit bundle size: `npm run build`
- Enable code splitting for large components
- Optimize images and assets
- Enable CDN and compression

## Support & Contact

For deployment support or questions:
- **Email**: seaointeralia1@gmail.com
- **WhatsApp**: +237 697 661 092
- **GitHub Issues**: [Report a problem](https://github.com/SEAO-INTERALIA/cameroon-equipment-r/issues)

## Version History

- **v1.0.0** - Initial production release
  - 58 integrated features
  - Bilingual support (French/English)
  - Full booking and agreement system
  - Backend admin portal
  - PWA support

---

**SEAO-RENTALS** - Votre énergie, notre engagement / Your energy, our commitment
