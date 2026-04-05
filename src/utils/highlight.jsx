

const highlightText = (description, highlights) => {
  let result = description;
  highlights.forEach((phrase) => {
    result = result.replace(phrase, `<strong>${phrase}</strong>`);
  });
  return result;
}

export default highlightText;
