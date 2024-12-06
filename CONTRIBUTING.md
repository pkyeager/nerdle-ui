# Contributing to Nerdle UI

Thank you for your interest in contributing to Nerdle UI! This document will guide you through the development setup and workflow.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/nerdle-ui.git
cd nerdle-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start development environment:
```bash
npm run dev        # TypeScript compiler in watch mode
npm run storybook  # Start Storybook development server
```

## Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and test them:
```bash
npm test          # Run all tests
npm test:watch    # Run tests in watch mode
```

3. Build and verify:
```bash
npm run build           # Build the library
npm run build-storybook # Build documentation
```

4. Commit your changes:
```bash
git add .
git commit -m "feat: add amazing feature"
```

5. Push and create a pull request:
```bash
git push origin feature/your-feature-name
```

## Publishing

### GitHub Pages

1. Add deploy script to package.json:
```json
{
  "scripts": {
    "deploy-storybook": "storybook build && gh-pages -d storybook-static"
  }
}
```

2. Deploy:
```bash
npm install --save-dev gh-pages
npm run deploy-storybook
```

### NPM Package (Optional)

1. Update package.json with your npm organization
2. Login to npm: `npm login`
3. Publish: `npm publish --access public`

## Project Structure

```
nerdle-ui/
├── src/
│   ├── components/     # UI components
│   ├── styles/        # Component styles
│   ├── utils/         # Helper functions
│   └── stories/       # Storybook stories
├── tests/             # Test files
└── docs/              # Documentation
```

## Code Style

- Use TypeScript for all components, perform type acrobatics if necessary
- Follow the existing component pattern
- Add tests for new features (if possible)
- Document your components with Storybook
- Use semantic commit messages (if your brain works that way)

## Need Help?

I can't help you. I can barely help myself.