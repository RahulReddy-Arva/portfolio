#!/bin/bash

echo "🚀 Portfolio Quick Test Script"
echo "=============================="

# Check Node.js version
echo "📋 Checking Node.js version..."
node_version=$(node --version)
echo "   Current: $node_version"
if [[ $node_version == v18.* ]]; then
    echo "   ✅ Node.js version is compatible"
else
    echo "   ⚠️  Recommended Node.js 18.x for best compatibility"
fi

# Check if Vercel CLI is installed
echo ""
echo "📋 Checking Vercel CLI..."
if command -v vercel &> /dev/null; then
    vercel_version=$(vercel --version)
    echo "   ✅ Vercel CLI installed: $vercel_version"
else
    echo "   ❌ Vercel CLI not found. Install with: npm install -g vercel"
    exit 1
fi

# Run verification
echo ""
echo "📋 Running project verification..."
npm run verify

# Test build
echo ""
echo "📋 Testing production build..."
npm run test:build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All tests passed! Ready for deployment."
    echo ""
    echo "Next steps:"
    echo "1. Test Vercel dev server: npm run test:preview"
    echo "2. Deploy preview: npm run deploy:preview"
    echo "3. Deploy production: npm run deploy:production"
else
    echo ""
    echo "❌ Build failed. Check the errors above."
    exit 1
fi