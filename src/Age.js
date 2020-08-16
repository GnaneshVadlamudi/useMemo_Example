import React from "react";

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

export default Age;