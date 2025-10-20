import LeadForm from "@/components/LeadForm";

export const metadata = { title: "Контакты — Adria Travel" };

export default function Contact() {
  return (
    <div className="container py-10 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-semibold">Контакты</h1>
        <p className="mt-2 text-slate-600">Adria Travel — туристическое агентство.</p>
        <div className="mt-4 space-y-2 text-sm">
          <p>Телефон: <a href="tel:+7" className="text-brand">+7 (___) ___-__-__</a></p>
          <p>Telegram: <a href="https://t.me/" className="text-brand">@adria_travel</a></p>
          <p>Email: <a href="mailto:info@adria.travel" className="text-brand">info@adria.travel</a></p>
          <p>Адрес: Москва</p>
        </div>
        <div className="mt-6">
          <iframe
            className="w-full h-64 rounded-xl border"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A&source=constructor"
            title="Карта"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3">Оставьте заявку</h2>
        <LeadForm />
      </div>
    </div>
  );
}
