## Installation

Follow these steps to set up the project on your local machine:

1. **NodeJS and Angular:**

   - Install NodeJS (version 16 or higher).
   - Install the Angular version (16.2.12).
   - Application's current Angular version is 16 to ensure maximum compatibility

2. **Clone the Repository:**

   ```bash
   git clone  git@git.cied.in:fairfood/trace-v2/frontend/navigate.git
   ```

3. **Configure the environment:**

   - Add these configurations in `src/environment.ts`
   - clientId: '<YOUR_CLIENT_ID>' (Receive from server)
   - clientSecret: '<YOUR_CLIENT_SECRECT>' (Receive from server)
   - esriConfig_apiKey: '<ESRI_CONFIG_API_KEY>' (https://www.arcgis.com/index.html)
   - webMap_portalID: '<WEB_MAP_PORTAL_ID>' (https://www.arcgis.com/index.html)
   - authenticateUrl: '<AUTHENTICATION_URL>' (SSO login url)
   - authUrl: '<AUTH_URL>' (SSO login app url)
   - baseUrl: '<BACKEND_BASE_URL>' (Backend base url)
   - ssoAPIUrl: '<API_URL>' (Frontend Url)

4. **Navigate to the Cloned Directory:**

   ```bash
   cd navigate
   ```

5. **Install Dependencies:**
   ```bash
   npm install
   ```

## Getting Started Locally

To run the application on your local machine:

1. **Execute Angular CLI:**

   ```bash
   ng serve
   ```

2. **Connect to API Server:**
   - By default, the application connects to the dev API server.
   - Change the API server in `src/environment.ts` if needed.

## Environments

The Fairfood Dashboard supports four environments:

1. **Dev:** Used for development and QA testing.
2. **Stage:** Application verification server.
3. **Prod:** Live production application.

## Build for Production

To build the application for production:

```bash
ng build --prod --c=${production/staging/dev}
```

## Testing

Execute unit tests via Karma:

```bash
ng test
```

## External Libraries Used

- [@arcgis/core](https://www.npmjs.com/package/@arcgis/core)
- [@auth0/angular-jwt](https://www.npmjs.com/package/@auth0/angular-jwt)
- [chart.js](https://www.chartjs.org/)
- [ng2-charts](https://www.npmjs.com/package/ng2-charts)
- [html2canvas](https://www.npmjs.com/package/html2canvas)
- [jspdf](https://www.npmjs.com/package/jspdf)

This project is open source and welcomes contributions! Feel free to explore, modify, and enhance the Fairfood Navigate. If you have any questions or feedback, please reach out to our community.
