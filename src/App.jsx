import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <div className="min-h-screen bg-[#050816] flex gap-6 justify-center items-center">
      <Button text="View Projects" variant="primary"></Button>
      <Button text="Download Resume" variant="secondary"></Button>
      
    <div className="min-h-screen bg-[#050816] p-10">
      <SectionTitle title="My Portfolio" subtitle="Welcome to my portfolio website!"></SectionTitle>

    </div>
    </div>
  );
}
  export default App;
