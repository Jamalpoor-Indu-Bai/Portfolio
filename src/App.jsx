
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    // <div className="min-h-screen bg-[#050816] flex gap-6 justify-center items-center">
    //   <Button text="View Projects" variant="primary"></Button>
    //   <Button text="Download Resume" variant="secondary"></Button>
      
    // <div className="min-h-screen bg-[#050816] p-10">
    //   <SectionTitle title="My Portfolio" subtitle="Welcome to my portfolio website!"></SectionTitle>

    // </div>

    // <div className="min-h-screen bg-[#050816] flex items-center justify-center p-10">
    //   <Card className="max-w-md">
    //     <h2 className="text-2xl font-bold text-white">
    //       Portfolio Website
    //     </h2>

    //     <p className="mt-4 text-gray-400">
    //       Built using React, Tailwind CSS, and Framer Motion.
    //     </p>
    //   </Card>
    // </div>

    // <div className="min-h-screen bg-[#050816] flex flex-wrap items-center justify-center gap-4 p-10">
    //   <Badge text="React" />
    //   <Badge text="Tailwind CSS" />
    //   <Badge text="Java" />
    //   <Badge text="Spring Boot" />
    //   <Badge text="MongoDB" />
    //   <Badge text="Framer Motion" />
    // </div>


    // <div className="min-h-screen bg-[#050816]">
    <>
     <Navbar />
     <Hero />
     <About />
     </>

    // </div>
    // </div>
  );
}
  export default App;
