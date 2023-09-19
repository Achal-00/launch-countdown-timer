import React from "react";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[0.8fr_0.2fr] bg-very-dark-blue font-red-hat">
      <Content />
      <Footer />
    </div>
  );
}
