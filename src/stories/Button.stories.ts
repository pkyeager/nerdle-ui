import type { Meta, StoryObj } from '@storybook/html';
import { Button } from '../components/Button/Button';
import type { ButtonProps } from '../types/button';

const meta: Meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Button Component

A versatile button component with different variants and sizes.

### Features
- Multiple variants (primary, secondary, success, danger)
- Different sizes (sm, md, lg)
- Ripple effect animation
- Fully customizable
        `
      }
    }
  },
  argTypes: {
    text: { 
      control: 'text',
      description: 'Button text content'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Button style variant'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<ButtonProps>;

// Base template for stories
const Template = (args: ButtonProps) => {
  const button = new Button(args);
  return button.render();
};

export const Primary: Story = {
  render: () => Template({
    text: 'Primary Button',
    variant: 'primary',
    size: 'md'
  })
};

export const Secondary: Story = {
  render: () => Template({
    text: 'Secondary Button',
    variant: 'secondary',
    size: 'md'
  })
};

export const Success: Story = {
  render: () => Template({
    text: 'Success Button',
    variant: 'success',
    size: 'md'
  })
};

export const Danger: Story = {
  render: () => Template({
    text: 'Danger Button',
    variant: 'danger',
    size: 'md'
  })
};

export const Small: Story = {
  render: () => Template({
    text: 'Small Button',
    size: 'sm'
  })
};

export const Large: Story = {
  render: () => Template({
    text: 'Large Button',
    size: 'lg'
  })
};

// Show all variants together
export const AllVariants: Story = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'flex gap-4 flex-wrap';
    
    const variants: ButtonProps['variant'][] = ['primary', 'secondary', 'success', 'danger'];
    const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg'];
    
    variants.forEach(variant => {
      sizes.forEach(size => {
        const button = new Button({
          text: `${variant} ${size}`,
          variant,
          size
        });
        container.appendChild(button.render());
      });
    });
    
    return container;
  }
}; 