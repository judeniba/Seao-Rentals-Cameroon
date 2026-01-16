# Planning Guide

SEAO-RENTALS Cameroon is a professional equipment rental company providing generators, GPS trackers, and tools with on-site delivery, installation, and 24/7 maintenance services across Cameroon.

**Experience Qualities**:
1. **Professional** - The site must convey reliability and trustworthiness for businesses needing critical equipment rentals
2. **Bold** - Strong visual hierarchy with confident design choices that command attention and establish authority
3. **Accessible** - Clear information architecture making it effortless for customers to find equipment and contact the business

**Complexity Level**: Light Application (multiple features with basic state)
This has evolved beyond a simple content showcase into an interactive application with a cost calculator, availability calendar, equipment filtering, and inquiry forms. The focus is on providing practical tools that help users make rental decisions while maintaining clear information architecture.

## Essential Features

### Hero Section with Tagline
- **Functionality**: Large hero banner featuring company logo, bilingual tagline ("Votre énergie, notre engagement / Your energy, our commitment"), and prominent contact CTAs
- **Purpose**: Immediately establish brand identity and make contact methods accessible
- **Trigger**: Page load
- **Progression**: User sees hero → reads tagline → clicks contact CTA or scrolls to explore services
- **Success criteria**: Contact information is instantly visible; tagline communicates value proposition

### Service Category Navigation
- **Functionality**: Large button navigation for Generators, GPS Trackers, Tools, and Our Services
- **Purpose**: Quick access to main equipment categories customers are looking for
- **Trigger**: User wants to browse specific equipment type
- **Progression**: User clicks category button → view equipment in that category → access more details
- **Success criteria**: Categories are clearly labeled and visually distinct; navigation feels intuitive

### Services Overview Grid
- **Functionality**: Four service highlights with icons - Rental of Generators, On-Site Fast Delivery, Professional Installation, 24/7 Maintenance
- **Purpose**: Build trust by showcasing comprehensive service offerings beyond just equipment rental
- **Trigger**: User scrolls past hero
- **Progression**: User sees service icons → understands full value proposition → feels confident to inquire
- **Success criteria**: Services are scannable at a glance with clear iconography

### Equipment Showcase
- **Functionality**: Visual display of actual equipment (generator, GPS tracker, power drill) with product photography and pricing information
- **Purpose**: Show real equipment quality and variety available for rent with transparent pricing
- **Trigger**: User scrolls to equipment section
- **Progression**: User views equipment photos → sees pricing → gains confidence in quality → proceeds to contact
- **Success criteria**: High-quality product images that represent each category with clear pricing (Generators: 35,000 CFA/day including installation, additional 1,000 CFA for locations beyond 30 minutes drive)

### Cost Calculator
- **Functionality**: Interactive calculator allowing users to estimate rental costs based on equipment type, duration, quantity, and delivery location
- **Purpose**: Provide transparent pricing and help users budget for rentals before contacting sales
- **Trigger**: User wants to know total cost before inquiring
- **Progression**: User selects equipment type → chooses duration → enters quantity and drive time → sees instant cost breakdown → requests quote
- **Success criteria**: Real-time calculation with clear breakdown of base cost and delivery fees; accurate pricing matches company rates

### Availability Calendar
- **Functionality**: Interactive calendar showing real-time equipment availability with date selection and booking capability
- **Purpose**: Help users plan rental dates and reduce back-and-forth communication about availability
- **Trigger**: User wants to check if equipment is available for specific dates
- **Progression**: User selects equipment → views calendar → checks date availability → selects desired date → initiates reservation
- **Success criteria**: Clear visual indicators (available/reserved/unavailable); intuitive month navigation; responsive date selection

### Customer Testimonials
- **Functionality**: Social proof section displaying reviews from satisfied customers with ratings and equipment details
- **Purpose**: Build trust and credibility through authentic customer experiences
- **Trigger**: User scrolls through landing page
- **Progression**: User reads reviews → sees ratings and business names → gains confidence in service quality → proceeds to inquiry
- **Success criteria**: Real business names and specific equipment mentions; varied customer types (construction, transport, events); high ratings prominently displayed

### Contact Information Footer
- **Functionality**: Email, dual phone numbers with WhatsApp indication, Google Maps link, and service areas listed
- **Purpose**: Make it extremely easy to get in touch through multiple channels
- **Trigger**: User ready to inquire about rental
- **Progression**: User scrolls to footer → finds preferred contact method → initiates contact
- **Success criteria**: All contact methods clearly visible; WhatsApp prominently featured for local market

### Multilingual Support (French/English)
- **Functionality**: Language toggle button in header that switches all UI text between French and English
- **Purpose**: Serve both French-speaking and English-speaking customers in Cameroon
- **Trigger**: User clicks language toggle button
- **Progression**: User sees current language indicator → clicks toggle → all interface text switches to selected language → preference persists across visits
- **Success criteria**: Seamless language switching without page reload; all key content translated; language preference saved

### Rental Request History
- **Functionality**: Track and display all rental inquiries submitted by the user
- **Purpose**: Allow customers to review their previous rental requests and manage their equipment rental history
- **Trigger**: User clicks "View Rental History" button in header
- **Progression**: User opens history dialog → views list of past rental requests with status → can review details or remove old requests
- **Success criteria**: All submitted inquiries persist across sessions; clear status indicators; easy to manage

### WhatsApp Quick Booking
- **Functionality**: Direct WhatsApp message button pre-filled with equipment details
- **Purpose**: Provide fastest path to booking for mobile users via WhatsApp, the preferred messaging platform in Cameroon
- **Trigger**: User clicks WhatsApp button on equipment card or detail page
- **Progression**: User clicks WhatsApp button → opens WhatsApp with pre-filled message including equipment name and pricing → user sends message to initiate booking
- **Success criteria**: WhatsApp opens with correctly formatted message; equipment details auto-populated; works on mobile and desktop

### Mobile Payment Integration (Orange Money & MTN Mobile Money)
- **Functionality**: Integrated payment processing for Orange Money and MTN Mobile Money directly in the rental flow
- **Purpose**: Enable instant payment confirmation and reduce friction in rental booking process for Cameroonian customers
- **Trigger**: User submits rental inquiry form and chooses to proceed with payment
- **Progression**: User completes rental form → sees payment dialog → selects payment provider (Orange Money or MTN Momo) → enters mobile money phone number → initiates payment → receives confirmation on phone → payment status updates in real-time → rental confirmed
- **Success criteria**: Phone number validation for each provider (Orange: 69/65 prefixes, MTN: 67/68 prefixes); clear payment status indicators; payment history tracking; seamless transition from rental inquiry to payment

