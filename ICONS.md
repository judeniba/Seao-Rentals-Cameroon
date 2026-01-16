# PWA Icons Setup Guide

## Current Icon Status

The PWA manifest references two icon files:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

## Temporary Solution

An SVG template icon (`icon.svg`) has been created in the `public/` folder with the SEAO-RENTALS branding colors.

## To Add Production Icons

### Option 1: Use Online Icon Generator

1. Visit [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator)
2. Upload your company logo or design
3. Generate icons in all required sizes
4. Download and replace files in `public/` folder

### Option 2: Use ImageMagick (Command Line)

If you have a logo file (e.g., `logo.png`):

```bash
# Install ImageMagick
sudo apt-get install imagemagick  # Linux
brew install imagemagick          # macOS

# Generate icons
convert logo.png -resize 192x192 public/icon-192.png
convert logo.png -resize 512x512 public/icon-512.png
```

### Option 3: Use Design Software

Create icons manually in:
- **Photoshop/GIMP**: Export as PNG at 192x192 and 512x512
- **Figma/Sketch**: Export as PNG at 2x resolution
- **Inkscape**: For vector graphics, export to PNG

## Icon Design Guidelines

### Colors (SEAO-RENTALS Brand)
- Primary: Deep Navy Blue (#3b3f5c)
- Secondary: Sky Blue (#60a5fa)
- Accent: Orange (#f97316)

### Design Tips
- **Keep it simple**: Icon should be recognizable at small sizes
- **Use contrast**: Ensure icon stands out on various backgrounds
- **Consider maskable**: Add safe zone (20% padding) for adaptive icons
- **Test on devices**: Verify appearance on iOS and Android

### Recommended Content
- Company initials "SEAO" or "SR"
- Generator/equipment symbol
- Lightning bolt (energy theme)
- Simple geometric shape with brand colors

## Icon Sizes Explained

- **192x192**: Home screen icon on Android
- **512x512**: Splash screen and app listing

### Additional Sizes (Optional)

For comprehensive PWA support, consider adding:
- 72x72, 96x96, 128x128, 144x144, 152x152, 180x180, 384x384

Update `public/manifest.json` when adding more sizes:

```json
{
  "icons": [
    {
      "src": "/icon-72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    // ... more sizes
  ]
}
```

## Current Status

✅ Manifest.json configured
✅ SVG template created
⚠️ PNG icons need to be generated from logo
⚠️ Consider adding favicon.ico for browser tabs

## Next Steps

1. Obtain/create company logo in high resolution
2. Generate PNG icons at required sizes
3. Replace placeholder SVG with actual PNGs
4. Test PWA installation on mobile devices
5. Verify icons appear correctly on home screen

---

**Note**: The SVG icon serves as a placeholder. For production, use properly sized PNG files with your actual logo/branding.
