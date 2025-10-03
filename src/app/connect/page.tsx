"use client"
import { useEffect, useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import QRCode from "qrcode"
import { Loader2, RefreshCw } from "lucide-react"

export default function ConnectPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)

  const generateQRCode = useCallback(async () => {
    if (!isMounted) return
    
    try {
      setIsLoading(true)
      setError(null)
      
      // Generate QR code that points to the profile page
      const profileUrl = `${window.location.origin}/profile`
      
      // Generate as data URL to avoid canvas flash
      const dataUrl = await QRCode.toDataURL(profileUrl, {
        width: 280,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
        errorCorrectionLevel: 'M',
      })
      
      setQrDataUrl(dataUrl)
      // Don't set loading to false immediately, let the image onLoad handle it
    } catch (err) {
      console.error('Failed to generate QR code:', err)
      setError('Failed to generate QR code')
      setIsLoading(false)
    }
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      generateQRCode()
    }
  }, [isMounted, generateQRCode])

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <Card className="w-full p-8 text-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Connect with Me</h1>
                <p className="text-muted-foreground text-sm">
                  Scan the QR code to access my social profiles and contact information
                </p>
              </div>
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-border w-[312px] h-[312px] flex items-center justify-center">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Navigation back */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            ← Back to Portfolio
          </button>
        </div>

        <Card className="w-full p-8 text-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Connect with Me</h1>
              <p className="text-muted-foreground text-sm">
                Scan the QR code to access my social profiles and contact information
              </p>
            </div>

            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-border relative w-[312px] h-[312px] flex items-center justify-center">
                {isLoading && !qrDataUrl && (
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                )}
                
                {error && (
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-destructive mb-2">{error}</p>
                    <button
                      onClick={generateQRCode}
                      className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Try again
                    </button>
                  </div>
                )}
                
                {qrDataUrl && (
                  <div className="transition-opacity duration-500 ease-in-out" style={{ opacity: isLoading ? 0 : 1 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={qrDataUrl} 
                      alt="QR Code to connect with Sam Gmarvis"
                      className="max-w-full h-auto"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                Point your camera at the QR code to get started
              </p>
              <p className="text-xs text-muted-foreground opacity-70">
                or visit <span className="font-mono">{typeof window !== 'undefined' ? window.location.origin : ''}/profile</span>
              </p>
            </div>

            {/* Alternative contact methods */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Alternative ways to connect:</p>
              <div className="flex justify-center gap-4 text-sm">
                <a 
                  href="mailto:sam.gmarvis@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/samgmarvis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/gmarvis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
