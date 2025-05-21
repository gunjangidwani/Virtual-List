import React, { useState } from "react";

const VirtualizedList = ({ List, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = List.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    console.log(scrollTop);
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.floor(
      newStartIndex + Math.floor(height / itemHeight)
    );
    setIndices([newStartIndex, newEndIndex]);
  };
  return (
    <>
      <div
        onScroll={(e) => handleScroll(e)}
        style={{ height, width, backgroundColor: "orchid", overflow: "auto" }}
      >
        <div style={{ height: List.length * itemHeight, position: "relative" }}>
          {visibleList.map((item, index) => {
            return (
              <div
                key={`item is ${item}`}
                style={{
                  height: itemHeight,
                  backgroundColor: "greenyellow",
                  border: "2px solid grey",
                  textAlign: "center",
                  position: "absolute",
                  width: "100%",
                  top: (indices[0] + index) * itemHeight,
                }}
              >
                item is {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default VirtualizedList;
