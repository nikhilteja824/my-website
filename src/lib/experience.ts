export const experience = [
    {
      title: "Software Development Engineer",
      company: { name: "Myntra (Walmart Group)", link: "https://www.myntra.com" },
      duration: "June 2022 - July 2024",
      description: [
        {
          category: "System Optimization & Scalability",
          points: [
            "Upgraded central discounts service to Spring Boot 3.1 and Java 17, reducing startup time by 58%, latency by 20%, and improving scalability by 40%.",
            "Revamped datastore architecture from Redis and MongoDB to Aerospike, reducing read latency by 90% and core usage by 40%, handling 7M RPM with 47% fewer pods.",
            "Debugged and addressed critical issues in legacy E2E automation tests, integrating Jenkins CI/CD pipeline with Bitbucket webhooks, improving maintainability and correctness.",
          ],
        },
        {
          category: "Revenue Growth & Monetization",
          points: [
            "Designed and deployed a search-driven ad-serving solution using Solr, increasing ad fill rates for branded queries by 14% and generating 8.5% more revenue.",
            "Collaborated with Flipkart to integrate their rule engine for pricing validation, eliminating manual errors, reducing GST overage by 99%, and saving $2.7M annually.",
            "Developed approval and pricing flows for loyalty point discounts, leveraging batch persistence and Kafka processing to handle high RPM, boosting conversion rates by 7.2% and RPU by 5.9%.",
          ],
        },
      ],
    },
    {
        title: "Technical Mentor",
        company: { name: "10x Academy", link: "https://www.the10xacademy.com/" },
        duration: "December 2021 - March 2022",
        description: [
          {
            category: "Mentorship & Training",
            points: [
              "Mentored 100+ students in Data Structures, Algorithms, and Java, designing algorithm-focused assignments and providing personalized feedback.",
              "Enhanced student coding skills, leading to 70% of participants improving performance in coding contests and hackathons within months.",
            ],
          },
        ],
    },
    {
      title: "Software Engineer Intern",
      company: { name: "Hello Study Global", link: "https://www.hellostudy.org" },
      duration: "May 2021 - August 2021",
      description: [
        {
          category: "Course Analytics Dashboard",
          points: [
            "Built an interactive course analytics dashboard using React and Node.js, integrating Chart.js to visualize user progress and engagement metrics.",
            "Optimized frontend performance with lazy loading, asset compression, and server-side rendering, decreasing bounce rates by 30% and boosting click-through rates by 20%.",
          ],
        },
      ],
    },
  ];