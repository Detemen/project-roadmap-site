import type { Project } from '../data/projects';

interface LabsReferencesProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function LabsReferences({ projects, onSelectProject }: LabsReferencesProps) {
  return (
    <section className="labs-section" id="labs" aria-label="Labs and references">
      <div className="section-heading">
        <p className="eyebrow">Labs / References</p>
        <h2>Visible, but not mixed with confirmed products.</h2>
        <p>These folders need ownership, fork status, or clearer positioning before they move into the main atlas.</p>
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