### Email Notifications for Status Changes
- **Functionality**: Automated email notifications sent when rental request status changes (pending → confirmed → completed)
- **Purpose**: Keep customers informed about their rental status without requiring manual follow-up
- **Trigger**: Admin changes rental request status in backend portal
- **Progression**: Admin updates status → system sends email to customer email address → customer receives notification with updated status and relevant details
- **Success criteria**: Emails sent immediately upon status change; clear subject lines; includes booking reference number and next steps

### Equipment Rental Agreement Loader
- **Functionality**: Comprehensive agreement management system that allows users to view, preview, download, print, and load both rental and installation agreements
- **Purpose**: Provide easy access to legal documents, enable document review before signing, and maintain transparency in rental terms
- **Trigger**: User clicks "Agreements" button in quick actions menu or navigates to agreements section
- **Progression**: User opens agreement loader → views agreement templates (rental/installation) → previews full agreement with all sections → can download as text file or print → views signed agreements history → loads agreement for use
- **Success criteria**: Clean document preview with section-by-section breakdown; clear distinction between editable and fixed terms; easy download/print functionality; signed agreements history with customer details; responsive design for mobile viewing
- **Purpose**: Keep customers informed about their rental status without requiring them to check the app
- **Trigger**: Admin or system updates rental request status in rental history
- **Progression**: Status changes in system → notification preferences checked → email composed in customer's language → notification sent → confirmation toast displayed
- **Success criteria**: Emails sent in correct language (French/English); customizable notification preferences; clear status change details; professional email formatting

### Calendar Integration and Sync
- **Functionality**: Export rental dates to Google Calendar, Outlook Calendar, or download as .ics file
- **Purpose**: Help customers remember rental start/end dates and plan accordingly
- **Trigger**: User clicks "Add to Calendar" button in rental history
- **Progression**: User views rental history → clicks calendar button → selects calendar provider or download → calendar event created with rental details → confirmation displayed
- **Success criteria**: Calendar events include equipment name, dates, location; work with Google, Outlook, and Apple Calendar; reminder set 24 hours before rental start; proper timezone (Africa/Douala)

### User Reviews and Ratings
- **Functionality**: Customer review system with 5-star ratings, written feedback, and verified badge for actual renters
- **Purpose**: Build trust through social proof and help customers make informed equipment choices
- **Trigger**: User clicks "Write a Review" button on equipment detail page or after completing rental
- **Progression**: User clicks review button → enters name and rating → writes detailed feedback → submits review → review appears on equipment page with verified badge if linked to rental
- **Success criteria**: Reviews display with star ratings; verified reviews marked with badge; average rating calculated and displayed; reviews sortable by date; multilingual support

### Advanced Equipment Search & Filtering
- **Functionality**: Comprehensive search and filter system allowing users to find equipment by name, description, features, price range, availability status, and sort options
- **Purpose**: Help customers quickly find the exact equipment they need without browsing through all categories
- **Trigger**: User types in search box or selects filter options above equipment grid
- **Progression**: User enters search query or selects filters → results update in real-time → equipment grid shows only matching items → user can clear filters or refine search
- **Success criteria**: Real-time search with 300ms debounce; price range filters (low/medium/high); availability filters (available/reserved); sort by name or price; active filter count badge; clear all filters button; responsive on mobile

### Promotions & Discount Codes System
- **Functionality**: Manage and display promotional discount codes with validation, expiry dates, usage limits, and category restrictions
- **Purpose**: Encourage bookings with special offers, reward loyalty, and promote specific equipment categories
- **Trigger**: User clicks promotions/offers icon in header to view available codes
- **Progression**: User views promotions dialog → sees active offers with descriptions → copies promo code → applies at checkout → discount calculated and applied
- **Success criteria**: Promo codes display with discount amount; copy-to-clipboard functionality; expiry date validation; usage limit tracking; category-specific offers; bilingual descriptions; visual discount badges; minimum rental days requirements

### Customer Authentication & Profiles
- **Functionality**: Secure login and registration system supporting both individual and business customer accounts with persistent sessions
- **Purpose**: Enable personalized experiences, track rental history, save preferences, and streamline repeat bookings
- **Trigger**: User clicks account/login button in header
- **Progression**: New user → clicks login → selects register tab → chooses account type (individual/business) → fills required information → creates account → system stores profile → user logs in → accesses personalized features
- **Success criteria**: Separate registration flows for individuals and businesses; secure password storage; persistent sessions across visits; profile data properly segmented by customer type; email uniqueness validation

### Individual Customer Profiles
- **Functionality**: Personal account management for individual customers with contact details, national ID card verification, address, preferences, and rental history
- **Purpose**: Provide tailored experience for personal equipment rentals with verified identity for marketplace access and quick booking with history tracking
- **Trigger**: Individual user creates account or views profile
- **Progression**: User registers as individual → provides first name, last name, phone, email, **national ID card number (required)** → optionally adds address → sets notification preferences → profile saved → ID card verified for marketplace access → can edit anytime in account settings
- **Success criteria**: Required fields: first name, last name, phone, email, password, **national ID card number**; optional fields: date of birth, address; profile displays rental history; editable contact information; language preference toggle; **ID verification status displayed; marketplace access enabled after ID card provided**

### Business Customer Profiles
- **Functionality**: Company account management with business details, primary contact person, billing address, and team rental tracking
- **Purpose**: Serve B2B customers with company-specific needs including invoicing, multiple contact persons, and business documentation
- **Trigger**: Business user creates account or views profile
- **Progression**: User registers as business → provides company name, registration number, business type → adds contact person (name, position, phone) → optionally adds addresses → sets billing preferences → profile saved → manages team rentals
- **Success criteria**: Required fields: company name, business type, registration number, contact person (name, position, phone), email, password; optional fields: tax ID, billing address, shipping address; separate fields for primary contact vs. billing; business type categories (construction, transport, events, manufacturing, other)

### Profile Management Dashboard
- **Functionality**: Centralized dashboard with tabs for account details, preferences, rental history, and payment history
- **Purpose**: Give customers full control over their account information and visibility into all transactions
- **Trigger**: Authenticated user clicks account menu → selects "View Profile"
- **Progression**: User opens profile → sees tabs (Details, Settings, Rentals, Payments) → navigates between sections → edits information → saves changes → confirmation toast displayed
- **Success criteria**: Four-tab interface (Details, Settings, Rentals, Payments); real-time form validation; save button at bottom of each editable section; rental history shows all past bookings with status; payment history displays transaction records; responsive mobile layout

