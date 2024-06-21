// const http = require("http");
// const fs = require("fs");

// const server = http.createServer();
// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Page Not Found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// server.on("request", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const url = req.url;
//   console.log(url);

//   switch (url) {
//     case "/about":
//       renderHTML("./about.html", res);
//       break;
//     case "/contact":
//       renderHTML("./contact.html", res);
//       break;
//     default:
//       renderHTML("./index.html", res);
//       break;
//   }

//   // if (url === "/about") {
//   //   renderHTML("./about.html", res);
//   // } else if (url === "/contact") {
//   //   renderHTML("./contact.html", res);
//   // } else {
//   //   renderHTML("./index.html", res);
//   // }
// });

// server.listen(8000, () => {
//   console.log("Server is listening on port 8000..");
// });

// build server
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 8000;

// USE EJS
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const data = [
    {
      name: "Aldrin",
      age: 19,
      email: "hikmahald@gmail.com",
    },
    {
      name: "Gracia",
      age: 23,
      email: "graciaald@gmail.com",
    },
    {
      name: "Hillary",
      age: 17,
      email: "hillaryald@gmail.com",
    },
  ];
  res.render("index", {
    title: "Home Page",
    data,
    layout: "layouts/mainlayouts.ejs",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    layout: "layouts/mainlayouts.ejs",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    layout: "layouts/mainlayouts.ejs",
  });
});

// for request anything
app.use("/", (req, res) => {
  res.send(404, "Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
