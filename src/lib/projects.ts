const baseURL = import.meta.env.BASE_URL;

export const projects = [
    {
        title: "Fault-Tolerant Distributed Transactional Database",
        description:
          "A production-grade distributed database built from the ground up in Go, implementing Multi-Paxos consensus, Byzantine fault tolerance with BLS threshold cryptography, and cross-shard ACID transactions via Two-Phase Commit across a 9-node sharded cluster. Features tunable consistency levels (linearizable, session, eventual), write-ahead logging for crash recovery, and row-level concurrency control with deadlock detection.",
        img: `${baseURL}distributed_db.svg`,
        url: "https://github.com/nikhilteja824/replicated-sharded-transactional-db",
        github: "https://github.com/nikhilteja824/replicated-sharded-transactional-db",
        tech: [
          "Go",
          "gRPC",
          "Protocol Buffers",
          "Multi-Paxos",
          "BFT",
          "Two-Phase Commit",
          "LevelDB",
          "BLS Cryptography",
        ],
    },
    {
        title: "xv6 Operating System — Extended Kernel",
        description:
          "An extended version of the xv6 teaching OS with major kernel subsystems rebuilt from scratch — PS/2 mouse driver with interrupt-driven packet delivery, multi-terminal support with remote telnet access, demand-paged user stack up to 4MB, copy-on-write fork with reference-counted pages, a pluggable CPU scheduling framework with three policies, and a mountable multi-disk filesystem with native formatting and cross-mount pathname resolution.",
        img: `${baseURL}xv6_kernel.svg`,
        tech: [
          "C",
          "x86 Assembly",
          "QEMU",
          "GDB",
          "Virtual Memory",
          "File Systems",
          "Device Drivers",
        ],
    },
    {
        title: "Cloud-Based File Sharing System",
        description:
          "A secure, fully serverless file-sharing platform that allows users to upload and download files via a REST API. Built using AWS services like Lambda, API Gateway, S3, Cognito, and KMS for authentication, secure storage, and encryption. The system ensures scalability and security while eliminating backend infrastructure management.",
        img: `${baseURL}AWS_Services.png`,
        url: "https://github.com/nikhilteja824/AWS_Serverless_File_Transfer/",
        github: "https://github.com/nikhilteja824/AWS_Serverless_File_Transfer/",
        tech: [
          "AWS Lambda",
          "API Gateway",
          "Amazon S3",
          "AWS Cognito",
          "AWS KMS",
          "AWS CloudWatch",
          "Serverless Architecture",
        ],
    },
    {
        title: "Blockchain-Based Energy Trading System",
        description:
            "A blockchain-powered platform for secure and transparent electricity trading. It ensures confidentiality, authentication, and integrity of transactions using Ethereum smart contracts, reducing settlement time and enhancing market efficiency.",
        img: `${baseURL}blockchain_flow.png`,
        tech: ["Blockchain", "Ethereum", "Solidity", "Truffle", "Smart Contracts"],
    },
    {
        title: "Emergency Room Patient Flow Simulation",
        description:
          "A simulation of hospital operations using SimPy, designed to analyze patient flows, resource utilization, and service efficiency. Features performance metrics like patient wait times, process times, and heatmaps of service usage over time.",
        img: `${baseURL}ed_flow.png`,
        url: "https://github.com/nikhilteja824/Hospital_ED_Simulation",
        github: "https://github.com/nikhilteja824/Hospital_ED_Simulation",
        tech: ["SimPy", "Python", "Matplotlib"],
    },
    {
        title: "UniLib - University Library Management System",
        description:
            "A web-based library management system that allows users to add, categorize, and search for books. Supports book donation and easy cataloging with an intuitive UI.",
        img: `${baseURL}unilib.png`,
        url: "https://github.com/nikhilteja824/UNILIB",
        github: "https://github.com/nikhilteja824/UNILIB",
        liveDemo: "https://nikhilteja824.github.io/UNILIB/",
        tech: ["JavaScript", "HTML", "CSS"],
    },
    // {
    //     title: "Ball Bouncing Game",
    //     description:
    //       "A fun personal project developed during the early stages of learning JavaScript. This interactive simulation features multiple balls continuously bouncing off the four walls of the page, demonstrating concepts like animation loops, collision detection, and DOM manipulation.",
    //     img: `${baseURL}bballs.png`,
    //     url: "https://github.com/nikhilteja824/BallBouncingGame",
    //     github: "https://github.com/nikhilteja824/BallBouncingGame",
    //     liveDemo: "https://nikhilteja824.github.io/BallBouncingGame/",
    //     tech: ["JavaScript", "HTML", "CSS"],
    // },
    {
        title: "Efficient ePWM Codes for Dual-Core Microcontroller",
        description:
          "Developed efficient PWM codes to optimize process execution on the TMS320F28379D Dual-Core Microcontroller. Utilized Code Composer Studio (CCS) and ControlSuite for coding and library development. Implemented CLA alongside the CPU for improved performance.",
        img: `${baseURL}TMS_PWM.png`,
        tech: ["C", "Microcontrollers", "Code Composer Studio"],
    },
];