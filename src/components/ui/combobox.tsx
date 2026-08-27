"use client";

import { CaretUpDown, Check, MagnifyingGlass, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export interface ComboboxOption {
  value: string;
  label: string;
  badge?: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Chọn mục...",
  searchPlaceholder = "Tìm kiếm...",
  emptyText = "Không tìm thấy kết quả",
  className,
  disabled = false,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch("");
    }
  }, [open]);

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-elevated-border bg-elevated/40 px-3 py-2 text-sm text-foreground transition-all duration-200 hover:border-elevated-border/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          open && "border-blue-500/50 ring-2 ring-blue-500/20",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span
          className={cn(
            "truncate text-sm",
            !selectedOption && "text-secondary-text",
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <CaretUpDown
          className={cn(
            "size-4 shrink-0 text-secondary-text transition-transform duration-200",
            open && "text-primary-accent",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-1.5 w-full min-w-48 overflow-hidden rounded-xl border border-elevated-border bg-background/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            <div className="relative mb-1 flex items-center border-b border-elevated-border/60 pb-1.5 px-2">
              <MagnifyingGlass className="size-4 shrink-0 text-secondary-text mr-2" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-xs text-foreground placeholder:text-secondary-text focus:outline-none"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="rounded-full p-0.5 text-secondary-text hover:text-foreground"
                >
                  <X className="size-3" />
                </button>
              )}
            </div>

            <div className="max-h-56 overflow-y-auto space-y-0.5 custom-scrollbar">
              {filteredOptions.length === 0 ? (
                <div className="py-3 text-center text-xs text-secondary-text">
                  {emptyText}
                </div>
              ) : (
                filteredOptions.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        onChange(opt.value);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors",
                        isSelected
                          ? "bg-primary-accent/15 text-primary-accent"
                          : "text-foreground hover:bg-elevated focus:bg-elevated",
                      )}
                    >
                      <span className="truncate pr-2">{opt.label}</span>
                      {isSelected && (
                        <Check className="size-4 shrink-0 text-primary-accent" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
