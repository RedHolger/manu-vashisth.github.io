export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Manu Vashisth</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  )
}

