import { Button } from '../components/Button/Button';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
};

const Template = (args: any) => {
  const button = new Button({
    text: args.text || 'Click me',
    variant: args.variant || 'primary',
    size: args.size || 'md',
    onClick: () => console.log('Button clicked!')
  });
  return button.render();
};

export const Primary = {
  render: Template,
  args: {
    text: 'Primary Button',
    variant: 'primary'
  }
};

export const Secondary = {
  render: Template,
  args: {
    text: 'Secondary Button',
    variant: 'secondary'
  }
};

export const Small = {
  render: Template,
  args: {
    text: 'Small Button',
    size: 'sm'
  }
}; 