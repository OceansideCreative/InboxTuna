export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Fish({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 66 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 19 1 6l19 6C34-4 53 3 65 19 53 35 34 42 20 26L1 32l7-13Z"
        fill="currentColor"
      />
      <path
        d="m26 14 9 5-9 5"
        stroke="var(--paper)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="51" cy="15" r="2.4" fill="var(--paper)" />
    </svg>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <Fish />
      <span>
        inbox<span className="brand-tuna">tuna</span>
        <span className="brand-dot">.</span>
      </span>
    </span>
  );
}
export function ChannelIcon({ type }: { type: "mail" | "text" | "flow" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    >
      <>
        {type === "mail" ? (
          <>
            <rect x="8" y="14" width="48" height="36" rx="2" />
            <path d="m9 16 23 19 23-19M9 49l17-19m29 19L38 30" />
          </>
        ) : type === "text" ? (
          <>
            <path d="M10 11h44v32H29L16 54V43h-6V11Z" />
            <path d="M19 22h26M19 31h18" />
          </>
        ) : (
          <>
            <rect x="23" y="5" width="18" height="13" rx="2" />
            <rect x="5" y="45" width="18" height="13" rx="2" />
            <rect x="41" y="45" width="18" height="13" rx="2" />
            <path d="M32 18v14M14 45V32h36v13M27 27l5 5 5-5" />
          </>
        )}
      </>
    </svg>
  );
}
export function SailArt() {
  return (
    <div className="sail-art" aria-hidden="true">
      <svg className="sail-svg" viewBox="0 0 580 620" fill="none">
        <defs>
          <clipPath id="sail-clip">
            <path d="M298 38 128 451 463 421Z" />
          </clipPath>
          <pattern
            id="sail-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0H0v28"
              stroke="#182642"
              strokeOpacity=".12"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <ellipse
          cx="307"
          cy="534"
          rx="200"
          ry="37"
          fill="#182642"
          opacity=".08"
        />
        <circle cx="353" cy="212" r="191" fill="#d5ef70" />
        <path
          d="M8 415c91-23 149 10 224-8s184-16 277-38"
          stroke="#29caba"
          strokeWidth="2"
        />
        <path
          d="M35 449c90-23 149 10 224-8s160-11 253-33"
          stroke="#29caba"
          strokeWidth="2"
        />
        <g transform="rotate(9 296 306)">
          <g clipPath="url(#sail-clip)">
            <path d="M298 38 128 451 463 421Z" fill="#f5f2e9" />
            <path d="m148 367 310-80 24 116-340 61Z" fill="#29caba" />
            <path d="m193 256 229-64 24 66-277 79Z" fill="#ff7a69" />
            <path d="m238 146 159-45 20 65-208 59Z" fill="#244bea" />
            <path d="M298 38 128 451 463 421Z" fill="url(#sail-grid)" />
            <path
              d="m291 77 21 359M218 239l180 183"
              stroke="#182642"
              strokeWidth="2"
            />
          </g>
          <path d="M298 38 128 451 463 421Z" stroke="#182642" strokeWidth="3" />
          <path
            d="m297 37-190 470"
            stroke="#182642"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M132 450 462 421" stroke="#182642" strokeWidth="5" />
          <path
            d="M87 490c97-6 204-20 326-8 38 4 61 12 72 20-48 24-238 30-362 12-43-6-55-18-36-24Z"
            fill="#ff7a69"
            stroke="#182642"
            strokeWidth="3"
          />
          <path
            d="M117 492c99-6 192-14 277-7"
            stroke="#182642"
            strokeWidth="2"
          />
          <path
            d="m230 497 54-3"
            stroke="#f5f2e9"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
        <path
          d="m487 84 7 17 18 7-18 7-7 17-6-17-18-7 18-7 6-17Z"
          fill="#ff7a69"
        />
        <path d="M75 226h38m-19-19v38" stroke="#182642" strokeWidth="2" />
      </svg>
      <div className="message-sticker">
        <span className="sticker-icon">
          <ChannelIcon type="mail" />
        </span>
        <div>
          <span className="micro">FROM YOUR BUSINESS</span>
          <strong>
            Good to hear
            <br />
            from you.
          </strong>
        </div>
        <span className="sticker-dot" />
      </div>
      <div className="art-caption">
        <span>EMAIL. TEXT. FOLLOW-UP.</span>
        <span>NICK & BRIDGETTE ↗</span>
      </div>
    </div>
  );
}
