const PROJECTS = [
  {
    id: 1,
    name: "TimeStop",
    description: "Real-time packet sniffing and anomaly detection.",
    full_detail: "This project researches stock market movements using ARIMA models...",
    tech: ["C", "HTML", "CSS", "Arduino", "Javascript"],
  },
  {
    id: 2,
    name: "NetPulse (Prototype)",
    description: "Dashboard for automated security scans.",
    full_detail: "An intuitive scanner dashboard that integrates with NMAP APIs...",
    tech: ["React", "Node.js", "Docker"],
  },
  {
    id: 3,
    name: "D0rM",
    description: "Dashboard for automated security scans.",
    full_detail: "A security tool for dorm internal networks...",
    tech: ["React", "Node.js", "Docker"],
  },
  {
    id: 4,
    name: "HackHive",
    description: "Dashboard for automated security scans.",
    full_detail: "A collaborative hacking platform for CTFs...",
    tech: ["React", "Node.js", "Docker"],
  },
  {
    id: 5,
    name: "GourmetGuide",
    description: "Dashboard for automated security scans.",
    full_detail: "A food safety auditing system for restaurants...",
    tech: ["React", "Node.js", "Docker"],
  },
  {
    id: 6,
    name: "Vulnerability Scanner UI",
    description: "Dashboard for automated security scans.",
    full_detail: "A classic UI for various vulnerability scanners...",
    tech: ["React", "Node.js", "Docker"],
  },
];

exports.getProjects = async (req, res) => {
  res.json({ success: true, data: PROJECTS });
};

exports.getProjectById = async (req, res) => {
  const projectId = req.params.id;
  
  // Note: params.id is a string, so we use == instead of === or parseInt
  const project = PROJECTS.find((project) => project.id == projectId);
  
  if (!project) {
    return res
      .status(404)
      .json({ success: false, message: "Project not found" });
  }
  
  res.json({ success: true, data: project });
};
