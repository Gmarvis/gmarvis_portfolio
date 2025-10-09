// Google Analytics 4 configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Tag Manager configuration
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Microsoft Clarity configuration
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID || '';

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common events for portfolio tracking
export const trackPortfolioEvents = {
  downloadCV: () => event({
    action: 'download',
    category: 'engagement',
    label: 'CV Download'
  }),
  
  contactClick: () => event({
    action: 'click',
    category: 'engagement', 
    label: 'Contact Button'
  }),

  projectView: (projectName: string) => event({
    action: 'view',
    category: 'projects',
    label: projectName
  }),

  socialClick: (platform: string) => event({
    action: 'click',
    category: 'social',
    label: platform
  }),

  qrGenerated: () => event({
    action: 'generate',
    category: 'engagement',
    label: 'QR Code Generated'
  })
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}