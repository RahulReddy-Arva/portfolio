# Quick Start Guide

## One-Command Testing

```bash
# Run comprehensive test
./quick-test.sh

# Or step by step:
npm run verify          # Check configuration
npm run test:build      # Test production build
npm run test:preview    # Start Vercel dev server
```

## Essential Commands

### Development
```bash
npm run dev             # Start development server
npm run preview         # Production build + start
```

### Testing
```bash
npm run verify          # Verify setup (lint + typecheck + dependencies)
npm run test:build      # Clean build test
npm run test:vercel     # Vercel build simulation
npm run test:preview    # Vercel dev server
```

### Deployment
```bash
npm run deploy:preview     # Deploy to preview URL
npm run deploy:production  # Deploy to production
```

## Vercel CLI Quick Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Initialize project
vercel

# Development server (simulates Vercel)
vercel dev

# Build locally (exact Vercel process)
vercel build

# Deploy preview
vercel

# Deploy production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs [url]
```

## Troubleshooting Quick Fixes

### Build Fails
```bash
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

### Dependency Issues
```bash
npm ls graceful-fs      # Should show "overridden"
npm ls next            # Should show "14.1.0"
```

### Vercel Issues
```bash
vercel --version       # Check CLI
vercel logout && vercel login  # Re-authenticate
```

## Pre-Deploy Checklist

- [ ] `npm run verify` passes
- [ ] `npm run test:build` succeeds  
- [ ] `vercel dev` starts without errors
- [ ] All sections render correctly
- [ ] Dark/light mode works
- [ ] Images load properly
- [ ] No console errors

## File Structure
```
📁 Configuration Files
├── .nvmrc              # Node.js version (18.17.0)
├── .node-version       # Backup Node.js version
├── .npmrc              # npm configuration
├── package.json        # Dependencies locked
├── package-lock.json   # Exact dependency tree
├── vercel.json         # Vercel configuration
└── tsconfig.json       # TypeScript config

📁 Documentation
├── README.md           # Project overview
├── LOCAL_DEPLOYMENT.md # Detailed deployment guide
├── DEPLOYMENT.md       # Production deployment
└── QUICK_START.md      # This file
```

Ready to deploy! 🚀