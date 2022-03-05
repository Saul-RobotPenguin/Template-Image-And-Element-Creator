import Parser from "html-react-parser";

const ElementCreator = (props) => {
  let placeholder = ``;

  let elementTemplates = (element, text) => {
    return (placeholder = `<${element}> ${text} </${element}>`);
  };

  let repeatElement = (element, text, num) => {
    return element.repeat(text, num);
  };

  let createElements = repeatElement(
    elementTemplates(props.element, props.textWithinElement),
    props.numberOfElements
  );

  return Parser(createElements);
};

export default ElementCreator;
