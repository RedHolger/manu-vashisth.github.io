// Keep profile destinations and featured work together for easy updates.
export const profile = {
  github: "https://github.com/RedHolger",
  linkedin: "https://www.linkedin.com/in/manu-vashisth-9366b2219/",
  email: "mailto:manuvashisth963@gmail.com",
  resume: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Manu_Vashisth_CV.pdf`,
  slo: "https://sre-portfolio-demos.vercel.app/",
  leetcode: "https://leetcode.com/u/ManuVashisth/",
};
export const projects = [
  {
    title: "SLO Reliability Lab",
    category: "Systems · Reliability",
    icon: "wave",
    color: "green",
    description:
      "BudgetGuard release decisions, FaultLab controlled failures, and RecoverOps recovery experiments. Explore recorded lab evidence; recovery and integration live validation remain pending.",
    tags: ["Go", "Prometheus", "Kubernetes"],
    url: profile.slo,
  },
  {
    title: "EvidenceRAG",
    category: "AI · Retrieval",
    icon: "search",
    color: "orange",
    description:
      "Tenant-isolated document retrieval with versioned ingestion and cited-or-abstain answers. Compares keyword, vector, and hybrid search using a deterministic extractive reference adapter.",
    tags: ["FastAPI", "pgvector", "Retrieval evaluation"],
    url: "https://github.com/RedHolger/Manu-Vashisth-Personal/tree/master/evidence-rag",
  },
  {
    title: "FlowLedger",
    category: "Systems · Durable execution",
    icon: "nodes",
    color: "violet",
    description:
      "Idempotent job submission, an outbox relay, and fenced worker leases. Crash-tested execution with deduplicated effects under a mock downstream contract.",
    tags: ["Java 21", "Spring Boot", "PostgreSQL"],
    url: "https://github.com/RedHolger/Manu-Vashisth-Personal/tree/master/flow-ledger",
  },
  {
    title: "SiliconCheck",
    category: "Hardware · Verification",
    icon: "chip",
    color: "blue",
    description:
      "A SystemVerilog FIFO checked against an independent Python model, with differential traces, assertions, and injected-defect detection. Simulation evidence; no board or synthesis claims.",
    tags: ["SystemVerilog", "Python", "Icarus Verilog"],
    url: "https://github.com/RedHolger/Manu-Vashisth-Personal/tree/master/silicon-check",
  },
  {
    title: "Dynamo-Lite",
    category: "Distributed systems",
    icon: "nodes",
    color: "violet",
    description:
      "A from-scratch exploration of Amazon Dynamo: consistent hashing, vector clocks, quorum reads and writes, and recovery from node failures.",
    tags: ["Java", "Distributed systems"],
    repo: "dynamo-lite",
  },
  {
    title: "Code Review Agent",
    category: "Applied AI",
    icon: "spark",
    color: "orange",
    description:
      "An automated pull request reviewer powered by Mistral Codestral, with severity-ranked feedback and generated test suggestions.",
    tags: ["Python", "LLMs", "GitHub Actions"],
    repo: "code-review-agent",
  },
  {
    title: "Keyword Spotting",
    category: "Machine learning · Edge",
    icon: "wave",
    color: "green",
    description:
      "A compact TC-ResNet speech model with voice activity detection, INT8 quantization, and ONNX export for custom wake words.",
    tags: ["PyTorch", "ONNX", "Edge AI"],
    repo: "Keyword-Spotting-with-Custom-Commands-on-Edge",
  },
  {
    title: "Portable LLM Engine",
    category: "AI infrastructure",
    icon: "chip",
    color: "blue",
    description:
      "A C++ inference engine exploring KV-cache optimization and CPU / Metal backends.",
    tags: ["C++", "Metal", "Inference"],
    repo: "Portable-C-LLM-Engine-with-KV-Cache-Optimization",
  },
  {
    title: "AI Lingua",
    category: "Language · Applied AI",
    icon: "globe",
    color: "pink",
    description:
      "Turning video subtitles into vocabulary previews, grammar recaps, and adaptive quizzes with a hybrid microservices architecture.",
    tags: ["Spring Boot", "FastAPI", "Gemini"],
    repo: "AI-Lingua",
  },
  {
    title: "Kensaku",
    category: "Search & retrieval",
    icon: "search",
    color: "yellow",
    description:
      "Hybrid search and recommendations for industrial catalogs, combining dense and sparse retrieval with reranking and explainable matching.",
    tags: ["Python", "Vector search", "Reranking"],
    url: "https://redholger.github.io/Kensaku-/",
  },
];
