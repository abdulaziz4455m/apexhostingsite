export const siteMetadata = {
  brandName: "ApexHostPro",
  domain: "apexhostpro.com",
  tagline: "Pakistan's #1 Oracle APEX Cloud Hosting Partner",
  phone: "0304-8106662",
  whatsapp: "03048106662",
  whatsappUrl: "https://wa.me/923048106662",
  email: "sales@apexhostpro.com",
  scheduleMeetingUrl: "/contact-us",
  clientLoginUrl: "/clients",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },
  locations: [
    {
      title: "Karachi Operations HQ (Pakistan)",
      address: "101, Dominion Business Center – 1, Jinnah Ave, Bahria Town, Karachi"
    },
    {
      title: "Lahore & Islamabad Technology Hubs",
      address: "Main Boulevard Gulberg III, Lahore & Blue Area, Islamabad, Pakistan"
    }
  ]
};

export const heroStats = {
  googleRating: "4.9",
  trustpilotRating: "4.8",
  customers: "1,000+",
  uptime: "99.99%",
  countries: "Pakistan & Global"
};

export const hostingSolutions = [
  {
    id: "shared",
    title: "Shared Hosting",
    slug: "/apex-shared-hosting",
    price: "Rs. 3,900 /mo",
    features: [
      "Ideal for SMEs & MVPs in Pakistan",
      "Most cost-effective PKR plan",
      "Direct SQL Developer access",
      "Oracle APEX 26.1 & 24.2",
      "Instant setup via Raast / Bank"
    ]
  },
  {
    id: "dedicated",
    title: "DedicatedDB Hosting",
    slug: "/apex-dedicated-hosting",
    price: "Rs. 23,500 /mo",
    features: [
      "For high-performance ERPs",
      "Exclusive Virtual Machine",
      "Complete root & SYSDBA access",
      "Oracle APEX 26.1 & 24.2",
      "FBR POS & Banking API ready"
    ]
  },
  {
    id: "clouddb",
    title: "CloudDB Hosting",
    slug: "/oracle-apex-clouddb",
    price: "Rs. 97,000 /mo",
    features: [
      "Enterprise-grade database",
      "Two dedicated VMs with failover",
      "Full administrative access",
      "Oracle APEX 26.1 & 24.2",
      "Active Data Guard continuous replication"
    ]
  },
  {
    id: "onprem",
    title: "On-Prem Support",
    slug: "/complete-onpremise-support",
    price: "Custom",
    features: [
      "Support on your own local servers",
      "Keep full data sovereignity in Pakistan",
      "Full installation & ORDS setup",
      "Managed upgrades and security patches",
      "24/7 dedicated Pakistani DBA hotline"
    ]
  }
];

export const apexPrintData = {
  title: "Pixel-Perfect Oracle APEX Reporting Tool",
  description: "ApexPrint combines a powerful drag-and-drop designer with an Oracle APEX plugin, enabling Pakistani developers to design invoices, tax challans, and generate professional PDF reports effortlessly.",
  link: "/apexprint",
  buttonText: "EXPLORE APEXPRINT FEATURES"
};

export const apexProtectData = {
  title: "ApexProtect – Managed Linux Server Security",
  headline: "24/7 human-led SOC and proactive hardening for your critical Linux infrastructure in Pakistan. Enterprise-grade defense for Rs. 27,900 /server /month.",
  price: "Rs. 27,900 /server /month",
  link: "/apexprotect",
  buttonText: "SEE APEXPROTECT SECURITY FEATURES",
  features: [
    "24/7 SOC Threat Monitoring",
    "Endpoint Protection Agent",
    "Monthly Vulnerability Scan & FBR Compliance Audit",
    "Managed Linux Kernel Live-Patching",
    "Unlimited Security Incident Support",
    "Support for On-Prem, OCI, AWS, Azure & Pakistani Data Centers"
  ]
};

export const coreFeatures = [
  { title: "User-friendly Control Panel", icon: "control" },
  { title: "Pakistan Low-Latency Routing", icon: "locations" },
  { title: "Enterprise NVMe SSD Storage", icon: "ssd" },
  { title: "High-Throughput Performance", icon: "speed" },
  { title: "Direct SQL Developer Access", icon: "database" },
  { title: "Raast & Local Bank Billing", icon: "config" }
];

