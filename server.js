// server.js
import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200);
        res.end("Welcome to the Home Page!");
    } else if (req.url === "/about") {
        res.writeHead(200);
        res.end("This is the About Page of Smart Utility Toolkit.");
    } else if (req.url === "/contact") {
        res.writeHead(200);
        res.end("Contact us at: support@example.com");
    } else {
        res.writeHead(404);
        res.end("404: Page Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
