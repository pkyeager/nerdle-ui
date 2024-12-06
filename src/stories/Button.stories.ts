import { Button } from '../components/Button/Button';

export default {
    title: 'Components/Button',
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

export const Primary = {
    render: (args: any) => {
        const button = new Button({
            text: args.text || 'Click me',
            variant: args.variant,
            size: args.size
        });
        return button.render();
    }
}; 