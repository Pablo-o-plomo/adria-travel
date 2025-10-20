export const metadata = { title: "Туры — Adria Travel" };

const tours = [
  { id: "turkey-antalya", title: "Анталья, 7 ночей, 5★", price: "от 95 000 ₽", img: "/images/turkey.jpg" },
  { id: "uae-dubai", title: "Дубай, 5 ночей, 4★", price: "от 110 000 ₽", img: "/images/uae.jpg" },
  { id: "thailand-phuket", title: "Пхукет, 10 ночей, 4★", price: "от 160 000 ₽", img: "/images/thailand.jpg" },
];

export default function Tours() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold">Каталог туров</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {tours.map((t) => (
          <div key={t.id} className="rounded-xl overflow-hidden border bg-white">
            <img src={t.img} alt={t.title} className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-brand font-medium mt-1">{t.price}</p>
              <a href="/contact" className="inline-block mt-3 text-sm px-3 py-2 rounded-lg bg-brand text-white">Оставить заявку</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
