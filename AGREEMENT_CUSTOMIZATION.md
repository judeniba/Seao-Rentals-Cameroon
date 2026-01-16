# Agreement Customization Feature

## Overview
The backend portal now includes comprehensive rental and installation agreement customization capabilities, allowing administrators to tailor legal terms to their business needs while maintaining legal compliance.

## Access
- Navigate to Backend Portal → Agreements Tab
- Requires admin authentication

## Features

### 1. Dual Agreement Templates
- **Rental Agreement**: Equipment rental terms and conditions
- **Installation Agreement**: Installation acknowledgment with strict safety terms

### 2. Section Management
- **Edit Sections**: Modify section titles and content directly
- **Add Sections**: Create custom sections with "Add Section" button
- **Remove Sections**: Delete custom sections (protected sections cannot be removed)
- **Reorder Sections**: Use up/down arrows to reorganize section order
- **Protected Sections**: Critical safety/legal sections marked with lock icon (Installation Agreement has 4 non-editable strict safety sections)

### 3. Dynamic Variables (14 Available)
Access via "Variables" button to view all available placeholders:
- `{{CUSTOMER_NAME}}` - Customer full name
- `{{CUSTOMER_EMAIL}}` - Customer email address
- `{{CUSTOMER_PHONE}}` - Customer phone number
- `{{EQUIPMENT_NAME}}` - Equipment name
- `{{EQUIPMENT_ID}}` - Equipment ID
- `{{RENTAL_START_DATE}}` - Rental start date
- `{{RENTAL_END_DATE}}` - Rental end date
- `{{RENTAL_DURATION}}` - Rental duration
- `{{RENTAL_RATE}}` - Daily rental rate
- `{{TOTAL_COST}}` - Total rental cost
- `{{DELIVERY_ADDRESS}}` - Delivery location
- `{{INSTALLATION_DATE}}` - Installation date
- `{{CURRENT_DATE}}` - Current date
- `{{AGREEMENT_VERSION}}` - Agreement version

Variables are automatically replaced with actual values when customers sign agreements.

### 4. Version Control
- **Auto-Versioning**: Each save increments version (e.g., 1.0 → 1.1)
- **Version History**: Last 10 versions saved automatically
- **Restore**: Click "History" button to restore any previous version
- **Reset to Default**: Restore original template with one click

### 5. Preview & Export
- **Preview Mode**: View agreement as customers will see it
- **Download Template**: Export current template as .txt file
- **Duplicate**: Create a copy of current agreement to modify

### 6. Signed Agreements Management
- View all customer-signed agreements (3 sample agreements included)
- See customer details, equipment, and signature
- Download signed agreements as formatted HTML documents
- Filter by agreement type (Rental/Installation)

## Workflow

### Customizing Rental Agreement
1. Open Backend Portal → Agreements → Rental Agreement tab
2. Click on any section to edit title or content
3. Insert variables using {{VARIABLE_NAME}} syntax or copy from Variables dialog
4. Add custom sections with "Add Section" button
5. Reorder sections using arrow buttons
6. Preview changes with "Preview" button
7. Save changes (version auto-increments)

### Customizing Installation Agreement
1. Open Backend Portal → Agreements → Installation Agreement tab
2. Note: 4 strict safety sections are protected (red background, cannot edit)
3. Edit editable sections as needed
4. Add custom sections for business-specific requirements
5. Preview and save changes
6. Strict terms list at bottom cannot be modified (legal safety requirements)

### Viewing Signed Agreements
1. Open Backend Portal → Agreements → Signed Agreements tab
2. Browse list of customer-signed agreements
3. Click "View" to see full agreement details
4. Click "Download" to export as HTML document
5. Search/filter by customer name or agreement type

## Protected Sections (Installation Agreement)
These sections ensure legal compliance and cannot be edited:
1. **Prohibited Uses - Strict Terms**: Critical safety prohibitions
2. **Environmental and Safety Compliance - Strict Terms**: Legal compliance requirements
3. **Liability and Indemnification - Strict Terms**: Legal liability protections
4. **Final Acknowledgement and Acceptance - Strict Terms**: Binding legal acknowledgment

## Best Practices
- Always preview agreements before finalizing
- Use dynamic variables to personalize agreements
- Keep version history for legal compliance tracking
- Export templates before making major changes
- Test variable replacement with preview mode
- Document customization reasons in section content

## Sample Seed Data
The system includes 3 sample signed agreements:
1. **Jean-Paul Mbarga** - Diesel Generator 20 KVA Rental (AGR-2024-001)
2. **Marie Dupont** - Petrol Generator 5 KVA Installation (AGR-2024-002)
3. **Construction Plus SARL** - Hammer Drill Professional Rental (AGR-2024-003)

## Technical Details
- **Storage**: All agreements stored in KV storage
- **History Limit**: Last 10 versions per agreement type
- **File Formats**: Export as .txt (templates) or .html (signed agreements)
- **Variable Pattern**: `{{VARIABLE_NAME}}` syntax
- **Auto-Save**: No auto-save, manual save required
- **Responsive**: Fully mobile-responsive interface

## Future Enhancements
Suggested next steps:
- Add more dynamic variables (delivery fees, insurance options)
- Create email templates for sending agreements
- Add digital signature capture with timestamp validation
- Multi-language agreement templates
- Agreement templates for different equipment categories
