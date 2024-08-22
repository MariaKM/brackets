module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0 || str.length < 1) {
    return false;
  }

  let configArr = [];
  let pattern = '';

  if (/\d/.test(str)) {
    for (arr of bracketsConfig) {
      configArr.push(arr.join().replace(',', ''));
    }

    for (e of configArr) {
      pattern += e + '|';
    }
    pattern = pattern.replace(/\|$/, "");
  } else {
    for (arr of bracketsConfig) {
      configArr.push(arr.join().replace(',', '\\'));
    }

    for (e of configArr) {
      pattern += '\\' + e + '|';
    }
    pattern = pattern.replace(/\|$/, "");
  }

  const regex = new RegExp(pattern, 'g');

  while (regex.test(str)) {
    str = str.replace(regex, "");
  }
  return str.length === 0;
}