# Portfolio CMS Implementation with Sanity

## Overview
Transform the current static portfolio site into a fully CMS-controlled website using Sanity CMS. This will enable dynamic content management for all sections including a new blog and talks sections.

## Goals
- Make the entire landing page fully customizable through CMS
- Add a blog section for articles and posts
- Add a talks section for speaking engagements
- Enable non-technical content updates
- Maintain current design and performance
- Add SEO capabilities for blog posts

## Current State Analysis

### Existing Structure
```
src/
├── app/
│   ├── page.tsx (main landing page)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── NavBar.tsx
└── data.ts (static data)
```

### Current Static Data
- Project information
- Contact details
- Skills and experience
- All text content hardcoded in components

## Implementation Plan

### Phase 1: Infrastructure Setup

#### 1.1 Install Dependencies
```bash
npm install next-sanity @portabletext/react @sanity/image-url @sanity/vision sanity
```

#### 1.2 Environment Configuration
Create `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

#### 1.3 Sanity Configuration Files
- `sanity.config.ts` - Main Sanity configuration
- `sanity.cli.ts` - CLI configuration
- `src/lib/sanity/` - Client and utility functions

### Phase 2: Content Schema Design

#### 2.1 Core Site Schemas

##### Site Settings Schema
```typescript
{
  name: 'siteSettings',
  fields: [
    'siteTitle',
    'siteDescription',
    'favicon',
    'ogImage',
    'themeColors',
    'googleAnalyticsId'
  ]
}
```

##### Hero Section Schema
```typescript
{
  name: 'heroSection',
  fields: [
    'headline',
    'subheadline',
    'description',
    'ctaButtons[]',
    'backgroundImage',
    'profileImage',
    'availabilityStatus',
    'socialLinks[]'
  ]
}
```

##### About/Bio Schema
```typescript
{
  name: 'aboutSection',
  fields: [
    'title',
    'content', // Rich text
    'profileImage',
    'location',
    'currentRole',
    'yearsOfExperience',
    'highlights[]'
  ]
}
```

##### Skills Schema
```typescript
{
  name: 'skillsSection',
  fields: [
    'title',
    'description',
    'skillCategories[]' // Frontend, Backend, Tools, etc.
  ]
}

{
  name: 'skill',
  fields: [
    'name',
    'category',
    'proficiencyLevel',
    'icon',
    'description'
  ]
}
```

##### Experience Schema
```typescript
{
  name: 'experience',
  fields: [
    'jobTitle',
    'company',
    'companyLogo',
    'location',
    'startDate',
    'endDate',
    'current',
    'description', // Rich text
    'technologies[]',
    'achievements[]'
  ]
}
```

##### Projects Schema
```typescript
{
  name: 'project',
  fields: [
    'name',
    'shortTitle',
    'description',
    'fullDescription', // Rich text
    'images[]',
    'featuredImage',
    'technologies[]',
    'liveUrl',
    'githubUrl',
    'demoCredentials',
    'featured',
    'status', // completed, in-progress, planned
    'category'
  ]
}
```

##### Contact Schema
```typescript
{
  name: 'contactInfo',
  fields: [
    'name',
    'displayName',
    'title',
    'email',
    'phone',
    'location',
    'availability',
    'contactMessage', // Rich text
    'socialLinks[]',
    'resumeFile'
  ]
}
```

#### 2.2 Blog System Schemas

##### Blog Post Schema
```typescript
{
  name: 'blogPost',
  fields: [
    'title',
    'slug',
    'excerpt',
    'content', // Rich text with code blocks
    'featuredImage',
    'author',
    'categories[]',
    'tags[]',
    'publishedAt',
    'featured',
    'seo' // SEO meta fields
  ]
}
```

##### Blog Category Schema
```typescript
{
  name: 'blogCategory',
  fields: [
    'name',
    'slug',
    'description',
    'color',
    'icon'
  ]
}
```

##### Author Schema
```typescript
{
  name: 'author',
  fields: [
    'name',
    'bio',
    'avatar',
    'socialLinks[]',
    'website'
  ]
}
```

#### 2.3 Talks/Speaking Schemas

##### Talk Schema
```typescript
{
  name: 'talk',
  fields: [
    'title',
    'slug',
    'description',
    'event',
    'eventLogo',
    'date',
    'location',
    'type', // conference, meetup, workshop, podcast
    'slides',
    'recording',
    'photos[]',
    'resources[]',
    'featured'
  ]
}
```

##### Speaking Topic Schema
```typescript
{
  name: 'speakingTopic',
  fields: [
    'name',
    'description',
    'icon',
    'category'
  ]
}
```

### Phase 3: Frontend Integration

#### 3.1 Sanity Client Setup
```
src/lib/sanity/
├── client.ts         # Sanity client configuration
├── image.ts          # Image URL builder
├── queries.ts        # GROQ queries
├── types.ts          # TypeScript types
└── utils.ts          # Helper functions
```

#### 3.2 Component Updates

##### Update Existing Components
1. **HeroSection.tsx**
   - Fetch from `heroSection` schema
   - Dynamic CTA buttons
   - Conditional availability status

2. **SkillsSection.tsx**
   - Fetch from `skillsSection` and `skill` schemas
   - Dynamic skill categories
   - Proficiency indicators

3. **ExperienceSection.tsx**
   - Fetch from `experience` schema
   - Timeline view
   - Company logos

4. **Projects.tsx**
   - Fetch from `project` schema
   - Filter by category/status
   - Featured projects

5. **Contact.tsx**
   - Fetch from `contactInfo` schema
   - Dynamic social links
   - Availability messaging

#### 3.3 New Pages and Components

##### Blog System
```
src/app/blog/
├── page.tsx              # Blog listing
├── [slug]/page.tsx       # Individual blog post
├── category/[slug]/page.tsx # Category pages
└── components/
    ├── BlogCard.tsx
    ├── BlogContent.tsx
    ├── CategoryFilter.tsx
    └── RelatedPosts.tsx
