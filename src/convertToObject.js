'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split('\n').forEach(line => {
    const trimmed = line.trim();

    // Пропускаємо порожні рядки або рядки без ":"
    if (!trimmed || !trimmed.includes(':')) return;

    // Розділяємо на ключ і значення по першому ":"
    const [key, ...rest] = trimmed.split(':');
    const value = rest.join(':').trim().replace(/;$/, '');

    obj[key.trim()] = value;
  });

  return obj;
}

module.exports = convertToObject;
