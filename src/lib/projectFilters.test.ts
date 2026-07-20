import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import {
  getFilteredProjects,
  getProjectStats,
  getRelatedProjects,
  type ProjectFilter
} from './projectFilters';

describe('project roadmap data utilities', () => {
  it('keeps confirmed projects separate from lab references', () => {
    const confirmed = projects.filter((project) => project.kind === 'confirmed');
    const labs = projects.filter((project) => project.kind === 'lab');

    expect(confirmed.length).toBe(5);
    expect(labs.length).toBe(11);
    expect(confirmed.some((project) => project.name === 'arduino')).toBe(false);
    expect(labs.some((project) => project.name === 'arduino')).toBe(true);
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
    const visibleProjects = getFilteredProjects(projects, { domain: 'Games' });
    const stats = getProjectStats(visibleProjects, projects);

    expect(stats.visible).toBe(visibleProjects.length);
    expect(stats.confirmed).toBe(5);
    expect(stats.labs).toBe(11);
    expect(stats.domains).toBe(4);
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
