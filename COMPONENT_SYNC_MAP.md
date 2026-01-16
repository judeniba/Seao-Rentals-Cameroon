# SEAO-RENTALS Component Sync Map

## 🗺️ Complete Component Interaction Map

This document shows how every component connects and synchronizes with others.

---

## 📱 Frontend Pages & Components

### **App.tsx** - Main Orchestrator
**Manages:**
- Equipment selection state
- Dialog visibility states
- Booking flow coordination
- Agreement triggering
- Data persistence

**Connected To:**
- All dialog components
- All data stores (KV)
- Equipment components
- Booking system
- Agreement system

---

## 🏗️ Component Hierarchy & Data Flow

### Level 1: Main App Container
```
App.tsx
├── Hero (with backend portal button)
├── CategoryNav
├── ServicesGrid
├── EquipmentShowcase
├── EquipmentComparison
├── CostCalculator
├── AvailabilityCalendar (with real booking data)
├── TestimonialsSection
├── Equipment Grid
│   └── EquipmentCard (multiple)
├── ContactFooter
└── Global Components
    ├── OnboardingTooltips
    ├── OfflineModeIndicator
    ├── SeasonalPromotionFloatingBanner
    └── RealTimeChatSupport
```

### Level 2: Dialog Components (Overlay)
```
Dialogs & Modals
├── EquipmentDetailDialog
│   ├── Equipment info display
│   ├── Book Now button → triggers BookingFormDialog
│   └── Request Quote button → triggers RentalInquiryForm
│
├── BookingFormDialog
│   ├── Customer information form
│   ├── Date selection
│   ├── Delivery/installation options
│   ├── Pricing calculator
│   ├── Availability checker (uses booking data)
│   └── onBookingCreated → triggers Agreement dialogs
│
├── DeliveryInstallationAgreement
│   ├── Extended terms display
│   ├── Safety requirements
│   ├── Signature capture (typed/drawn)
│   ├── Strict terms acceptance
│   └── onSigned → updates booking with agreement ID
│
├── AgreementSigningDialog
│   ├── Standard rental terms
│   ├── Signature collection
│   └── onSigned → updates booking with agreement ID
│
├── RentalInquiryForm
│   └── Quote request system
│
├── BackendPortal
│   ├── Admin authentication
│   └── 40+ backend management components
│
├── EquipmentDamageReporter
├── EquipmentReservationSystem
├── CustomerFeedbackSurvey
└── BulkDiscountCalculator
```

---

## 🔄 Data Synchronization Points

### Booking Data Flow
```
Component                    → Action                        → Updates
────────────────────────────────────────────────────────────────────────
EquipmentCard               → User clicks "Book Now"        → Opens BookingFormDialog
EquipmentDetailDialog       → User clicks "Book Now"        → Opens BookingFormDialog
AvailabilityCalendar        → User selects date + equipment → Opens BookingFormDialog

BookingFormDialog           → Form submitted                → Creates Booking in KV
                                                            → Triggers Agreement Dialog

DeliveryInstallationAgreement → Agreement signed            → Creates SignedAgreement
                                                            → Updates Booking.agreements
                                                            → Sets agreementsSigned = true

AgreementSigningDialog      → Agreement signed              → Creates SignedAgreement
                                                            → Updates Booking.agreements
                                                            → Sets agreementsSigned = true

AvailabilityCalendar        → Reads bookings KV             → Displays real availability
BackendPortal               → Reads bookings KV             → Shows all bookings
BookingManagement           → Reads bookings KV             → Manages bookings
```

### Equipment Data Flow
```
Component                    → Data Source                   → Displays
────────────────────────────────────────────────────────────────────────
EquipmentCard               → equipmentData + custom-equipment → Equipment cards
EquipmentDetailDialog       → selectedEquipment             → Detailed view
EquipmentShowcase           → equipmentData (featured)      → Showcase section
AvailabilityCalendar        → equipmentData + custom-equipment → Equipment selector
EquipmentSearch             → equipmentData + custom-equipment → Search results
BookingFormDialog           → selectedEquipment             → Pre-filled equipment
Backend/EquipmentManagement → custom-equipment KV           → CRUD operations
```

### Agreement Data Flow
```
Component                           → Action                  → Storage
────────────────────────────────────────────────────────────────────────
Backend/AgreementManagement         → Edit templates          → rental-agreement-template KV
                                                              → installation-agreement-template KV

DeliveryInstallationAgreement       → Load template          → Reads installation-agreement-template
                                    → User signs             → Writes to signed-agreements KV
                                    → Updates booking        → Updates bookings KV

AgreementSigningDialog              → Load template          → Reads rental-agreement-template
                                    → User signs             → Writes to signed-agreements KV
                                    → Updates booking        → Updates bookings KV

CustomerAgreementsDialog            → View history           → Reads signed-agreements KV
```

