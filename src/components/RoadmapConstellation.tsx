import type { Project } from '../data/projects';
import type { ProjectFilter } from '../lib/projectFilters';

interface RoadmapConstellationProps {
  projects: Project[];
  activeStage: ProjectFilter['stage'];
  onSelectProject: (project: Project) => void;
}

export function RoadmapConstellation({ projects, activeStage, onSelectProject }: RoadmapConstellationProps) {
  return (
    <section className="constellation-section" aria-label="Interactive roadmap constellation">
      <div className="section-heading">
        <p className="eyebrow">Living constellation</p>
        <h2>Objects move by maturity, not decoration.</h2>
        <p>
          The active timeline is <strong>{activeStage ?? 'All'}</strong>. Each object is a real project button.
        </p>
      </div>

      <div className="constellation-map">
        <div className="constellation-path" aria-hidden="true" />
        {projects.map((project, index) => (
          <button
            className={`project-node node-${index % 6}`}
            key={project.id}
            type="button"
            aria-label={`Open dossier for ${project.name}`}
            onClick={() => onSelectProject(project)}
          >
            <span>{project.domain}</span>
            <strong>{project.name}</strong>
            <small>{project.stage}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
