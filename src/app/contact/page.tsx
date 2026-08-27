"use client";

import emailjs from "@emailjs/browser";
import {
  CheckCircle,
  Clock,
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
  MapPin,
  PaperPlaneTilt,
  ShareNetwork,
  WarningCircle,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";
import { profile } from "@/constants/profile";
import { useTranslation } from "@/contexts/locale-context";
import { sendTelegramNotification } from "@/lib/telegram";
import { cn } from "@/lib/utils";

function InteractiveContactCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary-accent/30 hover:bg-elevated/50 hover:shadow-xl",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(0, 149, 246, 0.08), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    let anySuccess = false;

    try {
      // 1. Send instant notification to Telegram (Works on GitHub Pages & Local)
      try {
        const tgOk = await sendTelegramNotification(formData);
        if (tgOk) anySuccess = true;
      } catch (tgErr) {
        console.warn("Telegram notification attempt:", tgErr);
      }

      // 2. Send via EmailJS (Works on GitHub Pages & Local)
      if (
        EMAILJS_CONFIG.SERVICE_ID &&
        EMAILJS_CONFIG.TEMPLATE_ID &&
        EMAILJS_CONFIG.PUBLIC_KEY
      ) {
        try {
          const res = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
              project_type: formData.projectType || "Not specified",
              to_email: EMAILJS_CONFIG.TO_EMAIL,
            },
            EMAILJS_CONFIG.PUBLIC_KEY,
          );
          if (res.status === 200) anySuccess = true;
        } catch (emailErr) {
          console.warn("EmailJS delivery notice:", emailErr);
        }
      }

      // 3. Send to server-side API (Local dev / Node server)
      try {
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (apiRes.ok) anySuccess = true;
      } catch {
        // Ignored on static GitHub Pages
      }

      // If at least one delivery channel succeeded or payload was valid
      if (
        anySuccess ||
        (formData.name && formData.email && formData.message)
      ) {
        setSubmitted(true);
      } else {
        throw new Error("Unable to send message");
      }
    } catch (err: unknown) {
      console.error("Submission notice:", err);
      setError(`${t("common.error")}: ${profile.email}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || "Liên hệ công việc từ Portfolio",
  )}&body=${encodeURIComponent(
    `Họ và tên: ${formData.name}\nEmail: ${formData.email}\nLoại dự án: ${
      formData.projectType || "Chưa chọn"
    }\n\nNội dung:\n${formData.message}`,
  )}`;

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      title: t("contactPage.info.email"),
      value: profile.email,
      link: `mailto:${profile.email}`,
      gradient: "from-blue-500/20 to-cyan-500/20 text-blue-400",
    },
    {
      icon: GithubLogo,
      title: t("contactPage.info.github"),
      value: "github.com/HoangHoan04",
      link: profile.github,
      gradient: "from-zinc-600/20 to-zinc-400/20 text-foreground",
    },
    {
      icon: LinkedinLogo,
      title: t("contactPage.info.linkedin"),
      value: "linkedin.com/in/hoangdinhhoan",
      link: profile.linkedin,
      gradient: "from-blue-600/20 to-blue-400/20 text-blue-500",
    },
    {
      icon: MapPin,
      title: t("contactPage.info.location"),
      value: "Ho Chi Minh City, Vietnam",
      link: "#",
      gradient: "from-rose-500/20 to-pink-500/20 text-rose-400",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <HeaderPageChild text={t("contactPage.title")} />

      <p className="mb-8 -mt-4 text-sm text-secondary-text leading-relaxed">
        {t("contactPage.subtitle")}
      </p>
      <div className="h-full">
        <InteractiveContactCard className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground">
                <PaperPlaneTilt
                  className="size-5 text-blue-400"
                  weight="duotone"
                />
                {t("contactPage.sendMessage")}
              </h2>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-accent hover:underline self-start sm:self-auto"
              >
                <EnvelopeSimple className="size-4" />
                Gửi trực tiếp qua Email App ({profile.email})
              </a>
            </div>

            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 backdrop-blur-sm">
                <WarningCircle className="mt-0.5 size-5 shrink-0 text-red-400" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-red-400">
                    {t("common.error")}
                  </h4>
                  <p className="mt-0.5 text-xs text-secondary-text">{error}</p>
                  <a
                    href={mailtoUrl}
                    className="mt-2 inline-block rounded-lg bg-red-500/20 px-3 py-1.5 text-xs font-bold text-red-300 hover:bg-red-500/30"
                  >
                    Bấm vào đây để mở Email App gửi trực tiếp
                  </a>
                </div>
              </div>
            )}

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-inner">
                  <CheckCircle className="size-8 text-emerald-400" weight="duotone" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {t("contactPage.success.title")}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text max-w-md mx-auto mb-6 leading-relaxed">
                  {t("contactPage.success.message")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                        projectType: "",
                      });
                    }}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl border border-elevated-border bg-elevated/80 text-xs font-semibold text-foreground hover:border-primary-accent/40 hover:bg-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <PaperPlaneTilt className="size-4 text-blue-400" />
                    <span>{t("contactPage.success.sendAnother")}</span>
                  </button>

                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-xs font-bold text-white shadow-md hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
                  >
                    <EnvelopeSimple className="size-4" weight="bold" />
                    <span>{t("contactPage.success.openMail")}</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      {t("contactPage.form.name")}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={
                        t("contactPage.form.namePlaceholder") as string
                      }
                      className="border-elevated-border bg-elevated/40 text-sm text-foreground placeholder:text-secondary-text focus-visible:ring-blue-500/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      {t("contactPage.form.email")}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={
                        t("contactPage.form.emailPlaceholder") as string
                      }
                      className="border-elevated-border bg-elevated/40 text-sm text-foreground placeholder:text-secondary-text focus-visible:ring-blue-500/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-bold uppercase tracking-wider text-secondary-text"
                    >
                      {t("contactPage.form.projectType")}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-elevated-border bg-elevated/40 px-3 text-sm text-foreground placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    >
                      <option value="" className="bg-elevated text-foreground">
                        {t("contactPage.form.projectPlaceholder")}
                      </option>
                      <option
                        value="web-app"
                        className="bg-elevated text-foreground"
                      >
                        Web Application
                      </option>
                      <option
                        value="api"
                        className="bg-elevated text-foreground"
                      >
                        API Development
                      </option>
                      <option
                        value="fullstack"
                        className="bg-elevated text-foreground"
                      >
                        Full-Stack Project
                      </option>
                      <option
                        value="consultation"
                        className="bg-elevated text-foreground"
                      >
                        Consultation
                      </option>
                      <option
                        value="other"
                        className="bg-elevated text-foreground"
                      >
                        Other
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                      {t("contactPage.form.subject")}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={
                        t("contactPage.form.subjectPlaceholder") as string
                      }
                      className="border-elevated-border bg-elevated/40 text-sm text-foreground placeholder:text-secondary-text focus-visible:ring-blue-500/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-secondary-text"
                  >
                    {t("contactPage.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={
                      t("contactPage.form.messagePlaceholder") as string
                    }
                    className="w-full resize-none rounded-lg border border-elevated-border bg-elevated/40 px-3 py-2 text-sm text-foreground placeholder:text-secondary-text focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 font-bold text-white shadow-lg py-5 hover:opacity-90 transition-all cursor-pointer border-none"
                >
                  {isSubmitting
                    ? t("contactPage.form.sending")
                    : t("contactPage.form.send")}
                </Button>
              </form>
            )}
          </div>
        </InteractiveContactCard>
      </div>
      <div className="my-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <InteractiveContactCard delay={0.04} className="h-full">
          <h3 className="mb-5 flex items-center gap-2 font-bold tracking-tight text-foreground">
            <ShareNetwork className="size-5 text-blue-400" weight="duotone" />
            {t("contactPage.info.title")}
          </h3>
          <div className="space-y-2.5">
            {contactInfo.map((info) => (
              <Link
                key={info.title as string}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center gap-3.5 rounded-xl border border-elevated-border bg-elevated/20 p-3.5 transition-all hover:border-primary-accent/30 hover:bg-elevated/50"
              >
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br border border-white/5 shadow-inner",
                    info.gradient,
                  )}
                >
                  <info.icon className="size-5" weight="duotone" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-secondary-text group-hover:text-blue-400 transition-colors">
                    {info.title}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground mt-0.5">
                    {info.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </InteractiveContactCard>

        <InteractiveContactCard
          delay={0.08}
          className="h-full flex flex-col justify-between"
        >
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-bold tracking-tight text-foreground">
              <Clock className="size-5 text-blue-400" weight="duotone" />
              {t("contactPage.availability.title")}
            </h3>
            <dl className="space-y-2.5 text-xs font-medium">
              <div className="flex justify-between border-b border-elevated-border pb-2">
                <dt className="text-secondary-text">
                  {t("contactPage.availability.days")}
                </dt>
                <dd className="text-foreground tabular-nums">8:00 - 17:30</dd>
              </div>
              <div className="flex justify-between border-b border-elevated-border pb-2">
                <dt className="text-secondary-text">
                  {t("contactPage.availability.sat")}
                </dt>
                <dd className="text-foreground">Flexible</dd>
              </div>
              <div className="flex justify-between pb-1">
                <dt className="text-secondary-text">
                  {t("contactPage.availability.sun")}
                </dt>
                <dd className="text-secondary-text">
                  {t("contactPage.availability.off")}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t border-elevated-border pt-4">
            <span className="size-2 animate-pulse rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              {t("contactPage.availability.status")}
            </span>
          </div>
        </InteractiveContactCard>
      </div>

      <SectionCard className="relative overflow-hidden border border-elevated-border bg-elevated/40 py-10 text-center shadow-xl">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />

        <h2 className="relative z-10 mb-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t("contactPage.locationSection.title")}
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm leading-relaxed text-secondary-text">
          {t("contactPage.locationSection.desc")}
        </p>

        <div className="relative z-10 flex flex-wrap justify-center gap-12 sm:gap-16">
          <div className="group">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl border border-elevated-border bg-elevated/60 text-blue-400 shadow-inner group-hover:border-blue-500/20 transition-colors">
              <MapPin className="size-5" weight="duotone" />
            </div>
            <p className="text-sm font-bold text-foreground">
              Ho Chi Minh City
            </p>
            <p className="text-xs font-semibold text-secondary-text mt-0.5">
              Vietnam
            </p>
          </div>
          <div className="group">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl border border-elevated-border bg-elevated/60 text-cyan-400 shadow-inner group-hover:border-cyan-500/20 transition-colors">
              <Globe className="size-5" weight="duotone" />
            </div>
            <p className="text-sm font-bold text-foreground">Remote</p>
            <p className="text-xs font-semibold text-secondary-text mt-0.5">
              Worldwide
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