---

## 🎯 Key Integration Components

### 1. **AvailabilityCalendar**
**Syncs With:**
- `bookings` KV store
- `equipmentData` + `custom-equipment`
- `BookingFormDialog` (via onBookEquipment callback)

**Functions:**
- Displays real-time equipment availability
- Calculates date conflicts from actual bookings
- Allows direct booking from calendar

**Data Read:**
```typescript
const [bookings] = useKV<Booking[]>('bookings', [])
```

**Availability Logic:**
```typescript
const isDateInRange = (date, startDate, endDate) => {
  // Checks if date falls within booking range
}

const getAvailabilityForDate = (date) => {
  // Returns: 'available' | 'reserved' | 'unavailable'
  // Based on actual bookings for selected equipment
}
```

### 2. **BookingFormDialog**
**Syncs With:**
- `bookings` KV store (reads for availability check)
- Agreement dialogs (triggers after booking)
- Equipment data (receives selected equipment)

**Collects:**
- Customer name, email, phone
- National ID Card
- Emergency contact (name, phone, national ID)
- Rental dates
- Delivery location
- Special requirements
- Delivery/installation/insurance flags

**Flow:**
```typescript
onSubmit → BookingService.createBooking() → 
Save to KV → onBookingCreated callback →
Triggers appropriate agreement dialog
```

### 3. **DeliveryInstallationAgreement**
**Syncs With:**
- `installation-agreement-template` KV (reads template)
- `signed-agreements` KV (writes signed agreement)
- `bookings` KV (updates with agreement ID)
- Current booking state

**Features:**
- Customizable sections (edited in backend)
- Strict non-editable terms
- Safety requirements display
- Digital signature capture
- Real-time signature preview

**Signature Methods:**
- Typed: Customer types full name
- Drawn: Canvas-based signature drawing

### 4. **BackendPortal**
**Central Hub For:**
- Booking management and oversight
- Agreement template customization
- Equipment CRUD operations
- Customer relationship management
- Analytics and reporting
- Delivery tracking
- Payment management
- Communication hub
- Booking link generation

**Tabs:**
1. Analytics Overview
2. Rentals/Bookings Management
3. Equipment Management
4. Customer Management
5. Delivery Management
6. Payment Management
7. Notifications
8. Maintenance
9. Promotions & Loyalty
10. Reviews & Feedback
11. Communications
12. Agreements
13. Tasks & Issues
14. AI Insights
15. Settings

### 5. **BookingManagement** (Backend Component)
**Features:**
- View all bookings with filters
- Search by customer, equipment, booking number
- Filter by status (pending, confirmed, in-progress, completed, cancelled)
- Sort by date, customer, equipment
- View booking details
- Update booking status
- See linked agreements
- Export bookings

**Stats Display:**
- Total bookings
- Pending bookings
- Confirmed bookings
- In-progress bookings
- Completed bookings
- Revenue metrics

---

## 🔐 Data Persistence Map

### KV Store Keys & Usage

| Key | Type | Used By | Purpose |
|-----|------|---------|---------|
| `bookings` | `Booking[]` | App, Calendar, Backend | All booking records |
| `signed-agreements` | `SignedAgreement[]` | Agreement dialogs, Backend | Signed agreement documents |
| `custom-equipment` | `Equipment[]` | App, Equipment components | Admin-added equipment |
| `equipment-reviews` | `EquipmentReview[]` | Reviews components | Customer reviews |
| `promotions` | `Promotion[]` | Hero, Backend | Active promotions |
| `seasonal-promotions` | `SeasonalPromotion[]` | Banner, Backend | Seasonal campaigns |
| `rental-agreement-template` | `RentalAgreement` | Agreement dialogs, Backend | Customizable rental terms |
| `installation-agreement-template` | `InstallationAgreement` | Installation dialog, Backend | Customizable installation terms |
| `booking-links` | `BookingLink[]` | BookingLinkManager | Offline booking links |
| `chat-conversations` | `ChatConversation[]` | Chat support, Backend | Support conversations |

---

## 🚦 State Management Flow