### Account Authentication Flow
- **Functionality**: Secure login/logout system with session management and password protection
- **Purpose**: Protect customer data and enable persistent sessions across devices
- **Trigger**: User clicks login button or attempts to access protected features
- **Progression**: User enters email and password → system validates credentials → creates secure session → user gains access to profile features → session persists until logout → logout clears session data
- **Success criteria**: Password minimum 6 characters; email format validation; secure password storage (not plain text); persistent sessions using KV storage; clear error messages for invalid credentials; logout immediately ends session; "remember me" functionality through KV persistence

### Loyalty Rewards Program
- **Functionality**: Points-based rewards system with four membership tiers (Bronze, Silver, Gold, Platinum) that provide escalating benefits and discounts
- **Purpose**: Incentivize repeat business, reward loyal customers, and increase customer lifetime value
- **Trigger**: User clicks loyalty/trophy icon in header or makes a rental
- **Progression**: User views loyalty dashboard → sees current points and tier → reviews tier benefits (discounts, free delivery thresholds, priority support) → earns points from rentals (1 point per 1,000 XAF) → points multiplied by tier bonus → progresses to next tier → redeems points for rewards
- **Success criteria**: Four tier levels with clear thresholds (Bronze: 0, Silver: 100, Gold: 500, Platinum: 1,500 points); tier benefits include loyalty discount (0-15%), points multiplier (1x-2x), free delivery thresholds, priority support; points history tracking; visual tier badges and progress bars; redemption options displayed; bilingual support

### Bulk Rental Discounts
- **Functionality**: Automatic discount system that rewards customers for renting multiple items simultaneously
- **Purpose**: Encourage larger orders, increase average transaction value, and provide value for business customers
- **Trigger**: User clicks bulk discount calculator icon in header or adds multiple items to inquiry
- **Progression**: User opens bulk calculator → browses available equipment → adds items to cart → sees real-time discount calculation → discount increases with item count → best discount automatically applied → shows savings breakdown → user proceeds to rental
- **Success criteria**: Tiered discounts (2+ items: 5%, 3+ items: 10%, 5+ items: 15%); category-specific bulk offers (generators, tools); percentage and fixed-amount discounts; clear savings display; discount badge indicators; interactive cart management; works with 7-day default rental period; bilingual interface

### Seasonal & Holiday Promotions
- **Functionality**: Time-limited promotional campaigns tied to seasons, holidays, and special events throughout the year
- **Purpose**: Drive bookings during specific periods, clear inventory, and create urgency with limited-time offers
- **Trigger**: User clicks seasonal promotions icon in header; floating banner appears automatically
- **Progression**: User views seasonal promotions dialog → sees featured and active promotions → reviews promotion details (discount, dates, categories) → sees countdown for expiring offers → floating banner shows top promotion → user dismisses banner or views details
- **Success criteria**: 10+ seasonal promotions for various occasions (New Year, Dry Season, Independence Day, Christmas, etc.); promotional badges (🎆🌧️🎄); percentage and fixed discounts; validity date ranges; category restrictions; featured promotions highlighted; days remaining alerts; automatic filtering by active status; floating promotional banner; bilingual descriptions

### SMS Notifications System
- **Functionality**: Automated SMS notification service sending rental confirmations, reminders, payment confirmations, and status updates
- **Purpose**: Reach customers via SMS for instant delivery, especially those without reliable email access
- **Trigger**: User enables SMS notifications in preferences; automated triggers for rental events
- **Progression**: User toggles SMS preferences → system sends SMS on key events → rental confirmation sent immediately → reminder sent 24 hours before rental → payment confirmation sent on successful payment → status updates sent on changes → history viewable by owner
- **Success criteria**: Automatic phone number formatting for Cameroon (+237); message delivery status tracking (pending, sent, delivered, failed); bilingual messages (French/English); SMS history accessible for admins; notification preferences respected; 160-character optimized messages; integration with rental and payment flows

### Customizable Rental & Installation Agreement Terms
- **Functionality**: Full-featured agreement management system in backend portal allowing admins to customize rental and installation agreement templates with dynamic variables, section management, version history, and preview capabilities
- **Purpose**: Provide legal protection, customize terms for business needs, maintain compliance, and create professional customer-facing agreements
- **Trigger**: Admin opens backend portal → navigates to Agreements tab
- **Progression**: Admin views rental or installation agreement template → edits section titles and content → adds custom sections → inserts dynamic variables ({{CUSTOMER_NAME}}, {{EQUIPMENT_NAME}}, etc.) → reorders sections with drag controls → previews formatted agreement → saves changes (auto-increments version) → previous versions stored in history (last 10) → can restore previous versions → download template as text file → view all signed customer agreements → download signed agreements as HTML
- **Success criteria**: Two agreement types (Rental, Installation); protected sections (non-editable safety terms for installation); editable custom sections; 14 dynamic variables available; section reordering (up/down arrows); add/remove custom sections; version history with restore capability; preview mode shows customer view; duplicate agreement function; reset to default template; variables dialog with copy-to-clipboard; signed agreements list with customer details; download signed agreements; real-time save with version increment; variable hints in UI; responsive mobile layout; bilingual support

### Equipment Maintenance Scheduler
- **Functionality**: Comprehensive maintenance tracking system for equipment service history, scheduled maintenance, and preventive care
- **Purpose**: Ensure equipment reliability, track service costs, prevent breakdowns, and schedule routine maintenance
- **Trigger**: Admin clicks maintenance icon in header to access scheduler
- **Progression**: Admin opens scheduler → schedules new maintenance (equipment, type, date, technician, notes) → upcoming maintenance shown (next 14 days) → overdue maintenance highlighted → maintenance completed with cost and parts tracking → next maintenance date auto-suggested → maintenance history shows all past service → total cost per equipment calculated
- **Success criteria**: Four maintenance types (routine, repair, inspection, cleaning); status tracking (scheduled, in-progress, completed, overdue); technician assignment; cost tracking; parts replacement tracking; maintenance history by equipment; overdue alerts; next maintenance date suggestions; bilingual interface; admin-only access

### Referral Program
- **Functionality**: Customer referral rewards system with unique codes, tracking, and tiered bonus rewards
- **Purpose**: Incentivize word-of-mouth marketing, grow customer base organically, reward loyal customers for referrals
- **Trigger**: User clicks referral icon in header or creates account with referral code
- **Progression**: User views referral dashboard → sees unique referral code → copies/shares code → referred friend signs up with code → friend completes first rental → both users receive 50 points reward → referrer sees referral status (pending/completed/rewarded) → bonus rewards for milestone achievements (3/5/10 referrals) → referral history tracked
- **Success criteria**: Unique 8-character referral codes; automated code generation; one-click copy to clipboard; social sharing integration; referral status tracking (pending, completed, rewarded); 50 points base reward per referral; milestone bonuses (+25/+50/+100 points for 3/5/10 referrals); referral statistics dashboard; how-it-works guide; authentication required; bilingual support

