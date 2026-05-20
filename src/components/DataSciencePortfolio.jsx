import React, { useState } from "react";

export default function DataSciencePortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const profile = {
    name: "Daniel Effiong",
    title: "Data Scientist & Machine Learning Enthusiast",
    bio: "I am passionate about transforming raw data into actionable insights through analytics, machine learning, and intelligent systems. I enjoy building predictive models, analytics dashboards, and AI-powered applications that solve real-world problems.",
    github: "https://www.github.com/danieljohn0",
    linkedin: "https://www.linkedin.com/in/danieleffiong",
    email: "danieleffiong100@gmail.com",
    profileImage: "/images/profile.jpg",
  };

  const theme = {
    primary: "text-yellow-400",
    button: "bg-yellow-400",
    border: "border-yellow-400/40",
    background: "bg-black",
    card: "bg-zinc-900",
  };

  const experiences = [
    {
      role: "Data Science Intern",
      company: "Insight Analytics",
      period: "2025 - Present",
      description:
        "Worked on predictive analytics projects, built dashboards, and developed machine learning models for customer insights.",
    },
    {
      role: "Freelance Data Analyst",
      company: "Self-Employed",
      period: "2024 - 2025",
      description:
        "Created data visualizations, cleaned datasets, and delivered analytics reports for small businesses and startups.",
    },
  ];

  const projects = [
    {
      title: "Sales Forecasting Model",
      description:
        "Built a machine learning model to forecast monthly sales using Python, pandas, and scikit-learn.",
    },
    {
      title: "Customer Segmentation Dashboard",
      description:
        "Designed an interactive dashboard for customer behavior analysis using Power BI and SQL.",
    },
    {
      title: "AI Resume Screening Tool",
      description:
        "Developed a natural language processing tool to classify and rank resumes efficiently.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("✅ Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("❌ Error sending message. Please try again.");
      }
    } catch (error) {
      setMessage("❌ Error sending message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            {profile.title}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-yellow-400">Daniel Effiong</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I build data-driven solutions, machine learning models, and
            analytics dashboards that help businesses make smarter decisions.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              View Projects
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="border border-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-900 transition inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/20 border border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
            <img
              src={profile.profileImage}
              alt="Daniel Effiong"
              className="w-full h-full object-cover rounded-3xl"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am passionate about transforming raw data into meaningful insights.
            My interests include machine learning, data visualization, predictive
            analytics, and artificial intelligence. I enjoy solving real-world
            problems using data and continuously improving my technical and
            analytical skills.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-yellow-400">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400/40 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-yellow-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-yellow-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-yellow-400">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Python",
            "SQL",
            "Machine Learning",
            "Power BI",
            "Tableau",
            "Pandas",
            "Scikit-learn",
            "TensorFlow",
            "Data Visualization",
            "Statistics",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-gray-300 hover:border-cyan-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/10 border border-cyan-400/20 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Open to internships, freelance opportunities, and data science
            collaborations.
          </p>

          <form
            className="max-w-xl mx-auto space-y-4 text-left"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 text-white focus:border-yellow-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 text-white focus:border-yellow-400 focus:outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-4 rounded-2xl bg-black border border-gray-700 text-white focus:border-yellow-400 focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-gray-300 font-semibold">
              {message}
            </p>
          )}

          <div className="flex justify-center gap-6 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
