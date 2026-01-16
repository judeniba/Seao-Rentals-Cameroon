# Agreement System - Quick Reference Guide

## Access
**Backend Portal → Agreements Tab** (6 sub-tabs)

---

## 1. Rental Agreement Tab
Customize base rental agreement template
- Edit 12 standard sections
- Add custom sections
- Insert 24 dynamic variables
- Preview before saving
- Version control (last 10 versions)
- Download as .txt file
- Duplicate for variations

---

## 2. Installation Agreement Tab
Customize base installation agreement template
- Edit editable sections
- 4 protected strict safety sections (cannot edit)
- Add custom sections
- Insert 24 dynamic variables
- Preview before saving
- Version control
- 12 strict terms at bottom (non-editable)

---

## 3. Signed Agreements Tab
View all customer-signed agreements
- Filter by type (rental/installation)
- Search by customer name
- View full agreement details
- Download as HTML document
- See signature with timestamp
- Check signature method used
- View IP address and verification data
- 3 sample agreements included by default

---

## 4. Email Templates Tab ⭐ NEW
Create email templates for sending agreements
- Unlimited templates
- Choose language (EN/FR)
- Target rental, installation, or both
- Full HTML editor support
- Insert any of 24 variables
- Live preview with sample data
- Activate/deactivate templates
- 2 professional templates included

**Default Templates:**
1. Rental Agreement - English
2. Contrat de Location - Français

---

## 5. Multi-Language Tab ⭐ NEW
Manage language-specific agreement versions
- Toggle between English and French
- Separate templates per language
- Full professional translations included
- Edit translations as needed
- Duplicate for variations
- Independent versioning per language

**Pre-loaded:**
- English rental agreement (12 sections)
- French rental agreement (12 sections translated)
- English installation agreement (12 sections)
- French installation agreement (12 sections translated)

---

## 6. By Category Tab ⭐ NEW
Equipment category-specific templates
- 6 equipment categories:
  - ⚡ Generators
  - 📍 GPS Trackers
  - 🔨 Power Tools
  - 🔧 Hand Tools
  - 🏗️ Construction Equipment
  - 🦺 Safety Equipment
- Category-specific safety clauses
- Pre-configured relevant sections
- Customize per category needs
- Unlimited templates per category
- Duplicate and modify easily

**Generator Templates Include:**
- Fuel requirements
- Noise regulations
- Ventilation requirements
- Load capacity warnings
- Carbon monoxide safety
- Electrical connection specs

---

## 24 Dynamic Variables ⭐ EXPANDED

### Customer Info
- `{{CUSTOMER_NAME}}`
- `{{CUSTOMER_EMAIL}}`
- `{{CUSTOMER_PHONE}}`

### Equipment
- `{{EQUIPMENT_NAME}}`
- `{{EQUIPMENT_ID}}`

### Rental Details
- `{{RENTAL_START_DATE}}`
- `{{RENTAL_END_DATE}}`
- `{{RENTAL_DURATION}}`
- `{{RENTAL_RATE}}`
- `{{TOTAL_COST}}`

### Services ⭐ NEW
- `{{DELIVERY_ADDRESS}}`
- `{{DELIVERY_FEE}}` ⭐
- `{{INSTALLATION_DATE}}`
- `{{INSTALLATION_FEE}}` ⭐
- `{{INSURANCE_TYPE}}` ⭐
- `{{INSURANCE_COST}}` ⭐
- `{{DEPOSIT_AMOUNT}}` ⭐
- `{{PAYMENT_METHOD}}` ⭐

### System
- `{{CURRENT_DATE}}`
- `{{AGREEMENT_VERSION}}`

### Company ⭐ NEW
- `{{COMPANY_NAME}}` ⭐
- `{{COMPANY_EMAIL}}` ⭐
- `{{COMPANY_PHONE}}` ⭐
- `{{SIGNATURE_DATE}}` ⭐

---

## Digital Signature Capture ⭐ NEW

### 3 Signature Methods:

#### 1. Typed Signature
- Customer types full name
- Rendered in cursive font
- Fastest method
- Mobile-friendly

