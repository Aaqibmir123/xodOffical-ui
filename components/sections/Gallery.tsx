export default function Gallery() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <p className="text-amber-600 font-semibold tracking-widest text-sm uppercase mb-2">Gallery</p>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-12">Our Journey & Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {images.map((img, index) => (
            <div key={index} className="h-48 rounded-xl overflow-hidden shadow-sm border border-zinc-200 group relative">
              <img src={img} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}