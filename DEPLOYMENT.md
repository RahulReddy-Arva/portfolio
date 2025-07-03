# Deployment Guide

## Vercel Deployment Configuration

This project is optimized for Vercel deployment with locked dependencies to prevent build failures.

🌐 **Live Demo**: [https://old-portfolio-murex-two.vercel.app](https://old-portfolio-murex-two.vercel.app)

### Key Configuration Files

1. **package.json**: All dependencies locked to exact versions
2. **package-lock.json**: Generated with exact dependency tree
3. **vercel.json**: Vercel-specific build configuration
4. **.nvmrc**: Node.js version specification (18.17.0)
5. **.node-version**: Additional Node.js version lock
6. **.npmrc**: npm configuration for exact installs

### Deployment Steps

#### Option 1: Auto-Deploy via Git

1. Push to GitHub repository
2. Connect repository in Vercel dashboard
3. Deploy automatically on push

#### Option 2: Manual Deploy

```bash
# Ensure dependencies are clean
npm ci

# Test build locally
npm run deploy

# Deploy to Vercel
npx vercel --prod
```

### Build Configuration

Vercel auto-detects Next.js projects. Key configuration:

- **Node.js Version**: Specified in `.nvmrc` (18.17.0)
- **Package Management**: Uses `package-lock.json` for exact installs
- **Build Command**: `next build` (auto-detected)
- **Dependencies**: All locked to exact versions

```json
// vercel.json (minimal configuration)
{
  "headers": [
    // Security headers configuration
  ]
}
```

### Dependency Lock Status

- **Next.js**: 14.1.0 (stable, no graceful-fs conflicts)
- **Node.js**: 18.17.0 (LTS, Vercel compatible)
- **All dependencies**: Exact versions (no ^ or ~ ranges)
- **Package resolution**: graceful-fs override included

### Troubleshooting

If build fails with module resolution errors:

1. Check Node.js version matches 18.17.0
2. Verify package-lock.json exists
3. Ensure npm ci is used (not npm install)
4. Check graceful-fs resolution in package.json

### Security Headers

Production deployment includes:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Performance

- Bundle size: 141 kB first load
- Static generation: All pages pre-rendered
- Image optimization: Enabled via Next.js
- Caching: Static assets cached for 1 year