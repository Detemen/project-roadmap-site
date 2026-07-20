import type { Project } from '../data/projects';
import type { ProjectFilter } from '../lib/projectFilters';

interface RoadmapConstellationProps {
  projects: Project[];
  activeStage: ProjectFilter['stage'];
  onSelectProject: (project: Project) => void;
}

const STAGE_RADIUS: Record<Project['stage'], number> = {
  Research: 14,
  Prototype: 24,
  MVP: 34,
  Tooling: 34,
  Production: 44
};

export function nodeStyle(index: number, total: number, stage: Project['stage']) {
  const angle = (index / Math.max(total, 1)) * 2 * Math.PI - Math.PI / 2;
  const radius = STAGE_RADIUS[stage];
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * 0.82 * Math.sin(angle);
  return {
    left: `${x}%`,
    top: `${y}%`
  };
}

export function RoadmapConstellation({ projects, activeStage, onSelectProject }: RoadmapConstellationProps) {
  return (
    <section className="constellation-section" aria-label="Interactive roadmap constellation">
      <div className="section-heading">
        <p className="eyebrow">Living constellation</p>
        <h2>Distance from center = how far along it is.</h2>
        <p>
          The active timeline is <strong>{activeStage ?? 'All'}</strong>. Each star is a real project — production sits
          on the outer ring, research at the core.
        </p>
      </div>

      <div className="constellation-map">
        <div className="constellation-ring ring-outer" aria-hidden="true" />
        <div className="constellation-ring ring-mid" aria-hidden="true" />
        <div className="constellation-ring ring-inner" aria-hidden="true" />
        {projects.map((project, index) => (
          <button
            className="project-node"
            style={nodeStyle(index, projects.length, project.stage)}
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
