import React from 'react';

interface BookingItemProps {
    image: string;
    title: string;
}

const BookingItem: React.FC<BookingItemProps> = ({ image, title }) => {
    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <img className="w-30 h-30 object-cover object-center px-10 py-10" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">{title}</h2>
                <button className="rounded-2xl bg-[green] text-white p-2">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookingItem;
