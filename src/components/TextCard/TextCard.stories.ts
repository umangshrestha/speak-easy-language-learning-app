import type { Meta, StoryObj } from '@storybook/react';
import TextCard from './index';

const meta = {
  title: 'TextCard',
  component: TextCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    word: {
      control: 'text',
    },
    translation: {
      control: 'text',
    },
    phoenetic: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    word: 'Hello',
    translation: 'Hola',
    phoenetic: 'hola',
  },
};
