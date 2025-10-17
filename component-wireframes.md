# Fashion Design Platform - Component Wireframes & UI Specifications

## 🎨 **AUTHENTICATION FLOW WIREFRAMES**

### **1. Enhanced Login/Signup Page**
```
┌─────────────────────────────────────────────────────────────┐
│                        THE RUNWAY                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 Welcome Back                        │   │
│  │                                                     │   │
│  │  ┌─────────────┐  ┌─────────────┐                  │   │
│  │  │ INDIVIDUAL  │  │  COMPANY    │                  │   │
│  │  │     👤      │  │     🏢      │                  │   │
│  │  └─────────────┘  └─────────────┘                  │   │
│  │                                                     │   │
│  │  Email: [________________________]                 │   │
│  │  Password: [____________________]                   │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │              LOGIN                          │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │  Don't have an account? [Sign Up]                  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### **2. Company Registration Form**
```
┌─────────────────────────────────────────────────────────────┐
│                    Company Registration                     │
│                                                             │
│  Company Name: [_________________________________]          │
│  Email: [_______________________________________]           │
│  Password: [___________________________________]            │
│  Confirm Password: [___________________________]            │
│                                                             │
│  Company Address:                                           │
│  Street: [_____________________________________]            │
│  City: [________________] State: [_____________]            │
│  Country: [______________] ZIP: [______________]            │
│                                                             │
│  Website: [____________________________________]            │
│  Description: [________________________________]            │
│               [________________________________]            │
│                                                             │
│  Logo Upload: [📁 Choose File] [Preview Area]              │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              CREATE COMPANY ACCOUNT                 │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🏠 **DASHBOARD WIREFRAMES**

### **3. Individual User Dashboard**
```
┌─────────────────────────────────────────────────────────────┐
│  [🏠] [📊] [🎨] [🤝] [🔔] [⚙️]           [Profile] [Logout] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  👤 [Profile Picture]    Aditi Sharma              │   │
│  │     @aditi_designs       Fashion Designer          │   │
│  │     📍 Mumbai, India     ✨ 2.5k followers         │   │
│  │                                                     │   │
│  │     "Creating sustainable fashion with a modern    │   │
│  │      touch. Every design tells a story."           │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                  │
│  │ 24  │ │ 340 │ │ 58  │ │ 21  │ │ 12  │                  │
│  │Posts│ │Likes│ │Saved│ │Share│ │Colab│                  │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                  │
│                                                             │
│  Recent Activity                    Collaboration Requests │
│  ┌─────────────────────────────┐   ┌─────────────────────┐ │
│  │ 💖 Zara Inc liked your      │   │ 🤝 Fashion Hub      │ │
│  │    "Summer Dress" design    │   │    wants to collab  │ │
│  │    2 hours ago              │   │    [Accept][Decline]│ │
│  │                             │   │                     │ │
│  │ 💾 Someone saved your       │   │ 🤝 Style Co.       │ │
│  │    "Boho Jewelry" design    │   │    collaboration    │ │
│  │    5 hours ago              │   │    [View Details]   │ │
│  └─────────────────────────────┘   └─────────────────────┘ │
│                                                             │
│  My Designs                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ [+ Upload]       │
│  │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│                   │
│  │ 💖12│ │ 💖8 │ │ 💖15│ │ 💖6 │ │ 💖20│                   │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                   │
└─────────────────────────────────────────────────────────────┘
```

