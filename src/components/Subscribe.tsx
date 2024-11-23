import { div } from 'framer-motion/client'
import { useState } from 'react'

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-medium text-[#9d8189] text-center mb-8">
        BE THE FIRST TO KNOW
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#9d8189]"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[#9d8189] text-white font-medium hover:bg-[#8a717a] transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}