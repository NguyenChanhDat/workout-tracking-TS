# Node.js Configuration

This document explains the fields set in the `package.json` file.

## Basic Information

- `"name": "workout-tracking-BE"`
  - The package name as used in npm registry.
- `"version": "0.1.0"`
  - Current version follow semantic versioning (SemVer).
    This is intentionally set to `0.1.0` (the default value is `1.0.0`).
    - Start with `0.1.0` if:
      - The project is still in early development.
      - The API is unstable and may change frequently.
      - You don't consider the project ready for general use.
    - Start with `1.0.0` if:
      - The project is stable and functional.
      - The API is well-defined and ready for production use.
      - You want to indicate confidence in its usability.
- `"description": "<value>"`
  - Brief description of the package.
    Remove this if your package/project is private and/or not published to npm registry.
- `"main": "./dist/main.js"`
  - The entry point to your program.

## Scripts

- `npm run build`: Compiles TypeScript to JavaScript.
  Output files will be in the `dist` folder.
- `npm run setup`: Setup the application (Contains run docker images, migration db, seed data).
- `npm run dev`: Run application after has been setup.
  Entry point is `src/index.ts`.
- `npm run typecheck`: Run typecheck for project
  `__tests__` and `src` folder.
- `npm run unit-test`: Run all unit tests`.

## Engine Requirements

```json
"engines": {
  "node": ">=22"
}
```

The `engines` field specifies that the package requires Node.js version 22 or higher
to run correctly.
This is also reflected in the `.nvmrc` file.

**Note:** When we upgrade Node.js to a newer version,
both of these entries need to be updated accordingly.

## Package Metadata

- `"keywords": "<value>"`
  - Keywords for npm search.
  Remove this if your package/project is private and/or not published to NPM registry.
- `"author": "Dat NguyenChanh"`
  - Package author.
- `"license": "ISC"`
  - License type.

## Dependencies

### Runtime Dependencies

- `swc`: SWC is an extensible Rust-based platform for the next generation of fast developer tools. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers
  Developed and maintained by Jetbrains.
- `reflect-metadata`: Helps perform advanced tasks in decorators by
  collecting metadata about classes, properties, methods and parameters.
  Developed and maintained by rbuckton.
  **Note**: The APIs are no longer being considered for standardization.
  However, this package will continue to support
  TypeScript's legacy `--experimentalDecorators` option.

### Development Dependencies

- `"jest/globals"`: Jest's APIs that are compatible with TypeScript.
  Developed and maintained by Facebook.
- `@types/node`: Type definitions for Node.js.
  Developed and maintained by DefinitelyTypes.
- `jest`: JavaScript testing framework.
  Developed and maintained by Facebook.
- `ts-jest`: A Jest transformer with source map support that
  lets you use Jest to test projects written in TypeScript.
  Developed and maintained by kulshekhar.
- `ts-node-dev`: Automatically restarts the node process when
  a file is modified.
  Developed and maintained by whitecolor.
- `typeorm`: TypeORM provides a beautiful, simple API for interacting with your database that takes full advantage of TypeScript's type system. Choose between DataMapper and ActiveRecord patterns - both are fully supported.
  Developed and maintained by Microsoft.
- `typescript`: Language for application-scale JavaScript.
  Developed and maintained by Microsoft.