# DMV Question Bank

A modern, responsive web application for practicing DMV test questions across all 50 US states. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **State-Specific Practice Tests**: Customized questions for all 50 states
- **Free & Premium Tiers**: 50 free questions per state, 500+ questions for premium users
- **Mock Exams**: Timed practice tests simulating real DMV conditions
- **Progress Tracking**: Detailed analytics and performance insights
- **Authentication**: Secure login with Google OAuth and email/password
- **Payment Integration**: One-time premium purchase via Stripe

### User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Public pages for maximum discoverability
- **Real-time Progress**: Live tracking of study sessions and weak areas
- **Interactive UI**: Modern interface with smooth transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Payments**: Stripe
- **Deployment**: Vercel

## Project Structure

```
app/
├── api/                    # API routes
│   ├── create-checkout-session/
│   └── webhooks/stripe/
├── state/[state]/         # Dynamic state routes
│   ├── free/              # Free tier pages
│   ├── premium/           # Premium tier pages
│   ├── practice/          # Practice interfaces
│   └── mock-exam/         # Mock exam pages
├── dashboard/             # Premium dashboard
├── profile/               # User profile
├── success/               # Payment success
├── layout.tsx             # Root layout
└── page.tsx               # Home page

components/
├── auth/                  # Authentication components
├── pages/                 # Page-specific components
├── practice/              # Practice test components
├── ui/                    # Reusable UI components
├── navigation.tsx
├── footer.tsx
└── ...

lib/
├── firebase/              # Firebase configuration
├── services/              # Business logic
├── types/                 # TypeScript definitions
├── constants.ts
└── utils.ts
```

## Getting Started

### Prerequisites
- Node.js 20.x
- npm or yarn
- Firebase project
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd dmv-question-bank
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY=your-private-key

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Core User Flows

### Free User Journey
1. Visit homepage → Select state → Access free questions
2. Complete 50 free practice questions
3. Upgrade prompt for premium features

### Premium User Journey
1. Sign up → Pay via Stripe → Instant premium access
2. Access all 500+ questions per state
3. Take mock exams with timing
4. View detailed progress analytics
5. Track performance across multiple states

### Authentication Flow
- Google OAuth or email/password signup
- Premium status verification via Firestore
- Route protection for premium content
- Automatic redirections based on user tier

## Key Components

### Practice Interface
- Question navigation with progress tracking
- Answer selection and explanation display
- Category-based performance analysis
- Customizable question counts for premium users

### Mock Exam System
- Timed exams (45 minutes, 36 questions)
- Real DMV test simulation
- Pass/fail scoring (80% threshold)
- Detailed results breakdown

### Progress Tracking
- Individual question accuracy
- Category performance analysis
- Study streak tracking
- Historical session data

## Payment Integration

- Stripe Checkout for secure payments
- Webhook verification for premium access
- One-time payment model ($19.99)
- Automatic user status updates

## Database Schema

### Users Collection
```typescript
{
  uid: string
  email: string
  displayName: string
  isPremium: boolean
  stripeCustomerId: string
  premiumPurchaseDate: string
  createdAt: timestamp
  lastLoginAt: timestamp
}
```

### Progress Collection
```typescript
{
  id: string
  userId: string
  state: string
  type: 'practice' | 'mock_exam'
  questions: Question[]
  answers: number[]
  score: number
  completed: boolean
  createdAt: timestamp
}
```

## Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler

### Code Style
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Functional components with hooks
- Custom hooks for state management

## Deployment

### Vercel Deployment
1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic builds on push

### Environment Setup
- Production Firebase project
- Stripe live keys
- Webhook endpoints configured

## Performance

- Static page generation for SEO
- Dynamic imports for code splitting
- Optimized images and assets
- Minimal bundle size

## Security

- Client-side route protection
- Server-side authentication verification
- Stripe webhook signature validation
- Environment variable security

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact [support-email].