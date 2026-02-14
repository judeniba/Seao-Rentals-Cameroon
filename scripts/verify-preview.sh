#!/bin/bash

# SEAO-RENTALS Preview Verification Script
# This script helps verify that the application can be previewed correctly

set -e

echo "🔍 SEAO-RENTALS Preview Verification"
echo "======================================"
echo ""

# Check Node.js installation
echo "✓ Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "   Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "  Found Node.js $NODE_VERSION"
echo ""

# Check npm installation
echo "✓ Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "  Found npm $NPM_VERSION"
echo ""

# Check if package.json exists
echo "✓ Checking project files..."
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    echo "   Please run this script from the project root directory"
    exit 1
fi
echo "  Found package.json"
echo ""

# Check if node_modules exists
echo "✓ Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  Dependencies not installed"
    echo "   Run: npm install"
else
    echo "  Dependencies installed"
fi
echo ""

# Check if scripts exist in package.json
echo "✓ Checking available scripts..."
if ! grep -q '"dev"' package.json; then
    echo "❌ dev script not found in package.json"
    exit 1
fi

if ! grep -q '"build"' package.json; then
    echo "❌ build script not found in package.json"
    exit 1
fi

if ! grep -q '"preview"' package.json; then
    echo "❌ preview script not found in package.json"
    exit 1
fi

echo "  ✓ dev script available"
echo "  ✓ build script available"
echo "  ✓ preview script available"
echo ""

# Summary
echo "======================================"
echo "✅ Preview verification complete!"
echo ""
echo "You can now preview the application:"
echo ""
echo "Development mode (with hot-reload):"
echo "  $ npm run dev"
echo "  Then visit: http://localhost:5173"
echo ""
echo "Production preview (optimized):"
echo "  $ npm run build"
echo "  $ npm run preview"
echo "  Then visit: http://localhost:4173"
echo ""
echo "For detailed testing instructions, see:"
echo "  📖 PREVIEW.md"
echo ""
echo "======================================"