```

##### Talks System
```
src/app/talks/
├── page.tsx              # Talks listing
├── [slug]/page.tsx       # Individual talk page
└── components/
    ├── TalkCard.tsx
    ├── TalkDetail.tsx
    └── SpeakingTopics.tsx
```

### Phase 4: Content Migration

#### 4.1 Data Migration Script
Create script to migrate existing static data:
```
scripts/
└── migrate-data.ts
```

#### 4.2 Content Population
1. Import existing project data
2. Create initial blog categories
3. Setup author profile
4. Configure site settings

### Phase 5: Advanced Features

#### 5.1 SEO Enhancement
- Dynamic meta tags for blog posts
- Structured data for articles and talks
- Sitemap generation
- Open Graph images

#### 5.2 Search Functionality
- Blog post search
- Talk search
- Global site search

#### 5.3 Performance Optimization
- Image optimization with Sanity
- ISR (Incremental Static Regeneration)
- Edge caching strategies

### Phase 6: Sanity Studio Customization

#### 6.1 Studio Structure
```
sanity/
├── schemas/
│   ├── index.ts
│   ├── siteSettings.ts
│   ├── heroSection.ts
│   ├── blog/
│   └── talks/
├── components/
│   └── customInputs/
└── structure.ts          # Custom studio structure
```

#### 6.2 Custom Studio Features
- Live preview integration
- Custom input components
- Document actions
- Workflows for publishing

### Phase 7: Deployment and Production

#### 7.1 Environment Setup
- Production Sanity dataset
- Webhook configuration for revalidation
- CDN setup for assets

#### 7.2 Content Management Workflow
- Editorial workflow
- Content scheduling
- Asset management guidelines

## File Structure After Implementation

```
├── sanity.config.ts
├── sanity.cli.ts
├── CMS_IMPLEMENTATION_PLAN.md
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/page.tsx
│   │   │   └── category/[slug]/page.tsx
│   │   ├── talks/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── blog/
│   │   ├── talks/
│   │   └── (existing components updated)
│   ├── lib/
│   │   └── sanity/
│   │       ├── client.ts
│   │       ├── image.ts
│   │       ├── queries.ts
│   │       ├── types.ts
│   │       └── utils.ts
│   └── sanity/
│       ├── schemas/
│       ├── components/
│       └── structure.ts
└── scripts/
    └── migrate-data.ts
```

## Benefits After Implementation

### For You (Content Creator)
- **Easy Updates**: Update any content through Sanity Studio
- **Rich Content**: Write blog posts with rich text, images, code blocks
- **Media Management**: Upload and organize images/files
- **SEO Control**: Manage meta descriptions, titles, featured images
- **Preview**: See changes before publishing
- **Scheduling**: Schedule blog posts for future publication

### For Visitors
- **Fresh Content**: Regular blog updates and new talks
- **Better SEO**: Improved search engine visibility
- **Faster Loading**: Optimized images and content delivery
- **Better UX**: Structured, searchable content

### For Developers
- **Type Safety**: Full TypeScript integration
- **Performance**: ISR and edge caching
- **Maintainability**: Separation of content and code
- **Scalability**: Easy to add new content types

## Timeline Estimate

- **Phase 1-2**: Infrastructure & Schemas (2-3 days)
- **Phase 3**: Frontend Integration (3-4 days)
- **Phase 4**: Content Migration (1 day)
- **Phase 5**: Advanced Features (2-3 days)
- **Phase 6**: Studio Customization (1-2 days)
- **Phase 7**: Deployment (1 day)

**Total Estimated Time**: 10-14 days

## Next Steps

1. **Setup Sanity Account**: Create project at sanity.io
2. **Install Dependencies**: Add required packages
3. **Create Schemas**: Start with core content schemas
4. **Build Components**: Update existing components to use CMS data
5. **Add New Sections**: Implement blog and talks functionality
6. **Content Migration**: Move existing data to Sanity
7. **Testing & Optimization**: Ensure everything works smoothly
8. **Launch**: Deploy the CMS-powered site

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)
- [Portable Text React](https://github.com/portabletext/react-portabletext)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

This implementation will transform your static portfolio into a dynamic, content-managed website that's easy to update and scale. The CMS approach will make it simple to add new blog posts, update your experience, showcase new projects, and manage your speaking engagements all through an intuitive interface.