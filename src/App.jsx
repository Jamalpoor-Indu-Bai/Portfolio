


import { useState } from "react";
import Intro from "./intro/Intro";
import Portfolio from "./Portfolio";

export default function App() {
  const [finished, setFinished] = useState(false);

  return (
    <>
      {!finished && (
        <Intro onFinish={() => setFinished(true)} />
      )}

      {finished && <Portfolio />}
    </>
  );
}