### Advanced Analytics Dashboard
- **Functionality**: Comprehensive analytics and reporting system tracking equipment utilization rates, revenue metrics, demand patterns, and performance insights
- **Purpose**: Provide data-driven insights for business optimization, equipment investment decisions, and strategic planning
- **Trigger**: Admin/owner clicks analytics icon in header
- **Progression**: Owner opens dashboard → views overview metrics (total rentals, revenue, active rentals, completion rate) → explores equipment utilization tab → analyzes revenue trends and growth → examines demand periods and peak days → identifies top-performing equipment → reviews category performance → makes informed business decisions
- **Success criteria**: Admin-only access; real-time data visualization; equipment utilization percentages; revenue by category and time period; demand period analysis with trends; peak demand days identification; top 5 revenue-generating equipment; projected revenue calculations; average rental duration tracking; completion rate metrics; category performance comparison; monthly growth rate; bilingual interface

### Customer Communication Hub
- **Functionality**: Centralized messaging system integrating email, SMS, and WhatsApp communications with template management and delivery tracking
- **Purpose**: Streamline customer communication, improve response times, maintain communication history, and provide professional messaging templates
- **Trigger**: Admin/owner clicks communication icon in header
- **Progression**: Owner opens hub → composes new message → selects channel (email/SMS/WhatsApp) → chooses recipient and priority → writes message or uses template → sends message → message delivered with status tracking → views message history filtered by channel → checks delivery statistics (total sent, delivery rate, response rate) → uses pre-built templates for common scenarios
- **Success criteria**: Multi-channel support (email, SMS, WhatsApp); message composition with priority levels; template library (6 pre-built templates: rental confirmation, payment reminder, rental reminder, maintenance notice, promotional offer, support follow-up); template variables for personalization; message history with 500-message retention; delivery status tracking (draft, sent, delivered, read, failed); communication statistics dashboard; filter by channel or status; admin-only access; bilingual support; simulated delivery ready for production SMS gateway integration

### Equipment Insurance & Protection Plans
- **Functionality**: Comprehensive insurance system offering four protection tiers (Basic, Standard, Premium, Comprehensive) with claims management and policy tracking
- **Purpose**: Provide peace of mind for customers, protect equipment investment, generate additional revenue, and reduce liability disputes
- **Trigger**: Customer clicks insurance icon in header or during rental checkout flow
- **Progression**: Customer views insurance plans → compares coverage options (damage, theft, weather, operational) → sees premium calculations based on rental value and duration → selects protection plan → plan added to rental → policy created and tracked → in case of incident, customer files claim → uploads photos and description → admin reviews and processes claim → claim approved/rejected → customer views claim status in dashboard
- **Success criteria**: Four plan tiers with clear coverage differences; dynamic premium calculation (percentage of rental or flat rate); coverage includes damage protection, theft protection, accidental damage, weather damage, operational damage; deductible and max coverage amounts displayed; plan features and exclusions listed; policy creation linked to rentals; claims filing with photo upload; claim status tracking (pending, approved, rejected, paid); damage type classification (minor, moderate, severe, total-loss); customer policy history; admin claim processing; bilingual descriptions; ready for integration with rental checkout

### Equipment Comparison Tool
- **Functionality**: Side-by-side comparison of up to 3 equipment items showing specifications, pricing, features, and availability status
- **Purpose**: Help customers make informed rental decisions by directly comparing equipment options
- **Trigger**: User clicks comparison icon in header
- **Progression**: User opens comparison tool → selects equipment to compare (up to 3 items) → views side-by-side comparison table → reviews specifications, pricing tiers (daily/weekly/monthly), features checklist → identifies differences → removes/adds equipment to comparison → requests quote for compared items
- **Success criteria**: Compare up to 3 equipment simultaneously; visual feature comparison with checkmarks; pricing comparison across all rental periods; specification comparison with missing values indicated; availability status displayed; responsive table layout; add/remove equipment dynamically; clear visual hierarchy; request quote button; bilingual interface

### On-Site Service Request System
- **Functionality**: Comprehensive service request system allowing customers to request repairs, maintenance, inspections, technical support, or equipment swaps for rented equipment
- **Purpose**: Provide immediate technical assistance and support for equipment issues; improve customer satisfaction; track service requests centrally
- **Trigger**: Customer clicks service request icon in header or encounters equipment issue
- **Progression**: Customer opens service request dialog → fills request form (equipment, issue description, location, priority, preferred date) → submits request → request assigned to technician → technician dispatched with ETA → service completed with resolution notes → customer notified of completion
- **Success criteria**: Five request types (repair, maintenance, inspection, technical-support, equipment-swap); four priority levels (low, medium, high, urgent); automatic request ID generation; status tracking (pending, assigned, in-progress, completed, cancelled); technician assignment with contact details; service cost tracking; parts used logging; photo upload capability; request history with detailed view; bilingual interface

### Automated Rental Reminders
- **Functionality**: Intelligent reminder system that automatically schedules and sends notifications for upcoming rental end dates, overdue returns, and extension offers
- **Purpose**: Reduce overdue rentals; improve equipment return rates; offer proactive extension opportunities; enhance customer communication
- **Trigger**: Automatically triggered when rental confirmed; sent at scheduled intervals before end date
- **Progression**: Rental confirmed → system schedules reminders (2 days before, 1 day before) → reminders sent via email/SMS/WhatsApp → customer receives notification with return instructions → optional extension offer → rental completed or extended
- **Success criteria**: Four reminder types (upcoming-end, overdue, return-instructions, extension-offer); automatic scheduling based on rental end date; multi-channel delivery (email, SMS, WhatsApp); customizable reminder timing; bilingual messages; delivery status tracking; integration with rental history; admin view of scheduled and sent reminders

