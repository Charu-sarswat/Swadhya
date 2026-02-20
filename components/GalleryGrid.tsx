"use client";

const images = [
    { src: "/event2.png", className: "col-span-1 row-span-1" },
    { src: "/event3.png", className: "col-span-1 row-span-2" },
    { src: "/event.png", className: "col-span-2 row-span-1" },
    { src: "/event.png", className: "col-span-1 row-span-1" },
    { src: "/event3.png", className: "col-span-1 row-span-1" },
    { src: "/event2.png", className: "col-span-1 row-span-1" },
    { src: "/event.png", className: "col-span-2 row-span-2" },
    { src: "/event2.png", className: "col-span-1 row-span-1" },
    { src: "/event3.png", className: "col-span-1 row-span-1" },
];

const GalleryGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[120px] md:auto-rows-[200px] grid-flow-dense">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${img.className}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <img
                        src={img.src}
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
