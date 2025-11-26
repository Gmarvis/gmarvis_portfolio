# 🚀 CMS Setup Instructions

## Step 1: Install Dependencies

```bash
pnpm install
```

## Step 2: Create Sanity Account & Project

1. Go to [sanity.io](https://sanity.io) and sign up/sign in
2. Create a new project:
   - Choose "Create new project"
   - Give it a name (e.g., "gmarvis-portfolio")
   - Choose "production" dataset
   - Copy your **Project ID**

## Step 3: Setup Environment Variables

1. Copy the environment template:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Sanity credentials:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

### Getting API Token:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" tab
4. Click "Add API token"
5. Name it (e.g., "Portfolio Website")
6. Give it "Editor" permissions
7. Copy the token to your `.env.local`

## Step 4: Launch Sanity Studio

```bash
pnpm run sanity
```

This opens the CMS admin interface at `http://localhost:3333/studio`

## Step 5: Add Your Content

In the Sanity Studio, you can now:

### 🏠 **Landing Page Setup**
1. **Site Settings** - Configure your site title, description, favicon
2. **Hero Section** - Add your name, title, profile photo, CTA buttons
3. **About Section** - Write your bio, add highlights
4. **Skills** - Add your technical skills with proficiency levels
5. **Experience** - Add your work history with company logos
6. **Projects** - Showcase your projects with images and details
7. **Contact Info** - Add your contact details and social links

### 📝 **Blog Setup**
1. **Authors** - Create your author profile
2. **Categories** - Create blog categories (e.g., "Web Development", "Tutorials")
3. **Blog Posts** - Write and publish articles

### 🎤 **Speaking Setup**
1. **Speaking Topics** - Define your expertise areas
2. **Talks** - Add your speaking engagements with slides and recordings

## Step 6: Run Your Website

```bash
pnpm run dev
```

Your CMS-powered portfolio will be available at `http://localhost:3000`

## 🎯 **Content Strategy Tips**

### **Hero Section**
- Use a professional headshot
- Write a compelling headline
- Add 1-2 CTA buttons (e.g., "View Projects", "Contact Me")
- Set availability status

### **Projects**
- Upload high-quality screenshots
- Write clear descriptions
- Tag with technologies used
- Mark your best work as "featured"

### **Blog Posts**
- Use SEO-friendly titles
- Add featured images
- Write compelling excerpts
- Use categories and tags for organization

### **Speaking Events**
- Upload event logos
- Add slides and recordings when available
- Include event details and location

## 🚀 **Going Live**

### Deploy Sanity Studio:
```bash
pnpm run sanity:deploy
```

This creates a hosted version of your CMS at `https://your-project.sanity.studio`

### Deploy Your Website:
Deploy to Vercel, Netlify, or your preferred platform. Make sure to add your environment variables to the hosting platform.

## 📱 **Mobile CMS Access**

Once deployed, you can manage your content from anywhere:
- Desktop: `https://your-project.sanity.studio`
- Mobile: Sanity mobile app (iOS/Android)

## 🔄 **Updating Content**

All content changes in Sanity Studio will automatically appear on your website (thanks to ISR - Incremental Static Regeneration).

## 🆘 **Need Help?**

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)
- Check the CMS_IMPLEMENTATION_PLAN.md for detailed technical information