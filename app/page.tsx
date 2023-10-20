"use client";

import { atom, useAtom } from "jotai";
import Navbar from "./components/Navbar";
import TypingInput from "./components/TypingInput";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import TipsPage from "./pages/TipsPage";
import UploadPage from "./pages/UploadPage";
import { loadingAtom, themeAtom } from "./state";
import LoadingOverlay from "./components/LoadingOverlay";
import { useEffect } from "react";

export default function Home() {
  const [theme] = useAtom(themeAtom)
  console.log('home')

  
  const [loading, setLoading] = useAtom(loadingAtom)
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  })
  
  return (
    <div className="min-h-screen flex flex-col items-center" data-theme={theme}>
      <TypingInput/>
     <Navbar/>
     <HomePage/>
     <SettingsPage/>
     <TipsPage/>
     <UploadPage/>
    < LoadingOverlay loading={loading}/>
    </div>
  );
}
