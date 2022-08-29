const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

app.get("/Categories", (req, res) => {
  const i = res.json({
    categories: [
      {
        id: 1,
        name: "Technical Excellence",
        description: "All things programing languages.",
        image: "technical-excellence.jpg",
      },
      {
        id: 2,
        name: "API Development",
        description:
          "",
        image: "api-development.jpg",
      },
      {
        id: 3,
        name: "Backend Development",
        description: "",
        image: "backend-development.jpg",
      },
      {
        id: 4,
        name: "Frontend Development",
        description: "",
        image: "frontend-development.jpg",
      },
      {
        id: 5,
        name: "Database Development",
        description: "",
        image: "database-development.jpg",
      },
      {
        id: 5,
        name: "Configuration Files",
        description: "",
        image: "configuration-files.jpg",
      },
      {
        id: 5,
        name: "Cloud",
        description: "",
        image: "cloud.jpg",
      },
      {
        id: 5,
        name: "Continuous integration CI/CD",
        description: "",
        image: "ci-cd.jpg",
      },
      {
        id: 5,
        name: "Developer Testing",
        description: "",
        image: "developer-testing.jpg",
      },
      {
        id: 5,
        name: "Security",
        description: "",
        image: "developer-testing.jpg",
      },
      {
        id: 5,
        name: "Software Development Life Cycle (SDLC)",
        description: "",
        image: "sdlc.jpg",
      },
      {
        id: 5,
        name: "Development Fundamentals",
        description: "",
        image: "development-fundamentals.jpg",
      },
      {
        id: 5,
        name: "Terminal",
        description: "",
        image: "terminal.jpg",
      },
      {
        id: 5,
        name: "Algorithms, Data Structures, Searching & Sorting",
        description: "",
        image: "terminal.jpg",
      },
      {
        id: 5,
        name: "Machine Learning",
        description: "",
        image: "machine-learning.jpg",
      },
    ],
  });

  return i;
});
