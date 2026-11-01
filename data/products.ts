export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedDemo: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  specsSummary: string;
  specifications: ProductSpecification[];
  variants: string[];
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  popularityScore: number;
  releaseDate: string;
  isWorkspaceEssential: boolean;
  reviews: ProductReview[];
  features: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'laptops-computing',
    slug: 'laptops-computing',
    name: 'Laptops & Computing',
    description: 'High-performance ultra-thin laptops and studio monitors designed for creators.',
    image: '/images/laptops.jpg',
    productCount: 2,
  },
  {
    id: 'headphones-audio',
    slug: 'headphones-audio',
    name: 'Headphones & Audio',
    description: 'Precision acoustic engineering, spatial drivers, and broadcast microphones.',
    image: '/images/headphones.jpg',
    productCount: 3,
  },
  {
    id: 'keyboards-accessories',
    slug: 'keyboards-accessories',
    name: 'Keyboards & Accessories',
    description: 'Tactile mechanical keyboards, precision mice, ergonomic risers, and high-speed hubs.',
    image: '/images/keyboards.jpg',
    productCount: 4,
  },
  {
    id: 'smart-home',
    slug: 'smart-home',
    name: 'Smart Home',
    description: 'Circadian lighting and intelligent connected devices for balanced living.',
    image: '/images/smarthome.jpg',
    productCount: 1,
  },
  {
    id: 'mobile-accessories',
    slug: 'mobile-accessories',
    name: 'Mobile Accessories',
    description: 'Magnetic wireless chargers, durable braided cables, and rapid power blocks.',
    image: '/images/mobile.jpg',
    productCount: 1,
  },
  {
    id: 'gaming-essentials',
    slug: 'gaming-essentials',
    name: 'Gaming Essentials',
    description: 'Esports-grade controllers and low-latency input hardware with zero drift.',
    image: '/images/gaming.jpg',
    productCount: 1,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'aerobook-pro',
    name: 'AeroBook Pro Laptop',
    category: 'Laptops & Computing',
    categorySlug: 'laptops-computing',
    price: 1299,
    originalPrice: 1399,
    shortDescription: 'Precision-engineered ultra-portable laptop with M-Series silicon architecture, Liquid Retina display, and 18-hour battery endurance.',
    fullDescription: 'The AeroBook Pro redefines portable computing for developers, sound engineers, and visual designers. Built inside a single unibody aluminum chassis, it delivers whisper-silent dual-fan thermals and all-day battery endurance while powering high-throughput workflows without thermal throttling.',
    image: '/images/laptops.jpg',
    galleryImages: [
      '/images/laptops.jpg',
      '/images/workspace.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: '14.2" Liquid Retina 120Hz · 12-Core CPU · 32GB Unified · 1TB SSD · 1.55kg',
    specifications: [
      { label: 'Display', value: '14.2-inch Liquid Retina XDR, 3024 x 1964, 120Hz ProMotion, 1600 nits peak' },
      { label: 'Processor', value: 'TECHNEST Silicon 12-Core CPU (8 Performance, 4 Efficiency)' },
      { label: 'Graphics', value: 'Integrated 18-Core GPU with hardware ray tracing' },
      { label: 'Memory', value: '32GB Unified High-Bandwidth Memory (200GB/s)' },
      { label: 'Storage', value: '1TB NVMe PCIe 4.0 SSD (up to 7,400 MB/s read)' },
      { label: 'Battery', value: '70Wh Lithium-Polymer, up to 18 hours video playback' },
      { label: 'Ports', value: '3x Thunderbolt 4 / USB4, HDMI 2.1, MagCharge 3, 3.5mm Headphone' },
      { label: 'Weight', value: '1.55 kg (3.41 lbs)' }
    ],
    variants: ['Space Gray', 'Dark Obsidian', 'Midnight Silver'],
    inStock: true,
    stockCount: 14,
    rating: 4.9,
    reviewCount: 128,
    popularityScore: 98,
    releaseDate: '2026-09-15',
    isWorkspaceEssential: true,
    features: [
      'Whisper-quiet dual-chamber thermal design with vapor chamber cooling',
      'Studio-quality 3-mic array with directional beamforming',
      'Six-speaker sound system with force-cancelling woofers',
      'Full-size backlit keyboard with dedicated function row'
    ],
    reviews: [
      {
        id: 'rev-101',
        userName: 'Julian Vance',
        rating: 5,
        date: 'October 12, 2026',
        title: 'Workstation power in an ultra-portable format',
        comment: 'As a front-end developer and audio engineer, compiling large repositories while running Ableton used to make laptops roar. The AeroBook Pro remains dead silent with zero frame drops.',
        verifiedDemo: true
      },
      {
        id: 'rev-102',
        userName: 'Elena Rostova',
        rating: 5,
        date: 'September 28, 2026',
        title: 'The display color reproduction is immaculate',
        comment: 'Factory calibrated out of the box. Color fidelity for photo grading and editing 4K HDR footage matches reference monitors costing triple the price.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'pulse-wireless-headphones',
    name: 'Pulse Wireless Headphones',
    category: 'Headphones & Audio',
    categorySlug: 'headphones-audio',
    price: 299,
    originalPrice: 349,
    shortDescription: 'Flagship active noise-cancelling headphones featuring 45mm custom graphene drivers, spatial acoustic tracking, and 40-hour playtime.',
    fullDescription: 'Crafted for discerning audiophiles and frequent travelers, the Pulse Wireless combines studio-grade acoustics with intelligent adaptive cancellation. Featuring dual dedicated feedback microphones that recalculate ambient acoustic pressure 380,000 times per second.',
    image: '/images/headphones.jpg',
    galleryImages: [
      '/images/headphones.jpg',
      '/images/hero.jpg',
      '/images/workspace.jpg'
    ],
    specsSummary: '45mm Graphene Drivers · Hybrid Adaptive ANC · 40h Battery · LDAC & aptX · 268g',
    specifications: [
      { label: 'Driver Unit', value: '45mm Custom Graphene diaphragm with neodymium magnets' },
      { label: 'Frequency Response', value: '5Hz – 42,000Hz (Hi-Res Audio certified)' },
      { label: 'Active Noise Cancellation', value: 'Hybrid Adaptive ANC (up to -42dB dampening)' },
      { label: 'Wireless Connectivity', value: 'Bluetooth 5.4 with LDAC, AAC, aptX Adaptive, multipoint pairing' },
      { label: 'Battery Life', value: '40 hours (ANC on), 55 hours (ANC off)' },
      { label: 'Charging', value: 'USB-C fast charge: 15 min charge grants 6 hours playback' },
      { label: 'Weight', value: '268g' }
    ],
    variants: ['Matte Charcoal', 'Frost Silver', 'Deep Indigo'],
    inStock: true,
    stockCount: 32,
    rating: 4.8,
    reviewCount: 215,
    popularityScore: 95,
    releaseDate: '2026-10-01',
    isWorkspaceEssential: true,
    features: [
      'Precision tactile rotary dial for analog-feel volume control',
      'Ultra-soft memory foam protein cushions with zero ear fatigue',
      'Head-tracking spatial audio algorithm with low latency',
      'Fold-flat aluminum gimbal construction with molded travel hardcase'
    ],
    reviews: [
      {
        id: 'rev-201',
        userName: 'Marcus Thorne',
        rating: 5,
        date: 'October 19, 2026',
        title: 'Unbelievable noise suppression on long flights',
        comment: 'Rivals the top German and Japanese audio makers with noticeably more natural midrange clarity and no uncomfortable ear cabin pressure.',
        verifiedDemo: true
      },
      {
        id: 'rev-202',
        userName: 'Siddharth Patel',
        rating: 4,
        date: 'October 05, 2026',
        title: 'Exceptional build quality and materials',
        comment: 'The tactile hardware rotary dial is a massive upgrade over finicky touch gestures. Battery life easily lasted through a full week of commutes.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'nova-mechanical-keyboard',
    name: 'Nova Mechanical Keyboard',
    category: 'Keyboards & Accessories',
    categorySlug: 'keyboards-accessories',
    price: 169,
    originalPrice: 189,
    shortDescription: '75% compact wireless mechanical keyboard with hot-swappable tactile switches, CNC aluminum case, and sound-dampening acoustic gaskets.',
    fullDescription: 'The Nova Keyboard is engineered for ergonomic tactile satisfaction. It features a solid CNC 6063 aluminum chassis, 5-layer internal acoustic foam dampening, and factory-lubricated tactile marble switches mounted to a resilient polycarbonate plate.',
    image: '/images/keyboards.jpg',
    galleryImages: [
      '/images/keyboards.jpg',
      '/images/workspace.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: '75% Layout (82 Keys) · Gasket Mounted · Tri-Mode Wireless · 4000mAh · CNC Aluminum',
    specifications: [
      { label: 'Form Factor', value: '75% Compact Layout (82 Keys + Aluminum Rotary Knob)' },
      { label: 'Switch Type', value: 'Factory Lubed Custom Marble Tactile (55g actuation)' },
      { label: 'Mounting Style', value: 'Silicone Gasket Mount with Polycarbonate Plate' },
      { label: 'Keycaps', value: 'Double-shot PBT Cherry Profile, Oil-resistant textured finish' },
      { label: 'Connectivity', value: 'Tri-Mode: 2.4GHz Wireless (1000Hz), Bluetooth 5.3, USB-C' },
      { label: 'Battery Capacity', value: '4000mAh Rechargeable Lithium-ion (up to 200 hours)' },
      { label: 'Case Material', value: 'Anodized CNC 6063 Aluminum with brass interior weight' }
    ],
    variants: ['Anodized Slate', 'Phantom Dark', 'Chalk White'],
    inStock: true,
    stockCount: 45,
    rating: 4.9,
    reviewCount: 184,
    popularityScore: 92,
    releaseDate: '2026-08-20',
    isWorkspaceEssential: true,
    features: [
      'Pre-lubed switches deliver a deep, satisfying acoustic sound profile',
      'Hot-swappable PCB supports both 3-pin and 5-pin MX mechanical switches',
      'Solid brass interior weight provides rock-steady desktop stability',
      'Customizable aluminum rotary knob for system media & lighting control'
    ],
    reviews: [
      {
        id: 'rev-301',
        userName: 'Chloe Chen',
        rating: 5,
        date: 'September 14, 2026',
        title: 'The best typing sound I have ever experienced',
        comment: 'No rattling stabs, no hollow ping. The gasket dampening delivers that deep, refined acoustic pop keyboard enthusiasts spend hundreds modding for.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'arc-wireless-mouse',
    name: 'Arc Wireless Mouse',
    category: 'Keyboards & Accessories',
    categorySlug: 'keyboards-accessories',
    price: 89,
    shortDescription: 'Ergonomic precision mouse crafted with an electromagnetic metal scroll wheel, dual-axis thumb scroll, and 8,000 DPI Darkfield glass tracking.',
    fullDescription: 'Sculpted to support natural hand ergonomics during marathon productivity sessions. The Arc Wireless Mouse features a machined steel MagSpeed scroll wheel that shifts effortlessly from click-to-click precision to a silent 1,000-lines-per-second spin.',
    image: '/images/keyboards.jpg',
    galleryImages: [
      '/images/keyboards.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: '8000 DPI Darkfield · MagSpeed Steel Wheel · Multi-Device Pairing · 70-Day Battery',
    specifications: [
      { label: 'Sensor Resolution', value: '200 – 8000 DPI Darkfield Sensor (Tracks on glass $\\ge$ 4mm)' },
      { label: 'Scroll Mechanism', value: 'Electromagnetic MagSpeed Stainless Steel Wheel with SmartShift' },
      { label: 'Buttons', value: '7 Programmable Buttons including horizontal gesture thumb roller' },
      { label: 'Connectivity', value: '2.4GHz Wireless USB-A/C Dongle + Bluetooth Low Energy (3 devices)' },
      { label: 'Battery Life', value: 'Up to 70 days on a single full charge' },
      { label: 'Weight', value: '141g' }
    ],
    variants: ['Graphite Black', 'Silver Mist'],
    inStock: true,
    stockCount: 60,
    rating: 4.7,
    reviewCount: 96,
    popularityScore: 88,
    releaseDate: '2026-07-10',
    isWorkspaceEssential: true,
    features: [
      'Whisper-quiet acoustic switches reduce 90% of click noise',
      'Horizontal thumb roller specifically tuned for video editing timelines & wide sheets',
      'One-tap device switching across laptops, tablets, and desktops',
      '3-minute rapid USB-C charge provides a full working day of battery'
    ],
    reviews: [
      {
        id: 'rev-401',
        userName: 'Liam O’Connor',
        rating: 5,
        date: 'August 03, 2026',
        title: 'Wrist pain completely disappeared',
        comment: 'The thumb rest and natural handshake angle alleviated my wrist fatigue after long design sprints. The metal scroll wheel feels ultra-premium.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'echo-mini-speaker',
    name: 'Echo Mini Bluetooth Speaker',
    category: 'Headphones & Audio',
    categorySlug: 'headphones-audio',
    price: 119,
    shortDescription: '360-degree portable acoustic speaker engineered with dual passive radiators, IP67 waterproof enclosure, and 16-hour continuous playback.',
    fullDescription: 'The Echo Mini produces rich, room-filling sound in a palm-sized cylindrical package. Anodized aluminum grille wraps around dual opposite-facing drivers with high-excursion passive radiators that output punchy sub-bass without chassis vibration.',
    image: '/images/hero.jpg',
    galleryImages: [
      '/images/hero.jpg',
      '/images/workspace.jpg'
    ],
    specsSummary: '360° Sound · Dual 20W Drivers · IP67 Waterproof · 16h Playback · TWS Pairing',
    specifications: [
      { label: 'Audio Output', value: '2x 20W Neodymium Drivers + Dual Passive Bass Radiators' },
      { label: 'Frequency Response', value: '60Hz – 20,000Hz' },
      { label: 'Water & Dust Rating', value: 'IP67 Submersible (up to 1m for 30 minutes)' },
      { label: 'Wireless Range', value: 'Bluetooth 5.3 with 30m line-of-sight range' },
      { label: 'Battery Runtime', value: '16 hours at 60% listening volume' },
      { label: 'Dimensions & Weight', value: '88 x 88 x 142 mm, 520g' }
    ],
    variants: ['Midnight Black', 'Pacific Blue', 'Olive Gray'],
    inStock: true,
    stockCount: 28,
    rating: 4.6,
    reviewCount: 74,
    popularityScore: 84,
    releaseDate: '2026-06-18',
    isWorkspaceEssential: false,
    features: [
      'True Wireless Stereo (TWS) pairs two units for wide L/R soundstage',
      'Rugged rubberized bumper base absorbs accidental drops and shocks',
      'Omnidirectional noise-rejecting speakerphone for hands-free calls',
      'Integrated braided silicone utility strap'
    ],
    reviews: [
      {
        id: 'rev-501',
        userName: 'Jessica Miller',
        rating: 5,
        date: 'July 14, 2026',
        title: 'Huge bass for such a compact unit',
        comment: 'Fills our patio and living room effortlessly. Used it in the rain during camping with zero issues.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'vision-4k-monitor',
    name: 'Vision 4K Monitor',
    category: 'Laptops & Computing',
    categorySlug: 'laptops-computing',
    price: 649,
    originalPrice: 699,
    shortDescription: '32-inch ultra-crisp 4K IPS display featuring 99% DCI-P3 color accuracy, 90W USB-C single-cable power delivery, and an integrated ergonomic arm.',
    fullDescription: 'The centerpiece of an elite workspace. The Vision 4K Monitor pairs a 3840x2160 IPS panel with 144Hz high refresh rate and true 10-bit color reproduction. Its integrated counterbalanced aluminum desk clamp arm eliminates bulky desktop stands.',
    image: '/images/workspace.jpg',
    galleryImages: [
      '/images/workspace.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: '32" 4K UHD 144Hz · 99% DCI-P3 / HDR 600 · 90W USB-C PD · Zero-Bezel Aluminum',
    specifications: [
      { label: 'Panel Type', value: '32-inch Anti-Glare IPS with Quantum Dot Enhancement' },
      { label: 'Resolution & Refresh', value: '3840 x 2160 (4K UHD) @ 144Hz with FreeSync Premium' },
      { label: 'Color Gamut', value: '99% DCI-P3, 100% sRGB, Delta E < 1.5 Calibration Sheet' },
      { label: 'Peak Brightness', value: '600 nits (VESA DisplayHDR 600 Certified)' },
      { label: 'Connectivity', value: '1x USB-C (90W PD + DP Alt Mode), 2x HDMI 2.1, 1x DP 1.4, 4-Port USB Hub' },
      { label: 'Mounting', value: 'Included Heavy-Duty Aluminum Gas-Spring Desk Clamp Arm (VESA 100x100)' }
    ],
    variants: ['Matte Black', 'Brushed Aluminum'],
    inStock: true,
    stockCount: 9,
    rating: 4.9,
    reviewCount: 142,
    popularityScore: 94,
    releaseDate: '2026-09-02',
    isWorkspaceEssential: true,
    features: [
      'Single-cable USB-C connection charges laptop, transmits video, and routes peripherals',
      'Built-in KVM switch allows one keyboard and mouse to toggle between two connected PCs',
      'Flicker-free hardware low blue light certified by TÜV Rheinland',
      'Integrated magnetic cable routing channels along the aluminum arm'
    ],
    reviews: [
      {
        id: 'rev-601',
        userName: 'Devon Takahashi',
        rating: 5,
        date: 'October 08, 2026',
        title: 'Single cable desk heaven',
        comment: 'Plugging in one USB-C cable for 90W charging, 4K 144Hz video, and all USB accessories transformed my desk clutter completely. The included arm is heavy-duty and silky smooth.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'flex-laptop-stand',
    name: 'Flex Laptop Stand',
    category: 'Keyboards & Accessories',
    categorySlug: 'keyboards-accessories',
    price: 59,
    shortDescription: 'Precision CNC-machined aerospace aluminum riser designed for optimal ergonomic eye-level posture, cable management, and thermal dissipation.',
    fullDescription: 'Machined from aircraft-grade 6000-series aluminum, the Flex Laptop Stand elevates your display by up to 6 inches to align perfectly with your line of sight. Dual friction hinges hold devices up to 17 inches securely at any chosen angle without tools.',
    image: '/images/workspace.jpg',
    galleryImages: [
      '/images/workspace.jpg',
      '/images/laptops.jpg'
    ],
    specsSummary: 'CNC 4mm Aerospace Aluminum · Dual Friction Hinges · Supports up to 17" · Heat Dissipation',
    specifications: [
      { label: 'Material', value: '4mm CNC Anodized Solid Aluminum with sandblasted finish' },
      { label: 'Compatibility', value: 'Laptops and tablets from 10 to 17.3 inches' },
      { label: 'Weight Capacity', value: 'Supports up to 10 kg (22 lbs)' },
      { label: 'Adjustability', value: 'Infinitely variable angle (0° to 60°) and height up to 15cm' },
      { label: 'Protection', value: 'Medical-grade anti-slip silicone pads on cradles and base' }
    ],
    variants: ['Space Gray', 'Natural Silver'],
    inStock: true,
    stockCount: 85,
    rating: 4.8,
    reviewCount: 112,
    popularityScore: 79,
    releaseDate: '2026-05-12',
    isWorkspaceEssential: true,
    features: [
      'Passive aluminum heat-sink effect drops laptop CPU idle temps by up to 5°C',
      'Folds flat in seconds for travel or storage in a backpack sleeve',
      'Precision cable pass-through port keeps power and display cords tidy',
      'Matches the exact bead-blasted surface texture of modern aluminum laptops'
    ],
    reviews: [
      {
        id: 'rev-701',
        userName: 'Aria Sterling',
        rating: 5,
        date: 'June 21, 2026',
        title: 'Rock solid, no wobble when typing',
        comment: 'Hinges are stiff in the best possible way. Holds my 16-inch laptop rock steady at eye height beside my external monitor.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'core-usb-c-hub',
    name: 'Core USB-C Hub',
    category: 'Keyboards & Accessories',
    categorySlug: 'keyboards-accessories',
    price: 79,
    shortDescription: '10-in-1 multi-port docking hub with dual 4K HDMI outputs, 100W Power Delivery pass-through, UHS-II SD card readers, and Gigabit Ethernet.',
    fullDescription: 'Transform a single USB-C or Thunderbolt port into an exhaustive workstation connectivity center. Encased in a ribbed aluminum enclosure that dissipates controller heat rapidly during intensive continuous data transfers.',
    image: '/images/keyboards.jpg',
    galleryImages: [
      '/images/keyboards.jpg',
      '/images/workspace.jpg'
    ],
    specsSummary: '10-in-1 Dock · Dual 4K@60Hz HDMI · 100W PD Pass-through · Gigabit LAN · UHS-II SD',
    specifications: [
      { label: 'Video Output', value: '2x HDMI 2.0 (Dual 4K @ 60Hz extended display mode)' },
      { label: 'Power Delivery', value: '100W USB-C PD 3.0 Pass-Through Input (85W to host)' },
      { label: 'Data Ports', value: '3x USB-A 3.2 Gen 2 (10Gbps), 1x USB-C 3.2 Gen 2 (10Gbps)' },
      { label: 'Card Readers', value: 'Dual SD & microSD slots with UHS-II 312MB/s simultaneous read' },
      { label: 'Networking', value: 'Gigabit Ethernet RJ45 (10/100/1000 Mbps)' },
      { label: 'Cable', value: '25cm Kevlar-reinforced braided nylon connector with right-angle head' }
    ],
    variants: ['Space Slate'],
    inStock: true,
    stockCount: 54,
    rating: 4.7,
    reviewCount: 88,
    popularityScore: 82,
    releaseDate: '2026-07-25',
    isWorkspaceEssential: true,
    features: [
      'Smart thermal management throttles heat rather than dropping port connections',
      'Dual external 4K monitor support for seamless extended desktop productivity',
      'High-speed UHS-II card slot offloads camera RAW footage in seconds',
      'EMI shielding prevents interference with 2.4GHz wireless mice and keyboards'
    ],
    reviews: [
      {
        id: 'rev-801',
        userName: 'Kareem Badawi',
        rating: 5,
        date: 'August 18, 2026',
        title: 'Runs dual 4K displays with zero flicker',
        comment: 'Many cheaper hubs drop down to 30Hz or overheat during 100W charging. The Core Hub stays warm but reliable all day long.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'orbit-smart-desk-lamp',
    name: 'Orbit Smart Desk Lamp',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    price: 149,
    originalPrice: 169,
    shortDescription: 'Architectural dual-axis LED task lamp featuring circadian auto-dimming, Ra98 high color rendering index, and touch-sensitive brightness slider.',
    fullDescription: 'The Orbit Smart Desk Lamp harmonizes illumination with human biology. Its high-CRI continuous LED array tracks solar time to deliver energizing cool white during morning peak focus and soothing warm amber tones as dusk approaches.',
    image: '/images/smarthome.jpg',
    galleryImages: [
      '/images/smarthome.jpg',
      '/images/workspace.jpg'
    ],
    specsSummary: 'Ra98 High CRI · 2700K–6500K Tunable · Ambient Auto-Dimming · Matter & HomeKit',
    specifications: [
      { label: 'Color Rendering', value: 'Ra98 Ultra-High CRI (True daylight spectrum, zero blue spike)' },
      { label: 'Color Temperature', value: '2700K (Warm candle) to 6500K (Crisp noon daylight)' },
      { label: 'Illuminance', value: 'Up to 1500 Lux at 45cm desk height' },
      { label: 'Sensors', value: 'Integrated ambient optical illuminance sensor with auto-compensation' },
      { label: 'Smart Protocol', value: 'Matter-over-Wi-Fi, Apple HomeKit, Google Home, TECHNEST App' },
      { label: 'Base Extras', value: 'Integrated 15W Qi wireless charging pad built directly into heavy iron base' }
    ],
    variants: ['Matte Black', 'Satin Silver'],
    inStock: true,
    stockCount: 22,
    rating: 4.9,
    reviewCount: 104,
    popularityScore: 90,
    releaseDate: '2026-08-30',
    isWorkspaceEssential: true,
    features: [
      'Asymmetric optical design illuminates your desk surface without screen glare',
      'Smooth stepless touch slide bar along the lamp head for fine dimming',
      'Zero noticeable PWM flicker to eliminate eye strain during night work',
      'Solid counterweighted iron base prevents tipping during arm adjustments'
    ],
    reviews: [
      {
        id: 'rev-901',
        userName: 'Hannah Lin',
        rating: 5,
        date: 'September 19, 2026',
        title: 'Noticeable reduction in evening eye strain',
        comment: 'The circadian mode seamlessly shifts color temperature as twilight hits. Plus the Qi charging pad on the base keeps my phone topped up.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'studio-usb-microphone',
    name: 'Studio USB Microphone',
    category: 'Headphones & Audio',
    categorySlug: 'headphones-audio',
    price: 179,
    shortDescription: 'Broadcast-grade cardioid condenser microphone with internal pop filter, 24-bit/192kHz resolution, and zero-latency hardware headphone monitoring.',
    fullDescription: 'Engineered for podcast hosts, voice actors, and remote leaders who demand crystal-clear vocal weight. Features a gold-sputtered 25mm condenser capsule with an analog optical limiter that prevents digital clipping during sudden vocal spikes.',
    image: '/images/workspace.jpg',
    galleryImages: [
      '/images/workspace.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: '25mm Condenser Capsule · 24-bit/192kHz · Cardioid / Omni · Zero-Latency Monitor Jack',
    specifications: [
      { label: 'Capsule', value: '25mm Gold-sputtered Condenser with internal dual-layer shock isolation' },
      { label: 'Polar Patterns', value: 'Cardioid (Voice/Podcasts) and Omnidirectional (Room/Interviews)' },
      { label: 'Sample Rate / Bit Depth', value: '192 kHz / 24-bit studio resolution' },
      { label: 'Headphone Output', value: 'Zero-latency 3.5mm jack with dedicated hardware volume rotary' },
      { label: 'Hardware Controls', value: 'Tap-to-mute capacitive sensor with LED status ring, Mic Gain dial' },
      { label: 'Mounting', value: 'Standard 5/8" and 3/8" boom arm threads + heavy desktop base' }
    ],
    variants: ['Matte Black', 'Lunar Gray'],
    inStock: true,
    stockCount: 19,
    rating: 4.8,
    reviewCount: 67,
    popularityScore: 86,
    releaseDate: '2026-09-10',
    isWorkspaceEssential: true,
    features: [
      'Capacitive top tap-to-mute button with instant visual ring feedback',
      'Built-in analog optical limiter tames sudden shouting or laughter spikes',
      'Plug-and-play USB-C connectivity with no proprietary drivers required',
      'Internal dual-layer mesh eliminates harsh plosive "P" and "B" pops'
    ],
    reviews: [
      {
        id: 'rev-1001',
        userName: 'Gavin Ross',
        rating: 5,
        date: 'October 02, 2026',
        title: 'Deep, radio-ready voice quality with zero EQ hassle',
        comment: 'Clients commented on my audio quality immediately on Zoom. The zero-latency headphone monitoring is indispensable.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'nova-gaming-controller',
    name: 'Nova Gaming Controller',
    category: 'Gaming Essentials',
    categorySlug: 'gaming-essentials',
    price: 129,
    originalPrice: 149,
    shortDescription: 'Pro-tier wireless esports controller with Hall Effect anti-drift magnetic joysticks, microswitch triggers, and customizable rear remappable paddles.',
    fullDescription: 'Built to withstand competitive esports rigor. Hall Effect contactless magnetic sensors eliminate stick drift permanently. Mechanical mouse-click microswitch face buttons actuate in just 0.3mm for instantaneous reflex inputs.',
    image: '/images/gaming.jpg',
    galleryImages: [
      '/images/gaming.jpg',
      '/images/hero.jpg'
    ],
    specsSummary: 'Hall Effect Joysticks · Microswitch Triggers · 4 Rear Paddles · 1000Hz Polling',
    specifications: [
      { label: 'Thumbsticks', value: 'Dual Hall Effect Contactless Magnetic Sensors (Zero Stick Drift Guarantee)' },
      { label: 'Face Buttons', value: 'Mechanical Microswitch buttons (0.3mm actuation distance, 60g force)' },
      { label: 'Triggers', value: 'Adjustable 2-stage hair-trigger locks for immediate rapid firing' },
      { label: 'Rear Paddles', value: '4 Remappable ergonomic rear buttons with on-board memory profiles' },
      { label: 'Polling Rate', value: '1000Hz Polling Rate over 2.4GHz wireless dongle & USB-C wired' },
      { label: 'Battery Life', value: 'Up to 30 hours gameplay per charge (1200mAh pack)' }
    ],
    variants: ['Carbon Black', 'Arctic Camo'],
    inStock: true,
    stockCount: 37,
    rating: 4.9,
    reviewCount: 156,
    popularityScore: 96,
    releaseDate: '2026-10-12',
    isWorkspaceEssential: false,
    features: [
      'Textured laser-etched diamond grip handles resist palm perspiration',
      'Swappable magnetic thumbstick caps (concave, convex, and high-rise domed)',
      'Subtle electric blue accent LEDs with programmable brightness',
      'Cross-platform compatibility: PC, Mac, iOS, Android, and Steam Deck'
    ],
    reviews: [
      {
        id: 'rev-1101',
        userName: 'Zackariah Kane',
        rating: 5,
        date: 'October 24, 2026',
        title: 'Hall effect sticks are night and day difference',
        comment: 'Tested on competitive shooters for two weeks straight. Deadzones can be dialed down to 0% with absolute zero drift. The mechanical buttons feel like high-end mouse clicks.',
        verifiedDemo: true
      }
    ]
  },
  {
    id: 'compact-wireless-charger',
    name: 'Compact Wireless Charger',
    category: 'Mobile Accessories',
    categorySlug: 'mobile-accessories',
    price: 49,
    shortDescription: 'Ultra-slim 15W Qi2 magnetic fast charger with CNC chamfered aluminum housing, braided kevlar cable, and intelligent thermal management.',
    fullDescription: 'At just 6.2mm thin, this Qi2-certified magnetic charger snaps securely to compatible phones and wireless earbuds. Built with aviation-grade aluminum to dissipate heat efficiently, sustaining 15W peak charging speeds without thermal throttling.',
    image: '/images/mobile.jpg',
    galleryImages: [
      '/images/mobile.jpg',
      '/images/workspace.jpg'
    ],
    specsSummary: 'Qi2 15W Fast Charge · CNC Chamfered Aluminum · 6.2mm Ultra-Thin · Kevlar Braided Cable',
    specifications: [
      { label: 'Standard', value: 'Qi2 Certified Magnetic Wireless Protocol' },
      { label: 'Charging Output', value: '5W / 7.5W / 10W / 15W auto-negotiation' },
      { label: 'Enclosure', value: 'Anodized 6000-series aluminum with chamfered polished silver bevel' },
      { label: 'Cable Length', value: '1.5-meter integrated braided Kevlar USB-C cable' },
      { label: 'Thickness & Weight', value: '6.2 mm profile, 64 grams' },
      { label: 'Safety Protections', value: 'Foreign Object Detection (FOD), Over-voltage, Over-temp cutoff' }
    ],
    variants: ['Space Gray', 'Arctic Silver', 'Obsidian'],
    inStock: true,
    stockCount: 75,
    rating: 4.7,
    reviewCount: 130,
    popularityScore: 85,
    releaseDate: '2026-09-22',
    isWorkspaceEssential: true,
    features: [
      'Strong N52 neodymium magnetic ring aligns perfectly through cases up to 3mm',
      'Matte soft-touch center pad prevents scratch marks on glass device backs',
      'Maintains 15W max charging speed twice as long as plastic chargers due to metal cooling',
      'Universal compatibility with all Qi and Mag-compatible devices'
    ],
    reviews: [
      {
        id: 'rev-1201',
        userName: 'Nadia Solis',
        rating: 5,
        date: 'October 15, 2026',
        title: 'Sleek, stays cool, charges fast',
        comment: 'Much better than the standard plastic pucks. The aluminum feels premium and draws heat away from my phone so it does not overheat while charging overnight.',
        verifiedDemo: true
      }
    ]
  }
];

export const WHY_TECHNEST_ITEMS = [
  {
    icon: 'Cpu',
    title: 'Clear Product Specifications',
    description: 'Uncompromising clarity with comprehensive component sheets, verified tolerances, and honest dimensions without inflated marketing claims.'
  },
  {
    icon: 'Compass',
    title: 'Convenient Product Discovery',
    description: 'Fluid real-time filtering, instant search, and side-by-side comparison matrices engineered for technical enthusiasts and professionals.'
  },
  {
    icon: 'Layers',
    title: 'Organized Shopping Experience',
    description: 'Friction-free navigation, persistent local storage cart, and thoughtful category taxonomy designed for speed and clarity.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Helpful Product Information',
    description: 'In-depth architectural breakdowns, transparent sample reviews, and practical variant selection to make informed decisions.'
  }
];

export const DEMO_FAQS = [
  {
    question: 'Is TECHNEST a real commercial store?',
    answer: 'TECHNEST is a fictional electronics brand created as a portfolio demonstration for a professional web design agency. All products, prices, specifications, and reviews are realistic fictional demonstration data. No actual orders or payments are processed.'
  },
  {
    question: 'How does the shopping cart and checkout work?',
    answer: 'The shopping cart is fully functional on the frontend and persists in your browser\'s local storage. You can add items, choose variants, adjust quantities, and test the checkout flow. Submitting the checkout will generate a simulated order confirmation without charging any card.'
  },
  {
    question: 'Can I compare different tech products side-by-side?',
    answer: 'Yes! Click the "Compare" button on any 2 or 3 products in the catalog to launch the side-by-side technical comparison matrix, comparing prices, dimensions, connectivity, battery, and key specifications.'
  },
  {
    question: 'How do the search and filters work together?',
    answer: 'Search queries, category selection, price sliders, in-stock toggles, and sorting options all evaluate cooperatively in real time without refreshing the page.'
  }
];
