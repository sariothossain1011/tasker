import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import TaskSection from "./components/task/TaskSection";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div style={{ backgroundColor: "#191D26" ,color:"#fff"}}>
        <Header />
        <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