#### 2. Drawn Signature
- Draw with mouse or finger
- HTML5 canvas
- Touch support
- Clear and restart
- Saved as image

#### 3. Uploaded Signature
- Upload existing signature
- JPG/PNG support
- Max 2MB
- Image preview
- Professional look

### Timestamp Verification ⭐ NEW
- Real-time clock display
- ISO 8601 timestamp
- Signature method tracked
- IP address captured
- User agent logged
- Legal audit trail
- Cannot be backdated

---

## Common Workflows

### Send Agreement Email
1. Backend Portal → Agreements → Email Templates
2. Select template (or create new)
3. Template auto-fills variables
4. Preview with sample data
5. Send to customer
6. Customer receives branded email
7. Click "View & Sign" button
8. Review agreement
9. Choose signature method
10. Sign with timestamp
11. Both parties get confirmation

### Create Category Template
1. Backend Portal → Agreements → By Category
2. Select category (e.g., Generators)
3. Click "New Rental Template"
4. System adds category-specific sections
5. Customize as needed
6. Save template
7. Use for all equipment in category

### Setup Multi-Language
1. Backend Portal → Agreements → Multi-Language
2. Toggle to desired language
3. Review pre-loaded translations
4. Customize if needed
5. Save language version
6. System auto-selects by customer preference

---

## Best Practices

### Variables
- Always use {{VARIABLE_NAME}} syntax
- Test preview before sending
- Keep variable names readable
- Document custom variables

### Email Templates
- Test in multiple email clients
- Use inline styles only
- Keep images small
- Include clear CTA buttons

### Multi-Language
- Review translations with native speakers
- Keep terminology consistent
- Test both languages regularly
- Document translation choices

### Category Templates
- Include all relevant safety warnings
- Update when regulations change
- Test with actual equipment names
- Get legal review when needed

### Digital Signatures
- Explain options to customers
- Verify timestamp is current
- Store securely in KV
- Include in downloads

---

## Data Storage

All agreement data stored in KV:

```
rental-agreement                     // Base rental template
installation-agreement               // Base installation template
signed-agreements                    // All signed agreements
agreement-history                    // Version history
agreement-email-templates           // Email templates ⭐ NEW
rental-agreements-by-lang           // Language templates ⭐ NEW
installation-agreements-by-lang     // Language templates ⭐ NEW
rental-agreements-by-category       // Category templates ⭐ NEW
installation-agreements-by-category // Category templates ⭐ NEW
```

---

## Keyboard Shortcuts

- `Ctrl/Cmd + S` - Save current agreement
- `Ctrl/Cmd + P` - Preview agreement
- `Ctrl/Cmd + D` - Duplicate current template
- `Esc` - Close current dialog

---

## Troubleshooting

### Variables not replacing?
- Check syntax: `{{VARIABLE_NAME}}`
- Ensure no extra spaces
- Verify variable name is correct
- Check if data is being passed

### Email template not sending?
- Verify template is activated
- Check HTML is valid
- Test preview first
- Ensure recipient email is valid

### Signature not capturing?
- Check canvas permissions
- Try different signature method
- Verify browser supports HTML5
- Clear browser cache

### Translation not showing?
- Select correct language
- Check template exists for that language
- Verify language toggle
- Refresh page

### Category template missing sections?
- Check selected category
- Verify template was saved
- Try duplicating default template
- Re-create if corrupted

---

## Support

For issues or questions:
- 📧 Email: seaointeralia1@gmail.com
- 📞 Phone: +237 697 661 092
- 💬 WhatsApp: +237 697 661 092

---

## Feature Summary

✅ 24 dynamic variables (was 14)
✅ Email templates with HTML support
✅ Digital signatures (3 methods)
✅ Multi-language (EN/FR)
✅ Category-specific templates (6 categories)
✅ Timestamp verification
✅ Version control
✅ Professional translations
✅ Live previews
✅ Unlimited customization

**Total Agreement Features**: 20+
**Platform Total**: 58 features
