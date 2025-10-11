import { contactData } from "../../data";

export interface ContactData {
  name: string;
  displayName: string;
  title: string;
  organization: string;
  email: string;
  phone?: string;
  website: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  description?: string;
  location?: {
    country: string;
    countryCode: string;
  };
}

/**
 * Generates vCard (VCF) content from contact data
 * @param contact - Contact information object
 * @returns vCard formatted string
 */
export function generateVCard(contact: ContactData): string {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contact.displayName}`,
    `N:${contact.name.split(' ').slice(-1)[0]};${contact.name.split(' ')[0]};;;`,
    `ORG:${contact.organization}`,
    `TITLE:${contact.title}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${contact.website}`,
  ];

  // Add phone number if available (Android-friendly format)
  if (contact.phone) {
    vcard.push(`TEL;TYPE=CELL:${contact.phone}`);
    vcard.push(`TEL;TYPE=VOICE:${contact.phone}`);
  }

  // Add social media links as URLs (better Android support)
  if (contact.socialLinks.linkedin) {
    vcard.push(`URL:${contact.socialLinks.linkedin}`);
  }
  if (contact.socialLinks.github) {
    vcard.push(`URL:${contact.socialLinks.github}`);
  }
  if (contact.socialLinks.twitter) {
    vcard.push(`URL:${contact.socialLinks.twitter}`);
  }

  // Add description/note if available
  if (contact.description) {
    // Escape special characters for Android compatibility
    const cleanDescription = contact.description.replace(/[,;\\]/g, '\\$&');
    vcard.push(`NOTE:${cleanDescription}`);
  }

  // Add location if available (Android-friendly format)
  if (contact.location) {
    vcard.push(`ADR;TYPE=HOME:;;;;;;${contact.location.country}`);
    vcard.push(`GEO:${contact.location.countryCode}`);
  }

  vcard.push("END:VCARD");

  // Use CRLF line endings for better compatibility
  return vcard.join("\r\n");
}

/**
 * Creates and downloads a vCard file
 * @param contact - Contact information object
 * @param filename - Optional filename (defaults to contact name)
 */
export function downloadVCard(contact: ContactData, filename?: string): void {
  try {
    const vcardContent = generateVCard(contact);
    const blob = new Blob([vcardContent], { type: "text/vcard;charset=utf-8" });
    const fileName = filename || `${contact.displayName.replace(/\s+/g, "_")}_contact.vcf`;
    
    // Check if it's Android device
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    if (isAndroid || isMobile) {
      // For Android and mobile devices, use different approach
      if (navigator.share) {
        // Try Web Share API if available (modern Android browsers)
        const file = new File([vcardContent], fileName, { type: "text/vcard" });
        navigator.share({
          files: [file],
          title: `${contact.displayName} Contact`,
          text: `Save ${contact.displayName}'s contact information`
        }).catch((error) => {
          console.log("Web Share failed, falling back to download:", error);
          fallbackDownload(blob, fileName);
        });
      } else {
        // Fallback for older Android browsers
        fallbackDownload(blob, fileName);
      }
    } else {
      // Desktop browsers - use standard download
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      
      link.href = url;
      link.download = fileName;
      link.style.display = "none";
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error("Error downloading vCard:", error);
    throw new Error("Failed to download contact. Please try again.");
  }
}

/**
 * Fallback download method for Android devices
 */
function fallbackDownload(blob: Blob, filename: string): void {
  try {
    const url = URL.createObjectURL(blob);
    
    // Try to open in new window/tab (Android browsers often handle this better)
    const newWindow = window.open(url, '_blank');
    
    if (!newWindow) {
      // If popup blocked, try direct navigation
      window.location.href = url;
    }
    
    // Set timeout to clean up URL
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 10000);
  } catch (error) {
    console.error("Fallback download failed:", error);
    // Last resort: show instructions to user
    showAndroidInstructions();
  }
}

/**
 * Shows instructions for Android users when automatic download fails
 */
function showAndroidInstructions(): void {
  const instructions = `
    To save the contact on Android:
    1. The contact file will open in a new tab
    2. Tap the "Download" button in your browser
    3. Open the downloaded .vcf file
    4. Your contacts app will import the contact
  `;
  
  alert(instructions);
}

/**
 * Downloads the default contact vCard
 */
export function downloadMyContact(): void {
  downloadVCard(contactData, "Sam_Gmarvis_Contact.vcf");
}

/**
 * Alternative method for Android: Create a mailto link with contact info
 * This works better on some Android devices as a fallback
 */
export function shareContactViaEmail(): void {
  const contact = contactData;
  const subject = encodeURIComponent(`Contact: ${contact.displayName}`);
  const body = encodeURIComponent(`
Save my contact information:

Name: ${contact.displayName}
Title: ${contact.title}
Organization: ${contact.organization}
Email: ${contact.email}
Phone: ${contact.phone}
Website: ${contact.website}

Social Media:
LinkedIn: ${contact.socialLinks.linkedin}
GitHub: ${contact.socialLinks.github}
Twitter: ${contact.socialLinks.twitter}

${contact.description}
  `.trim());

  const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
  window.open(mailtoUrl, '_blank');
}

/**
 * Checks if the browser supports vCard downloads
 */
export function isVCardSupported(): boolean {
  if (typeof window === "undefined") return false;
  
  // Basic support check
  const hasBasicSupport = "Blob" in window && "URL" in window;
  
  // Enhanced support for Android
  const isAndroid = /Android/i.test(navigator.userAgent);
  const hasWebShare = "share" in navigator;
  
  // Android with Web Share API has good support
  if (isAndroid && hasWebShare) return true;
  
  // All other cases need basic blob support
  return hasBasicSupport;
}

/**
 * Gets the best download strategy for the current device
 */
export function getDownloadStrategy(): 'web-share' | 'standard' | 'fallback' {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const hasWebShare = "share" in navigator;
  
  if ((isAndroid || isMobile) && hasWebShare) {
    return 'web-share';
  } else if (!isAndroid && !isMobile) {
    return 'standard';
  } else {
    return 'fallback';
  }
}