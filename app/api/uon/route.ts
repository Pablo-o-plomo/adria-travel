import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, comment } = await req.json();
    if (!name || !phone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 });
    }

    const accountId = process.env.UON_ACCOUNT_ID;
    const apiKey = process.env.UON_API_KEY;

    if (!accountId || !apiKey) {
      return NextResponse.json({ error: "UON не настроен (переменные окружения отсутствуют)" }, { status: 500 });
    }

    const payload = {
      key: apiKey,
      title: "Заявка с сайта Адриа Тревел",
      client_name: name,
      client_phone: phone,
      client_email: email || "",
      comment: comment || "",
      source: "Сайт Адриа Тревел"
    };

    const uonRes = await fetch(`https://api.u-on.ru/${accountId}/lead/add.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // timeout is not native in fetch; rely on platform default
    });

    const data = await uonRes.json().catch(() => ({}));

    if (!uonRes.ok) {
      return NextResponse.json({ error: data?.error || "UON отклонил запрос" }, { status: 502 });
    }

    return NextResponse.json(data);
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
