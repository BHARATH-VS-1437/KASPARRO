import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Cpu, BarChart, FileCheck } from 'lucide-react';

export default function PlatformPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The Kasparro Platform
                        </h1>
                        <p className="text-xl text-gray-600">
                            A comprehensive AI-SEO auditing system designed for the future of search
                        </p>
                    </div>
                </section>

                {/* Input → Modules → Output Flow */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            How It Works
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="p-8">
                                    <Database className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Input</h3>
                                    <p className="text-gray-600 mb-4">
                                        We collect comprehensive data about your brand:
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Website content and structure</li>
                                        <li>• Brand mentions across the web</li>
                                        <li>• Citation sources and quality</li>
                                        <li>• Entity relationships</li>
                                        <li>• Content sentiment signals</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-8">
                                    <Cpu className="w-12 h-12 text-purple-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Modules</h3>
                                    <p className="text-gray-600 mb-4">
                                        7 specialized AI audit modules analyze:
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Entity Recognition</li>
                                        <li>• Sentiment Analysis</li>
                                        <li>• Citation Quality</li>
                                        <li>• E-E-A-T Signals</li>
                                        <li>• Content Relevance</li>
                                        <li>• Brand Mention Context</li>
                                        <li>• Keyword Coverage</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-8">
                                    <BarChart className="w-12 h-12 text-green-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Output</h3>
                                    <p className="text-gray-600 mb-4">
                                        You receive actionable insights:
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Module-specific scores (0-100)</li>
                                        <li>• Key insights and opportunities</li>
                                        <li>• Identified issues and flags</li>
                                        <li>• Prioritized recommendations</li>
                                        <li>• Estimated impact metrics</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Traditional Tools Fail */}
                <section className="py-20 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Why Traditional SEO Tools Fall Short
                        </h2>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        They Focus on Google, Not AI Systems
                                    </h3>
                                    <p className="text-gray-600">
                                        Traditional tools optimize for Google's algorithm. AI search engines like ChatGPT
                                        and Perplexity use fundamentally different ranking signals based on entity understanding,
                                        citation quality, and content context.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        They Miss Entity Recognition Signals
                                    </h3>
                                    <p className="text-gray-600">
                                        AI systems build knowledge graphs of entities and relationships. Traditional SEO
                                        tools don't measure how well your brand is recognized as a distinct entity or how
                                        it's connected to relevant topics and industries.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        They Don't Analyze AI Training Data
                                    </h3>
                                    <p className="text-gray-600">
                                        Your visibility in AI responses depends on how your brand appears in their training
                                        data. Kasparro analyzes the quality, context, and sentiment of brand mentions across
                                        sources that AI systems learn from.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        They Lack AI-Specific Recommendations
                                    </h3>
                                    <p className="text-gray-600">
                                        Generic SEO advice won't improve your AI search visibility. Kasparro provides
                                        specific, actionable recommendations tailored to how AI systems understand, cite,
                                        and recommend brands.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
