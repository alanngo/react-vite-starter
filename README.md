# React + TypeScript + Vite (Starter)

## Scripts

```json
  "scripts": {
    // stock
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",

    //custom
    "test": "vitest", // runs all unit tests in src/test directory
    "clean": "rm -rf node_modules package-lock.json && npm install", // clean install
    "gc": "bash scripts/gc.sh $1" // creates component in src/components directory
  }
```

## Vite Components (using stock CSS)
Located in ``src/components/vite``

- Anchor
- Button
- Container
- Text