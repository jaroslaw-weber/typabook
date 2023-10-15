// components/ExportButton.js
import React from "react";
import { useAtom } from "jotai";
import { userInputAtom } from "../state";

export default function ExportButton() {
  const [userInput] = useAtom(userInputAtom);

  const handleExport = () => {
    const blob = new Blob([userInput], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported-text.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button className="btn flex-1" onClick={handleExport}>
      Export
    </button>
  );
}
