# Vercel Deployment Guide

This guide will help you deploy your ebooks shop to Vercel with proper environment variable configuration.

## Prerequisites

- A Vercel account
- A Shopify store with Storefront API access
- Paddle account for payment processing (optional)

## Step 1: Configure Environment Variables in Vercel

Before deploying, you need to set up the required environment variables in your Vercel project settings.

### Required Shopify Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

#### Shopify Configuration

```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
SHOPIFY_REVALIDATION_SECRET=your_random_secret_string
```

**How to get these values:**

- **SHOPIFY_STORE_DOMAIN**: Your Shopify store URL (e.g., `mystore.myshopify.com`)
- **SHOPIFY_STOREFRONT_ACCESS_TOKEN**: 
  1. Go to Shopify Admin → Settings → Apps and sales channels
  2. Click "Develop apps"
  3. Create a new app or select existing one
  4. Configure Storefront API scopes
  5. Install the app and copy the Storefront API access token
- **SHOPIFY_REVALIDATION_SECRET**: Generate a random string (e.g., using `openssl rand -base64 32`)

#### Paddle Configuration (Optional)

```
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_paddle_client_token
NEXT_PUBLIC_PADDLE_VENDOR_ID=your_paddle_vendor_id
PADDLE_API_KEY=your_paddle_api_key
PADDLE_WEBHOOK_SECRET=your_paddle_webhook_secret
```

**Note:** Use `sandbox` for testing and `production` for live environment.

### Optional Variables

```
COMPANY_NAME=Your Company Name
SITE_NAME=Your Site Name
```

## Step 2: Deploy to Vercel

### Option A: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Step 3: Verify Deployment

After deployment:

1. Check the build logs for any errors
2. Visit your deployed site
3. Verify that:
   - The site loads without errors
   - Products are displayed (if Shopify is configured)
   - Navigation works correctly

## Troubleshooting

### Build Fails with "Invalid URL" Error

**Problem:** The build fails with an error about parsing URL from `/api/2023-01/graphql.json`

**Solution:** This happens when Shopify environment variables are not set. The application now handles this gracefully by:
- Logging warnings during build
- Returning empty data for collections, products, and menus
- Allowing the build to complete successfully

You can deploy without Shopify credentials, but you'll need to add them later for full functionality.

### Missing Environment Variables

If you forgot to set environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the missing variables
3. Redeploy by going to Deployments → Click the three dots → Redeploy

### Shopify API Errors

If you see Shopify API errors after deployment:

1. Verify your `SHOPIFY_STORE_DOMAIN` is correct (should be `yourstore.myshopify.com`)
2. Check that your `SHOPIFY_STOREFRONT_ACCESS_TOKEN` is valid
3. Ensure your Shopify app has the required API scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collection_listings`

## Post-Deployment Configuration

### Set Up Shopify Webhooks

To enable automatic revalidation when products/collections change:

1. In Shopify Admin, go to Settings → Notifications → Webhooks
2. Create webhooks for:
   - `products/create`
   - `products/update`
   - `products/delete`
   - `collections/create`
   - `collections/update`
   - `collections/delete`
3. Set the webhook URL to: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_REVALIDATION_SECRET`

### Configure Paddle Webhooks

If using Paddle for payments:

1. Go to Paddle Dashboard → Developer Tools → Webhooks
2. Add webhook endpoint: `https://your-domain.vercel.app/api/paddle/webhook`
3. Copy the webhook secret and add it to Vercel environment variables as `PADDLE_WEBHOOK_SECRET`

## Environment-Specific Deployments

### Production Environment

Set environment variables for production:
```
NEXT_PUBLIC_PADDLE_ENVIRONMENT=production
```

### Preview/Staging Environment

Vercel automatically creates preview deployments for pull requests. You can set different environment variables for preview deployments in the Vercel dashboard.

## Performance Optimization

The application uses Next.js caching features:

- Static page generation for product and collection pages
- Incremental Static Regeneration (ISR) with webhook-based revalidation
- Edge runtime for optimal performance

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Rotate secrets regularly**, especially:
   - `SHOPIFY_REVALIDATION_SECRET`
   - `PADDLE_WEBHOOK_SECRET`
3. **Use environment-specific credentials** for development vs production
4. **Enable Vercel's security features**:
   - Enable "Automatically expose System Environment Variables"
   - Use Vercel's built-in DDoS protection

## Monitoring

Monitor your deployment:

1. **Vercel Analytics**: Enable in project settings for traffic insights
2. **Build Logs**: Check for warnings about missing Shopify configuration
3. **Runtime Logs**: Monitor for API errors or performance issues

## Support

For issues specific to:
- **Vercel deployment**: Check [Vercel Documentation](https://vercel.com/docs)
- **Shopify integration**: See `SHOPIFY_INTEGRATION.md`
- **Paddle integration**: See `PADDLE_INTEGRATION_GUIDE.md`

## Quick Reference

### Minimum Required Variables for Build

The application will build successfully with NO environment variables set, but will have limited functionality. For full functionality, set:

```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
```

### All Environment Variables

See `.env.example` for a complete list of all available environment variables.
