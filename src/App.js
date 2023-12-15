import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <>
      {valueA} + {valueB} = {valueA + valueB}
    </>
  );
}

export default function App() {
  return <Sum valueA={2} valueB={5} />;
}
