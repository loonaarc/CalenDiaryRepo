# calendiary

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Recommended Vue project strcture

- src/
    -  assets/                   # Static assets like images(, fonts), and styles
        - images/                # Images used in the app
        - styles/                # Global styles (e.g., CSS/SCSS files)
    -  components/               # Reusable Vue components
        - common/                # Generic components (e.g., buttons, modals)
        - layout/                # Layout components (e.g., headers, footers)
    -  views/                    # Page-level Vue components
        - Home.vue               # Example: Home page
        - About.vue              # Example: About page
    -  services/                 # API clients (e.g., axios/fetch for AJAX)
        - api.js                 # Example: Centralized API calls
    -  router/                   # Route configuration
        - index.js               # Vue Router setup
    -  store/                    # State management (e.g., Vuex or Pinia)
        - index.js               # Vuex/Pinia store setup
    -  tests/                    # Unit and end-to-end tests
        - unit/                  # Unit tests for components
        - e2e/                   # End-to-end tests
  - App.vue                   # Root Vue component
  - main.js                   # Entry point for the app
  - shims-vue.d.ts            # TypeScript shims (if using TypeScript)
- public/                     # Static assets served directly
  - favicon.ico              # Favicon for the app
  - index.html               # HTML template for the app

  ### Tools
  - Chrome Extension to use Vue console in Developer Tools: https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd