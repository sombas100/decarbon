import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  FlaskConical,
  ArrowRight,
  Fingerprint,
  Database,
  BellRing,
  ShieldAlert,
} from "lucide-react";

import { useDemo } from "../../context/DemoContext";
import { mockEngineer } from "../../data/mockData";

export default function PurchaseSimulator() {
  const { simulatePurchase } = useDemo();

  const [productName, setProductName] = useState("");
  const [supplier, setSupplier] = useState("Demo Supplier A");
  const [reference, setReference] = useState("");
  const [fgasNumber, setFgasNumber] = useState(mockEngineer.fgasNumber);

  const inputClass =
    "w-full rounded-xl border border-decarbon-border bg-decarbon-bg px-4 py-3 text-sm text-decarbon-text outline-none transition-colors placeholder:text-decarbon-muted/50 focus:border-decarbon-accent focus:ring-1 focus:ring-decarbon-accent";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !productName.trim() ||
      !supplier.trim() ||
      !reference.trim() ||
      !fgasNumber.trim()
    ) {
      toast.error("Missing required fields", {
        description: "Please complete all purchase details.",
      });
      return;
    }

    const success = simulatePurchase({
      productName,
      supplier,
      reference,
      fgasNumber,
    });

    if (!success) {
      toast.error("F-Gas identifier not recognised", {
        description: "The supplied identifier does not match a demo engineer.",
      });
      return;
    }

    toast.success("Purchase successfully recorded", {
      description:
        "The purchase has been linked to the engineer and a notification generated.",
    });

    setProductName("");
    setReference("");
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-decarbon-border bg-decarbon-surface">
      {/* Console header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-decarbon-border bg-decarbon-elevated/40 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-decarbon-border bg-decarbon-elevated">
            <FlaskConical size={23} className="text-decarbon-accent" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-decarbon-text">
              Supplier Integration Simulator
            </h3>

            <p className="mt-1 text-xs text-decarbon-muted">
              Simulate an incoming equipment purchase
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-decarbon-accent/20 bg-decarbon-accent/10 px-3 py-1.5 text-[11px] font-medium text-decarbon-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-decarbon-accent" />
          Simulation Active
        </span>
      </div>

      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_260px] lg:p-8">
        {/* Purchase form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label
              htmlFor="productName"
              className="mb-2 block text-xs font-medium text-decarbon-muted"
            >
              Equipment / Product Name
            </label>

            <input
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Daikin Air Conditioning Unit"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="supplier"
              className="mb-2 block text-xs font-medium text-decarbon-muted"
            >
              Supplier
            </label>

            <select
              id="supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              className={inputClass}
            >
              <option>Demo Supplier A</option>
              <option>Demo Supplier B</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="reference"
              className="mb-2 block text-xs font-medium text-decarbon-muted"
            >
              Purchase Reference
            </label>

            <input
              id="reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="e.g. ORD-2045"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="fgasNumber"
              className="mb-2 flex items-center gap-2 text-xs font-medium text-decarbon-muted"
            >
              <Fingerprint size={14} />
              Engineer F-Gas Identifier
            </label>

            <input
              id="fgasNumber"
              value={fgasNumber}
              onChange={(e) => setFgasNumber(e.target.value)}
              className={`${inputClass} font-mono tracking-wide`}
            />

            <p className="mt-2 text-[11px] text-decarbon-muted">
              Test identifier:{" "}
              <span className="font-mono text-decarbon-accent">
                {mockEngineer.fgasNumber}
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-decarbon-accent px-5 py-3.5 text-sm font-semibold text-decarbon-bg transition-all hover:bg-decarbon-accent-hover active:scale-[0.99]"
          >
            Simulate Supplier Purchase
            <ArrowRight size={17} />
          </button>
        </form>

        {/* Workflow explanation */}
        <aside className="rounded-xl border border-decarbon-border bg-decarbon-bg p-5">
          <div className="mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-decarbon-accent">
              Integration Workflow
            </p>

            <p className="mt-2 text-xs leading-relaxed text-decarbon-muted">
              Demonstration of how supplier transactions could be associated
              with an engineer.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Database,
                title: "Transaction Received",
                description: "Supplier purchase data enters Decarbon.",
              },
              {
                icon: Fingerprint,
                title: "Engineer Matched",
                description: "F-Gas identifier matched to demo profile.",
              },
              {
                icon: BellRing,
                title: "Notification Created",
                description: "Engineer receives an in-app alert.",
              },
            ].map((step, index) => (
              <div key={step.title} className="relative flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-decarbon-elevated">
                    <step.icon size={17} className="text-decarbon-accent" />
                  </div>

                  {index < 2 && (
                    <div className="absolute left-[17px] top-11 h-8 w-px bg-decarbon-border" />
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold text-decarbon-text">
                    {step.title}
                  </p>

                  <p className="mt-1 text-[11px] leading-relaxed text-decarbon-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex gap-2 rounded-lg border border-decarbon-border bg-decarbon-elevated/50 p-3">
            <ShieldAlert size={16} className="shrink-0 text-decarbon-accent" />

            <p className="text-[11px] leading-relaxed text-decarbon-muted">
              Prototype only. No live supplier APIs or official F-Gas
              verification are connected.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
