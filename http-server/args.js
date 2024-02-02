const parseBody = (req) =>
  new Promise((resolve) => {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      resolve(body);
    });
  });

export default (fn) => async (req, res) => {
  const parsedUrl = new URL(req.url, "http://localhost");
  const searchParams = Object.fromEntries(parsedUrl.searchParams.entries());

  let jsonBody;

  if (req.headers["Content-Type"] === "application/json") {
    const parsedBody = await parseBody(req);
    try {
      const json = JSON.parse(parsedBody);
      if (typeof json === "object") jsonBody = json;
    } catch (err) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "This is no json!" }));
      return;
    }
  }

  req.args = {
    ...searchParams,
    ...jsonBody,
  };

  return fn(req, res);
};
