import principles from "./principles/principles.js";
import randomBlock from "./svg/randomBlock.js";
import { svg, csv, htmlText, json } from "./wrapper.js";
import testHtml from "./test/test.html.js";
import libraryOverview from "./library/libraryOverview.js";

const resolver = (fn) => (req, res) => {
  fn(req.args, req.context);
};

const GET = {
  "/": (req, res) => {
    res.write("The main page!");
  },
  "/test": htmlText(testHtml),
  "/principles": csv(principles),
  "/randomBlock": svg(randomBlock),
  "/api/echo": json((req, res) => {
    return { args: req.args, context: req.context };
  }),
  "/api/libraryOverview": json(resolver(libraryOverview)),
};

const POST = {
  "/api/salute": json(async (req, res) => {
    return req.args;
  }),
};

export default { GET, POST };
