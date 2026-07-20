import type { Project } from '../data/projects';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onReset: () => void;
}

export function ProjectGrid({ projects, onSelectProject, onReset }: ProjectGridProps) {
  return (
    <section className="project-grid-section" aria-label="Confirmed project grid">
      <div className="section-heading">
        <p className="eyebrow">Confirmed systems</p>
        <h2>Project dossiers</h2>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <p>No projects match this combination.</p>
          <button className="button ghost" type="button" onClick={onReset}>
            Reset filters
          </button>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="card-meta">
                <span>{project.domain}</span>
                <span>{project.stage}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="stack-list" aria-label={`${project.name} stack`}>
                {project.stack.slice(0, 4).map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
              <div className="card-links">
                {project.demoUrl && (
                  <a
                    className="card-link primary"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {project.demoLabel ?? 'Demo'} ↗
                  </a>
                )}
                <button className="card-action" type="button" onClick={() => onSelectProject(project)}>
                  Open dossier
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
