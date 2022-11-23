import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { intent: 'secondary', children: 'Secondary' };

export const Danger = Template.bind({});
Danger.args = { intent: 'danger', children: `Don't click me` };
