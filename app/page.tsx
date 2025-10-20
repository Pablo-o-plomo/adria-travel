import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <section className="relative">
        <img src="/images/banner.jpg" alt="Море и путешествия" className="w-full h-[420px] object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">Adria Travel — туры, визы, идеальный отдых</h1>
            <p className="mt-4 max-w-xl text-white/90">Подберём путешествие за 15 минут: отели, перелёты, страховки, визы. Бесплатная консультация.</p>
            <div className="mt-6 max-w-md">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Популярные направления</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Турция", img: "/images/turkey.jpg", price: "от 65 000 ₽"},
            { title: "ОАЭ", img: "/images/uae.jpg", price: "от 85 000 ₽"},
            { title: "Таиланд", img: "/images/thailand.jpg", price: "от 120 000 ₽"},
          ].map((c) => (
            <div key={c.title} className="rounded-xl overflow-hidden border bg-white">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{c.title}</h3>
                  <span className="text-brand font-medium">{c.price}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Перелёт + отель + трансфер</p>
                <div className="mt-3">
                  <a href="/tours" className="text-sm px-3 py-2 rounded-lg bg-brand text-white inline-block">Смотреть туры</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Почему мы</h2>
            <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
              <li>Официальный агент. Работаем прозрачно по договору.</li>
              <li>Подбор под бюджет и даты. Экономим время и деньги.</li>
              <li>Поддержка 24/7. Только проверенные партнёры.</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl border">
            <h3 className="font-semibold">Оставьте заявку</h3>
            <p className="text-sm text-slate-500 mb-3">Мы перезвоним в течение 10 минут</p>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
