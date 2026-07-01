import aiInterviewImg from "../../../public/images/interview-pre.png";
import graphRagImg from "../../../public/images/graph-rag.png";
import quizImg from "../../../public/images/quiz.png";
import smsImg from "../../../public/images/sms.png";
import shopliteImg from "../../../public/images/shoplite.png";
import brainMriImg from "../../../public/images/mri-output.gif";
import financeImg from "../../../public/images/finance.png";
import tripPlannerImg from "../../../public/images/chat-bot.png";
import reduxCartImg from "../../../public/images/cart.png";

const projects = [
  {
    id: 1,
    name: "AI Interview Preparation Platform",
    subtitle: "React • FastAPI • LangGraph • WebSockets",
    year: "2025",
    category: "Full Stack AI",
    image: aiInterviewImg,
    live: "https://interview-preparation-frontend-topaz.vercel.app/",
    github: "",
    featured: true,
  },

  {
    id: 2,
    name: "Graph RAG",
    subtitle: "LLMs • LangChain • Graph Retrieval",
    year: "2025",
    category: "Generative AI",
    image: graphRagImg,
    live: "",
    github: "https://github.com/sandeep10704/graph_rag",
    featured: true,
  },

  {
    id: 3,
    name: "AI Trip Planner",
    subtitle: "React • Gemini API • AI Chatbot",
    year: "2025",
    category: "AI Application",
    image: tripPlannerImg,
    live: "",
    github: "https://github.com/sandeep10704/Ai-trip-planner",
    featured: true,
  },

  {
    id: 4,
    name: "Mini Finance Backend",
    subtitle: "Spring Boot • PostgreSQL • REST API",
    year: "2025",
    category: "Backend",
    image: financeImg,
    live: "",
    github:
      "https://github.com/sandeep10704/miniFinanceBackendProject",
    featured: true,
  },

  {
    id: 5,
    name: "Brain MRI Tumor Segmentation",
    subtitle: "TensorFlow • U-Net • Medical Imaging",
    year: "2025",
    category: "Deep Learning",
    image: brainMriImg,
    live: "",
    github:
      "https://github.com/sandeep10704/u-net-segmentation-brain-tumors/tree/main",
    featured: false,
  },

  {
    id: 6,
    name: "Speech Recognition",
    subtitle: "CNN • TensorFlow • Audio Processing",
    year: "2025",
    category: "Deep Learning",
    image: quizImg,
    live: "",
    github:
      "https://github.com/sandeep10704/CNN-using-kaggle-dateset/tree/main",
    featured: false,
  },

  {
    id: 7,
    name: "Redux Shopping Cart",
    subtitle: "React • Redux Toolkit",
    year: "2025",
    category: "Frontend",
    image: reduxCartImg,
    live: "",
    github:
      "https://github.com/sandeep10704/reduxPracticeInShoppingCart",
    featured: false,
  },

  {
    id: 8,
    name: "SHOPlite",
    subtitle: "React • Framer Motion • E-commerce",
    year: "2024",
    category: "Frontend",
    image: shopliteImg,
    live: "https://artha-viz.vercel.app/",
    github: "",
    featured: false,
  },

  {
    id: 9,
    name: "Spam Detection",
    subtitle: "Machine Learning • NLP",
    year: "2024",
    category: "Machine Learning",
    image: smsImg,
    live: "",
    github:
      "https://github.com/sandeep10704/sms_spam_dectection",
    featured: false,
  },
];

export default projects;