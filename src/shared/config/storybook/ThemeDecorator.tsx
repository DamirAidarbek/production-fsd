import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
