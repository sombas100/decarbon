import { useEffect, useState } from "react";
import { RotateCcw, AlertTriangle, X } from "lucide-react";
import { toast } from "sonner";

import { useDemo } from "../../context/DemoContext";

export default function ResetDemoButton() {
  const { resetDemo } = useDemo();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function handleReset() {
    resetDemo();
    setIsOpen(false);

    toast.success("Demo data restored", {
      description:
        "Purchases and notifications have been reset to their original demonstration values.",
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-decarbon-border bg-decarbon-surface px-4 py-2.5 text-xs font-medium text-decarbon-muted transition-colors hover:border-decarbon-accent/50 hover:text-decarbon-text"
      >
        <RotateCcw size={15} />
        Reset Demo
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-demo-title"
            aria-describedby="reset-demo-description"
            className="w-full max-w-md rounded-2xl border border-decarbon-border bg-decarbon-surface p-6 shadow-2xl shadow-black/40"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                <AlertTriangle size={23} className="text-amber-400" />
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close confirmation"
                className="rounded-lg p-2 text-decarbon-muted transition-colors hover:bg-decarbon-elevated hover:text-decarbon-text"
              >
                <X size={19} />
              </button>
            </div>

            <h3
              id="reset-demo-title"
              className="mt-5 text-xl font-semibold text-decarbon-text"
            >
              Reset demonstration data?
            </h3>

            <p
              id="reset-demo-description"
              className="mt-3 text-sm leading-relaxed text-decarbon-muted"
            >
              This will remove any purchases and notifications created during
              your demonstration and restore the original sample data.
            </p>

            <div className="mt-5 rounded-xl border border-decarbon-border bg-decarbon-bg p-4">
              <p className="text-xs leading-relaxed text-decarbon-muted">
                This action only affects demo data stored in this browser. It
                does not modify any real supplier records.
              </p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-decarbon-border px-5 py-3 text-sm font-medium text-decarbon-text transition-colors hover:bg-decarbon-elevated"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-decarbon-accent px-5 py-3 text-sm font-semibold text-decarbon-bg transition-colors hover:bg-decarbon-accent-hover"
              >
                <RotateCcw size={16} />
                Reset Demo Data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
