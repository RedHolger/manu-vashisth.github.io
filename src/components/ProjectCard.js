export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="my-2">{description}</p>
      <p className="text-sm text-gray-600">{tech}</p>
      {link && <a href={link} className="text-blue-600 hover:underline mt-2 block">View Project</a>}
    </div>
  )
}

