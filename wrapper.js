export const svg = (fn) => async (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  const data = await fn(req, res);
  res.write(data);
  return data;
};

export const csv = (fn) => async (req, res) => {
  const data = await fn(req, res);
  res.setHeader("Content-Type", "text/csv");
  res.write(data);
  return data;
};

export const htmlText = (fn) => async (req, res) => {
  const data = await fn(req, res);
  res.setHeader("Content-Type", "text/html");
  res.write(data);
  return data;
};

export const json = (fn) => async (req, res) => {
  const data = await fn(req, res);
  res.setHeader("Content-Type", "application/json");
  const json = JSON.stringify({ data }, null, " ");
  res.write(json);
  return data;
};
