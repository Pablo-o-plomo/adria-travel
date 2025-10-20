// app/api/uon/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, phone, comment } = data;

    // Проверяем поля
    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    // Формируем URL и параметры запроса в UON
    const API_KEY = process.env.UON_API_KEY || "88ub76SBP0qPFOKn1td61729529225";
    const API_URL = `https://api.u-on.ru/${API_KEY}/lead/create.json`;

    const body = {
      name,
      phone,
      comment,
      source: "Сайт Adria Travel",
    };

    // Отправляем запрос в UON
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    console.log("🔹 UON response:", result);

    // Проверяем успешность
    if (result?.lead_id) {
      return NextResponse.json({
        ok: true,
        message: "Заявка успешно отправлена",
        lead_id: result.lead_id,
      });
    } else {
      return NextResponse.json(
        { ok: false, message: result?.error || "UON отклонил запрос" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("❌ Ошибка при обращении к UON:", error);
    return NextResponse.json(
      { ok: false, message: "Ошибка на сервере", error: String(error) },
      { status: 500 }
    );
  }
}
