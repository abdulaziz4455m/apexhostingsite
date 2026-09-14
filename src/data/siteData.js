export const siteMetadata = {
  brandName: "ApexHostPro",
  domain: "apexhostpro.com",
  tagline: "Secure, Cost-Effective and Reliable Oracle APEX Cloud Hosting",
  phone: "+1 718 618 4560",
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
      title: "United States (HQ)",
      address: "22450 Franz Road, Katy, TX, 77449 USA"
    },
    {
      title: "Regional Operations Office",
      address: "101, Dominion Business Center – 1, Jinnah Ave, Bahria Town, Karachi"
    }
  ]
};

export const heroStats = {
  googleRating: "4.9",
  trustpilotRating: "4.7",
  customers: "1,000+",
  uptime: "99.99%",
  countries: "85+"
};

export const pricingPlans = {
  shared: [
    {
      id: "apex-100m",
      name: "APEX-100M",
      price: 14,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "No Free Domain", included: false },
        { text: "SSL Possible", included: true },
        { text: "Schemas – 01", included: true },
        { text: "Tablespace Quota ~ 100MB", included: true },
        { text: "Web Space ~ 100MB", included: true },
        { text: "Workspace ~ 01", included: true },
        { text: "MaxPrint", included: true }
      ]
    },
    {
      id: "apex-200m",
      name: "APEX-200M",
      price: 23,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free Domain", included: true },
        { text: "SSL Possible", included: true },
        { text: "Schemas – 02", included: true },
        { text: "Tablespace Quota ~ 200MB", included: true },
        { text: "Web Space ~ 500MB", included: true },
        { text: "Workspace ~ 02", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    },
    {
      id: "apex-500m",
      name: "APEX-500M",
      price: 36,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free Domain", included: true },
        { text: "SSL Possible", included: true },
        { text: "Schemas – 03", included: true },
        { text: "Tablespace Quota ~ 500MB", included: true },
        { text: "Web Space ~ 1GB", included: true },
        { text: "Workspace ~ 03", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    },
    {
      id: "apex-1g",
      name: "APEX-1G",
      price: 56,
      period: "month",
      features: [
        { text: "6 Month Payment ~ 5% Discount", included: true },
        { text: "Free Domain", included: true },
        { text: "SSL Possible", included: true },
        { text: "Schemas – 04", included: true },
        { text: "Tablespace Quota ~ 1GB", included: true },
        { text: "Web Space ~ 2GB", included: true },
        { text: "Workspace ~ 04", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    }
  ],
  dedicated: [
    {
      id: "ddb-micro-v2",
      name: "DDB-Micro v2",
      price: 85,
      period: "month",
      features: [
        { text: "RAM ~ 4GB", included: true },
        { text: "CPU Cores ~ 02", included: true },
        { text: "Disk Space ~ 40GB", included: true },
        { text: "Ideal for ~ Development", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    },
    {
      id: "ddb-small-v2",
      name: "DDB-Small v2",
      price: 120,
      period: "month",
      features: [
        { text: "RAM ~ 8GB", included: true },
        { text: "CPU Cores ~ 02", included: true },
        { text: "Disk Space ~ 80GB", included: true },
        { text: "Ideal for ~ Production", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    },
    {
      id: "ddb-large-v2",
      name: "DDB-Large v2",
      price: 160,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "CPU Cores ~ 04", included: true },
        { text: "Disk Space ~ 160GB", included: true },
        { text: "Ideal for ~ Production", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    },
    {
      id: "ddb-xl-v2",
      name: "DDB-XL v2",
      price: 260,
      period: "month",
      features: [
        { text: "RAM ~ 32GB", included: true },
        { text: "CPU Cores ~ 06", included: true },
        { text: "Disk Space ~ 240GB", included: true },
        { text: "Ideal for ~ Production", included: true },
        { text: "Jasper / MaxPrint", included: true }
      ]
    }
  ],
  cloud: [
    {
      id: "clouddb-256-1",
      name: "CloudDB-256.1",
      price: 350,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 256GB", included: true }
      ]
    },
    {
      id: "clouddb-512-1",
      name: "CloudDB-512.1",
      price: 380,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 512GB", included: true }
      ]
    },
    {
      id: "clouddb-1024-1",
      name: "CloudDB-1024.1",
      price: 485,
      period: "month",
      features: [
        { text: "RAM ~ 16GB", included: true },
        { text: "OCPUS ~ 01", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 1TB", included: true }
      ]
    },
    {
      id: "clouddb-512-2",
      name: "CloudDB-512.2",
      price: 650,
      period: "month",
      features: [
        { text: "RAM ~ 32GB", included: true },
        { text: "OCPUS ~ 02", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 512GB", included: true }
      ]
    },
    {
      id: "clouddb-1024-2",
      name: "CloudDB-1024.2",
      price: 680,
      period: "month",
      features: [
        { text: "RAM ~ 32GB", included: true },
        { text: "OCPUS ~ 02", included: true },
        { text: "PDBs ~ 03", included: true },
        { text: "Database Quota ~ 1TB", included: true }
      ]
    }
  ]
};

export const comparisonMatrix = [
  {
    category: "Top features",
    icon: "Rocket",
    rows: [
      { feature: "Fully Managed", shared: true, dedicated: true, cloud: true },
      { feature: "Ideal For", shared: "Small Apps", dedicated: "Mid-Sized Apps", cloud: "Enterprise-Level Apps" },
      { feature: "Concurrent Users", shared: "1-10", dedicated: "10-100", cloud: "20-1000" },
      { feature: "Uptime Guarantee", shared: "99.99%", dedicated: "99.99%", cloud: "99.99%" },
      { feature: "Free Domain Mapping", shared: true, dedicated: true, cloud: true },
      { feature: "MaxPrint / Jasper", shared: true, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Performance & Architecture",
    icon: "Settings",
    rows: [
      { feature: "Oracle APEX Version", shared: "APEX 26.1", dedicated: "APEX 26.1", cloud: "APEX 26.1" },
      { feature: "Dedicated VM Resources", shared: false, dedicated: true, cloud: true },
      { feature: "Dual VM Failover Architecture", shared: false, dedicated: false, cloud: true },
      { feature: "SSD NVMe Storage", shared: true, dedicated: true, cloud: true },
      { feature: "Oracle REST Data Services (ORDS)", shared: true, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Control & Access",
    icon: "Key",
    rows: [
      { feature: "SQL Developer Access", shared: true, dedicated: true, cloud: true },
      { feature: "Root OS Level Access", shared: false, dedicated: true, cloud: true },
      { feature: "SYSDBA Administrative Rights", shared: false, dedicated: true, cloud: true },
      { feature: "Custom Web Server Config", shared: false, dedicated: true, cloud: true }
    ]
  },
  {
    category: "Security & Compliance",
    icon: "Shield",
    rows: [
      { feature: "Daily Automated Backups", shared: true, dedicated: true, cloud: true },
      { feature: "HIPAA Compliant Architecture", shared: false, dedicated: true, cloud: true },
      { feature: "Dedicated IP Address", shared: "Add-on", dedicated: true, cloud: true },
      { feature: "ApexProtect 24/7 SOC Integration", shared: "Add-on", dedicated: "Included/Add-on", cloud: "Included" }
    ]
  },
  {
    category: "Support & Setup",
    icon: "Headphones",
    rows: [
      { feature: "Average Response Time", shared: "< 15 Mins", dedicated: "< 10 Mins", cloud: "< 10 Mins Priority" },
      { feature: "Setup Time", shared: "Instant (5 Mins)", dedicated: "Same Day", dedicatedSameDay: true, cloud: "Same Day" },
      { feature: "24/7/365 Expert Support", shared: true, dedicated: true, cloud: true }
    ]
  }
];

export const enterprisePlans = [
  {
    id: "oci-ha",
    title: "OCI High-Availability",
    badge: "Oracle Cloud",
    subtitle: "Custom Pricing based on your requirements",
    features: [
      "Oracle RAC and Data Guard setup",
      "99.99% uptime architecture",
      "Autonomous database self-healing",
      "Automatic failover and zero data loss",
      "24/7 monitoring and managed support"
    ]
  },
  {
    id: "oracle-cloud",
    title: "Oracle Cloud (OCI)",
    badge: "Managed Migration",
    subtitle: "Custom Pricing based on your requirements",
    features: [
      "Cloud consulting and strategy",
      "Oracle Autonomous Database setup",
      "Full or partial workload migration",
      "Ongoing cloud optimization",
      "24/7 responsive expert support"
    ]
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Services",
    badge: "Amazon AWS",
    subtitle: "Custom Pricing based on your requirements",
    features: [
      "Consulting and architecture planning",
      "Seamless cloud migration",
      "Secure, scalable deployment",
      "Real-time monitoring and automation",
      "Continuous performance optimization"
    ]
  },
  {
    id: "azure-cloud",
    title: "Azure Cloud Services",
    badge: "Microsoft Azure",
    subtitle: "Custom Pricing based on your requirements",
    features: [
      "Azure DevOps CI/CD pipelines",
      "Database migration with minimal downtime",
      "Azure Kubernetes Service deployment",
      "Lift and shift workload migration",
      "Secure site-to-site VPN connectivity"
    ]
  }
];

export const dedicatedFaqs = [
  {
    q: "How can I order DedicatedDB?",
    a: "You can select your desired tier (DDB-Micro, Small, Large, or XL) directly from our pricing table, or contact our sales team via WhatsApp (03048106662) or contact form. Your dedicated instance will be provisioned on the same day."
  },
  {
    q: "Where are your DedicatedDB servers located?",
    a: "Our Tier-4 enterprise datacenters are strategically located across North America (Dallas, TX / Ashburn, VA), Europe (Frankfurt, London), and Asia (Singapore, UAE), ensuring minimum ping worldwide."
  },
  {
    q: "Can I increase my storage in DedicatedDB?",
    a: "Yes. Storage in all DedicatedDB and CloudDB tiers can be seamlessly upgraded on-the-fly without requiring database downtime."
  },
  {
    q: "How many schema/database users can be created on DedicatedDB plans?",
    a: "You have complete root and SYSDBA privileges on DedicatedDB, allowing you to create unlimited schemas, database users, and APEX workspaces as needed."
  },
  {
    q: "Is there a DedicatedDB Setup Fee?",
    a: "No! There is zero setup fee for any of our standard DedicatedDB and CloudDB hosting packages."
  },
  {
    q: "What is the refund policy for the DedicatedDB plans?",
    a: "We offer a 30-day money-back satisfaction guarantee on all APEX hosting plans. If you are not satisfied with performance or support, we refund your payment."
  },
  {
    q: "Do you deliver DedicatedDB servers on weekends?",
    a: "Yes. Our senior Oracle DBAs operate 24/7/365, including weekends and holidays, ensuring rapid server handoffs."
  }
];

export const hostingSolutions = [
  {
    id: "shared",
    title: "Shared Hosting",
    slug: "/apex-shared-hosting",
    price: 14,
    features: [
      "Ideal for SMEs",
      "Most cost-effective plan",
      "SQL Developer access",
      "Oracle APEX 26.1",
      "Instant setup"
    ]
  },
  {
    id: "dedicated",
    title: "DedicatedDB Hosting",
    slug: "/apex-dedicated-hosting",
    price: 85,
    features: [
      "For high-performance needs",
      "Exclusive Virtual Machine",
      "Complete root access",
      "Oracle APEX 26.1",
      "HIPAA-compliant hosting"
    ]
  },
  {
    id: "clouddb",
    title: "CloudDB Hosting",
    slug: "/oracle-apex-clouddb",
    price: 350,
    features: [
      "Enterprise-grade database",
      "Two dedicated VMs",
      "Full admin access",
      "Oracle APEX 26.1",
      "HIPAA-compliant hosting"
    ]
  },
  {
    id: "onprem",
    title: "On-Prem Support",
    slug: "/complete-onpremise-support",
    price: "Custom",
    features: [
      "Supports your own servers",
      "Keep full control",
      "Full installation support",
      "Managed upgrades and patches",
      "Proactive or reactive plans"
    ]
  }
];

export const apexPrintData = {
  title: "Pixel-Perfect Oracle APEX Reporting Tool",
  description: "ApexPrint combines a powerful drag-and-drop designer with an Oracle APEX plugin, enabling developers to design templates, and generate professional reports effortlessly.",
  link: "/apexprint",
  buttonText: "EXPLORE APEXPRINT FEATURES"
};

export const apexProtectData = {
  title: "ApexProtect – Managed Linux Server Security",
  headline: "24/7 human-led SOC and proactive hardening for your critical Linux infrastructure. Enterprise-grade defense for $100 /server /month.",
  price: "$100 /server /month",
  link: "/apexprotect",
  buttonText: "SEE APEXPROTECT SECURITY FEATURES",
  features: [
    "24/7 SOC Monitoring",
    "Endpoint Protection Agent",
    "Monthly Vulnerability Scan & Report",
    "Managed Patching",
    "Unlimited Security Incident Support",
    "Support for On Prem, OCI, AWS, Azure, GCP, Alibaba Cloud etc."
  ]
};

export const cloudServicesData = {
  title: "Managed Cloud Services",
  description: "Unlock the potential of our Affordable Managed Cloud Services and Solutions; Develop broad capabilities, Scalability, and Performance across Oracle Cloud Infrastructure, AWS, and Azure with tailored Cloud services.",
  link: "/cloud-services",
  buttonText: "DISCOVER APEXHOSTPRO CLOUD SERVICES",
  platforms: [
    {
      id: "oci",
      title: "ORACLE CLOUD",
      content: "Our Oracle Cloud Infrastructure services facilitate seamless migration from On-Premises systems and other Cloud platforms to Oracle Cloud Infrastructure. We specialize in designing, implementing, and managing cloud solutions tailored to your business needs."
    },
    {
      id: "azure",
      title: "AZURE CLOUD",
      content: "Maximize enterprise agility with Microsoft Azure and Oracle APEX integration, seamless Entra ID single sign-on, and hybrid high-availability clustering."
    },
    {
      id: "aws",
      title: "AWS CLOUD",
      content: "Scalable Oracle Database deployments on Amazon Web Services. Automated multi-region disaster recovery, RDS for Oracle, and secure VPC architectures."
    }
  ]
};

export const coreFeatures = [
  { title: "User-friendly Control Panel", icon: "control" },
  { title: "Multiple Server Locations", icon: "locations" },
  { title: "SSD Storage", icon: "ssd" },
  { title: "High Performance", icon: "speed" },
  { title: "SQL Developer Access", icon: "database" },
  { title: "Simple Configuration", icon: "config" }
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
