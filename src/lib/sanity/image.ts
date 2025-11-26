import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper for common image transformations
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number,
  quality: number = 80
) {
  let imageBuilder = urlFor(source).quality(quality)
  
  if (width) {
    imageBuilder = imageBuilder.width(width)
  }
  
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }
  
  return imageBuilder.url()
}

// Get optimized image for different screen sizes
export function getResponsiveImageUrls(source: SanityImageSource) {
  return {
    mobile: getImageUrl(source, 768),
    tablet: getImageUrl(source, 1024),
    desktop: getImageUrl(source, 1920),
    original: urlFor(source).url(),
  }
}