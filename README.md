# Veterinaria CRUD Frontend Documentation

## Project Overview
This is a React-based frontend application for a veterinary clinic management system. The application provides features for appointment scheduling, patient management, and user authentication.

## Technology Stack
- React 18.2.0
- React Router DOM 6.22.3
- Axios 1.6.8
- SweetAlert2 11.10.7
- Workbox (Service Worker implementation)
- React Icons 5.0.1

## Project Structure
```
frontend/
├── public/              # Static files
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # React components
│   │   ├── AgendarCita/        # Appointment scheduling
│   │   │   ├── AgendarCita.js
│   │   │   └── handleAgendarCita.js
│   │   ├── CancerlarCita/      # Appointment cancellation
│   │   ├── CitasAgendadas/     # View scheduled appointments
│   │   │   ├── CitasAgendadas.js
│   │   │   └── CitasAgendadas.css
│   │   ├── CrearFormulario/    # Form creation
│   │   │   ├── CrearFormulario.js
│   │   │   └── CrearFormulario.css
│   │   ├── CrearTabla/         # Table creation
│   │   ├── FormCredenciales/   # Credentials form
│   │   ├── Footer/             # Footer component
│   │   ├── Header/             # Header component
│   │   ├── IsAuthenticated/    # Authentication wrapper
│   │   ├── Layout/             # Layout components
│   │   ├── Main/               # Main content
│   │   └── Page404/            # 404 error page
│   ├── utils/                  # Utility functions
│   │   ├── LoggerHandler.js    # Logging utility
│   │   ├── linksHeader.js      # Header navigation links
│   │   └── RequestURL.js       # API endpoint configuration
│   ├── authorization_submits/  # Authorization related functions
│   │   └── index.js            # Authorization logic and API calls
│   ├── App.css                 # Global styles
│   ├── App.js                  # Main application component
│   ├── App.test.js             # Application tests
│   ├── index.css               # Root styles
│   ├── index.js                # Application entry point
│   ├── reportWebVitals.js      # Performance monitoring
│   ├── service-worker.js       # Service worker implementation
│   ├── serviceWorkerRegistration.js # Service worker registration
│   └── setupTests.js           # Test configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## Key Features
1. **Authentication System**
   - User login and registration
   - Protected routes
   - Session management

2. **Appointment Management**
   - Schedule new appointments
   - View scheduled appointments
   - Cancel appointments

3. **User Interface**
   - Responsive design
   - Modern UI components
   - Error handling with SweetAlert2

4. **Service Worker**
   - Offline capabilities
   - Background sync
   - Cache management

## Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## API Integration
- The frontend communicates with a backend server running on `http://localhost:4000`
- Axios is used for HTTP requests
- API endpoints are managed through the authorization_submits directory

## Testing
- Jest and React Testing Library are configured for testing
- Run tests using:
  ```bash
  npm test
  ```

## Deployment
- The application is configured for deployment on GitHub Pages
- The homepage is set to: `https://cami98735264.github.io/veterinaria-crud-sessions`

## Browser Support
- Production: >0.2% of browsers, not dead, not op_mini all
- Development: Latest versions of Chrome, Firefox, and Safari
