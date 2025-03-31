const http = require('http');
const os = require('os');

// Pobieranie adresu IP serwera (ignorując wewnętrzne)
const getServerIp = () => {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces).flat()) {
    if (iface.family === 'IPv4' && !iface.internal) {
      return iface.address;
    }
  }
  return 'Nieznane';
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.write(`
    <html>
      <head>
        <title>Informacje o serwerze</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; background-color: #f8f9fa; padding: 40px; }
          .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); display: inline-block; }
          h1 { color: #333; }
          p { font-size: 18px; color: #555; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Informacje o serwerze</h1>
          <p><strong>Adres IP:</strong> ${getServerIp()}</p>
          <p><strong>Nazwa serwera:</strong> ${os.hostname()}</p>
          <p><strong>Wersja aplikacji:</strong> ${process.env.APP_VERSION || 'Nie ustawiona'}</p>
        </div>
      </body>
    </html>
  `);
  res.end();
});

server.listen(8080, () => {
  console.log('Serwer działa na porcie 8080');
});
