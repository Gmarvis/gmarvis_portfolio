import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samgmarvis.site' // Replace with your actual domain
  const lastModified = new Date()
  
  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}