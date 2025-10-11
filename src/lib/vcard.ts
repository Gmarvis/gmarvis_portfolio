import { contactData } from "../../data";
import { saveAs } from 'file-saver';
// @ts-ignore - vcf package doesn't have proper TypeScript types
import VCF from 'vcf';

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
 * Generates vCard (VCF) content using the professional VCF library
 * @param contact - Contact information object
 * @returns vCard formatted string
 */
export function generateVCard(contact: ContactData): string {
  try {
    // Create a new vCard using the VCF library
    const vcard = new VCF();
    
    // Basic information
    vcard.set('fn', contact.displayName);
    vcard.set('n', contact.name.split(' ').reverse().join(';') + ';;;');
    vcard.set('org', contact.organization);
    vcard.set('title', contact.title);
    
    // Contact information
    vcard.set('email', contact.email, { type: 'INTERNET' });
    vcard.set('url', contact.website);
    
    // Phone number with proper Android formatting
    if (contact.phone) {
      vcard.set('tel', contact.phone, { type: ['CELL', 'VOICE'] });
    }
    
    // Social media links as additional URLs
    if (contact.socialLinks.linkedin) {
      vcard.add('url', contact.socialLinks.linkedin, { type: 'LinkedIn' });
    }
    if (contact.socialLinks.github) {
      vcard.add('url', contact.socialLinks.github, { type: 'GitHub' });
    }
    if (contact.socialLinks.twitter) {
      vcard.add('url', contact.socialLinks.twitter, { type: 'Twitter' });
    }
    
    // Description/note
    if (contact.description) {
      vcard.set('note', contact.description);
    }
    
    // Location information
    if (contact.location) {
      vcard.set('adr', `;;;;;;${contact.location.country}`, { type: 'HOME' });
    }
    
    // Return the formatted vCard string
    return vcard.toString();
  } catch (error) {
    console.error('Error generating vCard with VCF library:', error);
    // Fallback to manual generation if VCF library fails
    return generateVCardManual(contact);
  }
}

/**
 * Fallback manual vCard generation (our previous implementation)
 */
function generateVCardManual(contact: ContactData): string {
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

  if (contact.phone) {
    vcard.push(`TEL;TYPE=CELL:${contact.phone}`);
    vcard.push(`TEL;TYPE=VOICE:${contact.phone}`);
  }

  if (contact.socialLinks.linkedin) {
    vcard.push(`URL:${contact.socialLinks.linkedin}`);
  }
  if (contact.socialLinks.github) {
    vcard.push(`URL:${contact.socialLinks.github}`);
  }
  if (contact.socialLinks.twitter) {
    vcard.push(`URL:${contact.socialLinks.twitter}`);
  }

  if (contact.description) {
    const cleanDescription = contact.description.replace(/[,;\\]/g, '\\$&');
    vcard.push(`NOTE:${cleanDescription}`);
  }

  if (contact.location) {
    vcard.push(`ADR;TYPE=HOME:;;;;;;${contact.location.country}`);
  }

  vcard.push("END:VCARD");
  return vcard.join("\r\n");
}

/**
 * Creates and downloads a vCard file using file-saver for better compatibility
 * @param contact - Contact information object
 * @param filename - Optional filename (defaults to contact name)
 */
export function downloadVCard(contact: ContactData, filename?: string): void {
  try {
    const vcardContent = generateVCard(contact);
    const fileName = filename || `${contact.displayName.replace(/\s+/g, "_")}_contact.vcf`;
    
    // Create blob with proper MIME type for vCard
    const blob = new Blob([vcardContent], { 
      type: "text/vcard;charset=utf-8" 
    });
    
    // Check if it's a mobile device
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    if (isMobile && 'share' in navigator && navigator.canShare) {
      // Try Web Share API for mobile devices (best experience)
      try {
        const file = new File([vcardContent], fileName, { type: "text/vcard" });
        if (navigator.canShare({ files: [file] })) {
          navigator.share({
            files: [file],
            title: `${contact.displayName} Contact`,
            text: `Save ${contact.displayName}'s contact information`
          }).catch((error) => {
            console.log("Web Share failed, falling back to file-saver:", error);
            // Fallback to file-saver
            saveAs(blob, fileName);
          });
          return;
        }
      } catch (shareError) {
        console.log("Web Share API failed:", shareError);
      }
    }
    
    // Use file-saver for all other cases (handles Android/iOS/Desktop)
    saveAs(blob, fileName);
    
  } catch (error) {
    console.error("Error downloading vCard:", error);
    // Last resort fallback
    showAndroidInstructions();
    throw new Error("Failed to download contact. Please try again.");
  }
}

/**
 * Downloads the default contact vCard using file-saver
 */
export function downloadMyContact(): void {
  downloadVCard(contactData, "Sam_Gmarvis_Contact.vcf");
}

/**
 * Alternative method: Create a mailto link with contact info
 * Useful as a universal fallback for all devices
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
 * Shows instructions for manual contact saving when all else fails
 */
function showAndroidInstructions(): void {
  const instructions = `
    To save the contact:
    1. The contact file should download automatically
    2. If not, check your browser's download folder
    3. Tap the .vcf file to import to your contacts
    4. Alternatively, copy the contact information manually
  `;
  
  alert(instructions);
}

/**
 * Checks if the browser supports vCard downloads with enhanced detection
 */
export function isVCardSupported(): boolean {
  if (typeof window === "undefined") return false;
  
  // Basic support check
  const hasBasicSupport = "Blob" in window && "URL" in window;
  
  // file-saver provides excellent cross-platform support
  // so we mainly just need basic blob support
  return hasBasicSupport;
}

/**
 * Gets the best download strategy for the current device
 */
export function getDownloadStrategy(): 'web-share' | 'file-saver' | 'email-fallback' {
  if (typeof window === "undefined") return 'file-saver';
  
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const hasWebShare = "share" in navigator;
  const hasCanShare = "canShare" in navigator;
  
  // Prefer Web Share API on mobile devices that support it well
  if (isMobile && hasWebShare && hasCanShare) {
    return 'web-share';
  }
  
  // file-saver handles most cases excellently
  if ("Blob" in window) {
    return 'file-saver';
  }
  
  // Last resort
  return 'email-fallback';
}