import routes from "../routes.js";

export default (fn) => async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const foundRoute = routes[req.method]?.[url.pathname];

  if (foundRoute) {
    try {
      await foundRoute(req, res);
    } catch (err) {
      console.error(err);
      res.statusCode = err.status || 500;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ error: err.message || "Something wrong happened!" })
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ error: "Not Found" }));
  }

  return fn(req, res);
};
