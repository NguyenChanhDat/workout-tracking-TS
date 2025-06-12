# Architecture Overview

## High-Level Design

This project follows Clean Architecture.

### Directory Structure

```txt
├── src/
│ ├── application/
│ │ ├── dto/
│ │ ├── interfaces/
│ │ ├── services/
│ │ └── use-cases/
│ ├── domain/
│ │ ├── entities/
│ │ ├── repositories/
│ │ └── value-objects/
│ ├── index.ts
│ ├── infra/
│ │ ├── databases/
│ │ └── locator/
│ ├── presentation/
│ │ ├── bootstrap/
│ │ └── rest/
│ └── shared/
│ └── constant/
```
