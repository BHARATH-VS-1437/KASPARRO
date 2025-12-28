import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const comparisons = [
    {
        feature: 'AI Search Optimization',
        traditional: false,
        aiSeo: true,
    },
    {
        feature: 'Entity Recognition Analysis',
        traditional: false,
        aiSeo: true,
    },
    {
        feature: 'Citation Quality Assessment',
        traditional: false,
        aiSeo: true,
    },
    {
        feature: 'AI Training Data Visibility',
        traditional: false,
        aiSeo: true,
    },
    {
        feature: 'Keyword Rankings',
        traditional: true,
        aiSeo: true,
    },
    {
        feature: 'Backlink Analysis',
        traditional: true,
        aiSeo: true,
    },
];

export function WhyAISEO() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why AI-SEO Matters
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Traditional SEO tools focus on Google rankings. But AI search engines like ChatGPT,
                            Perplexity, and Gemini work differently—they rely on entity recognition, citation quality,
                            and content understanding.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Kasparro analyzes the signals that matter for AI search: how your brand is understood,
                            cited, and recommended by AI systems.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">AI-First Approach</h3>
                                    <p className="text-sm text-gray-600">Optimized for how AI systems understand and cite brands</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Actionable Insights</h3>
                                    <p className="text-sm text-gray-600">Specific recommendations to improve AI visibility</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Future-Proof Strategy</h3>
                                    <p className="text-sm text-gray-600">Prepare for the shift to AI-powered search</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Traditional SEO vs AI-SEO
                            </h3>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4 pb-3 border-b font-semibold text-sm">
                                    <div>Feature</div>
                                    <div className="text-center">Traditional</div>
                                    <div className="text-center">AI-SEO</div>
                                </div>
                                {comparisons.map((item) => (
                                    <div key={item.feature} className="grid grid-cols-3 gap-4 items-center text-sm">
                                        <div className="text-gray-700">{item.feature}</div>
                                        <div className="flex justify-center">
                                            {item.traditional ? (
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-gray-300" />
                                            )}
                                        </div>
                                        <div className="flex justify-center">
                                            {item.aiSeo ? (
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-gray-300" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
