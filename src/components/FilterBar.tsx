import type { ProjectDomain, ProjectStage } from '../data/projects';
import type { ProjectFilter } from '../lib/projectFilters';

interface FilterBarProps {
  domains: ProjectDomain[];
  stages: ProjectStage[];
  stacks: string[];
  filter: ProjectFilter;
  onChange: (nextFilter: Partial<ProjectFilter>) => void;
  onReset: () => void;
}

export function FilterBar({ domains, stages, stacks, filter, onChange, onReset }: FilterBarProps) {
  return (
    <div className="filter-panel">
      <div className="filter-group" aria-label="Domain filters">
        <span>Domain</span>
        <button className={filter.domain === 'All' ? 'active' : ''} type="button" onClick={() => onChange({ domain: 'All' })}>
          All
        </button>
        {domains.map((domain) => (
          <button
            className={filter.domain === domain ? 'active' : ''}
            key={domain}
            type="button"
            aria-label={`Filter domain ${domain}`}
            onClick={() => onChange({ domain })}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="filter-group timeline-control" aria-label="Stage timeline">
        <span>Timeline</span>
        <button className={filter.stage === 'All' ? 'active' : ''} type="button" onClick={() => onChange({ stage: 'All' })}>
          All
        </button>
        {stages.map((stage) => (
          <button
            className={filter.stage === stage ? 'active' : ''}
            key={stage}
            type="button"
            aria-label={`Filter stage ${stage}`}
            onClick={() => onChange({ stage })}
          >
            {stage}
          </button>
        ))}
      </div>

      <label className="stack-select">
        <span>Stack</span>
        <select
          aria-label="Filter stack"
          value={filter.stack ?? 'All'}
          onChange={(event) => onChange({ stack: event.target.value })}
        >
          <option value="All">All stacks</option>
          {stacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
      </label>

      <button className="button reset" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
