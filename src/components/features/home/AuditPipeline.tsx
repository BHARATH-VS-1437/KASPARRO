import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Database, Cpu, FileCheck, BarChart } from 'lucide-react';

const steps = [
    {
        icon: Database,
        title: 'Input Assembler',
        description: 'Collects brand data, content, citations, and web presence signals',
    },
    {
        icon: Cpu,
        title: 'Context Pack',
        description: 'Structures data into AI-readable context for comprehensive analysis',
    },
    {
        icon: FileCheck,
        title: 'AI Audit Modules',
        description: '7 specialized modules analyze different aspects of AI visibility',
    },
    {
        icon: BarChart,
        title: 'Actionable Insights',
        description: 'Detailed reports with scores, issues, and prioritized recommendations',
    },
];

export function AuditPipeline() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How Kasparro Works
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our AI audit pipeline transforms your brand data into actionable insights
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.title} className="relative">
                                <Card className="h-full">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-blue-400" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
