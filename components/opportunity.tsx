"use client";
import { useState } from "react";
import { Arrow } from "./brand";
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
function value(input: string, max: number) {
  const n = Number(input);
  return input.trim() === "" || !Number.isFinite(n) || n < 0 || n > max
    ? null
    : n;
}
export function Opportunity() {
  const [contacts, setContacts] = useState("2500");
  const [percent, setPercent] = useState("1");
  const [sale, setSale] = useState("300");
  const [margin, setMargin] = useState("50");
  const [fee, setFee] = useState("");
  const [setup, setSetup] = useState("0");
  const [software, setSoftware] = useState("0");
  const c = value(contacts, 10000000),
    p = value(percent, 100),
    s = value(sale, 10000000),
    m = value(margin, 100);
  const valid = c !== null && p !== null && s !== null && m !== null;
  const purchases = valid ? (c * p) / 100 : null;
  const revenue = purchases !== null && s !== null ? purchases * s : null;
  const contribution =
    revenue !== null && m !== null ? (revenue * m) / 100 : null;
  const f = value(fee, 1000000),
    se = value(setup, 10000000),
    sw = value(software, 1000000);
  const costs =
    f !== null && se !== null && sw !== null ? (f + sw) * 12 + se : null;
  const balance =
    contribution !== null && costs !== null ? contribution - costs : null;
  return (
    <section className="opportunity-section section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PUT YOUR NUMBERS TO IT</p>
            <h2>
              What could another
              <br />
              purchase be worth?
            </h2>
          </div>
          <p>
            A first purchase or a return visit has a different value in every
            business. Use your own numbers to explore one possible source of
            value from better communication.
          </p>
        </div>
        <details className="calculator">
          <summary>
            <span>Explore a hypothetical example</span>
            <span className="calculator-summary-right">
              OPEN THE CALCULATOR{" "}
              <span className="details-plus" aria-hidden="true">
                +
              </span>
            </span>
          </summary>
          <div className="calculator-content">
            <p className="calculator-explanation">
              Imagine a share of your reachable audience makes{" "}
              <strong>one additional purchase over 12 months</strong>, beyond
              what would have happened anyway. Change these assumptions to see
              the arithmetic. These are examples, not expected results.
            </p>
            <div className="calculator-inputs">
              <label>
                Reachable contacts
                <input
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="10000000"
                  step="1"
                  value={contacts}
                  onChange={(e) => setContacts(e.target.value)}
                />
              </label>
              <label>
                Share making an extra purchase (%)
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="100"
                  step="0.1"
                  value={percent}
                  onChange={(e) => setPercent(e.target.value)}
                />
              </label>
              <label>
                Revenue per extra purchase ($)
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="10000000"
                  step="1"
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                />
              </label>
              <label>
                Contribution margin (%)
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="100"
                  step="1"
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                />
              </label>
            </div>
            <p className="calc-help">
              Reachable means appropriate to contact with the relevant
              permissions. Contribution margin is the share left after the
              direct, variable costs of the extra sale.
            </p>
            <div
              className="calculator-results"
              aria-live="polite"
              aria-atomic="true"
            >
              <div>
                <span>Additional purchases</span>
                <strong>
                  {purchases === null ? "—" : number.format(purchases)}
                </strong>
                <small>Across the full 12 months</small>
              </div>
              <div>
                <span>Additional revenue</span>
                <strong>
                  {revenue === null ? "—" : money.format(revenue)}
                </strong>
                <small>Before any costs</small>
              </div>
              <div>
                <span>Additional contribution</span>
                <strong>
                  {contribution === null ? "—" : money.format(contribution)}
                </strong>
                <small>Before service fees and fixed costs</small>
              </div>
            </div>
            {!valid && (
              <p className="form-error">
                Enter non-negative numbers, with percentages between 0 and 100.
              </p>
            )}
            <details className="cost-comparison">
              <summary>
                Compare with the cost of the work{" "}
                <span className="details-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="calculator-inputs cost-inputs">
                <label>
                  Proposed monthly service fee ($)
                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    placeholder="Enter a fee to compare"
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                  />
                </label>
                <label>
                  One-time setup ($)
                  <input
                    type="number"
                    min="0"
                    max="10000000"
                    value={setup}
                    onChange={(e) => setSetup(e.target.value)}
                  />
                </label>
                <label>
                  Extra monthly software / sending ($)
                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    value={software}
                    onChange={(e) => setSoftware(e.target.value)}
                  />
                </label>
              </div>
              <p className="cost-result">
                <span>Contribution after these costs, over 12 months</span>
                <strong>
                  {balance === null ? "—" : money.format(balance)}
                </strong>
              </p>
              <p className="calc-help">
                Enter a proposed fee to compare costs; this calculator is not
                a quote. The balance excludes fixed costs and tax. A negative number means this
                scenario doesn’t cover the costs entered.
              </p>
            </details>
            <p className="calculator-disclaimer">
              A one-time return from past customers is not automatically
              repeatable. This model does not apply the same percentage every
              month or predict an achievable conversion rate. Your extra
              purchases must exclude sales that would have happened anyway. Real
              measurement needs a baseline and, where practical, a comparison
              group.
            </p>
            <a className="text-link" href="#review">
              Let’s talk about whether there’s a fit <Arrow diagonal />
            </a>
          </div>
        </details>
      </div>
    </section>
  );
}
