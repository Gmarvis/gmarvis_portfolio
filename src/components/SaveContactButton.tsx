"use client";

import React, { useState } from "react";
import { UserPlus, Download, Check, AlertCircle } from "lucide-react";
import { downloadMyContact, isVCardSupported } from "@/lib/vcard";
import { trackPortfolioEvents } from "@/lib/analytics";

interface SaveContactButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

const SaveContactButton: React.FC<SaveContactButtonProps> = ({
  variant = "outline",
  size = "md",
  className = "",
  showIcon = true,
  children
}) => {
  const [status, setStatus] = useState<"idle" | "downloading" | "success" | "error">("idle");

  const handleSaveContact = async () => {
    // Check browser support
    if (!isVCardSupported()) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      setStatus("downloading");
      
      // Track analytics
      trackPortfolioEvents.contactSave();
      
      // Download vCard
      downloadMyContact();
      
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("Failed to save contact:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // Size classes
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // Variant classes
  const variantClasses = {
    default: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-border hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };

  // Icon size classes
  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  const getButtonContent = () => {
    switch (status) {
      case "downloading":
        return (
          <>
            {showIcon && <Download className={`${iconSizeClasses[size]} mr-2 animate-bounce`} />}
            {children || "Saving..."}
          </>
        );
      case "success":
        return (
          <>
            {showIcon && <Check className={`${iconSizeClasses[size]} mr-2 text-green-500`} />}
            {children || "Saved!"}
          </>
        );
      case "error":
        return (
          <>
            {showIcon && <AlertCircle className={`${iconSizeClasses[size]} mr-2 text-red-500`} />}
            {children || "Error"}
          </>
        );
      default:
        return (
          <>
            {showIcon && <UserPlus className={`${iconSizeClasses[size]} mr-2`} />}
            {children || "Save Contact"}
          </>
        );
    }
  };

  return (
    <button
      onClick={handleSaveContact}
      disabled={status === "downloading"}
      className={buttonClasses}
      aria-label="Save contact information to your device"
      title="Download contact card (vCard) to save in your contacts app"
    >
      {getButtonContent()}
    </button>
  );
};

export default SaveContactButton;