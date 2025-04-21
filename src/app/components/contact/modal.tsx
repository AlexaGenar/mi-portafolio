"use client"

import { useState } from "react"
import { Mail, Copy, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@radix-ui/react-tabs"
import { Button } from "../ui/button"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = {
    gmail: "gagomez293@gmail.com",
    whatsapp: "+50660672003",
  }

  const copyToClipboard = (type: keyof typeof contactInfo) => {
    navigator.clipboard.writeText(contactInfo[type])
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-md p-6"
      >
        {/* Header */}
        <DialogHeader className="space-y-1 mb-4">
          <DialogTitle className="text-xl font-bold text-pink-500">
            Información de Contacto
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Puedes contactarme a través de los siguientes medios.
          </DialogDescription>
        </DialogHeader>

        {/* Tabs */}
        <Tabs defaultValue="gmail" className="w-full space-y-4">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <TabsTrigger value="gmail">Gmail</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          </TabsList>

          {/* Gmail */}
          <TabsContent value="gmail">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <Mail className="h-5 w-5 text-red-500" />
                  <span>{contactInfo.gmail}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard("gmail")}
                >
                  {copied === "gmail" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(`mailto:${contactInfo.gmail}`, "_blank")
                }
              >
                Enviar correo
              </Button>
            </div>
          </TabsContent>

          {/* WhatsApp */}
          <TabsContent value="whatsapp">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.11 1.6 5.92L0 24l6.29-1.65A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22a9.87 9.87 0 01-5.1-1.38l-.36-.21-3.73.98.99-3.63-.24-.37A9.87 9.87 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.07-7.75l-1.37-.69c-.18-.09-.38-.14-.58-.14-.3 0-.59.12-.8.33l-.62.63a7.12 7.12 0 01-3.56-3.56l.63-.62c.21-.21.33-.5.33-.8 0-.2-.05-.4-.14-.58l-.69-1.37a1.02 1.02 0 00-.9-.56c-.5 0-.96.28-1.2.72a2.6 2.6 0 00-.25 1.17c0 .2.03.4.1.59 1.05 2.82 3.3 5.06 6.12 6.12.19.07.39.1.59.1.4 0 .8-.08 1.17-.25.44-.24.72-.7.72-1.2 0-.38-.22-.74-.56-.9z" />
                  </svg>
                  <span>{contactInfo.whatsapp}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard("whatsapp")}
                >
                  {copied === "whatsapp" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`,
                    "_blank"
                  )
                }
              >
                Enviar mensaje
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
