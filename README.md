# Company Intranet Portal

A modern intranet portal for managing IT support documentation, digital projects, and internal communications.

## Features

- 🔐 **User Authentication & Role-Based Access Control**
  - Admin, IT Support, and Employee roles
  - Secure session management
  - Profile management

- 📚 **IT Support Documentation Library**
  - Categorized documentation (Hardware, Software, Network, etc.)
  - Search and filter functionality
  - Version tracking
  - Document details with metadata

- 📢 **Internal Announcements**
  - Important notifications
  - Filterable announcement feed
  - Priority-based highlighting

- 📋 **Digital Project Tracker**
  - Project status management
  - Priority levels
  - Team assignment
  - Comment system
  - Timeline tracking

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Clean, professional interface
  - Intuitive navigation

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Lucide Icons

### Backend
- PHP 8.2
- MySQL 8.0
- Apache/Nginx
- Composer for dependency management

## Getting Started

1. Clone the repository

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Install PHP dependencies:
   ```bash
   composer install
   ```

4. Configure your database:
   - Create a new MySQL database
   - Copy `.env.example` to `.env`
   - Update database credentials in `.env`

5. Set up the database schema:
   ```bash
   php artisan migrate
   ```

6. Start the development servers:
   ```bash
   # Terminal 1: Start PHP server
   php -S localhost:8000 -t public

   # Terminal 2: Start Vite dev server
   npm run dev
   ```

## Demo Accounts

Use any of these accounts to test different role perspectives (any password will work):

- **Admin**: admin@company.com
- **IT Support**: support@company.com
- **Employee**: employee@company.com

## Project Structure

```
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── context/         # React context providers
│   ├── data/           # Mock data for demonstration
│   ├── layouts/        # Page layout components
│   ├── pages/          # Main application pages
│   ├── routes/         # Route configuration
│   └── types/          # TypeScript type definitions
│
├── api/                 # PHP backend code
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers
│   ├── models/         # Database models
│   ├── middleware/     # Request middleware
│   └── utils/          # Helper functions
│
├── public/             # Public assets
└── database/           # Database migrations and seeds
```

## Features in Detail

### Documentation Management
- Create and manage IT support documentation
- Categorize documents by type (Hardware, Software, Network, etc.)
- Track document versions
- Search and filter capabilities
- File attachments and media storage

### Project Tracking
- Create and assign digital projects
- Track project status and priority
- Comment system for team communication
- Timeline visualization
- Team member assignment
- File attachments for project resources

### Announcements
- Post company-wide announcements
- Highlight important notifications
- Filter and search functionality
- Chronological feed view
- Rich text editor support

### User Management
- Role-based access control
- User profiles
- Department assignment
- Join date tracking
- Password reset functionality
- Session management

## Development

### Available Scripts

Frontend:
- `npm run dev` - Start Vite development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

Backend:
- `composer install` - Install PHP dependencies
- `php artisan serve` - Start PHP development server
- `php artisan migrate` - Run database migrations
- `php artisan db:seed` - Seed the database with sample data
- `php artisan test` - Run PHP unit tests

### Code Style

Frontend:
- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Modular CSS with Tailwind

Backend:
- PSR-12 coding standard
- PHP_CodeSniffer for code style checking
- PHPUnit for testing
- Type declarations and return types
- Comprehensive error handling

### API Documentation

The backend provides a RESTful API with the following main endpoints:

```
/api/auth           # Authentication endpoints
/api/documents      # Document management
/api/projects       # Project tracking
/api/announcements  # Announcement system
/api/users          # User management
```

Detailed API documentation is available in the `/docs` directory.

### Security Considerations

- CSRF protection
- XSS prevention
- SQL injection protection
- Input validation
- Secure password hashing
- Rate limiting
- Session security
- File upload validation

## License

MIT License - feel free to use this project for your own purposes.
![image](https://github.com/user-attachments/assets/3a70f445-efa5-4b7c-b9c0-94afc00d4761)
![image](https://github.com/user-attachments/assets/7cd7c2a5-e505-401d-946f-0968e5c672e0)
![image](https://github.com/user-attachments/assets/14183648-d818-4ff1-93d5-29a2704cf322)
![image](https://github.com/user-attachments/assets/60161161-79f5-46dd-ac6e-07db3aa6a71c)
![image](https://github.com/user-attachments/assets/2fa3edee-3882-4283-bc2c-84d8ae919d87)




