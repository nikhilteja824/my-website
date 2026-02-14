const baseURL = import.meta.env.BASE_URL;

export const experience = [
    {
    title: "Software Engineering Intern",
    company: { name: "ReTax360", link: "https://retax360.com" },
    logo: `${baseURL}retax360.png`,
    duration: "June 2025 - November 2025",
    description: [
      {
        category: "Platform & AI Engineering",
        points: [
          "Designed a scalable multi-tenant platform with logical data isolation and tenant-aware request handling, and redesigned the data processing pipeline to support client-specific schemas and high-volume concurrent ingestion.",
          "Developed an AI agent to automate legal document drafting and review, leveraging LangChain to coordinate OpenAI and Claude LLM APIs, reducing manual effort by 70%.",
          "Implemented a RAG layer for 100K+ document chunks using PostgreSQL/pgvector, reducing search latency to sub-200ms through HNSW indexing and metadata filtering.",
          "Built scheduled enrichment workflows on GCP Cloud Scheduler to process 5K+ records weekly, using exponential backoff and idempotent retries to achieve 99% reliability in processing unstructured data."
        ]
      }
    ]
  },
  {
    title: "Software Development Engineer",
    company: { name: "Myntra (Walmart Group)", link: "https://www.myntra.com" },
    logo: `${baseURL}myntra.svg`,
    duration: "June 2022 - July 2024",
    description: [
      {
        category: "Pricing and Discounts Team",
        points: [
          "Designed and implemented async REST APIs and optimized MySQL batch writes to support a high-traffic loyalty points-as-discount feature, which contributed to a 7.2% lift in product-to-checkout conversions.",
          "Migrated Myntra’s central discount service from Redis + MongoDB to Aerospike, enabling under 1ms reads, reducing KTLO overhead by eliminating dual-store syncing, and scaling to handle 1.5M+ requests per minute.",
          "Upgraded a legacy Spring service to Spring Boot 3.1 and Java 17, cutting startup time by 58% via lazy initialization, and dependency cleanup; reduced app latency by 24% by switching from G1GC to ZGC."
        ]
      },
      {
        category: "Search and Relevance Team",
        points: [
          "Replaced header-based deduplication with Aerospike cache backed sliding window approach to track shown products across ads and organic results, improving ad fill rate by 15.5% across paginated search.",
          "Led the seamless migration of core Search microservices from VMs to Kubernetes with zero deployment disruptions and minimal downtime. Leveraged Kubernetes HPA and fine-grained resource limits to eliminate over-provisioning and reduce infrastructure costs by approximately 25%.",
          "Built Jenkins pipelines to automate end-to-end testing for a legacy codebase, eliminating manual QA cycles, saving 3+ hours per release, and increasing test reliability and deployment consistency."
        ]
      }
    ]
  },
  {
    title: "Technical Mentor",
    company: { name: "10x Academy", link: "https://www.the10xacademy.com/" },
    logo: `${baseURL}10x_academy.png`,
    duration: "December 2021 - March 2022",
    description: [
      {
        category: "Mentorship & Training",
        points: [
          "Mentored 100+ students in Data Structures, Algorithms, and Java, designing algorithm-focused assignments and providing personalized feedback.",
          "Enhanced student coding skills, leading to 70% of participants improving performance in coding contests and hackathons within months."
        ]
      }
    ]
  },
  {
    title: "Software Engineer Intern",
    company: { name: "Hello Study Global", link: "https://www.hellostudy.org" },
    logo: `${baseURL}hellostudy.png`,
    duration: "May 2021 - August 2021",
    description: [
      {
        category: "Web Development & Analytics",
        points: [
          "Developed a dynamic course analytics dashboard using React, Node.js, and Chart.js, enabling instructors to monitor real-time engagement and track progress across 500+ students.",
          "Reduced dashboard load times by 30% through lazy loading, route-based code splitting, and API response caching for large datasets."
        ]
      }
    ]
  }
];