### Multi-Equipment Package Deals
- **Functionality**: Pre-configured equipment bundles optimized for specific use cases (construction sites, events, industrial operations, agriculture, small business) with bulk discount pricing
- **Purpose**: Increase average transaction value; simplify equipment selection for common scenarios; provide better value through bundled pricing; reduce booking friction
- **Trigger**: Customer clicks packages icon in header or needs multiple equipment items
- **Progression**: Customer opens packages dialog → browses by category (construction, events, industrial, agriculture, custom) → views package details (included equipment, pricing tiers, features, savings) → sees applicable use cases → compares daily/weekly/monthly pricing → requests package rental → proceeds to booking
- **Success criteria**: Six pre-configured packages with realistic equipment combinations; five category filters; clear savings display (percentage and amount); detailed equipment list with quantities; feature highlights and benefits; ideal use case badges; pricing for all rental periods (daily/weekly/monthly); availability indicators; minimum rental days requirements; popularity scoring; responsive card layout; request package button; bilingual descriptions

### Delivery Tracking System
- **Functionality**: Real-time delivery status tracking with driver details, location updates, ETA calculation, and delivery history
- **Purpose**: Provide transparency and peace of mind during equipment delivery; reduce customer service inquiries about delivery status
- **Trigger**: User clicks delivery tracking icon in header; automatically available for confirmed rentals with delivery
- **Progression**: Customer views delivery tracking dashboard → sees active deliveries with status → views delivery details (equipment, location, ETA, driver info) → tracks status updates (pending → preparing → in-transit → delivered) → receives status change notifications → views delivery history with timestamps → admin updates delivery status and driver details → customer sees real-time updates
- **Success criteria**: Six delivery statuses (pending, preparing, in-transit, delivered, delayed, cancelled); status history with timestamps and notes; driver details (name, phone, vehicle); ETA calculation and display; location updates; active vs completed delivery tabs; admin-only status update capability; color-coded status indicators; automatic timestamp logging; bilingual interface

### Invoice Management & Generation
- **Functionality**: Automatic invoice generation for rentals with detailed pricing breakdown, downloadable HTML invoices, and payment tracking
- **Purpose**: Provide professional documentation for rentals; simplify accounting and record-keeping; enable easy payment reconciliation
- **Trigger**: Invoice automatically generated when rental confirmed; user clicks invoice icon in header to view all invoices
- **Progression**: System generates invoice on rental confirmation → customer views invoice management dashboard → sees revenue statistics (total revenue, outstanding payments, invoice count) → browses invoice list with payment status → previews invoice in browser → downloads invoice as HTML file → invoice includes detailed breakdown (base rate, delivery fee, insurance, discounts, tax, total) → payment status tracked (unpaid, paid, partial, refunded)
- **Success criteria**: Automatic invoice generation; unique invoice numbers; detailed pricing breakdown with line items; professional HTML template with company branding; downloadable invoices; payment status tracking and display; revenue analytics; invoice preview functionality; customer and equipment details included; rental period and duration calculated; bilingual date formatting; color-coded payment status badges

### Legal Agreements System
- **Functionality**: Customizable rental and installation agreements with electronic signature capture, version control, and admin-editable templates with protected strict terms
- **Purpose**: Provide legally binding contracts for equipment rental and installation; ensure customers understand terms, conditions, and safety requirements; maintain records of signed agreements
- **Trigger**: Customer clicks Legal Agreements in navigation menu to view templates; prompted to sign during rental process and after installation; admin accesses Agreements tab in backend portal
- **Progression**: Admin customizes agreement templates → adds/edits/removes sections → saves new version → customer views rental agreement template → signs electronically when making rental → installation technician prompts customer to sign installation acknowledgement → customer reviews terms including strict safety warnings → provides electronic signature → signed agreement saved with snapshot → both parties can download HTML copy
- **Success criteria**: Two agreement types (rental and installation) with distinct purposes; admin can edit agreement sections and add new ones; certain sections marked as non-editable (strict terms); electronic signature capture with name typing; agreement version control with timestamps; snapshot of exact agreement version signed; download signed agreements as formatted HTML; installation agreement includes non-editable strict safety terms; visual warnings for strict terms; signed agreements viewable in customer account and admin backend; agreements persist across sessions; bilingual support

### Multi-Currency Support
- **Functionality**: Support for multiple currencies (XAF, USD, EUR) with real-time conversion and persistent user preference
- **Purpose**: Enable international customers to view prices in their preferred currency; reduce confusion and increase booking conversion for foreign customers
- **Trigger**: User clicks currency selector in header
- **Progression**: User opens currency dropdown → views available currencies (XAF, USD, EUR) with full names → selects preferred currency → all prices throughout platform instantly convert → preference saves for future visits → user can switch anytime
- **Success criteria**: Three currencies supported (XAF base, USD, EUR); accurate exchange rate conversions (USD: 0.0016, EUR: 0.0015); currency selector in header; dropdown shows currency code, symbol, and full name; visual checkmark for selected currency; instant price updates on all pages; preference persists across sessions using KV storage; format displays appropriate symbols and decimals; integration with equipment pricing, calculator, bookings, invoices, and mobile app

### Mobile Companion App
- **Functionality**: Full-featured mobile-optimized booking interface in dialog format with tab-based navigation for browsing equipment, quick booking, viewing reservations, and account management
- **Purpose**: Provide streamlined mobile experience without native app; enable quick equipment discovery and booking on mobile devices; reduce friction for mobile users
- **Trigger**: User clicks mobile app icon in header
- **Progression**: User opens mobile app dialog → browses equipment in Browse tab with search → selects equipment and clicks Book → switches to Quick Book tab → fills booking form (dates, name, phone) → confirms booking → views booking in Bookings tab → can access account and contact info in Account tab
- **Success criteria**: Four-tab interface (Browse, Book, Bookings, Account); real-time equipment search with filtering; category icons for visual identification; quick booking cards with one-tap reserve; booking history with status badges; currency-aware pricing display; contact information easily accessible; bilingual support; mobile-first design (max-width 28rem, 90vh height); smooth tab transitions; touch-friendly buttons; scrollable content; gradient branded header; persistent bookings from KV storage

### Real-Time Chat Support with AI, Voice Messages & Satisfaction Ratings
- **Functionality**: Advanced live chat system with AI-powered responses, voice message support, and customer satisfaction rating collection; includes floating widget for customers and comprehensive admin management dashboard
- **Purpose**: Provide instant, intelligent customer support; enable hands-free mobile communication; track service quality; reduce support team workload; improve customer satisfaction
- **Trigger**: Customer clicks floating chat button in bottom-right corner; admin accesses Chat Management in backend portal
- **Progression**: Customer clicks chat button → chat widget opens → customer types message or records voice note → AI generates intelligent response instantly using GPT-4o-mini → customer receives contextual answer about equipment, pricing, services → continues conversation with AI or human agent → admin can view AI-assisted conversations → admin marks conversation resolved → customer prompted to rate experience → customer selects 1-5 stars and optional feedback → rating saved and visible to admin
- **Success criteria**: Floating chat button with unread badge; expandable chat interface with smooth animations; AI responses in 2-3 seconds using window.spark.llm; AI understands SEAO-RENTALS context (equipment catalog, pricing, services, contact info); bilingual AI responses (English/French); voice recording with microphone button; recording duration timer display; voice message playback controls (play/pause); voice messages stored as WebM audio blobs; AI badge indicators on AI-generated messages; satisfaction rating dialog after resolution; 5-star rating selection interface; optional feedback text area; ratings displayed in admin conversation list and details; admin sees AI assistance badges; admin can play customer voice messages; message history persistence using KV storage; conversation threading with timestamps; typing indicators; read receipts; bilingual support throughout; admin dashboard with conversation filtering; real-time updates; graceful AI fallback if API fails

