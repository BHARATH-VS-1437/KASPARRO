import React from 'react';

export function Logo({ className }: { className?: string }) {
    return (
        <div className={className}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kasparro
            </span>
        </div>
    );
}
