import http from "http";
const PORT = 8000;
import url from "url"

const mysServer = http.createServer((req, res)=> {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to my Node.js Server!");
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
    <h1>About This Server</h1>
    <p>This is my first Node.js web server, built without any external frameworks.</p>
    <p>Created by: Swornim</p>
  `);
    }
    else if (req.url === '/api/student') {
        const student = {
            name: 'Swornim',
            course: 'Web Development',
            semester: 5
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(student));
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
    <h1>Contact Me</h1>
    <p>Email: swornim@gmail.com</p>
    <p>Phone: +977 9800000000</p>
  `);
    }
    else if (req.url === '/api/time') {
        const timeData = { currentTime: new Date().toISOString() };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(timeData));
    }
    else if (req.url === '/api/random') {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ randomNumber }));
    }

// inside the route handling logic:
    else if (req.url.startsWith('/hello')) {
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name || 'Guest';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${name}!`);
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
})

mysServer.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})