export const blogPosts = [
  {
    id: "apex-public-user-security-guide",
    title: "APEX_PUBLIC_USER: The Invisible Gatekeeper of Your Oracle APEX App",
    date: "August 2026",
    excerpt: "Learn how the APEX_PUBLIC_USER connection pool functions within ORDS and best practices for credential hardening in mission-critical environments.",
    link: "/blogs/apex-public-user-security-guide"
  },
  {
    id: "build-ai-agent-oracle-apex",
    title: "From Chatbots to AI Agents: Build and Deploy Your First AI Agent in Oracle APEX",
    date: "June 2026",
    excerpt: "Discover step-by-step how to leverage APEX 26.1 vector search and generative capabilities to deploy autonomous AI agents in your business applications.",
    link: "/blogs/build-ai-agent-oracle-apex"
  }
];

export const pricingPlans = {
  shared: [
    {
      id: "apex-100m",
      name: "APEX-100M",
      price: "3,900",
      numericPrice: 3900,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "No Free Domain", included: false },
        { text: "SSL Included", included: true },
        { text: "Schemas – 01", included: true },
        { text: "Tablespace Quota ~ 100MB", included: true },
        { text: "Web Space ~ 100MB", included: true },
        { text: "Workspace ~ 01", included: true },
        { text: "ApexPrint Engine Included", included: true }
      ]
    },
    {
      id: "apex-200m",
      name: "APEX-200M",
      price: "6,400",
      numericPrice: 6400,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free .com / .pk Domain", included: true },
        { text: "SSL Included", included: true },
        { text: "Schemas – 02", included: true },
        { text: "Tablespace Quota ~ 200MB", included: true },
        { text: "Web Space ~ 500MB", included: true },
        { text: "Workspace ~ 02", included: true },
        { text: "Jasper / ApexPrint Engine", included: true }
      ]
    },
    {
      id: "apex-500m",
      name: "APEX-500M",
      price: "9,900",
      numericPrice: 9900,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free .com / .pk Domain", included: true },
        { text: "SSL Included", included: true },
        { text: "Schemas – 03", included: true },
        { text: "Tablespace Quota ~ 500MB", included: true },
        { text: "Web Space ~ 1GB", included: true },
        { text: "Workspace ~ 03", included: true },
        { text: "Jasper / ApexPrint Engine", included: true }
      ]
    },
    {
      id: "apex-1g",
      name: "APEX-1G",
      price: "15,500",
      numericPrice: 15500,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free .com / .pk Domain", included: true },
        { text: "SSL Included", included: true },
        { text: "Schemas – 04", included: true },
        { text: "Tablespace Quota ~ 1GB", included: true },
        { text: "Web Space ~ 2GB", included: true },
        { text: "Workspace ~ 04", included: true },
        { text: "Jasper / ApexPrint Engine", included: true }
      ]
    }
  ],
  dedicated: [
    {
      id: "ddb-micro-v2",
      name: "DDB-Micro v2",
      price: "23,500",
      numericPrice: 23500,
      period: "month",
      features: [
        { text: "Dedicated RAM ~ 4GB", included: true },
        { text: "CPU Cores ~ 02 Dedicated", included: true },
        { text: "NVMe Disk Space ~ 40GB", included: true },
        { text: "Ideal for ~ Dev & Testing", included: true },
        { text: "Jasper / ApexPrint Engine", included: true },
        { text: "Direct SQL*Net Listener Access", included: true }
      ]
    },
    {
      id: "ddb-small-v2",
      name: "DDB-Small v2",
      price: "33,500",
      numericPrice: 33500,
      period: "month",
      features: [
        { text: "Dedicated RAM ~ 8GB", included: true },
        { text: "CPU Cores ~ 02 Dedicated", included: true },
        { text: "NVMe Disk Space ~ 80GB", included: true },
        { text: "Ideal for ~ Production Workloads", included: true },
        { text: "Jasper / ApexPrint Engine", included: true },
        { text: "Automated Daily Backups", included: true }
      ]
    },
    {
      id: "ddb-large-v2",
      name: "DDB-Large v2",
      price: "44,500",
      numericPrice: 44500,
      period: "month",
      features: [
        { text: "Dedicated RAM ~ 16GB", included: true },
        { text: "CPU Cores ~ 04 Dedicated", included: true },
        { text: "NVMe Disk Space ~ 160GB", included: true },
        { text: "Ideal for ~ High-Concurrency ERPs", included: true },
        { text: "Jasper / ApexPrint Engine", included: true },
        { text: "Root OS & SSH Access", included: true }
      ]
    },
    {
      id: "ddb-xl-v2",
      name: "DDB-XL v2",
      price: "72,500",
      numericPrice: 72500,
      period: "month",
      features: [
        { text: "Dedicated RAM ~ 32GB", included: true },
        { text: "CPU Cores ~ 06 Dedicated", included: true },
        { text: "NVMe Disk Space ~ 240GB", included: true },
        { text: "Ideal for ~ Enterprise Production", included: true },
        { text: "Jasper / ApexPrint Engine", included: true },
        { text: "24/7 Dedicated DBA Hotline", included: true }
      ]
    }
  ],
  cloud: [
    {
      id: "clouddb-256-1",
      name: "CloudDB-256.1",
      price: "97,000",
      numericPrice: 97000,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 256GB NVMe", included: true }
      ]
    },
    {
      id: "clouddb-512-1",
      name: "CloudDB-512.1",
      price: "105,000",
      numericPrice: 105000,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 512GB NVMe", included: true }
      ]
    },
    {
      id: "clouddb-1024-1",
      name: "CloudDB-1024.1",
      price: "135,000",
      numericPrice: 135000,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 1TB NVMe", included: true }
      ]
    },
    {
      id: "clouddb-512-2",
      name: "CloudDB-512.2",
      price: "180,000",
      numericPrice: 180000,
      period: "month",
      features: [
        { text: "RAM ~ 32GB", included: true },
        { text: "OCPUS ~ 02", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 512GB NVMe", included: true }
      ]
    },
    {
      id: "clouddb-1024-2",
      name: "CloudDB-1024.2",
      price: "189,000",
      numericPrice: 189000,
      period: "month",
      features: [
        { text: "RAM ~ 32GB", included: true },
        { text: "OCPUS ~ 02", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 1TB NVMe", included: true }
      ]
    }
  ]
};

