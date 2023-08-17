import React from "react";

function CustomPage() {
  const iframeStyles = {
    border: "none", // Remove the border around the iframe
    width: "100%", // Make the iframe cover the entire width
    height: "100vh", // Make the iframe cover the full viewport height
  };

  return (
    <div>
      <iframe
        title="Custom Page"
        src={"/liz.run/index.html"}
        style={iframeStyles}
      />
    </div>
  );
}

export default CustomPage;
