"use client";

const images = [
    "/event2.png",
    "/event3.png",
    "/event.png",
    "/event.png",
    "/event3.png",
    "event2.png"
];

const GalleryGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
                    <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">View</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryGrid;
