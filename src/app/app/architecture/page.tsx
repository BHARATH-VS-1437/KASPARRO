import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ArchitecturePage() {
    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">System Architecture</h1>
                    <p className="text-gray-600">
                        Understanding how Kasparro processes and analyzes your brand data
                    </p>
                </div>

                {/* Architecture Flow */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">1. Input Assembler</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-3">
                                Collects and aggregates brand data from multiple sources
                            </p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Website crawling</li>
                                <li>• Brand mention extraction</li>
                                <li>• Citation source analysis</li>
                                <li>• Content aggregation</li>
                                <li>• Entity relationship mapping</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">2. Context Pack</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-3">
                                Structures raw data into AI-analyzable format
                            </p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Data normalization</li>
                                <li>• Entity extraction</li>
                                <li>• Sentiment preprocessing</li>
                                <li>• Citation graph building</li>
                                <li>• Context enrichment</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                </div>

                {/* AI Audit Modules */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Audit Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                name: 'Entity Recognition',
                                description: 'Analyzes brand entity signals and knowledge graph presence',
                            },
                            {
                                name: 'Sentiment Analysis',
                                description: 'Evaluates sentiment across brand mentions and content',
                            },
                            {
                                name: 'Citation Quality',
                                description: 'Assesses authority and quality of citing sources',
                            },
                            {
                                name: 'E-E-A-T Signals',
                                description: 'Measures expertise, authoritativeness, and trust',
                            },
                            {
                                name: 'Content Relevance',
                                description: 'Evaluates content-query matching and intent alignment',
                            },
                            {
                                name: 'Brand Mention Context',
                                description: 'Analyzes context quality of brand mentions',
                            },
                            {
                                name: 'Keyword Coverage',
                                description: 'Measures non-branded keyword presence',
                            },
                        ].map((module) => (
                            <Card key={module.name} className="border-l-4 border-l-blue-500">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">{module.name}</h3>
                                    <p className="text-xs text-gray-600">{module.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Output Surfaces */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Output Surfaces</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Dashboard</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-3">
                                    High-level brand performance overview
                                </p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• AI Visibility Score</li>
                                    <li>• Trust / E-E-A-T Score</li>
                                    <li>• Keyword Coverage</li>
                                    <li>• Trend indicators</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Audit Interface</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-3">
                                    Detailed module-level analysis
                                </p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Module scores (0-100)</li>
                                    <li>• Key insights</li>
                                    <li>• Issues and flags</li>
                                    <li>• Prioritized recommendations</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Reports</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-3">
                                    Exportable audit reports
                                </p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Executive summaries</li>
                                    <li>• Detailed findings</li>
                                    <li>• Action plans</li>
                                    <li>• Progress tracking</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
