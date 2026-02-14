export const skillCategories = [
  "Programming Languages",
  "Backend Development",
  "Frontend Frameworks",
  "Cloud & Infrastructure",
  "DevOps & Tooling",
  "Databases & Storage",
  "Data Streaming & Big Data",
  "AI & Machine Learning",
  "Security & Blockchain",
  "CS Fundamentals",
  "Computer Vision"
];

export const skillFilters = [
  { name: "All", color: "#2563eb" },
  { name: "Languages", color: "#f59e0b" },
  { name: "Web Development", color: "#10b981" },
  { name: "Cloud & DevOps", color: "#8b5cf6" },
  { name: "Databases", color: "#f97316" },
  { name: "Big Data", color: "#a855f7" },
  // { name: "Blockchain", color: "#eab308" },
  { name: "Fundamentals", color: "#6b7280" },
  // { name: "Backend", color: "#ec4899" },
  // { name: "Frontend", color: "#0ea5e9" },
  { name: "Data Engineering", color: "#14b8a6" },
  { name: "AI/ML", color: "#e11d48" },
  { name: "Security", color: "#ef4444" },
  { name: "Computer Vision", color: "#7c3aed" }
];

export const skills = [
  { name: "Java", icon: "logos:java", category: "Programming Languages", filters: ["Languages", "Web Development"], level: 4, color: "#f59e0b" },
  { name: "C++", icon: "logos:c-plusplus", category: "Programming Languages", filters: ["Languages", "Fundamentals"], level: 4, color: "#f59e0b" },
  { name: "C", icon: "logos:c", category: "Programming Languages", filters: ["Languages", "Fundamentals"], level: 4, color: "#f59e0b" },

  { name: "Python", icon: "logos:python", category: "Programming Languages", filters: ["Languages", "Web Development", "Computer Vision", "Data Engineering"], level: 4, color: "#f59e0b" },  
  { name: "JavaScript", icon: "logos:javascript", category: "Programming Languages", filters: ["Languages", "Web Development"], level: 4, color: "#f59e0b" },
  { name: "TypeScript", icon: "logos:typescript-icon", category: "Programming Languages", filters: ["Languages", "Frontend"], level: 4, color: "#f59e0b" },
  { name: "Go", icon: "logos:go", category: "Programming Languages", filters: ["Languages", "Web Development"], level: 3, color: "#f59e0b" },
  { name: "SQL", icon: "vscode-icons:file-type-sql", category: "Programming Languages", filters: ["Languages", "Databases"], level: 4, color: "#f59e0b" },
  { name: "Solidity", icon: "logos:solidity", category: "Programming Languages", filters: ["Languages", "Blockchain"], level: 3, color: "#eab308" },

  { name: "Spring Boot", icon: "logos:spring", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "Spring", icon: "logos:spring", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "Hibernate", icon: "simple-icons:hibernate", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "Node.js", icon: "logos:nodejs", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "Express", icon: "logos:express", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "FastAPI", icon: "simple-icons:fastapi", category: "Backend Development", filters: ["Web Development", "Backend"], level: 4, color: "#10b981" },
  { name: "gRPC", icon: "logos:grpc", category: "Backend Development", filters: ["Web Development", "Backend"], level: 3, color: "#10b981" },

  { name: "React", icon: "logos:react", category: "Frontend Frameworks", filters: ["Web Development", "Frontend"], level: 4, color: "#10b981" },
  { name: "HTML & CSS", icon: "logos:html-5", category: "Frontend Frameworks", filters: ["Web Development", "Frontend"], level: 4, color: "#10b981" },

  { name: "AWS", icon: "logos:aws", category: "Cloud & Infrastructure", filters: ["Cloud & DevOps"], level: 3, color: "#8b5cf6" },
  { name: "Azure", icon: "logos:microsoft-azure", category: "Cloud & Infrastructure", filters: ["Cloud & DevOps"], level: 4, color: "#8b5cf6" },
  { name: "Google Cloud", icon: "logos:google-cloud", category: "Cloud & Infrastructure", filters: ["Cloud & DevOps"], level: 3, color: "#8b5cf6" },

  { name: "Docker", icon: "logos:docker", category: "DevOps & Tooling", filters: ["Cloud & DevOps", "Data Engineering"], level: 5, color: "#8b5cf6" },
  { name: "Kubernetes", icon: "logos:kubernetes", category: "DevOps & Tooling", filters: ["Cloud & DevOps", "Data Engineering"], level: 4, color: "#8b5cf6" },
  { name: "Maven", icon: "simple-icons:apachemaven", category: "Backend Development", filters: ["Backend"], level: 4, color: "#ec4899" },
  { name: "Gradle", icon: "simple-icons:gradle", category: "Backend Development", filters: ["Backend"], level: 4, color: "#ec4899" },
  { name: "Jenkins", icon: "logos:jenkins", category: "DevOps & Tooling", filters: ["Cloud & DevOps"], level: 4, color: "#8b5cf6" },
  { name: "GitHub Actions", icon: "simple-icons:githubactions", category: "DevOps & Tooling", filters: ["Cloud & DevOps"], level: 4, color: "#8b5cf6" },
  { name: "Prometheus", icon: "simple-icons:prometheus", category: "DevOps & Tooling", filters: ["Cloud & DevOps"], level: 4, color: "#8b5cf6" },
  { name: "Grafana", icon: "logos:grafana", category: "DevOps & Tooling", filters: ["Cloud & DevOps"], level: 4, color: "#8b5cf6" },
  { name: "Git", icon: "logos:git-icon", category: "DevOps & Tooling", filters: ["Cloud & DevOps"], level: 5, color: "#8b5cf6" },
  { name: "Linux", icon: "logos:linux-tux", category: "DevOps & Tooling", filters: ["Cloud & DevOps", "Fundamentals"], level: 4, color: "#8b5cf6" },
  { name: "Jupyter", icon: "logos:jupyter", category: "DevOps & Tooling", filters: ["Data Engineering"], level: 4, color: "#14b8a6" },

  { name: "MongoDB", icon: "logos:mongodb", category: "Databases & Storage", filters: ["Databases"], level: 4, color: "#f97316" },
  { name: "MySQL", icon: "logos:mysql", category: "Databases & Storage", filters: ["Databases"], level: 4, color: "#f97316" },
  { name: "PostgreSQL", icon: "logos:postgresql", category: "Databases & Storage", filters: ["Databases"], level: 3, color: "#f97316" },
  { name: "Apache Solr", icon: "simple-icons:apachesolr", category: "Databases & Storage", filters: ["Databases"], level: 4, color: "#f97316" },
  { name: "Redis", icon: "logos:redis", category: "Databases & Storage", filters: ["Databases"], level: 4, color: "#f97316" },
  { name: "Aerospike", icon: "simple-icons:aerospike", category: "Databases & Storage", filters: ["Databases"], level: 3, color: "#f97316" },
  { name: "Elasticsearch", icon: "logos:elasticsearch", category: "Databases & Storage", filters: ["Databases", "Big Data"], level: 4, color: "#f97316" },
  { name: "Pandas", icon: "logos:pandas", category: "Databases & Storage", filters: ["Data Engineering"], level: 4, color: "#14b8a6" },
  { name: "Numpy", icon: "logos:numpy", category: "Databases & Storage", filters: ["Data Engineering"], level: 4, color: "#14b8a6" },
  { name: "GeoPandas", icon: "simple-icons:geopandas", category: "Databases & Storage", filters: ["Data Engineering"], level: 3, color: "#14b8a6" },

  { name: "Apache Storm", icon: "simple-icons:apache", category: "Data Streaming & Big Data", filters: ["Big Data"], level: 4, color: "#a855f7" },
  { name: "Kafka", icon: "simple-icons:apachekafka", category: "Data Streaming & Big Data", filters: ["Big Data", "Web Development"], level: 4, color: "#a855f7" },
  { name: "Zookeeper", icon: "simple-icons:apache", category: "Data Streaming & Big Data", filters: ["Big Data"], level: 4, color: "#a855f7" },
  { name: "Kibana", icon: "simple-icons:kibana", category: "Data Streaming & Big Data", filters: ["Big Data", "Cloud & DevOps"], level: 4, color: "#a855f7" },
  { name: "Apache Airflow", icon: "simple-icons:apacheairflow", category: "Data Streaming & Big Data", filters: ["Big Data", "Data Engineering"], level: 4, color: "#a855f7" },

  { name: "LangChain", icon: "simple-icons:langchain", category: "AI & Machine Learning", filters: ["AI/ML"], level: 4, color: "#e11d48" },
  { name: "LlamaIndex", icon: "simple-icons:meta", category: "AI & Machine Learning", filters: ["AI/ML"], level: 3, color: "#e11d48" },
  { name: "OpenAI API", icon: "simple-icons:openai", category: "AI & Machine Learning", filters: ["AI/ML"], level: 4, color: "#e11d48" },
  { name: "Claude API", icon: "simple-icons:anthropic", category: "AI & Machine Learning", filters: ["AI/ML"], level: 4, color: "#e11d48" },
  { name: "RAG Systems", icon: "mdi:database-search", category: "AI & Machine Learning", filters: ["AI/ML"], level: 4, color: "#e11d48" },
  { name: "Vector Databases", icon: "mdi:vector-point", category: "AI & Machine Learning", filters: ["AI/ML", "Databases"], level: 3, color: "#e11d48" },
  { name: "DeepEval", icon: "mdi:test-tube", category: "AI & Machine Learning", filters: ["AI/ML"], level: 3, color: "#e11d48" },

  { name: "Ethereum", icon: "logos:ethereum", category: "Security & Blockchain", filters: ["Blockchain"], level: 3, color: "#eab308" },
  { name: "OAuth", icon: "logos:oauth", category: "Security & Blockchain", filters: ["Security"], level: 4, color: "#ef4444" },
  { name: "JWT", icon: "logos:jwt", category: "Security & Blockchain", filters: ["Security"], level: 4, color: "#ef4444" },

  { name: "Shell Scripting", icon: "vscode-icons:file-type-shell", category: "DevOps & Tooling", filters: ["Languages", "Cloud & DevOps"], level: 4, color: "#ef4444" },
  { name: "Bash", icon: "logos:bash-icon", category: "DevOps & Tooling", filters: ["Languages", "Cloud & DevOps"], level: 4, color: "#ef4444" },

  { name: "DSA", icon: "mdi:chart-tree", category: "CS Fundamentals", filters: ["Fundamentals"], level: 5, color: "#6b7280" },
  { name: "Operating Systems", icon: "mdi:linux", category: "CS Fundamentals", filters: ["Fundamentals"], level: 4, color: "#6b7280" },
  { name: "Computer Architecture", icon: "mdi:cpu-64-bit", category: "CS Fundamentals", filters: ["Fundamentals"], level: 3, color: "#6b7280" },
  { name: "Distributed Systems", icon: "simple-icons:apache", category: "CS Fundamentals", filters: ["Fundamentals", "Big Data"], level: 4, color: "#6b7280" },
  { name: "System Design", icon: "mdi:application-brackets", category: "CS Fundamentals", filters: ["Fundamentals", "Web Development"], level: 4, color: "#6b7280" },

  { name: "OpenCV", icon: "logos:opencv", category: "Computer Vision", filters: ["Computer Vision"], level: 4, color: "#7c3aed" },
  { name: "TensorFlow", icon: "logos:tensorflow", category: "Computer Vision", filters: ["Computer Vision"], level: 4, color: "#7c3aed" },
  { name: "PyTorch", icon: "logos:pytorch-icon", category: "Computer Vision", filters: ["Computer Vision"], level: 4, color: "#7c3aed" }
];
