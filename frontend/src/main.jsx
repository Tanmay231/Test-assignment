import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppKitProvider } from "./Providers/AppKitProvider";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <App />
      <Toaster />
    </AppKitProvider>
  </StrictMode>
);
