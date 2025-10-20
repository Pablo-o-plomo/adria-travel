"use client";

import { useState } from "react";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setMsg("");
    try {
      const res = await fetch("/api/uon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, comment }),
      });
      const data = await res.json();
      if (res.ok && (data?.id || data?.success)) {
        setOk(true);
        setMsg("Заявка отправлена. Мы свяжемся с вами.");
        setName(""); setPhone(""); setEmail(""); setComment("");
      } else {
        setOk(false);
        setMsg(data?.error || "Ошибка отправки. Попробуйте ещё раз.");
      }
    } catch (err:any) {
      setOk(false);
      setMsg(err?.message || "Сеть недоступна.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className={`grid gap-3 ${compact ? "" : "bg-white/70 backdrop-blur p-4 rounded-xl border"}`}>
      <input className="border rounded-lg px-3 py-2" placeholder="Имя" value={name} onChange={e=>setName(e.target.value)} required/>
      <input className="border rounded-lg px-3 py-2" placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)} required/>
      <input className="border rounded-lg px-3 py-2" placeholder="Email (необязательно)" value={email} onChange={e=>setEmail(e.target.value)} />
      <textarea className="border rounded-lg px-3 py-2" placeholder="Комментарий (страна, даты, бюджет)" value={comment} onChange={e=>setComment(e.target.value)} rows={compact ? 2 : 4}/>
      <button disabled={loading} className="rounded-lg px-4 py-2 bg-brand text-white hover:opacity-90 disabled:opacity-60">
        {loading ? "Отправляем..." : "Подобрать тур"}
      </button>
      {ok !== null && <p className={`text-sm ${ok ? "text-green-600" : "text-red-600"}`}>{msg}</p>}
    </form>
  );
}
