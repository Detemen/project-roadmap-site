import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Project roadmap app interactions', () => {
  it('filters the visible grid by project stage', async () => {
    const user = userEvent.setup();
    render(<App />);

    const confirmedGrid = screen.getByRole('region', { name: 'Confirmed project grid' });
    expect(within(confirmedGrid).getByText('SwiftClip')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Filter stage MVP' }));

    expect(within(confirmedGrid).queryByText('SwiftClip')).not.toBeInTheDocument();
    expect(within(confirmedGrid).getByText('polymarket-weather-bot')).toBeInTheDocument();
    expect(screen.getByTestId('visible-project-count')).toHaveTextContent('10');
  });

  it('opens and closes a project dossier from a roadmap object', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Open dossier for SwiftClip' }));

    const dialog = screen.getByRole('dialog', { name: 'SwiftClip dossier' });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('Reusable video template product')).toBeInTheDocument();
    expect(within(dialog).getByText('Related projects')).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: 'Close dossier' }));

    expect(screen.queryByRole('dialog', { name: 'SwiftClip dossier' })).not.toBeInTheDocument();
  });

  it('renders lab references separately from confirmed projects', () => {
    render(<App />);

    const labs = screen.getByRole('region', { name: 'Labs and references' });
    expect(within(labs).getByText('hermes-agent')).toBeInTheDocument();
    expect(within(labs).getAllByText('Needs label').length).toBeGreaterThan(0);

    const confirmedGrid = screen.getByRole('region', { name: 'Confirmed project grid' });
    expect(within(confirmedGrid).queryByText('hermes-agent')).not.toBeInTheDocument();
  });
});
