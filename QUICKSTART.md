# Quick Deployment Guide

## 🚀 Deploy to Vercel in 5 Minutes

### 1. Prerequisites
You'll need:
- A GitHub account
- A Firebase project (free)
- A Stripe account (free for testing)

### 2. Setup Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → Sign-in methods → Enable Google & Email/Password
4. Enable **Firestore Database** → Create in production mode
5. Go to Project Settings → Service Accounts → Generate new private key
6. Save the JSON file - you'll need these values:
   - `project_id`
   - `client_email` 
   - `private_key`

### 3. Setup Stripe (Optional - for payments)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Get your **Secret Key** (starts with `sk_test_`)
3. Create a **Product** and **Price** (one-time payment, $19.99)
4. Note the Price ID (starts with `price_`)

### 4. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/dmv-question-bank&root-directory=webv3)

1. **Fork this repository** to your GitHub account
2. **Connect to Vercel**: Click the deploy button above or:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
   - Set root directory to `webv3`

3. **Add Environment Variables** in Vercel dashboard:
   ```
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_CLIENT_EMAIL=your-client-email
   FIREBASE_PRIVATE_KEY="your-private-key-with-newlines"
   STRIPE_SECRET_KEY=sk_test_your-stripe-key
   STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
   ```

4. **Deploy** - Vercel will automatically build and deploy!

### 5. Configure Stripe Webhook (For Payments)

After deployment:
1. In Stripe Dashboard → Webhooks → Add endpoint
2. URL: `https://your-vercel-domain.vercel.app/api/webhooks/stripe`
3. Events: Select `checkout.session.completed`
4. Copy the webhook secret and update `STRIPE_WEBHOOK_SECRET` in Vercel

### 6. Update Firebase Auth Domains

In Firebase Console → Authentication → Settings → Authorized domains:
- Add your Vercel domain: `your-project.vercel.app`

## ✅ That's it! 

Your DMV Question Bank is now live at `https://your-project.vercel.app`

## 🧪 Test the Application

1. **Visit your site** - Should load the homepage
2. **Select a state** - Should show free/premium options  
3. **Try free practice** - Should work without login
4. **Test authentication** - Google/email signup should work
5. **Test payment flow** - Should redirect to Stripe (if configured)

## 🔧 Local Development

To run locally:

```bash
git clone your-forked-repo
cd dmv-question-bank/webv3
npm install
cp .env.example .env.local
# Fill in your environment variables
npm run dev
```

## 🆘 Troubleshooting

**Build fails?** 
- Check environment variables are set correctly
- Ensure Firebase private key is properly escaped

**Authentication not working?**
- Verify Firebase configuration in `lib/firebase/config.ts`
- Check authorized domains in Firebase Console

**Payments not working?**
- Verify Stripe keys are correct
- Check webhook endpoint is accessible
- Look at Stripe webhook logs for errors

## 🚀 Next Steps

1. **Customize branding** - Update colors, logos, and text
2. **Add real questions** - Replace mock questions with actual DMV data
3. **Configure analytics** - Add Google Analytics or Vercel Analytics
4. **Custom domain** - Add your own domain in Vercel dashboard
5. **Go live** - Switch to Stripe live keys for real payments

---

### Need Help?

- Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
- Review [README.md](./README.md) for technical documentation  
- Open an issue on GitHub for specific problems

**Happy deploying! 🎉**