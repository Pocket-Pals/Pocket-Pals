import React from "react";

export default function () {
  async function tryGetToken() {
    const response = await fetch("/api/petfinder/types");
    const data = await response.json();
    console.log(data.types);
  }

  return (
    <>
      <button onClick={tryGetToken}>Get types</button>
    </>
  );
}