### **4. Company Dashboard**
```
┌─────────────────────────────────────────────────────────────┐
│  [🏠] [📊] [🔍] [🤝] [👥] [⚙️]           [Profile] [Logout] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  🏢 [Company Logo]    Fashion Hub Ltd.             │   │
│  │     Est. 2018         Premium Fashion Brand        │   │
│  │     📍 New York, USA  🌐 fashionhub.com           │   │
│  │                                                     │   │
│  │     "Connecting talented designers with global     │   │
│  │      fashion opportunities since 2018."            │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                  │
│  │ 45  │ │ 12  │ │ 8   │ │ 156 │ │ 23  │                  │
│  │Sent │ │Active│ │Done │ │Views│ │Team │                  │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                  │
│                                                             │
│  Discover Designs                   Active Collaborations  │
│  ┌─────────────────────────────┐   ┌─────────────────────┐ │
│  │ [🔍] Search designs...      │   │ 👤 Sarah Chen       │ │
│  │                             │   │    "Boho Collection"│ │
│  │ ┌─────┐ ┌─────┐ ┌─────┐    │   │    Status: In Progress│ │
│  │ │[IMG]│ │[IMG]│ │[IMG]│    │   │    [💬 Chat][📋 Details]│ │
│  │ │🤝   │ │🤝   │ │🤝   │    │   │                     │ │
│  │ │Colab│ │Colab│ │Colab│    │   │ 👤 Mike Johnson     │ │
│  │ └─────┘ └─────┘ └─────┘    │   │    "Street Wear"    │ │
│  │                             │   │    Status: Review   │ │
│  │ [View All Designs]          │   │    [💬 Chat][📋 Details]│ │
│  └─────────────────────────────┘   └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 **DESIGN MANAGEMENT WIREFRAMES**

### **5. Design Upload Interface**
```
┌─────────────────────────────────────────────────────────────┐
│                      Upload New Design                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │           📁 Drag & Drop Images Here                │   │
│  │                      or                             │   │
│  │              [Choose Files]                         │   │
│  │                                                     │   │
│  │     Supported: JPG, PNG, WEBP (Max 5MB each)       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Title: [_____________________________________________]     │
│                                                             │
│  Category: [Dress ▼] [Jewellery] [Shoes]                   │
│                                                             │
│  Description:                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Describe your design, inspiration, materials...     │   │
│  │                                                     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Tags: [#bohemian] [#summer] [#sustainable] [+ Add Tag]    │
│                                                             │
│  ☑️ Make available for collaboration                        │
│  ☑️ Make design public                                      │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐                          │
│  │   SAVE      │ │   PUBLISH   │                          │
│  │   DRAFT     │ │   DESIGN    │                          │
│  └─────────────┘ └─────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

### **6. Enhanced Design Card with Interactions**
```
┌─────────────────────────────────────┐
│                                     │
│            [Design Image]           │
│                                     │
│  👤 Designer Name    🤝 [Collaborate]│
│  📅 2 days ago       ⭐ Featured    │
│                                     │
│  "Sustainable Summer Collection"    │
│  #sustainable #summer #boho         │
│                                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│  │ 💖  │ │ 💾  │ │ 📤  │ │ 👁️  │   │
│  │ 24  │ │ 12  │ │ 8   │ │ 156 │   │
│  └─────┘ └─────┘ └─────┘ └─────┘   │
└─────────────────────────────────────┘
```

## 🤝 **COLLABORATION WIREFRAMES**

### **7. Collaboration Request Modal**
```
┌─────────────────────────────────────────────────────────────┐
│                  Send Collaboration Request                 │
│                                                             │
│  To: Sarah Chen (@sarah_designs)                            │
│  Design: "Boho Summer Dress Collection"                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [Design Preview Image]                              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Project Details:                                           │
│  Budget Range: [$1000 - $5000 ▼]                          │
│  Timeline: [2-4 weeks ▼]                                   │
│                                                             │
│  Message to Designer:                                       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Hi Sarah! We love your boho collection and would   │   │
│  │ like to collaborate on a summer line. We're        │   │
│  │ looking for 10-15 designs with sustainable         │   │
│  │ materials. Let's discuss!                           │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Deliverables:                                              │
│  ☑️ Design sketches                                         │
│  ☑️ Technical specifications                                │
│  ☑️ Material recommendations                                │
│  ☑️ 3D mockups                                              │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐                          │
│  │   CANCEL    │ │ SEND REQUEST│                          │
│  └─────────────┘ └─────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

### **8. Collaboration Management Interface**
```
┌─────────────────────────────────────────────────────────────┐
│  [Sent] [Received] [Active] [Completed]                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 👤 Sarah Chen                    Status: PENDING    │   │
│  │ "Boho Summer Collection"         📅 Sent 2 days ago │   │
│  │                                                     │   │
│  │ Budget: $3,000 | Timeline: 3 weeks                 │   │
│  │ "Hi Sarah! We love your boho collection..."        │   │
│  │                                                     │   │
│  │ ┌─────────┐ ┌─────────┐ ┌─────────┐               │   │
│  │ │ MESSAGE │ │ DETAILS │ │ CANCEL  │               │   │
│  │ └─────────┘ └─────────┘ └─────────┘               │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 👤 Mike Johnson                  Status: ACCEPTED   │   │
│  │ "Street Wear Designs"            📅 Started 1 week │   │
│  │                                                     │   │
│  │ Budget: $2,500 | Timeline: 2 weeks | Progress: 60% │   │
│  │ "Great! I've completed the initial sketches..."    │   │
│  │                                                     │   │
│  │ ┌─────────┐ ┌─────────┐ ┌─────────┐               │   │
│  │ │ CHAT    │ │ FILES   │ │ REVIEW  │               │   │
│  │ └─────────┘ └─────────┘ └─────────┘               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🔔 **NOTIFICATION SYSTEM WIREFRAMES**

### **9. Notification Center**
```
┌─────────────────────────────────────────────────────────────┐
│  Notifications                              [Mark All Read] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🤝 NEW COLLABORATION REQUEST                        │   │
│  │    Fashion Hub wants to collaborate on your        │   │
│  │    "Summer Dress" design                            │   │
│  │    📱 SMS sent | 2 minutes ago                      │   │
│  │    ┌─────────┐ ┌─────────┐                         │   │
│  │    │ ACCEPT  │ │ DECLINE │                         │   │
│  │    └─────────┘ └─────────┘                         │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 💖 DESIGN LIKED                                     │   │
│  │    @sarah_chen liked your "Boho Jewelry" design    │   │
│  │    1 hour ago                                       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 👥 NEW FOLLOWER                                     │   │
│  │    @mike_designs started following you             │   │
│  │    3 hours ago                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ ✅ COLLABORATION ACCEPTED                           │   │
│  │    You accepted Fashion Hub's collaboration         │   │
│  │    request. Project started!                       │   │
│  │    1 day ago                                        │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### **10. SMS Notification Preview**
```
┌─────────────────────────────────────┐
│  📱 SMS Notification                │
├─────────────────────────────────────┤
│                                     │
│  From: +1-555-RUNWAY                │
│  To: +91-98765-43210                │
│                                     │
│  🎨 Fashion Hub wants to            │
│  collaborate on your design         │
│  "Summer Dress Collection"!         │
│                                     │
│  Check your dashboard:              │
│  https://runway.vercel.app/dashboard│
│                                     │
│  Reply STOP to opt out              │
│                                     │
└─────────────────────────────────────┘
```

## 📱 **MOBILE RESPONSIVE WIREFRAMES**

### **11. Mobile Dashboard**
```
┌─────────────────────────┐
│ ☰ THE RUNWAY        🔔 │
├─────────────────────────┤
│                         │
│  👤 [Profile Pic]       │
│     Aditi Sharma        │
│     @aditi_designs      │
│     ✨ 2.5k followers   │
│                         │
│  ┌─────┐ ┌─────┐       │
│  │ 24  │ │ 340 │       │
│  │Posts│ │Likes│       │
│  └─────┘ └─────┘       │
│  ┌─────┐ ┌─────┐       │
│  │ 58  │ │ 12  │       │
│  │Saved│ │Colab│       │
│  └─────┘ └─────┘       │
│                         │
│  Recent Activity        │
│  ┌─────────────────────┐│
│  │ 💖 Zara Inc liked   ││
│  │    your design      ││
│  │    2h ago           ││
│  └─────────────────────┘│
│                         │
│  My Designs             │
│  ┌─────┐ ┌─────┐       │
│  │[IMG]│ │[IMG]│       │
│  │ 💖12│ │ 💖8 │       │
│  └─────┘ └─────┘       │
│                         │
│  [+ Upload Design]      │
│                         │
└─────────────────────────┘
```

## 🎯 **INTERACTION SPECIFICATIONS**

### **Button States**
- **Primary Button**: `#222` background, white text, hover: `#333`
- **Secondary Button**: White background, `#222` text, border: `#222`
- **Danger Button**: `#dc3545` background, white text
- **Success Button**: `#28a745` background, white text

### **Form Validation**
- **Real-time validation** with inline error messages
- **Success states** with green checkmarks
- **Loading states** with spinners
- **Disabled states** with reduced opacity

### **Animation Guidelines**
- **Hover effects**: 0.2s ease-in-out transitions
- **Modal animations**: Fade in/out with scale
- **Loading animations**: Subtle pulse or spinner
- **Page transitions**: Smooth fade between routes

### **Accessibility Features**
- **Focus indicators** for keyboard navigation
- **ARIA labels** for screen readers
- **High contrast** mode support
- **Text scaling** compatibility

This comprehensive wireframe specification provides detailed UI/UX guidance for implementing all the new features while maintaining consistency with your existing design system.