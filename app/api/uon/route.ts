import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, comment } = await req.json();

    // 🔑 Данные для UON.Travel
    const apiKey = "88ub76SBP0qPFOKn1td61729529225";
    const accountId = "61098";

    // 🚀 Формируем тело запроса
    const payload = {
      key: apiKey,
      title: "Заявка с сайта Adria Travel",
      client_name: name,
      client_phone: phone,
      client_email: email || "",
      note: comment || "",
      source: "Adria Travel — сайт",
    };

    // 📡 Отправляем в UON.Travel
    const res = await fetch(`https://api.u-on.ru/${accountId}/lead/add.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log("✅ Ответ UON:", result);

    if (result.error) {
      throw new Error(result.error);
    }

    return NextResponse.json({ ok: true, message: "Заявка успешно отправлена!", result });
  } catch (error: any) {
    console.error("❌ Ошибка при отправке:", error);
    return NextResponse.json(
      { ok: false, message: error.message || "Ошибка при отправке данных в UON" },
      { status: 500 }
    );
  }
}
