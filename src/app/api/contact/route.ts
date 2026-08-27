import { mkdir, readFile, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

const MESSAGES_FILE = join(process.cwd(), "data", "messages.json");
const TO_EMAIL =
  process.env.NEXT_PUBLIC_TO_EMAIL || "hoanghoanpineapple04@gmail.com";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  createdAt: string;
  userAgent?: string;
}

async function getStoredMessages(): Promise<ContactMessage[]> {
  try {
    const data = await readFile(MESSAGES_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    return [];
  }
}

async function saveMessage(msg: ContactMessage): Promise<boolean> {
  try {
    const dataDir = join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    const messages = await getStoredMessages();
    messages.unshift(msg);
    await writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to save contact message locally:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, projectType } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ Tên, Email và Nội dung tin nhắn." },
        { status: 400 },
      );
    }

    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || "Liên hệ từ Portfolio").trim(),
      message: String(message).trim(),
      projectType: String(projectType || "General").trim(),
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || undefined,
    };

    await saveMessage(newMessage);

    let emailSent = false;

    const web3Key =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (web3Key) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3Key,
            name: newMessage.name,
            email: newMessage.email,
            subject: `[Portfolio Contact] ${newMessage.subject}`,
            message: `Họ tên: ${newMessage.name}\nEmail: ${newMessage.email}\nLoại dự án: ${newMessage.projectType}\n\nNội dung:\n${newMessage.message}`,
            to_email: TO_EMAIL,
          }),
        });
        if (w3Res.ok) emailSent = true;
      } catch (e) {
        console.error("Web3Forms forward failed:", e);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Gửi tin nhắn liên hệ thành công.",
      emailSent,
      data: newMessage,
    });
  } catch (error: unknown) {
    console.error("Contact API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Lỗi xử lý gửi liên hệ.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET() {
  const messages = await getStoredMessages();
  return NextResponse.json({
    total: messages.length,
    messages,
  });
}
