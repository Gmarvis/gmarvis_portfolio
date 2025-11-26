#!/bin/bash

# CMS Environment Setup Script
echo "🚀 Setting up your CMS environment..."
echo ""

echo "📋 You'll need to get these credentials from Sanity:"
echo ""
echo "1. 🌐 Go to https://sanity.io and sign in/create account"
echo "2. 📁 Create a new project or select existing one"
echo "3. 📋 Copy your Project ID from the dashboard"
echo "4. 🔑 Go to Settings > API tab"
echo "5. ➕ Click 'Add API token'"
echo "6. 🏷️  Name it 'Portfolio Website'"
echo "7. 🔐 Set permissions to 'Editor'"
echo "8. 📄 Copy the generated token"
echo ""

echo "✏️  Now update your .env.local file with:"
echo "   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id"
echo "   SANITY_API_TOKEN=your_api_token"
echo ""

echo "🎯 Then run: pnpm run sanity"
echo "   This will open your CMS at http://localhost:3333/studio"
echo ""

# Check if .env.local exists and show current status
if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
    
    # Check if variables are set (not the default values)
    if grep -q "your_project_id_here" .env.local; then
        echo "⚠️  Please update NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local"
    else
        echo "✅ Project ID is configured"
    fi
    
    if grep -q "your_api_token_here" .env.local; then
        echo "⚠️  Please update SANITY_API_TOKEN in .env.local"
    else
        echo "✅ API Token is configured"
    fi
else
    echo "❌ .env.local file not found"
fi

echo ""
echo "🔗 Quick Links:"
echo "   Sanity Dashboard: https://sanity.io/manage"
echo "   Documentation: https://sanity.io/docs"