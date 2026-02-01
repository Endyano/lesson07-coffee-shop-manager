import Image from 'next/image';

// Header Component - displays the app title and image
export default function Header() {
    return (
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#5D4E37] mb-2">
                ☕ Coffee Shop Manager
            </h1>
            <Image
                src="/coffee-shop-manager-thumbnail.png"
                alt="Coffee Shop Manager"
                width={900}
                height={200}
                className="mx-auto mb-4 rounded-lg"
            />
        </header>
    );
}
