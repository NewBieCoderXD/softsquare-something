import React from 'react';

interface BookingItemProps {
    image: string;
    title: string;
}

const BookingItem: React.FC<BookingItemProps> = ({ image, title }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
                <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BookingItem;
