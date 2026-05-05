# Agent Instructions

## Project Shape

- Single Angular app named `landing-angular`; package manager is `pnpm@10.18.1`.
- App uses standalone components only; do not introduce `NgModule` scaffolding.
- Runtime entrypoint is `src/main.ts`, app-wide providers are in `src/app/app.config.ts`, and routes live in `src/app/app.routes.ts`.
- Keep page-level compositions in `src/app/pages`, landing sections in `src/app/sections`, and reusable UI pieces in `src/app/components`.

## Commands

- Install dependencies with `pnpm install`.
- Start dev server with `pnpm start` (`ng serve`, development config by default).
- Production build is `pnpm build` (`ng build`, production config by default).
- Watch build is `pnpm run watch`.
- Tests run with `pnpm test`; Angular is configured to use the `@angular/build:unit-test` builder with Vitest globals from `tsconfig.spec.json`.
- There is no configured lint script or CI workflow in this repo.

## Tooling Constraints

- TypeScript is strict: `strict`, `noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, and Angular `strictTemplates` are enabled.
- Tailwind CSS v4 is imported directly from `src/styles.css`; there is no `tailwind.config.*` file.
- Global design tokens are defined in the `@theme` block in `src/styles.css`; prefer extending those tokens over hard-coding a new visual system.
- Prettier config uses `printWidth: 100`, `singleQuote: true`, and the Angular parser for `*.html`.

## Angular Conventions In Use

- Components use separate `templateUrl`/`styleUrl` files unless they are template-only reusable pieces.
- Existing reusable components use Angular signal inputs via `input()`/`input.required()`; follow that pattern for new component inputs.
- Routing titles are set directly in `src/app/app.routes.ts`.
- The root template is only `<router-outlet></router-outlet>`; route pages own layout composition.

## Product/UI Context

- This is a Spanish-language immigration services landing site for NYC; preserve Spanish content and legal-service tone unless asked otherwise.
- Existing palette and typography come from `src/styles.css`: navy primary, red secondary, gold highlight, `EB Garamond` headlines, `Lato` body, `Public Sans` labels.
