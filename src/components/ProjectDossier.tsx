import type { Project } from '../data/projects';

interface ProjectDossierProps {
  project: Project;
  relatedProjects: Project[];
  onClose: () => void;
}

export function ProjectDossier({ project, relatedProjects, onClose }: ProjectDossierProps) {
  return (
    <div className="modal-backdrop" role="presentation">
      <section className="dossier-modal" role="dialog" aria-modal="true" aria-label={`${project.name} dossier`}>
        <button className="modal-close" type="button" aria-label="Close dossier" onClick={onClose}>
          Close
        </button>
        <p className="eyebrow">{project.domain}</p>
        <h2>{project.name}</h2>
        <p className="dossier-description">{project.description}</p>
        <dl className="dossier-facts">
          <div>
            <dt>Stage</dt>
            <dd>{project.stage}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
        <div className="stack-list dossier-stack">
          {project.stack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
        <div className="dossier-links">
          {project.demoUrl && (
            <a className="button primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              {project.demoLabel ?? 'Open demo'}
            </a>
          )}
          {project.repoUrl ? (
            <a className="button ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View source
            </a>
          ) : (
            <span className="not-public">Not published as a standalone repo yet</span>
          )}
        </div>
        <div className="related-block">
          <h3>Related projects</h3>
          {relatedProjects.length > 0 ? (
            <ul>
              {relatedProjects.map((related) => (
                <li key={related.id}>{related.name}</li>
              ))}
            </ul>
          ) : (
            <p>No close related projects in the confirmed map yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
