import type { ProjectStats as ProjectStatsShape } from '../lib/projectFilters';

interface ProjectAtlasHeroProps {
  stats: ProjectStatsShape;
  onExplore: () => void;
}

export function ProjectAtlasHero({ stats, onExplore }: ProjectAtlasHeroProps) {
  return (
    <section className="hero-section" aria-label="Project atlas hero">
      <div className="hero-copy">
        <p className="eyebrow">Liquid Luxury Roadmap</p>
        <h1>A living map of products, agents, markets and media systems.</h1>
        <p className="hero-subtitle">
          Confirmed projects become dynamic glass objects. Labs stay visible, but clearly separated until their
          ownership and role are labeled.
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
        <div className="orbit-node node-social">Social</div>
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
