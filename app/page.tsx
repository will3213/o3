'use client'
import Image from 'next/image'
import Link from 'next/link'
import YouTube from 'react-youtube'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const videoOpts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            Ask OpenAI O3/O1 | Latest OpenAI Models
          </h1>
          <div className="max-w-4xl mx-auto mb-12">
            {isMounted && (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <YouTube
                  videoId="5ljJ45TYtpc"
                  opts={videoOpts}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            )}
          </div>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience OpenAI O3 and O1, the next frontier in AI reasoning and programming. With over 20% improved accuracy and groundbreaking 75.7% score in ARC-AGI tests, OpenAI models are revolutionizing AI capabilities.
          </p>
          <div className="flex justify-center">
            <Link 
              href="https://monica.im/en/home?model=openai_o_1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Ask OpenAI O3/O1 Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose OpenAI O3/O1 Models?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Exceptional Programming</h3>
              <p className="text-gray-600">
                OpenAI O3 achieves 71.7% accuracy in HumanEval-Verified tests, with an impressive ELO rating of 2727 on Codeforces, surpassing previous OpenAI models.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Advanced Reasoning</h3>
              <p className="text-gray-600">
                Experience breakthrough performance with OpenAI O3's 87.7% accuracy in GPQA Diamond tests and 96.7% in mathematical reasoning challenges.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Adaptive Processing</h3>
              <p className="text-gray-600">
                OpenAI O3 mini introduces flexible processing speeds with low, medium, and high options, optimizing performance for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            OpenAI O3 vs Previous Models
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">OpenAI O3/O1</h3>
                <ul className="space-y-3">
                  <li>✓ 71.7% accuracy in programming tasks</li>
                  <li>✓ 87.7% GPQA Diamond score</li>
                  <li>✓ 75.7% ARC-AGI benchmark</li>
                  <li>✓ Multi-step reasoning capabilities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Previous Models</h3>
                <ul className="space-y-3">
                  <li>× Lower programming accuracy</li>
                  <li>× Basic reasoning capabilities</li>
                  <li>× Limited processing options</li>
                  <li>× Fixed computation speed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-600">
                OpenAI O3 excels in code generation, debugging, and optimization, achieving top-tier performance in competitive programming platforms.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Scientific Research</h3>
              <p className="text-gray-600">
                Leverage OpenAI O3's advanced reasoning for complex scientific problems, with accuracy surpassing human expert levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Experience the Future with OpenAI O3
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join the early access program before January 10, 2025, and be part of shaping the future of AI with OpenAI O3 and O1 models.
          </p>
          <Link 
            href="https://openai.com"
            target="_blank"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>
    </main>
  )
}
