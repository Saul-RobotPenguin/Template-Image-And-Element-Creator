import Parser from "html-react-parser";

const ImageCreator = (props) => {
  let imagePlaceholder = ``;

  let imageTemplates = (src, alt, width, height) => {
    return (imagePlaceholder = `<img src=${src} alt=${alt}  width=${width} height=${height}/>`);
  };
  let repeatImage = (src, alt, width, height, num) => {
    return src.repeat(alt, width, height, num);
  };

  let createImages = repeatImage(
    imageTemplates(
      props.imageSrc,
      props.imageAlt,
      props.imageWidth,
      props.imageHeight
    ),
    props.numberOfImages
  );

  return Parser(createImages);
};

export default ImageCreator;
