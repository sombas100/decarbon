import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { FlaskConical } from "lucide-react";

import { useDemo } from "../../context/DemoContext";
import { mockEngineer } from "../../data/mockData";

export default function PurchaseSimulator() {
  const { simulatePurchase } = useDemo();

  const [productName, setProductName] = useState("");
  const [supplier, setSupplier] = useState("Demo Supplier A");
  const [reference, setReference] = useState("");
  const [fgasNumber, setFgasNumber] = useState(mockEngineer.fgasNumber);

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

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none focus:border-industrial-green focus:ring-2 focus:ring-green-100";

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-green-50 p-3">
          <FlaskConical size={22} className="text-industrial-green" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-navy-900">
            Supplier Purchase Simulator
          </h3>

          <p className="text-sm text-slate-500">
            Demonstrate an incoming supplier transaction
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Product Name
          </label>

          <input
            required
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Daikin Air Conditioning Unit"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Supplier
          </label>

          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className={inputClass}
          >
            <option>Demo Supplier A</option>
            <option>Demo Supplier B</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Purchase Reference
          </label>

          <input
            required
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="e.g. ORD-2045"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Engineer F-Gas Identifier
          </label>

          <input
            required
            value={fgasNumber}
            onChange={(e) => setFgasNumber(e.target.value)}
            className={inputClass}
          />

          <p className="mt-2 text-xs text-slate-500">
            Demo identifier: {mockEngineer.fgasNumber}
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-industrial-green px-5 py-3 font-semibold text-white transition-colors hover:bg-green-700"
        >
          Simulate Supplier Purchase
        </button>
      </form>
    </section>
  );
}