### Client Tool Marketplace (Peer-to-Peer with ID Verification & Listing Limits)
- **Functionality**: Peer-to-peer marketplace where verified customers can list their own tools for lease or sale to other customers; includes listing management, inquiry system, and admin approval workflow with **mandatory national ID card verification** and **5-listing maximum per user**
- **Purpose**: Create additional revenue streams for customers with idle equipment; expand available inventory; build community marketplace while maintaining trust through ID verification and preventing abuse through listing limits
- **Trigger**: Customer clicks marketplace icon in header
- **Progression**: Customer opens marketplace → **must be logged in with verified national ID card number** → views browse tab with filters → searches tools by name, category, condition → views tool details → sends inquiry to owner → switches to "My Listings" tab → sees listing count alert (X of 5 listings) → **if under 5 listings limit**, clicks "List Tool" tab → provides tool details (name, category, condition, description, location) → sets lease terms (daily/weekly/monthly rates, security deposit) OR sale terms (asking price, negotiable) → **owner information auto-filled from verified profile (name, phone, email, ID card)** → submits listing (status: pending) → admin reviews and approves/rejects → approved listings visible to all users → **if 5 listings reached, shows warning message and blocks new listings until user deletes existing one**
- **Success criteria**: **National ID card verification required before any listing creation**; login required message shown to unauthenticated users; ID card requirement alert displayed if ID not provided; **maximum 5 active listings per user enforced**; listing count alert showing "X of 5 listings" with color coding (blue if under limit, red if at limit); blocking UI when limit reached with clear message to delete existing listing; two listing types (lease, sale); listing statuses (pending, approved, rejected, active, inactive, sold, leased); four condition grades (excellent, good, fair, needs-repair); browse with filters (type, condition); search by tool name, category, or description; listing detail view with specifications; owner contact info auto-populated from verified profile (name, phone, email, ID card); inquiry system with inquiry counter; view counter increments on detail view; admin approval required for new listings; rejection reasons displayed to owner; owner can activate/deactivate approved listings; owner can delete own listings to free slots; bilingual support; **ID card number displayed in owner info section for transparency and trust**

## Edge Case Handling

