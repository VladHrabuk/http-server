function parseAcceptLanguage(acceptLanguageHeader) {
  const languages = acceptLanguageHeader.split(",");

  return languages.reduce((result, language) => {
    const [code, quality = "1"] = language.trim().split(";q=");
    result[code] = parseFloat(quality);
    return result;
  }, {});
}

export default (fn) => (req, res) => {
  const languages = parseAcceptLanguage(req.headers["accept-language"]);
  req.context = { languages, userAgent: req.headers["user-agent"] };

  return fn(req, res);
};
