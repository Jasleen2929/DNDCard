import React, { useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { useState } from "react";
import { Data } from "./Data";
import SavedScreen from "./SavedScreen";

const Droppable = ({ selectDiv, setSelect }) => {
  const [elements, setElements] = useState([]);
  const [saved, setSaved] = useState(false);
  const nodeRef = useRef(null); // Declare useRef outside of the component function

  useEffect(() => {
    const storedElements = JSON.parse(localStorage.getItem("elements"));
    if (storedElements) {
      setElements(storedElements);
    } else {
      setElements(Data);
    }
  }, []);

  const eventHandler = (e, data, index) => {
    const updatedElements = [...elements];
    updatedElements[index].defaultX = data.x;
    updatedElements[index].defaultY = data.y;
    setElements(updatedElements);
    localStorage.setItem("elements", JSON.stringify(updatedElements));
  };

  const handleSave = () => {
    localStorage.setItem("elements", JSON.stringify(elements));
    setSaved(true);
  };

  return saved ? (
    <SavedScreen elements={elements} />
  ) : (
    <div>
      <div className="canvas" style={{ position: "relative" }}>
        {elements.map((item, index) => {
          return (
            <Draggable
              key={item.id}
              nodeRef={nodeRef}
              axis="both"
              handle=".handle"
              defaultPosition={{ x: item.defaultX, y: item.defaultY }}
              scale={1}
              onStart={(e, data) => eventHandler(e, data, index)}
              onDrag={(e, data) => eventHandler(e, data, index)}
              onStop={(e, data) => eventHandler(e, data, index)}
              bounds={{ top: -1, left: -1, right: 605, bottom: 447 }}
            >
              <div
                className="handle"
                style={{
                  border: "2px solid red",
                  padding: "1rem",
                  width: item.width,
                  height: item.height,
                  position: "absolute",
                }}
                ref={nodeRef} // Assign the ref to the draggable element
              >
                {item.name}
                <span>&#128465;</span>
              </div>
            </Draggable>
          );
        })}
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}>
        <button onClick={handleSave}>Save</button>

      </div>
      
    </div>
  );
};

export default Droppable;