### App.tsx State Variables
```typescript
// Equipment & Dialog States
const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null)
const [detailDialogOpen, setDetailDialogOpen] = useState(false)
const [inquiryFormOpen, setInquiryFormOpen] = useState(false)
const [bookingFormOpen, setBookingFormOpen] = useState(false)
const [showInstallationAgreement, setShowInstallationAgreement] = useState(false)
const [showRentalAgreement, setShowRentalAgreement] = useState(false)

// Current Context
const [currentBooking, setCurrentBooking] = useState<Booking | null>(null)

// Persistent Data (useKV)
const [bookings, setBookings] = useKV<Booking[]>('bookings', [])
const [signedAgreements, setSignedAgreements] = useKV<SignedAgreement[]>('signed-agreements', [])
const [customEquipment] = useKV<Equipment[]>('custom-equipment', [])
```

### Event Handlers
```typescript
// Equipment Selection
handleViewDetails(equipment) → Opens detail dialog
handleRequestRental(equipment) → Opens inquiry form
handleBookNow(equipment) → Opens booking form
handleBookFromDetails(equipment) → Opens booking form from detail dialog

// Booking Flow
handleBookingCreated(booking) → 
  1. Saves booking
  2. Sets currentBooking
  3. Triggers appropriate agreement dialog

// Agreement Flow
handleAgreementSigned(signedAgreement) →
  1. Saves signed agreement
  2. Updates booking with agreement ID
  3. Sets agreementsSigned flag
  4. Clears currentBooking
```

---

## 📊 Component Communication Patterns

### Pattern 1: Callback Props
```typescript
// Parent passes callback to child
<EquipmentCard onBookNow={handleBookNow} />
<AvailabilityCalendar onBookEquipment={handleBookNow} />
<BookingFormDialog onBookingCreated={handleBookingCreated} />
<AgreementSigningDialog onSigned={handleAgreementSigned} />
```

### Pattern 2: Shared State (KV)
```typescript
// Multiple components read same KV key
AvailabilityCalendar: const [bookings] = useKV('bookings')
BookingManagement: const [bookings] = useKV('bookings')
BookingFormDialog: const [bookings] = useKV('bookings')
// All see same data, updates propagate automatically
```

### Pattern 3: Context Passing
```typescript
// App maintains current context
setCurrentBooking(booking) // After booking created
// Pass to agreement dialogs
<DeliveryInstallationAgreement booking={currentBooking} />
// Clear after agreement signed
setCurrentBooking(null)
```

---

## 🎨 UI Component Relationships

### Equipment Display Components
```
EquipmentShowcase (featured items)
    ↓ uses
equipmentData (static) + custom-equipment (KV)
    ↓ displayed in
EquipmentCard (grid view)
    ↓ clicks open
EquipmentDetailDialog (detailed view)
    ↓ contains
Book Now button → BookingFormDialog
Request Quote → RentalInquiryForm
```

### Booking Components
```
BookingFormDialog
    ↓ validates against
AvailabilityCalendar data (bookings KV)
    ↓ creates
Booking object
    ↓ triggers
AgreementSigningDialog OR DeliveryInstallationAgreement
    ↓ produces
SignedAgreement
    ↓ links back to
Booking (updates agreements field)
```

### Backend Components
```
BackendPortal
    ├── BookingManagement
    │   └── Reads/Updates bookings KV
    ├── AgreementManagement
    │   └── Edits rental/installation templates
    ├── EquipmentManagement
    │   └── Manages custom-equipment KV
    └── All other admin functions
```

---

## ✅ Sync Verification Checklist

### Data Consistency
- [x] Bookings appear in calendar after creation
- [x] Custom equipment shows in all equipment lists
- [x] Agreements link correctly to bookings
- [x] Equipment status updates reflect everywhere
- [x] Backend sees all frontend actions

### User Flows
- [x] Browse equipment → Book → Sign → Complete
- [x] Calendar select → Book equipment directly
- [x] Backend create booking → Appears in calendar
- [x] Sign agreement → Booking updated with agreement ID

### Component Communication
- [x] EquipmentCard → App → BookingFormDialog
- [x] AvailabilityCalendar → App → BookingFormDialog
- [x] BookingFormDialog → App → AgreementDialog
- [x] AgreementDialog → App → Update Booking

---

## 🎯 Integration Success Indicators

1. ✅ **Equipment anywhere triggers booking anywhere**
   - Card, detail, calendar all lead to same booking flow

2. ✅ **Bookings update calendar immediately**
   - New booking shows as "reserved" instantly

3. ✅ **Agreements link to bookings properly**
   - Signed agreements have booking IDs
   - Bookings have agreement IDs

4. ✅ **Backend sees everything**
   - All customer bookings visible
   - All signed agreements accessible
   - All equipment manageable

5. ✅ **Data persists correctly**
   - Page reload maintains all data
   - No data loss between sessions

---

**All components are fully synchronized and integrated! 🎉**
