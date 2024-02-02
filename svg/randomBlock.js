export default (req, res) => {
  const width = Math.floor(Math.random() * 100) + 50;
  const height = Math.floor(Math.random() * 100) + 50;

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return `<div style="width:${width}px; height:${height}px; background-color:${color};"></div>`;
};
