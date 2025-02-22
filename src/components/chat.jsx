"use client"

import { useState } from "react"
import { Send, Check, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

export default function CourseTrade() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "John",
      content: "Hi, I'm interested in trading my Advanced React course for your TypeScript course.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "Sarah",
      content: "That sounds interesting! Could you tell me more about your React course?",
      timestamp: "10:32 AM",
    },
  ])

  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setInputMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Chat Section */}
        <Card className="h-[800px] flex flex-col">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
            <CardDescription>Discuss course trade details</CardDescription>
          </CardHeader>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.sender === "You" ? "flex-row-reverse" : ""}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      message.sender === "You" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm font-medium">{message.sender}</p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>

        {/* Course Info & Trade Section */}
        <Card className="h-[800px]">
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
            <CardDescription>Review and manage course trade</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Your Course</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced TypeScript</CardTitle>
                    <CardDescription>
                      Master TypeScript with advanced concepts and real-world applications
                    </CardDescription>
                    <Badge className="w-fit">40 hours</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Advanced type system features</li>
                      <li>Generics and utility types</li>
                      <li>TypeScript with React</li>
                      <li>Project-based learning</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Offered Course</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced React</CardTitle>
                    <CardDescription>
                      Deep dive into React with advanced patterns and performance optimization
                    </CardDescription>
                    <Badge className="w-fit">35 hours</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Advanced hooks and patterns</li>
                      <li>Performance optimization</li>
                      <li>State management</li>
                      <li>Testing strategies</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="flex-1" variant="destructive">
                <X className="mr-2 h-4 w-4" />
                Reject Trade
              </Button>
              <Button className="flex-1">
                <Check className="mr-2 h-4 w-4" />
                Accept Trade
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

