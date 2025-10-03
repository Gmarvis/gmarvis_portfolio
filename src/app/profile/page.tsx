import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, MessageCircle, Github, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { imageLinks } from "@/lib/images"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Navigation back */}
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        <Card className="w-full p-6">
          <div className="text-center space-y-6">
            {/* Profile Header */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-foreground">Sam Gmarvis Njong</h1>
              <p className="text-sm text-muted-foreground">Software Engineer | Entrepreneur</p>

              {/* Profile Picture */}
              <div className="mx-auto w-32 h-32 rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src={imageLinks.profilePicture}
                  alt="Sam Gmarvis Profile Picture"
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                  priority
                />
              </div>
            </div>

            {/* Quick Bio */}
            <div className="px-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Entrepreneur & Startup Founder with expertise in fullstack development.
              </p>
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

              <Button asChild className="w-full h-12 text-base" variant="outline">
                <Link
                  href="https://github.com/gmarvis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
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

              <Button asChild className="w-full h-12 text-base" variant="outline">
                <Link
                  href="mailto:sam.gmarvis@gmail.com"
                  className="flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Link>
              </Button>
            </div>

            {/* Visit Portfolio Link */}
            <div className="pt-4 border-t border-border">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Visit Full Portfolio →
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}