# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `yarn build`
- Dev server: `yarn start`
- Test: `yarn test`
- Test single file: `yarn test --testPathPattern="path/to/file.test.tsx"`
- Lint: `yarn eslint .`
- Typecheck: `yarn tsc --noEmit`

## Code Guidelines
- **TypeScript**: Use strict typing with interfaces for props and state
- **React**: Use functional components with hooks (useState, useCallback)
- **Naming**: PascalCase for components; camelCase for variables/functions
- **Imports**: Group imports by external libs, project components, types, styles
- **State Management**: Use centralized hooks for shared state when possible
- **Error Handling**: Use try/catch for async operations; provide user feedback
- **Components**: Create focused components with clear props interfaces
- **Styling**: Use SCSS modules instead of styled-components with string constants