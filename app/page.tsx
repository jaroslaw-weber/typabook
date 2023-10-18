"use client";

import { useAtom } from "jotai";
import Navbar from "./components/Navbar";
import TypingInput from "./components/TypingInput";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import TipsPage from "./pages/TipsPage";
import UploadPage from "./pages/UploadPage";
import { themeAtom } from "./state";

export default function Home() {
  const [theme] = useAtom(themeAtom)
  return (
    <div className="min-h-screen flex flex-col items-center" data-theme={theme}>
      {TypingInput()}
      {Navbar()}
      {HomePage()}
      {SettingsPage()}
      {TipsPage()}
      {UploadPage()}
    </div>
  );
}
