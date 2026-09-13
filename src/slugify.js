function slugify(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  str = str.toLowerCase();

  // Strip accents
  str = str.normalize('NFD').replace(/[̀-ͯ]/g, '');

  // Replace all non-alphanumeric characters with a hyphen
  str = str.replace(/[^a-z0-9]/g, '-');

  // Collapse multiple hyphens into a single hyphen
  str = str.replace(/-+/g, '-');

  // Trim leading and trailing hyphens
  str = str.replace(/^-+|-+$/g, '');

  return str;
}

module.exports = { slugify };