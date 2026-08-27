export interface TelegramMessageParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
}

export async function sendTelegramNotification(params: TelegramMessageParams): Promise<boolean> {
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return false;
  }

  try {
    const text = [
      "🚀 *[PORTFOLIO] CÓ LIÊN HỆ MỚI!*",
      "",
      `👤 *Họ tên:* ${params.name}`,
      `📧 *Email:* ${params.email}`,
      `💼 *Loại dự án:* ${params.projectType || "Chưa xác định"}`,
      `📌 *Tiêu đề:* ${params.subject}`,
      "",
      "📝 *Nội dung tin nhắn:*",
      params.message,
      "",
      `⏰ *Thời gian:* ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}`,
    ].join("\n");

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    return res.ok;
  } catch (error) {
    console.error("Telegram notification error:", error);
    return false;
  }
}
