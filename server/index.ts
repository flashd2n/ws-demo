import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import * as path from "path";

// ------------ SIMPLE WSS -----------
const wss = new WebSocket.Server({ port: 7777 }, () => {
    console.log("WSS live");
});

wss.on('connection', (ws: WebSocket) => {

    ws.on('message', (message: string) => {
        console.log(`Received: ${message}`);
        ws.send(JSON.stringify({ content: message }));
    });

    ws.send(JSON.stringify({ content: "Hello from WS server" }));
    
    let count = 0;
    setInterval(() => {
        ++count;
        if (ws.readyState !== 3) {
            ws.send(JSON.stringify({content: `MSG: ${count}`}));
        }
    }, 1000);
});


// -------------- WSS + EXPRESS

// const app = express();

// const server = http.createServer(app);

// const wss = new WebSocket.Server({ server });

// const clientPath = path.join(__dirname, "../client");

// app.use("/", express.static(clientPath));

// wss.on('connection', (ws: WebSocket) => {

//     ws.on('message', (message: string) => {

//          console.log(`Received: ${message}`);
//          ws.send(JSON.stringify({content: message}));

//     });

//     const msg = JSON.stringify({ content: "Hello from WS server" });

//     ws.send(msg);

//     let count = 0;
//     setInterval(() => {
//         ++count;
//         if (ws.readyState !== 3) {
//             ws.send(JSON.stringify({ content: `MSG: ${count}` }));
//         }
//     }, 1000);
// });

// server.listen(7777, () => {
//     console.log(`Server started on port 7777 :)`);
// });

