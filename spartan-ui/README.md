# Spartan UI Example

This project was created with Angular CLI version 19.2.11.

- Spartan UI docs: https://www.spartan.ng/documentation/installation

## Project Setup

1. Create new Angular project (https://angular.dev/tools/cli/setup-local)
```sh
# create new angular project, to see what each flag does, run: ng new --help
ng new spartan-ui --style css --ssr false --minimal --strict --package-manager bun --skip-install
```

2. Add TailwindCSS (https://tailwindcss.com/docs/installation/framework-guides/angular)
```sh
cd spartan-ui
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

3. Add Spartan UI
```sh
# install spartan-ui and angular cdk
bun i -D @spartan-ng/cli
bun i @angular/cdk
# import spartan css preset
sed -i '/@import "tailwindcss";/a\@import "@spartan-ng/brain/hlm-tailwind-preset.css";' ./src/styles.css
# add css variables, options used: spartan-ui, orange, 0.5, ., .
ng g @spartan-ng/cli:ui-theme
# optional: add input component
ng g @spartan-ng/cli:ui input
```

4. Additional packages
```sh
# Angular icons (Spartan default): https://ng-icons.github.io/ng-icons/#/getting-started
bun i @ng-icons/core @ng-icons/lucide
# Lucide icons (to test): https://lucide.dev/guide/packages/lucide-angular
bun i lucide-angular
```
