import type { ProjectStats as ProjectStatsShape } from '../lib/projectFilters';

interface ProjectStatsProps {
  stats: ProjectStatsShape;
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <section className="stats-grid" aria-label="Live project counters">
      <article className="stat-card">
        <strong data-testid="visible-project-count">{stats.visible}</strong>
        <span>visible now</span>
      </article>
      <article className="stat-card">
        <strong>{stats.confirmed}</strong>
        <span>confirmed total</span>
      </article>
      <article className="stat-card">
        <strong>{stats.productionReady}</strong>
        <span>production-ready</span>
      </article>
      <article className="stat-card">
        <strong>{stats.labs}</strong>
        <span>labs / references</span>
      </article>
    </section>
  );
}
