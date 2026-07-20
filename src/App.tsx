import { useMemo, useState } from 'react';
import { projects, type Project, type ProjectDomain, type ProjectStage } from './data/projects';
import {
  getFilteredProjects,
  getLabProjects,
  getProjectStats,
  getRelatedProjects,
  getUniqueDomains,
  getUniqueStacks,
  type ProjectFilter
} from './lib/projectFilters';
import { FilterBar } from './components/FilterBar';
import { LabsReferences } from './components/LabsReferences';
import { ProjectAtlasHero } from './components/ProjectAtlasHero';
import { ProjectDossier } from './components/ProjectDossier';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectStats } from './components/ProjectStats';
import { RoadmapConstellation } from './components/RoadmapConstellation';
import './styles.css';

const stages: ProjectStage[] = ['Research', 'Prototype', 'MVP', 'Production', 'Tooling'];

function App() {
  const [filter, setFilter] = useState<ProjectFilter>({ domain: 'All', stage: 'All', stack: 'All' });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const visibleProjects = useMemo(() => getFilteredProjects(projects, filter), [filter]);
  const stats = useMemo(() => getProjectStats(visibleProjects, projects), [visibleProjects]);
  const labs = useMemo(() => getLabProjects(projects), []);
  const domains = useMemo(() => getUniqueDomains(projects), []);
  const stacks = useMemo(() => getUniqueStacks(projects), []);
  const selectedProject = selectedProjectId
    ? projects.find((project) => project.id === selectedProjectId) ?? null
    : null;
  const relatedProjects = selectedProject ? getRelatedProjects(projects, selectedProject.id) : [];

  const updateFilter = (nextFilter: Partial<ProjectFilter>) => {
    setFilter((current) => ({ ...current, ...nextFilter }));
  };

  const resetFilters = () => {
    setFilter({ domain: 'All', stage: 'All', stack: 'All' });
  };

  const openProject = (project: Project) => {
    setSelectedProjectId(project.id);
  };

  return (
    <main className="app-shell">
      <ProjectAtlasHero stats={stats} onExplore={() => document.getElementById('roadmap')?.scrollIntoView()} />

      <section className="control-band" id="roadmap" aria-label="Roadmap controls">
        <div>
          <p className="eyebrow">Live system layer</p>
          <h2>Filter the atlas by domain, maturity and stack.</h2>
        </div>
        <FilterBar
          domains={domains}
          stages={stages}
          stacks={stacks}
          filter={filter}
          onChange={updateFilter}
          onReset={resetFilters}
        />
      </section>

      <ProjectStats stats={stats} />

      <RoadmapConstellation
        projects={visibleProjects}
        activeStage={filter.stage ?? 'All'}
        onSelectProject={openProject}
      />

      <ProjectGrid projects={visibleProjects} onSelectProject={openProject} onReset={resetFilters} />

      {labs.length > 0 ? <LabsReferences projects={labs} onSelectProject={openProject} /> : null}

      <section className="closing-band" aria-label="Contact">
        <p className="eyebrow">Status</p>
        <h2>Every system here is public.</h2>
        <p>Each entry links its real source and, where one exists, a live demo — not just a description.</p>
      </section>

      {selectedProject ? (
        <ProjectDossier
          project={selectedProject}
          relatedProjects={relatedProjects}
          onClose={() => setSelectedProjectId(null)}
        />
      ) : null}
    </main>
  );
}

export default App;
