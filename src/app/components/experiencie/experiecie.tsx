interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  }
  
  export function ExperienceCard({
    title,
    company,
    period,
    description,
    technologies,
  }: ExperienceCardProps) {
    return (
      <div className="border rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-500">{company}</p>
            </div>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium">
              {period}
            </span>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <p>{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }