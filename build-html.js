const fs = require('fs');
const path = require('path');

// Read the original HTML file
const htmlTemplate = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="
        default-src 'self';
        script-src 'self' https://cdn.socket.io https://unpkg.com;
        style-src 'self';
        connect-src 'self' https://tomato.tpos.vn https://rt-2.tpos.app https://ws.chatomni.tpos.app wss://rt-2.tpos.app wss://ws.chatomni.tpos.app ws://localhost:* http://localhost:*;
        img-src 'self' data: https: http:;
        font-src 'self' data:;
        worker-src 'self' blob:;
    ">
    <title>ChatOmni Viewer</title>
    <link rel="icon" type="image/svg+xml" href="/public/favicon.svg">
    <link rel="stylesheet" href="/dist/styles.css">
</head>
<body class="bg-gray-100">
    <div id="root"></div>

    <!-- Load React libraries -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>

    <!-- Load compiled application code -->
    <script src="/dist/app.min.js"></script>
</body>
</html>
`;

// Write the production HTML file
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlTemplate);
console.log('✅ Production index.html created successfully!');