- **Mobile/Small Screens**: Navigation buttons stack vertically; contact info reorganizes into single column; images scale proportionally
- **Missing Equipment Images**: Fallback to category icons or placeholder graphics that maintain visual consistency
- **Long Category Names**: Text wraps gracefully within button containers without breaking layout
- **Multiple Language Support**: Bilingual content (French/English) displays cleanly without crowding
- **High Traffic Contact**: Multiple contact methods prevent single point of failure for customer inquiries
- **Payment Failures**: Clear error messages with retry options; failed payments logged for reference
- **Phone Number Validation**: Real-time validation for Orange Money (69/65 prefixes) and MTN Momo (67/68 prefixes)
- **Payment Status Timeout**: Automatic status checking after payment initiation with clear progress indicators
- **Network Issues During Payment**: Payment status persists and can be checked later in payment history
- **Email Delivery Failures**: Notification system logs failed emails; user sees status updates in app regardless
- **Calendar Export Errors**: Fallback to .ics file download if direct calendar integration fails
- **Invalid Review Submissions**: Form validation requires rating, name, and comment before submission
- **Duplicate Reviews**: Users can submit multiple reviews per equipment (e.g., after multiple rentals)
- **Review Moderation**: Verified badge only shown for reviews linked to confirmed rentals
- **Search with No Results**: Clear messaging when no equipment matches filters with suggestion to clear filters
- **Expired Promo Codes**: Automatic filtering to show only valid/active promotions; expired codes hidden from view
- **Promo Code Validation**: Check expiry date, usage limits, minimum rental days, and category restrictions before applying
- **Concurrent Filter Application**: Search works alongside category filtering; results match both criteria
- **Duplicate Email Registration**: System prevents multiple accounts with same email; clear error message shown
- **Invalid Login Credentials**: Generic error message to prevent email enumeration; consistent response time
- **Session Expiration**: Sessions persist indefinitely until logout; no auto-expiration to avoid data loss
- **Profile Update Failures**: Clear error messages; failed updates don't overwrite existing data
- **Missing Profile Data**: System handles optional fields gracefully; shows placeholder text for empty fields
- **Account Type Mismatch**: Individual and business profiles use different data structures; system validates against correct schema
- **Loyalty Points Calculation**: Points earned based on rental amount with tier multiplier; accurate rounding
- **Tier Progression**: Automatic tier upgrade when points threshold reached; benefits update immediately
- **Points Redemption**: Validates sufficient points before redemption; prevents negative balance
- **Bulk Discount Stacking**: Best discount automatically selected; category-specific and general discounts compared
- **Cart Empty State**: Calculator shows helpful empty message when no items added
- **Multiple Discount Types**: System prioritizes highest value discount when multiple applicable
- **Expired Seasonal Promotions**: Automatically filtered out from active list; only valid promotions shown
- **Promotion Date Validation**: Start and end dates checked against current time; timezone-aware
- **Featured Promotion Priority**: Featured promotions highlighted first; floating banner shows top featured offer
- **Banner Dismissal**: User can dismiss floating banner; preference persisted to avoid annoyance
- **Analytics with No Data**: Dashboard shows helpful empty states when no rental data available
- **Analytics Date Ranges**: Properly handles rentals spanning multiple months for accurate reporting
- **Communication Message Limits**: History limited to 500 messages; oldest automatically removed
- **Message Delivery Simulation**: Development environment simulates delivery; ready for production gateway
- **Template Variable Replacement**: Missing variables in templates show placeholder; doesn't break message
- **Insurance Premium Calculation**: Handles edge cases (same-day rental, extended periods); accurate pricing
- **Insurance Coverage Validation**: System checks policy active status and date range before allowing claims
- **Claim Photo Upload**: Validates file types and sizes; provides clear error messages
- **Multiple Active Policies**: Customer can have multiple policies for different equipment simultaneously
- **Insurance Deductible Application**: Correctly calculates payout amount after deductible subtraction
- **Comparison with Single Item**: Tool works with 1-3 items; helpful messaging when only one item selected
- **Comparison Empty State**: Clear call-to-action when no items selected for comparison
- **Missing Equipment Specs**: Shows placeholder for missing specifications in comparison table
- **Delivery Status Updates**: Only admins can update delivery status; customers view-only
- **Delivery with No Driver**: System handles deliveries without assigned driver details gracefully
- **Multiple Deliveries Same Rental**: System supports multiple delivery attempts for same rental
- **Invoice Generation Errors**: Graceful handling when equipment not found or pricing data missing
- **Invoice Download Failures**: Falls back to alternative download methods if primary fails
- **Duplicate Invoice Prevention**: System checks for existing invoice before generating new one
- **Invoice Tax Calculation**: Properly handles 0% tax rate for Cameroon; extensible for future tax requirements
- **Payment Status Updates**: Invoice payment status syncs with payment history records
- **Service Request Priority**: Urgent requests highlighted and sorted by creation time
- **Service Request Photos**: Validates file types and sizes; provides clear error messages for invalid uploads
- **Technician Assignment**: System handles unassigned requests gracefully; shows pending status
- **Service Cost Tracking**: Optional cost field; displays placeholder when no cost recorded
- **Multiple Service Requests**: Customers can have multiple active requests for different equipment
- **Reminder Scheduling**: Automatically adjusts reminder timing if rental date changes
- **Reminder Cancellation**: Reminders cancelled if rental cancelled before reminder sent
- **Multi-Channel Delivery**: Falls back to available channels if preferred channel unavailable
- **Overdue Detection**: Automatic overdue status calculation based on current date vs end date
- **Extension Offers**: Smart extension offers only sent to customers with good rental history
- **Package Availability**: Real-time availability check across all equipment in package
- **Package Customization**: Customers can request modifications to package contents
- **Minimum Rental Days**: Package enforces minimum rental period; clear messaging displayed
- **Package Pricing Calculation**: Accurate savings calculation comparing individual vs package pricing
- **Package Category Filtering**: Efficient filtering maintains all packages in memory; no API calls needed
- **Currency Conversion Accuracy**: All currency conversions use base XAF rate; rounded appropriately per currency
- **Currency Display Format**: XAF shows whole numbers; USD and EUR show 2 decimals with proper symbols
- **Currency Persistence**: User preference stored in KV; defaults to XAF if not set
- **Mobile App on Desktop**: Dialog scales appropriately; max-width ensures good UX on large screens
- **Mobile App Equipment Search**: Real-time filtering with debounce; handles no results gracefully
- **Mobile App Empty States**: Helpful messaging and actions when no bookings or equipment selected
- **Mobile App Tab State**: Active tab preserved during session; resets to Browse on reopen
- **Chat Widget Position**: Fixed bottom-right with proper z-index; doesn't overlap other UI elements
- **Chat Message Overflow**: Long messages wrap properly; scrollable message area
- **Chat Conversation Persistence**: All messages and conversations stored in KV; survive page refresh
- **Chat Empty State**: Clear messaging when no conversations exist; helpful call-to-action
- **Chat Admin Access**: Only admins can access Chat Management in backend portal
- **Chat Auto-Response**: 2-second delay simulates human response time; ready for AI integration
- **Chat Multiple Conversations**: System supports unlimited concurrent customer conversations
- **AI Chat Connection**: Graceful fallback to contact information if AI service unavailable
- **AI Chat Context**: Conversation history maintained across multiple messages
- **AI Chat Rate Limits**: System handles API rate limiting gracefully
- **AI Recommendations Empty History**: Generates generic recommendations for new customers
- **AI Pricing No Data**: Requires minimum rental history data; clear messaging when insufficient
- **AI Demand Forecast**: Handles sparse historical data by focusing on clear patterns only
- **AI Sentiment Missing Reviews**: Disabled button when no reviews available; clear messaging
- **AI Response Timeout**: 30-second timeout with fallback error messages
- **AI Token Limits**: Prompts designed to stay within context window limits
- **AI Cost Management**: Uses gpt-4o-mini for most features; gpt-4o only for chat for best quality
- **AI Bilingual Support**: Responses match user's language preference from system
- **Agreement Section Ordering**: Reorderable sections maintain consistent numbering; non-editable sections protected
- **Agreement Version Control**: Version number increments on save; customers see version they signed
- **Electronic Signature Validation**: Requires full name typed as signature; legally binding acknowledgment
- **Installation Agreement Strict Terms**: Non-editable safety terms clearly marked; separate acceptance checkbox required
- **Agreement Template Download**: Plain text format for rental agreements; HTML format for signed copies
- **Missing Agreement Data**: System loads default templates if custom ones not found
- **Agreement Snapshot**: Signed agreements store complete copy of exact version signed; immune to template changes
- **ID Card Registration**: National ID card number required for individual accounts; field cannot be empty; helps verify identity and build trust
- **ID Card Verification Status**: Individual profiles track ID card verification status; marketplace access restricted until ID provided
- **Marketplace Authentication**: Unauthenticated users see login prompt when trying to access "List Tool" tab; must log in to create listings
- **Marketplace ID Requirement**: Users without ID card number see warning message and cannot create listings; clear call-to-action to update profile
- **Listing Limit Enforcement**: Maximum 5 listings per user hard-coded; validated on submission; prevents circumvention
- **Listing Count Display**: Real-time listing counter shows "X of 5 listings" in My Listings tab; updates immediately when listings created/deleted
- **Listing Limit UI**: "Create" tab shows blocking message when limit reached; cannot access form; must delete existing listing first
- **Listing Deletion**: Deleting listing immediately frees up slot; counter updates; allows new listing creation
- **Owner Info Auto-fill**: Owner name, phone, email, and ID card auto-populated from logged-in user profile; cannot be manually edited in listing form
- **Marketplace Browse No Auth**: Users can browse and view listings without login; authentication only required for creating listings or sending inquiries
- **Listing Status Transitions**: Only admin can approve/reject pending listings; owners can only toggle active/inactive status on approved listings

## Design Direction

The design should feel **industrial yet approachable** - professional enough for B2B clients while remaining friendly for smaller businesses. Think bold, confident machinery aesthetics with a modern digital polish. Colors should evoke reliability (blues), energy (vibrant accents), and technical competence. The overall feel should say "we're the experts you can depend on."

