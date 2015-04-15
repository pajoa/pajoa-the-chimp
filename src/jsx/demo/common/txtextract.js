module.exports = function(text) {
  return text.replace('module.exports = "', '').replace('"', '').replace(new RegExp('\\\\n', 'gmi'), '\n');
};
