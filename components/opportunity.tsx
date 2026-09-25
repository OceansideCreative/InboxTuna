"use client";

import { useState } from "react";
import styles from "./opportunity.module.css";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const compactCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 2,
});
const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const smallNumber = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 2,
});
const exactCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 20,
});

function readNumber(input: string, max: number, whole = false) {
  if (input.trim() === "") return null;
  const parsed = Number(input);
  return !Number.isFinite(parsed) ||
    parsed < 0 ||
    parsed > max ||
    (whole && !Number.isInteger(parsed))
    ? null
    : parsed;
}

export function Opportunity() {
  const [contacts, setContacts] = useState("2500");
  const [percent, setPercent] = useState("1");
  const [purchaseValue, setPurchaseValue] = useState("300");

  const audience = readNumber(contacts, 10_000_000, true);
  const share = readNumber(percent, 100);
  const sale = readNumber(purchaseValue, 10_000_000);
  const purchases =
    audience !== null && share !== null ? (audience * share) / 100 : null;
  const revenue = purchases !== null && sale !== null ? purchases * sale : null;
  const valid = revenue !== null;
  const purchaseCount =
    purchases === null
      ? "—"
      : purchases > 0 && purchases < 1
        ? smallNumber.format(purchases)
        : number.format(purchases);
  const roundedCount =
    purchases !== null &&
    Math.abs(Number(purchaseCount.replaceAll(",", "")) - purchases) > 0.000001;

  const fields = [
    {
      id: "opportunity-contacts",
      label: "People you can reach",
      help: "Customers and prospects you have permission to contact.",
      value: contacts,
      onChange: setContacts,
      parsed: audience,
      max: 10_000_000,
      step: "1",
      inputMode: "numeric" as const,
      error: "Use a whole number from 0 to 10,000,000.",
    },
    {
      id: "opportunity-share",
      label: "Share making one extra purchase (%)",
      help: "Across a full 12 months.",
      value: percent,
      onChange: setPercent,
      parsed: share,
      max: 100,
      step: "any",
      inputMode: "decimal" as const,
      error: "Use a percentage from 0 to 100.",
    },
    {
      id: "opportunity-value",
      label: "Revenue per purchase ($)",
      help: "The value of a completed sale.",
      value: purchaseValue,
      onChange: setPurchaseValue,
      parsed: sale,
      max: 10_000_000,
      step: "any",
      inputMode: "decimal" as const,
      error: "Use an amount from $0 to $10,000,000.",
    },
  ];

  return (
    <section
      className={styles.section}
      id="opportunity"
      aria-labelledby="opportunity-title"
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>PUT YOUR NUMBERS TO IT</p>
            <h2 id="opportunity-title" className={styles.title}>
              What could a few more purchases be worth?
            </h2>
          </div>
          <p className={styles.intro}>
            A first sale. A return visit. Another service booked. Explore what
            a small change could mean for your business.
          </p>
        </div>

        <div className={styles.calculator}>
          <div className={styles.inputs}>
            {fields.map((field, index) => {
              const hasError = field.parsed === null && field.value !== "";
              return (
                <div className={styles.field} key={field.id}>
                  <span className={styles.index} aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div className={styles.fieldText}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <p id={`${field.id}-help`}>{field.help}</p>
                    {hasError && (
                      <p className={styles.error} id={`${field.id}-error`}>
                        {field.error}
                      </p>
                    )}
                  </div>
                  <input
                    id={field.id}
                    className={styles.input}
                    type="number"
                    inputMode={field.inputMode}
                    min="0"
                    max={field.max}
                    step={field.step}
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    aria-invalid={hasError || undefined}
                    aria-describedby={`${field.id}-help${hasError ? ` ${field.id}-error` : ""}`}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles.result}>
            <div className={styles.resultValues} aria-live="polite" aria-atomic="true">
              <p className={styles.resultLabel}>HYPOTHETICAL ADDITIONAL REVENUE</p>
              <p
                className={styles.revenue}
                aria-label={revenue === null ? "Enter your numbers" : currency.format(revenue)}
              >
                {revenue === null
                  ? "—"
                  : revenue >= 1_000_000
                    ? compactCurrency.format(revenue)
                    : currency.format(revenue)}
              </p>
              <p className={styles.period}>over 12 months · before costs</p>
              <p className={styles.purchaseCount}>
                {valid ? (
                  <>
                    <strong>{roundedCount ? "≈ " : ""}{purchaseCount}</strong>{" "}
                    extra {purchases === 1 ? "purchase" : "purchases"}
                  </>
                ) : (
                  "Enter three valid numbers to explore the opportunity."
                )}
              </p>
              {valid && audience !== null && share !== null && sale !== null && (
                <p className={styles.math}>
                  {number.format(audience)} people × {share}% ×{" "}
                  {exactCurrency.format(sale)} {Number.isInteger(revenue) ? "=" : "≈"}{" "}
                  {currency.format(revenue)}
                </p>
              )}
            </div>
            <a className={styles.link} href="#review">
              Let’s look at your opportunity <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p className={styles.note}>
          An illustration, not a forecast. This counts one extra completed purchase
          per person over 12 months, beyond what would have happened anyway.
          The percentage is not applied again each month.
        </p>
      </div>
    </section>
  );
}
