"use client";

import { useState } from "react";
import { Arrow, ChannelIcon, Fish } from "./brand";

const moments = [
  {
    label: "New inquiry",
    channel: "AUTOMATED EMAIL",
    title: "Let’s talk about what you need.",
    body: "Thanks for asking about a consultation. We’ll discuss what you need, explain your options, and agree on the next step.",
    action: "Choose a time",
    purpose: "Make it easier to decide.",
    why: "Answer useful questions while their interest is fresh.",
    type: "mail" as const,
  },
  {
    label: "Current customer",
    channel: "NEWSLETTER / CAMPAIGN",
    title: "Same service. One less trip.",
    body: "We now offer pickup and delivery. Get the service you already know, without a trip across town.",
    action: "See how pickup works",
    purpose: "Give them another reason to buy.",
    why: "Help a customer discover more of what your business offers.",
    type: "mail" as const,
  },
  {
    label: "Past customer",
    channel: "TIMELY TEXT",
    title: "Ready for your next visit?",
    body: "It’s been a while since your last appointment. If you’re ready to book again, choose a time here.",
    action: "Choose a date",
    purpose: "Make coming back an easy next step.",
    why: "Send a relevant invitation when there’s a reason to return.",
    type: "text" as const,
  },
];

export function MessagePreview() {
  const [selected, setSelected] = useState(0);
  const moment = moments[selected];

  return (
    <div className="message-preview">
      <div className="preview-topline"><span>YOUR BUSINESS → THEIR INBOX</span><Fish /></div>
      <div className="moment-options" role="group" aria-label="Choose a customer moment">
        {moments.map((item, index) => (
          <button key={item.label} type="button" aria-pressed={selected === index} aria-controls="message-example" onClick={() => setSelected(index)}>{item.label}</button>
        ))}
      </div>
      <div id="message-example" className="message-example" aria-live="polite" aria-atomic="true">
        <div className={`example-sheet example-${moment.type}`}>
          <div className="example-channel"><ChannelIcon type={moment.type} /><span>{moment.channel}</span></div>
          <p className="example-from">From a business you know</p>
          <h2>{moment.title}</h2>
          <p className="example-body">{moment.body}</p>
          <span className="example-action">{moment.action}<Arrow /></span>
        </div>
        <div className="example-purpose"><span aria-hidden="true">↳</span><div><strong>{moment.purpose}</strong><p>{moment.why}</p></div></div>
      </div>
      <p className="example-caption">Illustrative excerpts for service businesses. We write yours around you.</p>
    </div>
  );
}
