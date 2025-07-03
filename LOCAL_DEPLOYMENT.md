# Local Vercel Deployment Guide

This guide covers running and testing Vercel deployments locally to ensure everything works before pushing to production.

## Prerequisites

### 1. Install Vercel CLI
```bash
# Install globally
npm install -g vercel

# Or use with npx (no global install needed)
npx vercel --version
```

### 2. Verify Node.js Version
```bash
# Check current Node.js version
node --version
# Should be 18.17.0 or compatible

# If using nvm, switch to project version
nvm use
# Reads from .nvmrc file
```

## Local Development Testing

### 1. Clean Development Setup
```bash
# Clean any existing builds
npm run clean

# Fresh dependency install
rm -rf node_modules package-lock.json
npm install

# Verify dependencies
npm ls next
npm ls graceful-fs
```

### 2. Local Development Server
```bash
# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### 3. Production Build Testing
```bash
# Test full production build pipeline
npm run deploy
# This runs: lint + type-check + build

# Test production server locally
npm run preview
# This runs: build + start
```

## Vercel Local Simulation

### 1. Initialize Vercel Project
```bash
# In project directory
vercel

# Follow prompts:
# - Set up and deploy? N (for now)
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? (accept default or customize)
# - Directory? ./ 
# - Settings? N (use defaults)
```

### 2. Run Vercel Development Server
```bash
# Start Vercel dev server (simulates Vercel environment)
vercel dev

# This will:
# - Install dependencies
# - Start development server
# - Simulate Vercel functions and routing
# - Use Vercel's build pipeline
```

### 3. Build Locally with Vercel
```bash
# Build using Vercel's build process
vercel build

# This simulates exactly what happens in production:
# - Uses Node.js version from .nvmrc
# - Runs npm install (or npm ci if package-lock exists)
# - Executes build command
# - Applies vercel.json configuration
```

## Testing Different Scenarios

### 1. Test with Clean Dependencies
```bash
# Simulate fresh Vercel environment
rm -rf node_modules .next
vercel build --prod

# Check for any dependency issues
```

### 2. Test Environment Variables
```bash
# Set local environment variables for testing
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

# Run build
npm run build
```

### 3. Test Bundle Analysis
```bash
# Analyze bundle size (like Vercel does)
npm run build:analyze

# This opens webpack-bundle-analyzer
# Check for any oversized dependencies
```

## Deployment Commands

### 1. Preview Deployment
```bash
# Deploy to preview URL (not production)
vercel

# This will:
# - Build the project
# - Deploy to preview URL
# - Show deployment URL
# - Not affect production domain
```

### 2. Production Deployment
```bash
# Deploy to production domain
vercel --prod

# Or using alias
vercel deploy --prod
```

### 3. Check Deployment Status
```bash
# List recent deployments
vercel ls

# Get deployment details
vercel inspect <deployment-url>

# View deployment logs
vercel logs <deployment-url>
```

## Debugging Common Issues

### 1. Build Failures
```bash
# Check build logs locally
npm run build 2>&1 | tee build.log

# Test with Vercel's exact environment
vercel build --debug
```

### 2. Dependency Issues
```bash
# Check for dependency conflicts
npm ls --depth=0

# Verify graceful-fs resolution
npm ls graceful-fs

# Check for missing peer dependencies
npm ls --depth=1 | grep "UNMET"
```

### 3. Environment Simulation
```bash
# Use exact Node.js version
nvm install 18.17.0
nvm use 18.17.0

# Clear npm cache
npm cache clean --force

# Fresh install
rm -rf node_modules package-lock.json
npm ci
```

## Vercel Configuration Testing

### 1. Validate vercel.json
```bash
# Check configuration syntax
cat vercel.json | jq '.'

# Test headers configuration
vercel dev
# Visit site and check response headers in browser dev tools
```

### 2. Test Build Commands
```bash
# Test the exact build process Vercel uses
npm ci && npm run build

# Check build output
ls -la .next/
```

### 3. Performance Testing
```bash
# Start production server
npm run start

# Test in browser:
# - Lighthouse audit
# - Network tab performance
# - Core Web Vitals
```

## Advanced Testing

### 1. Docker Simulation (Optional)
```bash
# Create temporary Dockerfile for testing
cat > Dockerfile.test << EOF
FROM node:18.17.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
EOF

# Build and test
docker build -f Dockerfile.test -t portfolio-test .
docker run -p 3000:3000 portfolio-test

# Clean up
rm Dockerfile.test
```

### 2. Network Testing
```bash
# Test with slow network simulation
# In Chrome DevTools: Network tab > Throttling > Slow 3G

# Test image loading
# Check if company logos load properly

# Test font loading
# Verify Inter font loads from Google Fonts
```

## Pre-Production Checklist

Before deploying to production, verify:

```bash
# ✅ 1. Clean build
npm run clean && npm run deploy

# ✅ 2. No console errors
npm run dev
# Check browser console for errors

# ✅ 3. All sections load
# Manually test each section:
# - Hero, About, Experience, Skills, Education, Projects, Certifications, Contact

# ✅ 4. Images load correctly
# Check company logos and profile image

# ✅ 5. Dark/light mode works
# Toggle theme and verify all components

# ✅ 6. Mobile responsive
# Test on different screen sizes

# ✅ 7. Performance check
npm run build
# Bundle size should be ~141 kB

# ✅ 8. Vercel preview deployment
vercel
# Test the preview URL thoroughly
```

## Troubleshooting

### If deployment fails locally:

1. **Check Node.js version**:
   ```bash
   node --version  # Should be 18.x
   nvm use         # If using nvm
   ```

2. **Clear everything and reinstall**:
   ```bash
   rm -rf node_modules .next package-lock.json
   npm install
   ```

3. **Check for global package conflicts**:
   ```bash
   npm ls -g --depth=0
   # Look for conflicting Next.js or React versions
   ```

4. **Verify Vercel CLI**:
   ```bash
   vercel --version
   vercel login     # Ensure you're logged in
   ```

5. **Test with minimum configuration**:
   ```bash
   # Temporarily rename vercel.json
   mv vercel.json vercel.json.bak
   vercel build
   mv vercel.json.bak vercel.json
   ```

## Success Indicators

When everything works correctly, you should see:

- ✅ `npm run build` completes without errors
- ✅ `vercel build` succeeds
- ✅ `vercel dev` starts without issues
- ✅ All images load (including company logos)
- ✅ Dark/light mode toggle works
- ✅ No console errors in browser
- ✅ Bundle size around 141 kB
- ✅ All sections render correctly

Ready to deploy to production! 🚀