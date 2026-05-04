'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const SortControls = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const current = searchParams.get('sort');

    const handleSort = (value) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
                Sort by Price {current === 'asc' ? '↑' : current === 'desc' ? '↓' : ''}
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
            >
                <li>
                    <button onClick={() => handleSort('asc')}>
                        <FaArrowDown /> Low to High
                    </button>
                </li>
                <li>
                    <button onClick={() => handleSort('desc')}>
                        <FaArrowUp /> High to Low
                    </button>
                </li>
                {current && (
                    <li>
                        <button onClick={() => handleSort('')}>
                            <MdCancel /> Clear
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SortControls;