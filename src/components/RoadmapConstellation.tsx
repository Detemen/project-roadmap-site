import type { Project } from '../data/projects';
import type { ProjectFilter } from '../lib/projectFilters';

interface RoadmapConstellationProps {
  projects: Project[];
  activeStage: ProjectFilter['stage'];
  onSelectProject: (project: Project) => void;
}

const STAGE_ORDER: Project['stage'][] = ['Research', 'Prototype', 'Tooling', 'MVP', 'Production'];
const STAGE_RADIUS: Record<Project['stage'], number> = {
  Research: 7,
  Prototype: 20,
  Tooling: 33,
  MVP: 43,
  Production: 49
};
// Rotate each ring's start angle so rings don't all line up on the same spokes.
const STAGE_OFFSET: Record<Project['stage'], number> = {
  Research: 0,
  Prototype: 0.35,
  Tooling: 0.7,
  MVP: 0.15,
  Production: 0.5
};

export function nodeStyle(project: Project, projects: Project[]) {
  const sameStage = projects.filter((p) => p.stage === project.stage);
  const posInStage = sameStage.findIndex((p) => p.id === project.id);
  const angle =
    (posInStage / Math.max(sameStage.length, 1)) * 2 * Math.PI -
    Math.PI / 2 +
    STAGE_OFFSET[project.stage] * Math.PI;
  const radius = STAGE_RADIUS[project.stage];
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * 0.9 * Math.sin(angle);
  return {
    left: `${x}%`,
    top: `${y}%`
  };
}

export function RoadmapConstellation({ projects, activeStage, onSelectProject }: RoadmapConstellationProps) {
  const ordered = [...projects].sort((a, b) => STAGE_ORDER.indexOf(a.stage) - STAGE_ORDER.indexOf(b.stage));

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
        {ordered.map((project) => (
          <button
            className="project-node"
            style={nodeStyle(project, ordered)}
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
