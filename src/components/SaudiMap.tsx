/* Saudi Arabia map with region capital markers */

const CITIES = [
  { name: "Riyadh", x: 404, y: 283, capital: true },
  { name: "Makkah", x: 184, y: 411 },
  { name: "Madinah", x: 178, y: 291 },
  { name: "Dammam", x: 509, y: 217 },
  { name: "Al Khobar", x: 520, y: 230, highlight: true },
  { name: "Jeddah", x: 165, y: 395 },
  { name: "Tabuk", x: 83, y: 140 },
  { name: "Hail", x: 245, y: 175 },
  { name: "Buraydah", x: 315, y: 221 },
  { name: "Abha", x: 271, y: 520 },
  { name: "Jazan", x: 277, y: 565 },
  { name: "Najran", x: 330, y: 545 },
  { name: "Sakaka", x: 191, y: 78 },
  { name: "Arar", x: 223, y: 39 },
  { name: "Al Bahah", x: 239, y: 465 },
  { name: "Yanbu", x: 145, y: 310 },
  { name: "Jubail", x: 493, y: 194 },
  { name: "NEOM", x: 60, y: 120 },
]

const COUNTRY_PATH =
  "M 25 110 L 64 136 L 80 97 L 95 85 L 127 12 L 159 0 L 223 19 L 302 97 L 382 116 L 414 97 L 430 116 L 445 136 L 493 194 L 509 213 L 525 233 L 541 252 L 557 271 L 541 291 L 557 310 L 573 349 L 668 388 L 636 465 L 573 504 L 509 523 L 445 543 L 414 581 L 350 562 L 318 581 L 286 581 L 271 562 L 255 543 L 239 484 L 223 446 L 191 426 L 175 388 L 159 368 L 143 349 L 127 310 L 111 271 L 95 233 L 80 194 L 64 155 L 16 155 Z"

export default function SaudiMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="-20 -20 730 640"
      className={className}
      role="img"
      aria-label="Map of Saudi Arabia showing office and project locations across all regions"
    >
      <defs>
        <linearGradient
          id="sa-fill"
          x1="0"
          y1="0"
          x2="700"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0f1e3d" />
          <stop offset="100%" stopColor="#16294f" />
        </linearGradient>
        <filter id="sa-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="pulse-grad">
          <stop offset="0%" stopColor="#35c0ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#35c0ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* country outline */}
      <path
        d={COUNTRY_PATH}
        fill="url(#sa-fill)"
        stroke="#35c0ee"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* grid overlay */}
      <path
        d={COUNTRY_PATH}
        fill="none"
        stroke="#35c0ee"
        strokeWidth="0.3"
        strokeDasharray="4 8"
        opacity="0.2"
      />

      {/* city markers */}
      {CITIES.map((city) => {
        const isHighlight = city.highlight
        const isCapital = city.capital
        return (
          <g key={city.name}>
            {/* pulse ring for highlighted city */}
            {isHighlight && (
              <circle cx={city.x} cy={city.y} r="20" fill="url(#pulse-grad)">
                <animate
                  attributeName="r"
                  values="12;24;12"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;0.2;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}

            {/* dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={isHighlight ? 6 : isCapital ? 5 : 3.5}
              fill={isHighlight ? "#35c0ee" : isCapital ? "#f0b100" : "#35c0ee"}
              stroke="#fff"
              strokeWidth={isHighlight || isCapital ? 2 : 1.2}
              filter={isHighlight ? "url(#sa-glow)" : undefined}
            />

            {/* label */}
            <text
              x={city.x + (city.x > 400 ? -8 : 8)}
              y={city.y - 10}
              textAnchor={city.x > 400 ? "end" : "start"}
              fill={isHighlight ? "#35c0ee" : "#b9c8db"}
              fontSize={isHighlight ? 16 : isCapital ? 14 : 11}
              fontFamily="Inter, sans-serif"
              fontWeight={isHighlight || isCapital ? 700 : 500}
            >
              {city.name}
            </text>
          </g>
        )
      })}

      {/* Al Khobar badge */}
      <g>
        <rect
          x="530"
          y="210"
          width="130"
          height="30"
          rx="6"
          fill="#1ba8e0"
          opacity="0.9"
        />
        <text
          x="595"
          y="230"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          HQ · AL KHOBAR
        </text>
      </g>
    </svg>
  )
}
