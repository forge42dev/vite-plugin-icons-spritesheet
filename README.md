# vite-plugin-icons-spritesheet
A Vite plugin to generate a spritesheet with icons from a directory, re-runs on every edit/delete/add to the directory that is being watched.

Optionally generates TypeScript types for the icon names that it outputs.

If you want to learn more about this approach and it's benefits 
check it out here:
https://www.jacobparis.com/content/svg-icons

## Installation
```bash
npm install -D vite-plugin-icons-spritesheet
```

## Usage
```javascript
// vite.config.js
import { iconSpritesheet } from 'vite-plugin-icons-spritesheet';

export default {
  plugins: [
     iconSpritesheet({
      // Defaults to false, should it generate TS types for you
      withTypes: true,
      // The path to the icon directory
      inputDir: "icons",
      // Output path for the generated spritesheet and types
      outputDir: "public/icons",
      // The name of the generated spritesheet, defaults to sprite.svg
      fileName: "icon.svg",
      // The cwd, defaults to process.cwd()
      cwd: process.cwd(),
    }),
  ],
};
```

Example component file:

```jsx
import { type SVGProps } from "react"
import spriteHref from "~/path/sprite.svg"
import type { IconName } from "~/path/types.ts"

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
}) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}
```

Component usage:

```jsx
<Icon name="plus" />
```