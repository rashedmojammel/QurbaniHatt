'use client';
import { useRouter, usePathname } from 'next/navigation';

const SortControls = ({ current }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSort = (value) => {
        const params = new URLSearchParams();
        if (value) params.set('sort', value);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by price:</span>
            <button
                onClick={() => handleSort('asc')}
                className={`btn btn-sm ${current === 'asc' ? 'btn-primary' : 'btn-outline'}`}
            >
                ↑ Low to High
            </button>
            <button
                onClick={() => handleSort('desc')}
                className={`btn btn-sm ${current === 'desc' ? 'btn-primary' : 'btn-outline'}`}
            >
                ↓ High to Low
            </button>
            {current && (
                <button
                    onClick={() => handleSort('')}
                    className="btn btn-sm btn-ghost text-gray-400"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default SortControls;