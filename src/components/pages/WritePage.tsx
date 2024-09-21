import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bold, Italic, Link, Type, Quote } from "lucide-react"

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleFormatting = (format: string) => {
    // This is a simplified example. In a real app, you'd implement more sophisticated formatting.
    switch (format) {
      case 'bold':
        setContent(content + '**Bold Text**')
        break
      case 'italic':
        setContent(content + '*Italic Text*')
        break
      case 'link':
        setContent(content + '[Link Text](https://example.com)')
        break
      case 'header':
        setContent(content + '\n# Header')
        break
      case 'quote':
        setContent(content + '\n> Quote')
        break
      default:
        break
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <img src="/placeholder.svg?height=40&width=40" alt="Medium Logo" className="h-10" />
        <Button variant="outline">Publish</Button>
      </header>
      <Input 
        type="text" 
        placeholder="Title" 
        className="text-4xl font-bold mb-4 border-none focus:ring-0"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex space-x-2 mb-4">
        <Button variant="ghost" size="sm" onClick={() => handleFormatting('bold')}><Bold className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormatting('italic')}><Italic className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormatting('link')}><Link className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormatting('header')}><Type className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm" onClick={() => handleFormatting('quote')}><Quote className="h-4 w-4" /></Button>
      </div>
      <textarea
        className="w-full h-64 p-2 border rounded"
        placeholder="Tell your story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  )
}