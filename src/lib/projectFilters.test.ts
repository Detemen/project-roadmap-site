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

    expect(confirmed.length).toBeGreaterThanOrEqual(25);
    expect(labs.length).toBeGreaterThanOrEqual(5);
    expect(confirmed.some((project) => project.name === 'hermes-agent')).toBe(false);
    expect(labs.some((project) => project.name === 'hermes-agent')).toBe(true);
  });

  it('filters confirmed projects by domain, stage, and stack', () => {
    const filter: ProjectFilter = {
      domain: 'Trading',
      stage: 'MVP',
      stack: 'Python'
    };

    const result = getFilteredProjects(projects, filter);

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((project) => project.kind === 'confirmed')).toBe(true);
    expect(result.every((project) => project.domain === 'Trading')).toBe(true);
    expect(result.every((project) => project.stage === 'MVP')).toBe(true);
    expect(result.every((project) => project.stack.includes('Python'))).toBe(true);
  });

  it('calculates live stats from filtered data', () => {
    const visibleProjects = getFilteredProjects(projects, { domain: 'Video' });
    const stats = getProjectStats(visibleProjects, projects);

    expect(stats.visible).toBe(visibleProjects.length);
    expect(stats.confirmed).toBeGreaterThanOrEqual(25);
    expect(stats.labs).toBeGreaterThanOrEqual(5);
    expect(stats.domains).toBeGreaterThanOrEqual(5);
    expect(stats.productionReady).toBeGreaterThan(0);
  });

  it('finds related projects without returning the selected project', () => {
    const selected = projects.find((project) => project.name === 'SwiftClip');

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
