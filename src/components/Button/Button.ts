export class Button {
    private element: HTMLButtonElement;

    constructor(options: {
        text: string;
        variant?: 'primary' | 'secondary' | 'success' | 'danger';
        size?: 'sm' | 'md' | 'lg';
        onClick?: () => void;
    }) {
        this.element = document.createElement('button');
        this.element.textContent = options.text;
        this.element.className = this.getClassNames(options);
        
        if (options.onClick) {
            this.element.addEventListener('click', options.onClick);
        }

        // Add ripple effect animation
        this.element.addEventListener('click', this.createRipple);
    }

    private getClassNames(options: any): string {
        const baseClasses = 'nerdle-btn relative overflow-hidden transition-all duration-200';
        const variantClasses : Record<string, string> = {
            primary: 'bg-primary text-white hover:bg-primary-dark',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            success: 'bg-green-500 text-white hover:bg-green-600',
            danger: 'bg-red-500 text-white hover:bg-red-600'
        };
        const sizeClasses : Record<string, string> = {
            sm: 'px-3 py-1 text-sm',
            md: 'px-4 py-2',
            lg: 'px-6 py-3 text-lg'
        };

        return `${baseClasses} ${variantClasses[options.variant || 'primary']} ${sizeClasses[options.size || 'md']}`;
    }

    private createRipple(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.className = 'nerdle-ripple';

        button.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    }

    render(): HTMLButtonElement {
        return this.element;
    }
} 