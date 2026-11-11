export function HexagonalDiagram() {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label="Hexagonal architecture diagram: inbound adapters and outbound adapters connect to the application core, which depends on application and domain layers through ports."
      className="h-auto w-full"
    >
      <g fontFamily="inherit" fontSize="11" fontWeight={600}>
        <rect
          x="150"
          y="10"
          width="100"
          height="32"
          rx="8"
          className="fill-surface stroke-border"
          strokeWidth={1.5}
        />
        <text x="200" y="26" textAnchor="middle" className="fill-text">
          Adapters
        </text>
        <text
          x="200"
          y="38"
          textAnchor="middle"
          className="fill-text-muted"
          fontSize="9"
          fontWeight={400}
        >
          (Inbound)
        </text>

        <rect
          x="150"
          y="218"
          width="100"
          height="32"
          rx="8"
          className="fill-surface stroke-border"
          strokeWidth={1.5}
        />
        <text x="200" y="234" textAnchor="middle" className="fill-text">
          Adapters
        </text>
        <text
          x="200"
          y="246"
          textAnchor="middle"
          className="fill-text-muted"
          fontSize="9"
          fontWeight={400}
        >
          (Outbound)
        </text>

        <rect
          x="12"
          y="114"
          width="100"
          height="32"
          rx="8"
          className="fill-surface stroke-border"
          strokeWidth={1.5}
        />
        <text x="62" y="130" textAnchor="middle" className="fill-text">
          Application
        </text>
        <text
          x="62"
          y="142"
          textAnchor="middle"
          className="fill-text-muted"
          fontSize="9"
          fontWeight={400}
        >
          (Use Cases)
        </text>

        <rect
          x="288"
          y="114"
          width="100"
          height="32"
          rx="8"
          className="fill-surface stroke-border"
          strokeWidth={1.5}
        />
        <text x="338" y="130" textAnchor="middle" className="fill-text">
          Domain
        </text>
        <text
          x="338"
          y="142"
          textAnchor="middle"
          className="fill-text-muted"
          fontSize="9"
          fontWeight={400}
        >
          (Entities, Services)
        </text>

        <polygon
          points="200,80 245,105 245,155 200,180 155,155 155,105"
          className="fill-surface stroke-violet"
          strokeWidth={2}
        />
        <text x="200" y="124" textAnchor="middle" className="fill-text" fontSize="10">
          Application
        </text>
        <text x="200" y="138" textAnchor="middle" className="fill-text" fontSize="10">
          Core (Domain)
        </text>

        <g className="stroke-mint" strokeWidth={1.5} markerEnd="url(#arrow)">
          <line x1="200" y1="42" x2="200" y2="78" />
          <line x1="200" y1="182" x2="200" y2="216" />
          <line x1="114" y1="130" x2="153" y2="130" />
          <line x1="247" y1="130" x2="286" y2="130" />
        </g>
      </g>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" className="fill-mint" />
        </marker>
      </defs>
    </svg>
  )
}
