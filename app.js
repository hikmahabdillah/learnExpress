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
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("this is About Page");
});
app.get("/contact", (req, res) => {
  res.send("this is contact Pagess");
});

// for request anything
app.use("/", (req, res) => {
  res.send(404, "Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
