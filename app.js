const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
    res.end('¡Hola desde mi pipeline desplegado con éxito!');

};

const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
