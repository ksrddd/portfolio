exports.getProjects = async (req, res) => {
  // Mock data for visualization
  const Projects = [
    {
      id: 1,
      name: "Time-series Analysis of Stock Market Data",
      description: "Real-time packet sniffing and anomaly detection.",
      tech: ["Python", "Vue.js", "Socket.io"],
    },
    {
      id: 2,
      name: "Vulnerability Scanner UI",
      description: "Dashboard for automated security scans.",
      tech: ["React", "Node.js", "Docker"],
    },
  ];

  res.json({ success: true, data: Projects });
};

exports.getProjectById = async (req, res) => {
  const projectId = req.params.id;
  
  // Here we use array instead of single object so we can use .find()
  const Projects = [
    {
      id: 1,
      name: "Time-series Analysis of Stock Market Data",
      description: "Real-time packet sniffing and anomaly detection.",
      full_detail: "This project researches stock market movements using ARIMA models...",
      tech: ["Python", "Vue.js", "Socket.io"],
    },
    {
      id: 2,
      name: "Vulnerability Scanner UI",
      description: "Dashboard for automated security scans.",
      full_detail: "An intuitive scanner dashboard that integrates with NMAP APIs...",
      tech: ["React", "Node.js", "Docker"],
    }
  ];

  // Note: params.id is a string, so we use == instead of === or parseInt
  const project = Projects.find((project) => project.id == projectId);
  
  if (!project) {
    return res
      .status(404)
      .json({ success: false, message: "Project not found" });
  }
  
  res.json({ success: true, data: project });
};
