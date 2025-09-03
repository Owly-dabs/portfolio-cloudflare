// src/components/ProjectCard.tsx
interface Props {
  title: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ title, description, tech }: Props) {
  return (
    <div className="bg-[#252526] p-4 rounded-md shadow-md border border-[#3c3c3c] hover:shadow-lg transition h-full">
      <h3 className="text-xl font-bold text-accent">{title}</h3>
      <p className="text-sm text-muted mt-2">{description}</p>
      <p className="text-xs text-muted mt-2">🔧 {tech.join(", ")}</p>
    </div>
  );
}
