const databaseRows = [
  {
    language: "en",
    type: "book",
    title: "book1",
  },
  {
    language: "en",
    type: "book",
    title: "book2",
  },
  {
    language: "en",
    type: "movie",
    title: "movie1",
  },
  {
    language: "en",
    type: "movie",
    title: "movie2",
  },
];

export default ({ filter = null }, { languages }) => {
  const understoodContent = databaseRows.filter(
    ({ language }) => languages[language]
  );

  if (filter) {
    return understoodContent.filter(({ type }) => type === filter);
  }
  return understoodContent;
};
