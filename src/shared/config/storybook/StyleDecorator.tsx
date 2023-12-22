import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

export const StyleDecorator = (story: () => Story) => story();
