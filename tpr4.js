function telephoneCheck(str) {
  var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  return pattern.test(str);
}
