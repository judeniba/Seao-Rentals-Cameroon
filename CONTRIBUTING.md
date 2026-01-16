# Contributing to SEAO-RENTALS

Thank you for your interest in contributing to SEAO-RENTALS Cameroon Equipment Rental Platform!

## Code of Conduct

Please be respectful and constructive in all interactions with the project and community members.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (browser, OS, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When suggesting an enhancement:

- **Use a clear title** describing the enhancement
- **Provide detailed description** of the proposed functionality
- **Explain why** this enhancement would be useful
- **Include mockups** or examples if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Commit your changes** with clear messages
7. **Push to your fork** and submit a pull request

## Development Guidelines

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/cameroon-equipment-r.git
cd cameroon-equipment-r

# Install dependencies
npm install

# Start development server
npm run dev
```

### Coding Standards

#### TypeScript
- Use TypeScript for all new code
- Avoid `any` types where possible
- Define proper interfaces and types
- Use meaningful variable and function names

#### React Components
- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop typing with TypeScript

#### Styling
- Use Tailwind CSS utility classes
- Follow existing component patterns
- Maintain responsive design (mobile-first)
- Keep accessibility in mind (ARIA labels, keyboard navigation)

#### Code Organization
```
src/
├── components/        # React components
│   ├── backend/      # Admin-only components
│   └── ...           # Feature components
├── lib/              # Utilities and services
│   ├── types.ts      # Type definitions
│   ├── *-service.ts  # Business logic
│   └── ...
└── main.tsx          # Entry point
```

### State Management

- Use `useKV` hook for persistent state
- Follow existing patterns in `src/lib/*-service.ts`
- Document KV keys in service files

### Naming Conventions

- **Components**: PascalCase (e.g., `BookingFormDialog.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useBooking`)
- **Services**: kebab-case with `-service` suffix (e.g., `booking-service.ts`)
- **Types**: PascalCase (e.g., `Equipment`, `Booking`)
- **KV Keys**: kebab-case (e.g., `bookings`, `signed-agreements`)

### Bilingual Support

All user-facing text must support both French and English:

```typescript
import { translations } from '@/lib/translations'

const t = translations[language]
return <h1>{t.myFeature.title}</h1>
```

### Testing Changes

Before submitting a PR:

1. **Build succeeds**: `npm run build`
2. **No TypeScript errors**: Check build output
3. **Manual testing**: Test your changes in both languages
4. **Mobile testing**: Verify responsive behavior
5. **Browser testing**: Test in Chrome, Firefox, Safari

### Git Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in present tense (e.g., "Add", "Fix", "Update")
- Reference issue numbers when applicable

Examples:
```
Add equipment comparison feature
Fix booking form validation
Update README with deployment instructions
```

## Project-Specific Guidelines

### Adding New Features

1. **Check existing patterns** in similar features
2. **Create types** in `src/lib/types.ts` or new `*-types.ts`
3. **Create service** in `src/lib/*-service.ts` for business logic
4. **Create component** in `src/components/`
5. **Add to navigation** (QuickActionsMenu or NavigationMenu)
6. **Update App.tsx** for dialog state management
7. **Add translations** for both languages
8. **Update documentation** (README.md, feature guides)

### Working with KV Storage

- Use `useKV` in components for reactive state
- Use `window.spark.kv` in service files
- Document new KV keys in service files
- Handle null/undefined cases properly

### Icons

Use Phosphor Icons (not Lucide):
```typescript
import { CalendarIcon, CheckCircle } from '@phosphor-icons/react'
```

## Documentation

- Update README.md for new major features
- Add inline comments for complex logic
- Update type definitions when changing interfaces
- Create separate docs for substantial features

## Questions?

If you have questions about contributing:
- Open a discussion on GitHub
- Review existing code for patterns
- Check the README.md and SYSTEM_ARCHITECTURE.md for architecture guidance
- Contact: seaointeralia1@gmail.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to SEAO-RENTALS! 🚀
