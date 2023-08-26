
function softWrap(text, charLength = 50) {
  // This function will softwrap provided text, at the provided point.

  let out = "";
  let shouldWrap = false;
  let occuredWraps = 0;

  for (let i = 0; i < text.length; i++) {
    if (i == charLength || (i - (occuredWraps * charLength )) == charLength) {
      shouldWrap = true;
    }

    if (text[i] == " " && shouldWrap) {
      out += "\n";
      shouldWrap = false;
      occuredWraps++;
    } else {
      out += text[i];
    }
  }

  return out;
}

module.exports = {
  softWrap,
};
