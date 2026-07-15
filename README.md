# ASHC_GoA_POC

Government of Alberta social housing proof of concept.

## Included

- React 19
- TypeScript
- Vite
- GoA React components
- GoA Web Components
- GoA shared component utilities
- GoA design tokens
- React Router
- Axios
- Landing page
- Three-question assessment
- Progress indicator
- Required validation
- Browser storage
- Mock results

## Run

`powershell
cd web
npm install
npm run dev
`

## GoA setup already included

The generator adds:

`	ypescript
import "@abgov/web-components";
`

It also imports:

`css
@import "@abgov/web-components/index.css";
@import "@abgov/design-tokens/dist/tokens.css";
`

Ionicons are included in web/index.html.