export const comparisonMatrix = [
  {
    category: "Top features",
    icon: "Rocket",
    rows: [
      { feature: "Fully Managed in Pakistan", shared: true, dedicated: true, cloud: true },
      { feature: "Ideal For", shared: "Small Apps & MVPs", dedicated: "Mid-Sized ERPs", cloud: "Enterprise-Level Mission Critical" },
      { feature: "Concurrent Users", shared: "1 - 10", dedicated: "10 - 100", cloud: "20 - 1000+" },
      { feature: "Uptime SLA Guarantee", shared: "99.99%", dedicated: "99.99%", cloud: "99.99%" },
      { feature: "Custom Domain & Free SSL", shared: true, dedicated: true, cloud: true },
      { feature: "Jasper / ApexPrint Engine", shared: true, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Performance & Architecture",
    icon: "Settings",
    rows: [
      { feature: "Oracle APEX Version", shared: "APEX 26.1 / 24.2", dedicated: "APEX 26.1 / 24.2", cloud: "APEX 26.1 / 24.2" },
      { feature: "Dedicated VM Resources", shared: false, dedicated: true, cloud: true },
      { feature: "Dual VM Failover Architecture", shared: false, dedicated: false, cloud: true },
      { feature: "SSD NVMe Ultra-Fast Storage", shared: true, dedicated: true, cloud: true },
      { feature: "Oracle REST Data Services (ORDS)", shared: true, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Control & Access",
    icon: "Key",
    rows: [
      { feature: "Oracle APEX Builder Access", shared: true, dedicated: true, cloud: true },
      { feature: "Full Database Root Access", shared: false, dedicated: true, cloud: true },
      { feature: "Direct SQL*Net Listener (Port 1521)", shared: false, dedicated: true, cloud: true },
      { feature: "Custom Web Server / Port Config", shared: false, dedicated: true, cloud: true },
      { feature: "FBR POS / Banking API Whitelisting", shared: true, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Data & Security",
    icon: "Shield",
    rows: [
      { feature: "Daily Automated Snapshot Backups", shared: true, dedicated: true, cloud: true },
      { feature: "Point-in-Time Recovery (PITR)", shared: false, dedicated: true, cloud: true },
      { feature: "Multi-Region Cloud Replication", shared: false, dedicated: false, cloud: true },
      { feature: "ApexProtect 24/7 Threat Monitoring", shared: false, dedicated: true, cloud: true },
      { feature: "Local Pakistani Billing (Raast / Bank)", shared: true, dedicated: true, cloud: true }
    ]
  }
];

export const enterprisePlans = [
  {
    name: "Business Starter Dedicated",
    tagline: "High-performance entry point for growing Pakistani companies & SaaS software.",
    badge: "Most Popular in Pakistan",
    price: "19,000",
    features: [
      "Dedicated 4-Core CPU & 8GB ECC RAM",
      "80GB Enterprise NVMe Storage",
      "Full Oracle APEX 26.1 + ORDS Pre-configured",
      "Dedicated SQL*Net Port 1521 Access",
      "Automated Daily Backups (14 Days Retention)",
      "Free Zero-Downtime Database Migration"
    ],
    highlight: false,
  },
  {
    name: "Enterprise Production Cluster",
    tagline: "Dedicated mission-critical cloud hosting with guaranteed 99.99% uptime and DBA SLA.",
    badge: "Enterprise Grade",
    price: "49,000",
    features: [
      "Dedicated 8-Core CPU & 32GB ECC RAM",
      "300GB Ultra-Fast NVMe Storage (35,000 IOPS)",
      "Dedicated High-Concurrency ORDS Cluster",
      "Active Data Guard Synchronous Replication",
      "24/7 Dedicated DBA WhatsApp & Phone Hotline",
      "ApexProtect SOC Hardening & WAF Included"
    ],
    highlight: true,
  }
];

export const dedicatedFaqs = [
  {
    q: "What payment methods do you accept in Pakistan?",
    a: "We support instant Pakistani payment methods including Raast Instant Pay, direct Bank Transfer (Meezan Bank, HBL, Bank Alfalah, MCB, Faysal), 1Link, JazzCash, EasyPaisa, PayPak, and corporate Pay Orders, as well as Visa & Mastercard."
  },
  {
    q: "How does ApexHostPro provide faster latency for Pakistani users?",
    a: "We host high-speed routing nodes optimized for Pakistan with direct transit via PTCL, Transworld, and Nayatel fiber backbones, ensuring sub-25ms response times across Karachi, Lahore, Islamabad, and nationwide."
  },
  {
    q: "Can we integrate Oracle APEX with FBR POS and Pakistani banks?",
    a: "Yes! Our environments provide static whitelisted IP addresses, custom SSL certificates, and full cryptographic support needed for FBR Digital Invoicing, Raast APIs, 1Link switches, and commercial bank payment gateways."
  },
  {
    q: "Do you offer free migration from our existing servers or local hosting?",
    a: "Yes. Our certified Pakistani Oracle DBAs handle the entire migration process with zero downtime and zero data loss. We export your schemas, configure ORDS, and verify all APEX pages at no additional cost."
  },
  {
    q: "Can we connect using Oracle SQL Developer or VS Code?",
    a: "Yes. All DedicatedDB and CloudDB packages provide direct encrypted SQL*Net listener access (port 1521/2484 with TCPS SSL) so your developers can connect from SQL Developer, VS Code, DBeaver, or PL/SQL Developer."
  }
];

export const cloudServicesData = {
  link: "/cloud-services",
  buttonText: "DISCOVER CLOUD SERVICES",
  description: "Affordable Managed Cloud Services in Pakistan across Oracle Cloud Infrastructure, AWS, and Azure. Seamless migration, FBR integration, and high availability.",
  platforms: [
    {
      id: "oci",
      title: "Oracle Cloud Infrastructure (OCI)",
      content: "Certified OCI architecture, database migration, automated Data Guard replication, and cost optimization designed for Pakistani enterprises."
    },
    {
      id: "azure",
      title: "Microsoft Azure Cloud",
      content: "Interconnected Oracle Database@Azure solutions, Entra ID (Azure AD) SSO integration, and hybrid cloud connectivity."
    },
    {
      id: "aws",
      title: "Amazon Web Services (AWS)",
      content: "Amazon RDS for Oracle, auto-scaling EC2 ORDS listeners, and AWS Direct Connect hybrid network implementations."
    }
  ]
};
