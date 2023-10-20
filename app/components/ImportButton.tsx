// components/ImportButton.js
import React, { useRef } from "react";
import { useAtom } from "jotai";
import { currentUiAtom, userInputAtom } from "../state";
import { Ui } from "../Ui";

export default function ImportButton() {
  const [, setUserInput] = useAtom(userInputAtom);
  const fileInputRef = useRef<any>(null);
  const [, setCurrentUi] = useAtom(currentUiAtom);
  const handleImport = async () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click(); // Programmatically trigger file input
    }
  };

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      setUserInput(text);
      //go straight to typing page
      setCurrentUi(Ui.Type);
    } catch (error) {
      console.error("Error reading the file:", error);
    }
  };

  return (
    <div className=" flex-1">
      <button className="btn w-full" onClick={handleImport}>
        Import
      </button>
      <input
        type="file"
        accept=".txt"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}