## Color Selection

Drawing from the reference image's color palette while enhancing for web:

- **Primary Color**: Deep Navy Blue (oklch(0.25 0.06 245)) - Represents trust, professionalism, and technical expertise; dominates the header and key sections
- **Secondary Colors**: 
  - Bright Sky Blue (oklch(0.65 0.15 240)) - Used for interactive elements, category buttons, and highlights; conveys clarity and energy
  - Light Gray Background (oklch(0.96 0.002 240)) - Clean, professional canvas that doesn't compete with content
- **Accent Color**: Vibrant Orange (oklch(0.70 0.18 45)) - High-energy CTA button ("Get a Quote"); creates urgency and draws attention to primary actions
- **Foreground/Background Pairings**: 
  - Primary Navy (oklch(0.25 0.06 245)): White text (oklch(1 0 0)) - Ratio 10.2:1 ✓
  - Sky Blue Buttons (oklch(0.65 0.15 240)): White text (oklch(1 0 0)) - Ratio 5.8:1 ✓
  - Accent Orange (oklch(0.70 0.18 45)): White text (oklch(1 0 0)) - Ratio 5.1:1 ✓
  - Light Background (oklch(0.96 0.002 240)): Dark text (oklch(0.22 0.04 245)) - Ratio 13.5:1 ✓

## Font Selection

Fonts should balance **technical precision with approachability** - clear enough for quick scanning of equipment specs, but warm enough to feel service-oriented.

- **Primary Font**: Space Grotesk (Bold/600/700 weights) - Modern geometric sans with technical character for headings and navigation
- **Secondary Font**: Inter (Regular/Medium/Semibold) - Highly legible workhorse for body text, descriptions, and contact details

- **Typographic Hierarchy**:
  - H1 (Company Name/Logo): Space Grotesk Bold/32px/tight tracking (-0.02em)
  - H2 (Section Titles): Space Grotesk Bold/36px/tight leading
  - H3 (Service Titles): Space Grotesk Semibold/20px/normal
  - Body Text: Inter Regular/16px/relaxed leading (1.6)
  - Button Text: Inter Semibold/15px/wide tracking (0.02em)/uppercase
  - Contact Info: Inter Medium/15px/normal

## Animations

Animations should feel **mechanical and purposeful** - like well-oiled machinery coming to life. Use subtle motion to guide attention without feeling gimmicky.

- **Page Load**: Hero content fades in with slight upward movement (300ms ease-out)
- **Category Buttons**: Scale transform on hover (1.02x) with subtle shadow increase; smooth 200ms transition
- **Service Icons**: Gentle pulse animation on scroll-into-view to draw attention to each service offering
- **Equipment Images**: Subtle parallax effect on scroll for depth; slight zoom on hover (1.05x, 400ms ease)
- **CTA Buttons**: Background color shift with slight lift shadow on hover; 250ms transition
- **Scroll Reveal**: Sections fade and slide up into view as user scrolls (intersection observer)

## Component Selection

- **Components**:
  - **Button** (shadcn): Primary navigation and CTAs with size variants (lg for categories, default for header nav)
  - **Card** (shadcn): Service feature grid items, testimonial cards, calculator interface, and calendar container with icon, title, description
  - **Separator** (shadcn): Visual breaks between major sections
  - **Badge** (shadcn): Category labels, "New" indicators on equipment, status indicators (available/reserved)
  - **Input** (shadcn): Calculator quantity and drive time inputs, form fields
  - **Select** (shadcn): Equipment type and duration dropdowns in calculator
  - **Label** (shadcn): Form field labels with icons
  - Custom Hero Component: Full-width banner with background treatment and layered content
  - Custom Navigation Bar: Sticky header with logo, nav links, and contact icons
  - Custom Cost Calculator: Interactive pricing tool with real-time calculations
  - Custom Availability Calendar: Monthly calendar view with equipment availability status
  - Custom Testimonials Section: Grid of customer reviews with ratings
  
- **Customizations**:
  - Category buttons need extra-large size (h-16) with bold text and icon positioning
  - Service cards require custom icon container with brand color background circles
  - Equipment showcase needs custom three-column responsive grid with image optimization
  - Footer requires custom multi-column layout for contact methods
  - Calculator card needs gradient background and prominent total cost display
  - Calendar days need color-coded status indicators (green/amber/red)
  - Testimonial cards need quote icon overlay and star rating display
  
- **States**:
  - Buttons: Resting (base color), Hover (brightened + shadow), Active (slightly pressed appearance), Focus (ring outline)
  - Interactive areas: Subtle scale transforms on hover to indicate clickability
  - Category tabs: Active state with solid background vs outlined inactive state
  - Calendar dates: Available (green), Reserved (amber), Unavailable (red/disabled), Selected (ring outline)
  - Calculator: Real-time updates on input changes with smooth number transitions
  
- **Icon Selection**:
  - Lightning bolt for Generators (energy/power)
  - MapPin for GPS Trackers (location)
  - Wrench for Tools (construction/repair)
  - Truck for Fast Delivery service
  - Gear for Installation service
  - Clock for 24/7 Maintenance service
  - WhatsApp, Envelope, Phone for contact methods
  - Calculator for cost estimation tool
  - Calendar for availability checking
  - Star for ratings in testimonials
  - Quotes for testimonial decorations
  - CheckCircle/XCircle/MinusCircle for availability status
  
- **Spacing**:
  - Section padding: py-16 md:py-24 for major sections
  - Container max-width: max-w-7xl with px-4 md:px-6 lg:px-8
  - Grid gaps: gap-6 for service cards, gap-8 for equipment showcase, gap-3 for calculator inputs
  - Button groups: gap-4 for horizontal, gap-3 for vertical stacking
  - Calendar grid: gap-2 for day cells
  
- **Mobile**:
  - Hero: Single column layout; contact icons stack below tagline; reduced text sizes (H1: 24px → 28px)
  - Category Navigation: Grid changes from 4 columns to 2x2 on tablet, full-width stack on mobile
  - Service Grid: 4 columns → 2 columns → 1 column at breakpoints
  - Equipment Showcase: 3 columns → 2 columns → 1 column with larger images on mobile
  - Footer: 3 columns collapse to single column stack with contact info prioritized first
  - Sticky mobile header with hamburger menu for navigation links
  - Calculator: Form fields stack vertically on mobile with full-width buttons
  - Calendar: Equipment selector becomes scrollable horizontal list; calendar stays 7-column grid with smaller cells
  - Testimonials: 2 columns → 1 column on mobile with full-width cards
