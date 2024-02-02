import http from "http";
import router from "./http-server/router.js";
import args from "./http-server/args.js";
import context from "./http-server/context.js";

const PORT = 8000;

const server = http.createServer(
  args(
    context(
      router((req, res) => {
        // console.log(req.headers);
        console.log(req.args);
        console.log(req.context);
        res.end();
      })
    )
  )
);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

// server.on('clientError', (err, socket) => {
//   console.error(err);
//   socket.end('Bad Request');
// });

// process.on('SIGINT', () => {
//   server.close((error) => {
//     if (error) {
//       console.error(error);
//       process.exit(1);
//     }
//   });
// });
