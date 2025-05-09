# PrimeNg

This project was created with Angular CLI version 19.2.11.

## Project Setup

1. Create new Angular project (https://angular.dev/tools/cli/setup-local)
```sh
# create new angular project, to see what each flag does, run: ng new --help
ng new prime-ng --style css --ssr false --minimal --strict --package-manager bun --skip-install
```

2. Add PrimeNG (https://primeng.org/installation)
```sh
cd prime-ng
bun add primeng @primeng/themes
# configure PrimeNG according to the docs (in your app.config.ts)
```

3. Add TailwindCSS (https://tailwindcss.com/docs/installation/framework-guides/angular)
   - Tailwind is not required, but it works nicely with PrimeNG and is recommended.
```sh
# install tailwind
bun install tailwindcss @tailwindcss/postcss postcss
# configure postcss
echo '{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}' > .postcssrc.json
# import tailwind in styles.css
sed -i '1i\@import "tailwindcss";' ./src/styles.css
```
