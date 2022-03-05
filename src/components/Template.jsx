import { useState } from "react";
import ElementCreator from "../functions/ElementCreator";
import ImageCreator from "../functions/ImageCreator";
import "./Template.css";
const Template = () => {
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [textWithinElement, setTextWithinElements] = useState("");
  const [element, setElement] = useState();
  const [numberOfImages, setNumberOfImages] = useState(0);
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");

  return (
    <div className="container">
      Template Creator Prototype
      {/* value={} num={} element={} */}
      <br />
      <br />
      <label for="number">Number Of Elements</label>
      <input
        name="number"
        type="number"
        min="0"
        max="10"
        value={numberOfElements}
        onChange={(event) => setNumberOfElements(event.target.value)}
      />
      <br />
      <label for="text">Text Within The Element</label>
      <input
        type="text"
        name="text"
        value={textWithinElement}
        onChange={(event) => setTextWithinElements(event.target.value)}
      />
      <br />
      <label for="elements">Type Of Element</label>
      <select
        name="elements"
        id="elements"
        onChange={(event) => setElement(event.target.value)}
      >
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
        <option value="h5">Heading 5</option>
        <option value="h6">Heading 6</option>
        <option value="p">Paragraph</option>
        <option value="b">Bold Text</option>
        <option value="i">Italic Text</option>
      </select>
      <br />
      <label for="imageSrc">Input The Image Source Here</label>
      <input
        type="text"
        name="imageSrc"
        value={imageSrc}
        onChange={(event) => setImageSrc(event.target.value)}
      />
      <br />
      <label for="imageAlt">Input The Alt Of The Image here</label>
      <input
        type="text"
        name="imageAlt"
        value={imageAlt}
        onChange={(event) => setImageAlt(event.target.value)}
      />
      <br />
      <label for="numberOfImages">
        Input The Amount Of Images To Duplicate
      </label>
      <input
        name="numberOfImages"
        type="number"
        min="0"
        max="10"
        value={numberOfImages}
        onChange={(event) => setNumberOfImages(event.target.value)}
      />
      <br />
      <label for="imageWidth">
        Input The Width Of The Image here (Recommend 300px)
      </label>
      <input
        type="text"
        name="imageWidth"
        value={imageWidth}
        onChange={(event) => setImageWidth(event.target.value)}
      />
      <br />
      <label for="imageHeight">
        Input The Height Of The Image here (Recommend 300px)
      </label>
      <input
        type="text"
        name="imageHeight"
        value={imageHeight}
        onChange={(event) => setImageHeight(event.target.value)}
      />
      <ElementCreator
        numberOfElements={numberOfElements}
        textWithinElement={textWithinElement}
        element={element}
      />
      <ImageCreator
        numberOfImages={numberOfImages}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
    </div>
  );
};

export default Template;
