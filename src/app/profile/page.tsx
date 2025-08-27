import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm p-6">
        <div className="text-center space-y-6">
          {/* Profile Header */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Sam Gmarvis</h1>

            {/* Profile Picture Placeholder */}
            <div className="mx-auto w-32 h-32 rounded-2xl overflow-hidden border-2 border-border">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFTvxl-vglYDQ/profile-displayphoto-crop_800_800/B4EZh5pAgkGUAI-/0/1754387452276?e=1759363200&v=beta&t=vT0OyZc3bGs1tSjDNMnEa4Vc8hPUwhpjTf3qtpKCilE"
                alt="Sam Gmarvis Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="space-y-3">
            <Button asChild className="w-full h-12 text-base" variant="default">
              <Link
                href="https://linkedin.com/in/samgmarvis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </Link>
            </Button>

            <Button asChild className="w-full h-12 text-base bg-green-600 hover:bg-green-700" variant="default">
              <Link
                href="https://wa.me/+237677877572"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </Link>
            </Button>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Thanks for connecting! Looking forward to networking with you.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
