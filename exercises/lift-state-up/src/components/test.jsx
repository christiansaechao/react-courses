import { memo } from "react";

export const Test = memo(function () {
  console.log("Test component");
  return <p>Test</p>;
});
