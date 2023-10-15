"use client";

import Navbar from "./components/Navbar";
import TypingInput from "./components/TypingInput";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import TipsPage from "./pages/TipsPage";
import UploadPage from "./pages/UploadPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {TypingInput()}
      {Navbar()}
      {HomePage()}
      {SettingsPage()}
      {TipsPage()}
      {UploadPage()}
    </div>
  );
}
