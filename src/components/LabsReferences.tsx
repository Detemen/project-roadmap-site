import type { Project } from '../data/projects';

interface LabsReferencesProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function LabsReferences({ projects, onSelectProject }: LabsReferencesProps) {
  return (
    <section className="labs-section" id="labs" aria-label="Labs and references">
      <div className="section-heading">
        <p className="eyebrow">Labs</p>
        <h2>Real builds, not yet published as their own repo.</h2>
        <p>Working code sitting locally — bots, trading experiments, small tools. No public link yet, but they're real.</p>
      </div>
      <div className="labs-wall">
        {projects.map((project) => (
          <article className="lab-card" key={project.id}>
            <div className="card-meta">
              <span>{project.stage}</span>
              <span>{project.role}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button className="card-action" type="button" onClick={() => onSelectProject(project)}>
              Inspect reference
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
