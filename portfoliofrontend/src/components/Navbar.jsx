
import { navLinks } from "../constants/navigation";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-15 items-center justify-between px-0">
          <a
            href="#home"
            className="text-2xl font-bold text-white"
          >
            Indu<span className="text-emerald-400">.dev</span>
          </a>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-300 transition-colors duration-300 hover:text-emerald-400"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;