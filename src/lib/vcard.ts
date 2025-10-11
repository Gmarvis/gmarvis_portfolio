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
    `N:${contact.name.split(' ').slice(-1)[0]};${contact.displayName};;;`,
    `ORG:${contact.organization}`,
    `TITLE:${contact.title}`,
    `EMAIL:${contact.email}`,
    `URL:${contact.website}`,
  ];

  // Add phone number if available
  if (contact.phone) {
    vcard.push(`TEL;TYPE=CELL:${contact.phone}`);
  }

  // Add social media links
  if (contact.socialLinks.linkedin) {
    vcard.push(`URL;TYPE=LinkedIn:${contact.socialLinks.linkedin}`);
  }
  if (contact.socialLinks.github) {
    vcard.push(`URL;TYPE=GitHub:${contact.socialLinks.github}`);
  }
  if (contact.socialLinks.twitter) {
    vcard.push(`URL;TYPE=Twitter:${contact.socialLinks.twitter}`);
  }

  // Add description/note if available
  if (contact.description) {
    vcard.push(`NOTE:${contact.description}`);
  }

  // Add location if available
  if (contact.location) {
    vcard.push(`ADR;TYPE=HOME:;;;;;;${contact.location.country}`);
  }

  vcard.push("END:VCARD");

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
    
    // Create download link
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    
    link.href = url;
    link.download = filename || `${contact.displayName.replace(/\s+/g, "_")}_contact.vcf`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading vCard:", error);
    // Fallback: copy to clipboard or show error message
    throw new Error("Failed to download contact. Please try again.");
  }
}

/**
 * Downloads the default contact vCard
 */
export function downloadMyContact(): void {
  downloadVCard(contactData, "Sam_Gmarvis_Contact.vcf");
}

/**
 * Checks if the browser supports vCard downloads
 */
export function isVCardSupported(): boolean {
  return typeof window !== "undefined" && "Blob" in window && "URL" in window;
}