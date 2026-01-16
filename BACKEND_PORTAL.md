# Backend Portal & Social Media Integration

## Features Added

### 1. Social Media Links
- Added social media icons to the footer (Facebook, Instagram, Twitter, LinkedIn)
- Each icon is styled consistently with the design system
- Links are properly configured with target="_blank" and rel="noopener noreferrer"
- Icons are displayed in a "Follow Us" section in the footer

### 2. Backend Portal
A comprehensive backend management system accessible only to the app owner.

#### Access Control
- Only users with `isOwner` permission can access the backend portal
- Access button appears in the Hero component for authorized users
- Portal displays an access denied screen for non-owners

#### Management Sections

1. **Analytics Overview**
   - Total revenue tracking
   - Active rentals count
   - Customer metrics
   - Completed rentals statistics
   - Recent activity feed

2. **Rental Management**
   - View all rental requests
   - Filter by status (pending, confirmed, completed, cancelled)
   - Search by customer or equipment name
   - Approve or reject pending requests
   - Mark rentals as completed

3. **Equipment Management**
   - View equipment inventory
   - Filter by category and status
   - See pricing and availability
   - Quick access to edit and maintenance options

4. **Customer Management**
   - View all customer profiles (individual and business)
   - Search by name, email, or company
   - See customer verification status
   - View customer join date and details

5. **Delivery Management**
   - Track active deliveries
   - Update delivery status (pending → preparing → in-transit → delivered)
   - View driver information
   - Track estimated delivery times

6. **Payment Management**
   - View all invoices
   - Track total revenue and pending payments
   - Filter by payment status
   - Quick access to invoice details

7. **Maintenance Management**
   - View maintenance records
   - Track scheduled, in-progress, and completed maintenance
   - Update maintenance status
   - View technician assignments and costs

8. **Promotions Management**
   - Manage discount codes
   - Control seasonal promotions
   - Activate/deactivate promotions
   - Track usage statistics

9. **Loyalty Management**
   - View loyalty program members
   - Track points and tier distribution
   - See customer rental history and spending

10. **Reviews Management**
    - Monitor customer reviews
    - View ratings and comments
    - Manage review verification status
    - Delete inappropriate reviews

11. **Notifications Management**
    - View SMS notification history
    - Track delivery status of messages
    - Monitor notification types

12. **Communications Management**
    - Send single SMS to specific customers
    - Send bulk messages to all customers
    - Target specific groups (pending/active rentals)
    - Message templates and tracking

## Technical Implementation

- Uses `useKV` hook for persistent data storage
- Implements role-based access control using `spark.user()`
- Responsive design with mobile-friendly tabs
- Real-time updates using React state management
- Toast notifications for user feedback
- Comprehensive table views with filtering and search

## Usage

1. **For Owners**: Click the gear icon in the Hero section to open the backend portal
2. **Navigation**: Use the tabbed interface to switch between management sections
3. **Close**: Click the X button in the top-right corner to exit the portal
