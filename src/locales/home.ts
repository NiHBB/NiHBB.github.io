// src/locales/home.ts
export const homeMessages = {
  en: {
    hello: "Hello, I'm",
    name: "Qingpeng Nie",
    role: "Machine Learning & Data Science",
    projects: "Projects",
    browseRecent: "Browse My Recent",
    exploreMy: "Explore My",
    skills: "Skills",
    about: "About Me",
    cv: "CV",
    contact: "Contact Info",
    projectsData: [
      {
        image: "/project1.jpg",
        title: "Development Through Debt",
        description: "Exploring the Impact of Chinese-financed Infrastructure Projects on Nairobi’s Urban Growth",
        links: [{ label: "Report", url: "#" }]
      },
      // 其他项目...
    ],
    skillsList: [
      { title: "Data Analysis", detail: "Python, R, SQL, Tableau" },
      { title: "GIS", detail: "ArcGIS, QGIS, Spatial Analysis" },
      { title: "Machine Learning", detail: "scikit-learn, PyTorch, TensorFlow" },
      { title: "Web Development", detail: "Vue, React, Flask, Node.js" }
    ],
    experience: [
      "Research Assistant at USC",
      "Intern at Data Science Company"
    ],
    education: [
      "M.S. in Applied Data Science, USC",
      "B.S. in Computer Science"
    ]
  },
  zh: {
    hello: "你好，我是",
    name: "聂清芃",
    role: "机器学习与数据科学",
    projects: "项目",
    browseRecent: "近期项目",
    exploreMy: "探索我的",
    skills: "技能",
    about: "关于我",
    cv: "简历",
    contact: "联系方式",
    projectsData: [
      {
        image: "/project1.jpg",
        title: "债务驱动的发展",
        description: "探讨中国融资的基础设施项目对内罗毕城市发展的影响",
        links: [{ label: "报告", url: "#" }]
      },
      // 其他项目...
    ],
     skillsList: [
      { title: "数据分析", detail: "Python、R、SQL、Tableau" },
      { title: "地理信息系统", detail: "ArcGIS、QGIS、空间分析" },
      { title: "机器学习", detail: "scikit-learn、PyTorch、TensorFlow" },
      { title: "Web 开发", detail: "Vue、React、Flask、Node.js" }
    ],
    experience: [
      "南加州大学研究助理",
      "数据科学公司实习生"
    ],
    education: [
      "南加州大学 应用数据科学 硕士",
      "计算机科学 本科"
    ]
  }
}