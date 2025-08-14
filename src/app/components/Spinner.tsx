import React from "react";

type SpinnerProps = {
  size?: number;           // px
  border?: number;         // px
  className?: string;      // tambahan kelas
  label?: string;          // untuk aksesibilitas
};

export default function Spinner({
  size = 40,
  border = 4,
  className = "",
  label = "Loading",
}: SpinnerProps) {
  const style = { width: size, height: size, borderWidth: border } as const;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        role="status"
        aria-live="polite"
        aria-label={label}
        className="rounded-full border-slate-700 border-t-cyan-400 animate-spin"
        style={style}
      />
    </div>
  );
}
