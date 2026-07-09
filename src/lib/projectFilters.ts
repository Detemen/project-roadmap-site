import type { Project, ProjectDomain, ProjectStage } from '../data/projects';

export interface ProjectFilter {
  domain?: ProjectDomain | 'All';
  stage?: ProjectStage | 'All';
  stack?: string | 'All';
}

export interface ProjectStats {
  visible: number;
  confirmed: number;
  labs: number;
  domains: number;
  productionReady: number;
  research: number;
}

export function getConfirmedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.kind === 'confirmed');
}

export function getLabProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.kind === 'lab');
}

export function getFilteredProjects(projects: Project[], filter: ProjectFilter): Project[] {
  return getConfirmedProjects(projects).filter((project) => {
    const matchesDomain = !filter.domain || filter.domain === 'All' || project.domain === filter.domain;
    const matchesStage = !filter.stage || filter.stage === 'All' || project.stage === filter.stage;
    const matchesStack = !filter.stack || filter.stack === 'All' || project.stack.includes(filter.stack);

    return matchesDomain && matchesStage && matchesStack;
  });
}

export function getProjectStats(visibleProjects: Project[], allProjects: Project[]): ProjectStats {
  const confirmed = getConfirmedProjects(allProjects);

  return {
    visible: visibleProjects.length,
    confirmed: confirmed.length,
    labs: getLabProjects(allProjects).length,
    domains: new Set(confirmed.map((project) => project.domain)).size,
    productionReady: confirmed.filter((project) => project.stage === 'Production').length,
    research: confirmed.filter((project) => project.stage === 'Research').length
  };
}

export function getRelatedProjects(projects: Project[], projectId: string, limit = 4): Project[] {
  const selected = projects.find((project) => project.id === projectId);

  if (!selected) {
    return [];
  }

  return getConfirmedProjects(projects)
    .filter((project) => project.id !== selected.id)
    .filter(
      (project) =>
        project.domain === selected.domain ||
        project.stack.some((stackItem) => selected.stack.includes(stackItem))
    )
    .slice(0, limit);
}

export function getUniqueStacks(projects: Project[]): string[] {
  return [...new Set(getConfirmedProjects(projects).flatMap((project) => project.stack))].sort();
}

export function getUniqueDomains(projects: Project[]): ProjectDomain[] {
  return [...new Set(getConfirmedProjects(projects).map((project) => project.domain))].sort();
}
