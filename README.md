# Nerdle UI

Why use external libraries when you can build your own? 🚀 🚀 🚀 Yippee, this is a lot of work.

A modern, lightweight UI component library built with TypeScript and Tailwind CSS. Originally created for the Nerdle game project, this library provides clean, animated components for any web application.

## Features

- 🎨 Modern, clean design
- 🌊 Smooth animations and transitions
- 📱 Fully responsive components
- 🔧 Highly customizable
- ⚡ Lightweight with zero dependencies
- 🎯 TypeScript support

## Quick Start

1. Install the package:

```bash
npm install @pkyeager/nerdle-ui
```

2. Import and use components:

```typescript
import { Button } from '@pkyeager/nerdle-ui';

// Create a button with ripple effect
const button = new Button({
    text: 'Click me',
    variant: 'primary',
    onClick: () => console.log('Button clicked!')
});

document.body.appendChild(button.render());
```

## Available Components

| Component | Status | Description |
|-----------|--------|-------------|
| Button | ✅ | Interactive button with ripple effect |
| Input | 🚧 | Text input with validation |
| Card | 🚧 | Container for content |
| Modal | 🚧 | Popup dialog |
| Toast | 🚧 | Notification messages |
| Spinner | 🚧 | Loading indicator |
| Game Grid | 🚧 | Grid for game layout |
| Virtual Keyboard | 🚧 | On-screen keyboard |

✅ Ready  
🚧 In Development

## Documentation

Check out our [interactive documentation](https://pkyeager.github.io/nerdle-ui) to see live examples and usage guides.

## Contributing

Interested in contributing? Check out our [Contributing Guide](CONTRIBUTING.md) for setup instructions and development guidelines.

## License

MIT © Phongsakon Mark Konrad

---

<p align="center">Made with ❤️ for the Nerdle project</p>