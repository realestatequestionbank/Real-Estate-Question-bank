# Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. **Firebase Project**: Set up with Authentication and Firestore enabled
2. **Stripe Account**: With test and live API keys
3. **Vercel Account**: For hosting the application
4. **Domain** (optional): For custom domain setup

## Environment Variables

Set up the following environment variables in your deployment platform:

### Firebase Configuration
```
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_CLIENT_EMAIL=your-firebase-service-account-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n[your-private-key]\n-----END PRIVATE KEY-----\n"
```

### Stripe Configuration
```
STRIPE_SECRET_KEY=sk_live_... (or sk_test_ for testing)
STRIPE_WEBHOOK_SECRET=whsec_... (from Stripe webhook configuration)
```

## Vercel Deployment

### 1. Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `webv3` directory as the root

### 2. Configure Build Settings
- **Framework Preset**: Next.js
- **Root Directory**: `webv3`
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (default)

### 3. Environment Variables
Add all environment variables listed above in the Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add each variable for Production, Preview, and Development

### 4. Domain Setup
1. Add custom domain in Vercel dashboard
2. Configure DNS records as instructed
3. SSL certificate will be automatically provisioned

## Firebase Setup

### 1. Authentication Configuration
```javascript
// Enable the following sign-in providers:
- Google OAuth
- Email/Password

// Configure authorized domains:
- localhost (for development)
- your-vercel-domain.vercel.app
- your-custom-domain.com (if applicable)
```

### 2. Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can read/write their own progress data
    match /progress/{progressId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Users can read/write their own user progress
    match /userProgress/{progressId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
  }
}
```

### 3. Firestore Indexes
Create composite indexes for:
```
Collection: progress
Fields: userId (Ascending), createdAt (Descending)

Collection: progress  
Fields: userId (Ascending), state (Ascending), createdAt (Descending)

Collection: userProgress
Fields: userId (Ascending)
```

## Stripe Configuration

### 1. Webhook Setup
1. In Stripe Dashboard, go to Developers → Webhooks
2. Add webhook endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

### 2. Product and Price Setup
1. Create a product in Stripe Dashboard
2. Add a price (e.g., $19.99 one-time payment)
3. Update `STRIPE_PRICE_ID` in `lib/constants.ts`

### 3. Test the Integration
1. Use test mode first with test API keys
2. Make a test purchase to verify webhook functionality
3. Switch to live mode for production

## DNS Configuration

If using a custom domain:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)
```

## SSL Certificate

- Vercel automatically provisions SSL certificates
- Certificate renewal is handled automatically
- Force HTTPS redirect is enabled by default

## Monitoring & Analytics

### 1. Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor page views, performance, and user behavior

### 2. Firebase Analytics (Optional)
- Add Firebase Analytics SDK
- Track user engagement and conversion rates

### 3. Error Monitoring
- Consider adding Sentry for error tracking
- Monitor application performance and crashes

## Testing Deployment

### Pre-deployment Checklist
- [ ] All environment variables configured
- [ ] Firebase authentication providers enabled
- [ ] Firestore security rules updated
- [ ] Stripe webhook configured
- [ ] DNS records configured (if using custom domain)

### Post-deployment Testing
1. **Authentication Flow**:
   - Test Google OAuth login
   - Test email/password signup
   - Verify user data saves to Firestore

2. **Payment Flow**:
   - Test premium upgrade process
   - Verify Stripe webhook execution
   - Check premium access after payment

3. **Practice Tests**:
   - Test free question access
   - Test premium question access
   - Verify progress tracking

4. **Mock Exams**:
   - Test exam timer functionality
   - Verify score calculation
   - Check results persistence

## Rollback Plan

If issues occur:
1. **Vercel**: Use deployment history to revert
2. **Environment Variables**: Keep backup of working configuration
3. **Database**: Firestore has automatic backups
4. **DNS**: Keep record of previous DNS settings

## Performance Optimization

### 1. Build Optimization
- Enable compression in Vercel
- Optimize image assets
- Use Next.js Image component for images

### 2. Database Optimization
- Use Firestore query limits
- Implement pagination for large datasets
- Cache frequently accessed data

### 3. CDN Configuration
- Vercel automatically configures global CDN
- Static assets are cached at edge locations

## Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **API Keys**: Use different keys for development/production
3. **CORS**: Configure allowed origins in Firebase
4. **Rate Limiting**: Consider implementing for API routes
5. **Input Validation**: Sanitize all user inputs

## Backup Strategy

1. **Code**: GitHub repository with regular commits
2. **Database**: Firestore automatic backups
3. **Configuration**: Document all settings
4. **Environment Variables**: Secure backup of all variables

## Support & Maintenance

1. **Monitoring**: Set up alerts for errors and performance
2. **Updates**: Regular dependency updates
3. **Backups**: Regular verification of backup systems
4. **Documentation**: Keep deployment docs updated

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check TypeScript compilation errors
   - Verify all dependencies are installed
   - Review environment variable syntax

2. **Authentication Issues**:
   - Verify Firebase configuration
   - Check authorized domains
   - Review security rules

3. **Payment Issues**:
   - Test webhook endpoint accessibility
   - Verify webhook secret configuration
   - Check Stripe event logs

4. **Performance Issues**:
   - Review Vercel function logs
   - Check database query performance
   - Monitor memory usage

For additional support, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stripe Documentation](https://stripe.com/docs)