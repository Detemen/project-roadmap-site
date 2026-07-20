import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Project roadmap app interactions', () => {
  it('filters the visible grid by project stage', async () => {
    const user = userEvent.setup();
    render(<App />);

    const confirmedGrid = screen.getByRole('region', { name: 'Confirmed project grid' });
    expect(within(confirmedGrid).getByText('Marble Race')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Filter stage Production' }));

    expect(within(confirmedGrid).queryByText('Marble Race')).not.toBeInTheDocument();
    expect(within(confirmedGrid).getByText('CommyX Intel')).toBeInTheDocument();
    expect(screen.getByTestId('visible-project-count')).toHaveTextContent('3');
  });

  it('opens and closes a project dossier from a roadmap object', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Open dossier for Zombie Survivor' }));

    const dialog = screen.getByRole('dialog', { name: 'Zombie Survivor dossier' });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('Godot game prototype')).toBeInTheDocument();
    expect(within(dialog).getByText('Related projects')).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: 'Close dossier' }));

    expect(screen.queryByRole('dialog', { name: 'Zombie Survivor dossier' })).not.toBeInTheDocument();
  });

  it('renders lab references separately from confirmed projects', () => {
    render(<App />);

    const labs = screen.getByRole('region', { name: 'Labs and references' });
    expect(within(labs).getByText('expense-bot')).toBeInTheDocument();
    expect(within(labs).getByText('Personal finance bot')).toBeInTheDocument();

    const confirmedGrid = screen.getByRole('region', { name: 'Confirmed project grid' });
    expect(within(confirmedGrid).queryByText('expense-bot')).not.toBeInTheDocument();
  });
});
