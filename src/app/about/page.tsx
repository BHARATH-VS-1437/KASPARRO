import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            About Kasparro
                        </h1>
                        <p className="text-xl text-gray-600">
                            Building the future of AI-native SEO
                        </p>
                    </div>
                </section>

                {/* Mission */}
                <section id="mission" className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex items-start gap-6 mb-12">
                            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    We believe the future of search is AI-powered. As ChatGPT, Perplexity, Gemini,
                                    and other AI systems become primary discovery channels, brands need new tools
                                    to understand and optimize their AI visibility.
                                </p>
                                <p className="text-lg text-gray-600">
                                    Kasparro's mission is to help brands thrive in the age of AI search by providing
                                    comprehensive, actionable insights into how AI systems understand, cite, and
                                    recommend their products and services.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Philosophy */}
                <section id="philosophy" className="py-20 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex items-start gap-6 mb-12">
                            <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Lightbulb className="w-8 h-8 text-purple-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Philosophy</h2>
                                <div className="space-y-4 text-lg text-gray-600">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">AI-First, Not AI-Adapted</h3>
                                        <p>
                                            We don't retrofit traditional SEO metrics for AI. Kasparro is built from the
                                            ground up to analyze the signals that matter for AI search: entity recognition,
                                            citation quality, content understanding, and trust signals.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Actionable Over Vanity Metrics</h3>
                                        <p>
                                            Every insight comes with specific, prioritized recommendations. We don't just
                                            tell you what's wrong—we tell you exactly how to fix it and what impact to expect.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Transparency and Education</h3>
                                        <p>
                                            We believe in helping brands understand AI search, not just optimizing for it.
                                            Our platform educates users on how AI systems work and why specific optimizations matter.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision */}
                <section id="vision" className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                                <Rocket className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision for AI-First Search</h2>
                                <p className="text-lg text-gray-600 mb-4">
                                    We're witnessing a fundamental shift in how people discover information. AI search
                                    engines don't just rank pages—they understand entities, synthesize information, and
                                    provide direct answers.
                                </p>
                                <p className="text-lg text-gray-600 mb-4">
                                    In this new paradigm, brand visibility depends on:
                                </p>
                                <ul className="space-y-2 text-lg text-gray-600 mb-4">
                                    <li>• How well AI systems recognize and understand your brand as an entity</li>
                                    <li>• The quality and authority of sources that cite you</li>
                                    <li>• The context and sentiment of brand mentions in training data</li>
                                    <li>• Your expertise, authoritativeness, and trustworthiness signals</li>
                                    <li>• How well your content matches AI query patterns and user intent</li>
                                </ul>
                                <p className="text-lg text-gray-600">
                                    Kasparro is building the infrastructure to measure, analyze, and optimize all of
                                    these signals—helping brands succeed in the AI-first future of search.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
