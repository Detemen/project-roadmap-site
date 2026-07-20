import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import {
  getFilteredProjects,
  getProjectStats,
  getRelatedProjects,
  type ProjectFilter
} from './projectFilters';

describe('project roadmap data utilities', () => {
  it('every project is confirmed and links a real repo', () => {
    expect(projects.length).toBe(15);
    expect(projects.every((project) => project.kind === 'confirmed')).toBe(true);
    expect(projects.every((project) => Boolean(project.repoUrl))).toBe(true);
  });

  it('filters confirmed projects by domain, stage, and stack', () => {
    const filter: ProjectFilter = {
      domain: 'Games',
      stage: 'MVP',
      stack: 'React'
    };

    const result = getFilteredProjects(projects, filter);

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((project) => project.kind === 'confirmed')).toBe(true);
    expect(result.every((project) => project.domain === 'Games')).toBe(true);
    expect(result.every((project) => project.stage === 'MVP')).toBe(true);
    expect(result.every((project) => project.stack.includes('React'))).toBe(true);
  });

  it('calculates live stats from filtered data', () => {
    const visibleProjects = getFilteredProjects(projects, { domain: 'Trading' });
    const stats = getProjectStats(visibleProjects, projects);

    expect(stats.visible).toBe(visibleProjects.length);
    expect(stats.confirmed).toBe(15);
    expect(stats.labs).toBe(0);
    expect(stats.domains).toBe(7);
    expect(stats.productionReady).toBeGreaterThan(0);
  });

  it('finds related projects without returning the selected project', () => {
    const selected = projects.find((project) => project.name === 'Marble Race');

    expect(selected).toBeDefined();

    const related = getRelatedProjects(projects, selected!.id);

    expect(related.length).toBeGreaterThan(0);
    expect(related.some((project) => project.id === selected!.id)).toBe(false);
    expect(
      related.every(
        (project) =>
          project.domain === selected!.domain ||
          project.stack.some((item) => selected!.stack.includes(item))
      )
    ).toBe(true);
  });
});
