import React, { useMemo, useState } from "react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Journey",
    "Testimonials",
    "Case Studies",
    "Contact",
  ];

  const skills = {
    "Generative AI": [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "AWS Bedrock",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "LlamaIndex",
      "LangSmith",
      "RAGAS",
    ],
    "Machine Learning": [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hugging Face",
      "spaCy",
      "NLTK",
      "MLflow",
      "DVC",
    ],
    "Cloud & MLOps": [
      "AWS SageMaker",
      "AWS Bedrock",
      "OpenSearch",
      "S3",
      "Lambda",
      "EKS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
    ],
    "Backend & Data": [
      "Python",
      "SQL",
      "FastAPI",
      "Flask",
      "Django",
      "Apache Spark",
      "Airflow",
      "FAISS",
      "Pandas",
      "NumPy",
    ],
    "Monitoring": [
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "TensorBoard",
      "Azure Monitor",
      "Application Insights",
      "RAGAS",
      "LangSmith",
    ],
  };

  const projects = [
    {
      category: "RAG Platform",
      number: "01",
      title: "Financial Document Intelligence",
      description:
        "Production-grade RAG system for financial document intelligence with ingestion, extraction, PII masking, hybrid retrieval, grounded LLM answers, citations, and traceability.",
      stack: "AWS Bedrock, Claude, OpenSearch, S3, FastAPI, LangChain, LangGraph",
      source: "GitHub",
    },
    {
      category: "Agentic AI",
      number: "02",
      title: "Multi-Agent Workflow System",
      description:
        "Agentic workflow where orchestration, retrieval, validation, generation, and compliance agents supported multi-step reasoning and response validation.",
      stack: "LangGraph, CrewAI, LangChain, RAGAS, LangSmith",
      source: "Case Study",
    },
    {
      category: "MLOps System",
      number: "03",
      title: "Production ML Pipelines",
      description:
        "ML and NLP pipelines for classification, summarization, information retrieval, inference APIs, model monitoring, and scalable deployment.",
      stack: "SageMaker, FastAPI, Docker, Kubernetes, MLflow, CloudWatch",
      source: "GitHub",
    },
    {
      category: "NLP System",
      number: "04",
      title: "Text Intelligence APIs",
      description:
        "NLP services for text classification, sentiment analysis, NER, summarization, and enterprise search workflows using transformer-based models.",
      stack: "Hugging Face, spaCy, FastAPI, AWS Lambda, OpenSearch",
      source: "Project",
    },
    {
      category: "Computer Vision",
      number: "05",
      title: "Vision Model Pipeline",
      description:
        "Computer vision pipeline for image classification and object detection using CNN-based deep learning models and production inference APIs.",
      stack: "PyTorch, TensorFlow, Docker, AWS EC2, FastAPI",
      source: "Project",
    },
  ];

  const journey = [
    {
      period: "2026 - Present",
      title: "AI Engineer / Technology Consultant",
      place: "LTIMindtree",
      text: "Working in enterprise technology delivery with focus on AI engineering, client-facing solutions, and production-ready system support.",
    },
    {
      period: "2026",
      title: "Data Engineer I / GenAI Engineer",
      place: "Photon",
      text: "Worked on agentic AI and AI pipeline responsibilities involving LLM integrations, RAG, FastAPI services, and enterprise AI workflows.",
    },
    {
      period: "2024 - 2026",
      title: "AI Engineer",
      place: "Huntington Bank",
      text: "Built production-grade Generative AI systems, RAG pipelines, multi-agent workflows, secure FastAPI services, and AWS-based AI deployments.",
    },
    {
      period: "2023 - 2024",
      title: "Machine Learning Engineer",
      place: "Central Michigan University",
      text: "Developed ML, NLP, and information retrieval pipelines using AWS SageMaker, PyTorch, TensorFlow, Hugging Face, FastAPI, Docker, FAISS, and OpenSearch.",
    },
    {
      period: "2020 - 2022",
      title: "Data Scientist",
      place: "Accenture",
      text: "Delivered ML, NLP, computer vision, ETL, and inference API solutions using Python, SQL, Spark, PyTorch, TensorFlow, FastAPI, Docker, and AWS.",
    },
    {
      period: "Education",
      title: "Master’s Degree",
      place: "Central Michigan University",
      text: "Completed graduate studies with focus on data, AI, machine learning, cloud systems, and enterprise technology delivery.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Sai has strong practical understanding of AI pipelines and knows how to debug issues across retrieval, APIs, and production workflows.",
      name: "Project Team Member",
      role: "AI Engineering Team",
    },
    {
      quote:
        "He communicates technical issues clearly and focuses on the system behavior instead of just listing tools or theory.",
      name: "Cross-Functional Partner",
      role: "Business & Data Team",
    },
    {
      quote:
        "His work on RAG, FastAPI services, and AWS-based deployment showed strong ownership and attention to reliability.",
      name: "Engineering Collaborator",
      role: "Backend / Cloud Team",
    },
    {
      quote:
        "Sai is comfortable working across ML, NLP, cloud deployment, and monitoring, which helped during release and validation cycles.",
      name: "Release Partner",
      role: "MLOps Team",
    },
  ];

  const caseStudies = [
    {
      title: "Reducing hallucination in financial RAG responses",
      text: "Improved answer reliability by validating retrieved context, checking citation quality, and evaluating faithfulness before final responses were accepted.",
    },
    {
      title: "Improving retrieval accuracy at scale",
      text: "Used hybrid retrieval with BM25 and vector search to improve context relevance across large financial document collections.",
    },
    {
      title: "Securing document intelligence workflows",
      text: "Added PII masking, IAM-based access controls, audit logging, and governance review points for sensitive enterprise documents.",
    },
  ];

  const stats = [
    ["5+", "Years Experience"],
    ["3+", "AI / ML Roles"],
    ["20+", "AI Tools"],
    ["AWS", "Cloud Focus"],
  ];

  const active = useMemo(() => projects[activeProject], [activeProject, projects]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.14),transparent_22%),radial-gradient(circle_at_85%_15%,rgba(72,149,239,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.18),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-black tracking-tight">
            Sai <span className="text-cyan-300">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/65 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="/Sai_Ganesh_Nelluri_Resume.docx"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Resume
          </a>
        </nav>
      </header>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24">
        <div className="absolute left-[-7rem] top-28 hidden h-80 w-80 rounded-full border border-white/10 bg-white/[0.03] blur-sm lg:block" />
        <div className="absolute right-[-9rem] top-20 hidden h-[30rem] w-[30rem] rounded-full bg-cyan-300/10 blur-3xl lg:block" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <p className="mb-7 text-xs uppercase tracking-[0.65em] text-white/45">
              #
            </p>
            <h1 className="text-[3.7rem] font-black uppercase leading-[0.9] tracking-[0.12em] text-white sm:text-[5.2rem] lg:text-[6.4rem]">
              Sai
              <span className="block">Ganesh</span>
            </h1>
            <p className="mt-7 text-2xl font-semibold text-white/90">AI Engineer</p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">
              Building production-grade Generative AI systems, RAG pipelines, multi-agent workflows, and cloud-native AI services on AWS.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-cyan-200">
                Explore My Work
              </a>
              <a href="/Sai_Ganesh_Nelluri_Resume.docx" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-cyan-300 hover:text-cyan-200">
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
              <img
                src="/ganesh_picture_.png"
                alt="Sai Ganesh Nelluri — AI Engineer"
                className="h-[610px] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
        <p className="absolute bottom-8 left-5 hidden text-xs uppercase tracking-[0.45em] text-white/35 md:block">Scroll</p>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-cyan-200">About</p>
            <h2 className="mt-4 text-6xl font-black tracking-[-0.08em] text-white md:text-8xl">The Dev</h2>
            <div className="mt-9 space-y-6 text-lg leading-8 text-white/60">
              <p>
                AI and Machine Learning Engineer with 5+ years of production experience designing, building, and scaling cloud-native AI platforms on AWS.
              </p>
              <p>
                I specialize in LLM systems, Retrieval-Augmented Generation, multi-agent architectures, NLP, MLOps, model serving, observability, and secure production deployments.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-4xl font-black">{value}</p>
                  <p className="mt-2 text-sm text-white/45">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold">What I'm Looking For</h3>
                <p className="mt-3 leading-7 text-white/55">
                  AI Engineer, Gen AI Engineer, LLM Engineer, Machine Learning Engineer, and cloud-native AI platform roles.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold">Presently Focused On</h3>
                <p className="mt-3 leading-7 text-white/55">
                  Enterprise RAG systems, agentic AI workflows, evaluation, model reliability, and production-grade AI deployments.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/Sai_Ganesh_Nelluri_Resume.docx" className="rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-cyan-200">
                Download Resume
              </a>
              <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black transition hover:border-cyan-300 hover:text-cyan-200">
                Get in Touch →
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04]">
            <img
              src="/profile_pic_corporate.jpg"
              alt="Sai Ganesh Nelluri corporate profile"
              className="h-[680px] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24">
        <p className="text-sm font-semibold text-cyan-200">Tech Stack</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {Object.entries(skills).map(([category, values]) => (
            <div key={category} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-6 text-xl font-bold">{category}</h3>
              <div className="space-y-3">
                {values.map((skill) => (
                  <p key={skill} className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/65">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-5xl font-black tracking-[-0.07em] md:text-7xl">Selected Works</h2>
            <p className="mt-4 text-white/45">Interactive Gallery</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveProject(index)}
                className={`group rounded-[2rem] border p-6 text-left transition ${
                  activeProject === index ? "border-cyan-300/60 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:border-white/25"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/35">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-3xl font-black text-white/25">{project.number.split("").join(" ")}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-8 h-64 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.28),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.14),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">{active.category}</p>
            <h3 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">{active.title}</h3>
            <p className="mt-6 text-lg leading-8 text-white/60">{active.description}</p>
            <p className="mt-6 rounded-3xl border border-white/10 bg-black/25 p-5 text-white/75">{active.stack}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="https://github.com/saiganesh2501" target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-cyan-200">
                Source
              </a>
              <a href="#case-studies" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black transition hover:border-cyan-300 hover:text-cyan-200">
                View Case Study ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-5xl font-black tracking-[-0.07em] md:text-7xl">My Journey</h2>
        <div className="mt-12 space-y-6">
          {journey.map((item) => (
            <div key={`${item.place}-${item.period}`} className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="text-lg font-bold text-white/80">{item.period}</p>
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-2 text-white/45">{item.place}</p>
                <p className="mt-4 leading-8 text-white/60">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-5xl font-black tracking-[-0.07em] md:text-7xl">Peer Endorsements</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div key={`${item.name}-${item.role}`} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-5xl text-cyan-200/60">“</p>
              <p className="mt-4 leading-7 text-white/65">{item.quote}</p>
              <p className="mt-7 font-bold">{item.name}</p>
              <p className="mt-1 text-sm text-white/40">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="text-5xl font-black tracking-[-0.07em] md:text-7xl">Case Studies</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-5xl font-black text-white/10">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-5 leading-8 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/70">Contact</p>
              <h2 className="mt-4 text-6xl font-black tracking-[-0.08em] md:text-8xl">
                Let's
                <span className="block text-white/35">Talk.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-8 text-white/60">
                Open to AI Engineer, Gen AI Engineer, LLM Engineer, Machine Learning Engineer, and cloud-native AI platform roles.
              </p>
            </div>
            <div className="space-y-4">
              <a href="mailto:saiganeshn.2025@gmail.com" className="block rounded-3xl border border-white/10 bg-black/25 p-6 transition hover:border-cyan-300/50">
                <p className="text-sm uppercase tracking-[0.3em] text-white/35">Email</p>
                <p className="mt-3 text-xl font-bold">saiganeshn.2025@gmail.com</p>
              </a>
              <a href="tel:+19899548190" className="block rounded-3xl border border-white/10 bg-black/25 p-6 transition hover:border-cyan-300/50">
                <p className="text-sm uppercase tracking-[0.3em] text-white/35">Phone</p>
                <p className="mt-3 text-xl font-bold">+1 989-954-8190</p>
              </a>
              <div className="grid gap-4 sm:grid-cols-2">
                <a href="https://www.linkedin.com/in/ganesh-n-/" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-black/25 p-6 font-bold transition hover:border-cyan-300/50">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/saiganesh2501" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-black/25 p-6 font-bold transition hover:border-cyan-300/50">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© 2026 Sai Ganesh Nelluri. All rights reserved.</p>
          <a href="#home" className="hover:text-white">Back to Top ↑</a>
        </div>
      </footer>
    </main>
  );
}
