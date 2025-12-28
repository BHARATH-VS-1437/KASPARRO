import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, Shield, FileText, Target, Link as LinkIcon, Search } from 'lucide-react';

const modules = [
    {
        icon: Brain,
        name: 'Entity Recognition',
        description: 'How AI systems identify and understand your brand as a distinct entity in their knowledge graphs.',
    },
    {
        icon: MessageSquare,
        name: 'Sentiment Analysis',
        description: 'Evaluates the sentiment and tone of content associated with your brand across AI training data.',
    },
    {
        icon: LinkIcon,
        name: 'Citation Quality',
        description: 'Assesses the quality and authority of sources that cite your brand in AI responses.',
    },
    {
        icon: Shield,
        name: 'E-E-A-T Signals',
        description: 'Measures Experience, Expertise, Authoritativeness, and Trustworthiness signals.',
    },
    {
        icon: FileText,
        name: 'Content Relevance',
        description: 'Evaluates how well your content matches user intent and AI query patterns.',
    },
    {
        icon: Target,
        name: 'Brand Mention Context',
        description: 'Analyzes the context and quality of how your brand is mentioned across the web.',
    },
    {
        icon: Search,
        name: 'Keyword Coverage',
        description: 'Measures coverage of non-branded keywords relevant to your industry and offerings.',
    },
];

export function CoreModules() {
    return (
        <section id="modules" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        7 AI Audit Modules
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive analysis across all dimensions of AI search visibility
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module) => {
                        const Icon = module.icon;
                        return (
                            <Card key={module.name} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {module.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {module.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
