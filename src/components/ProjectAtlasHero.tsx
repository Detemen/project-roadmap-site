import type { ProjectStats as ProjectStatsShape } from '../lib/projectFilters';

interface ProjectAtlasHeroProps {
  stats: ProjectStatsShape;
  onExplore: () => void;
}

export function ProjectAtlasHero({ stats, onExplore }: ProjectAtlasHeroProps) {
  return (
    <section className="hero-section" aria-label="Project atlas hero">
      <div className="hero-copy">
        <p className="eyebrow">Project Atlas</p>
        <h1>A living map of bots, games, markets and media systems.</h1>
        <p className="hero-subtitle">
          Published projects have a live demo and source. Labs are real, working builds that just haven't
          shipped as standalone repos yet.
        </p>
        <div className="hero-actions">
          <button className="button primary" type="button" onClick={onExplore}>
            Explore roadmap
          </button>
          <a className="button ghost" href="#labs">
            View labs
          </a>
        </div>
      </div>

      <div className="hero-orbit" aria-hidden="true">
        <div className="orbit-line" />
        <div className="orbit-node node-video">Video</div>
        <div className="orbit-node node-ai">AI</div>
        <div className="orbit-node node-trading">Trading</div>
        <div className="orbit-node node-social">Automation</div>
      </div>

      <div className="hero-metrics" aria-label="Roadmap summary">
        <div>
          <strong>{stats.confirmed}</strong>
          <span>confirmed projects</span>
        </div>
        <div>
          <strong>{stats.domains}</strong>
          <span>core domains</span>
        </div>
        <div>
          <strong>{stats.labs}</strong>
          <span>lab references</span>
        </div>
      </div>
    </section>
  );
}
