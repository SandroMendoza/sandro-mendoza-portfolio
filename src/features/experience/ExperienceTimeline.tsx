import { certification, earlierExperience, education, experience } from '@/data/experience'

export function ExperienceTimeline({
  showEarlierExperience = false,
}: {
  showEarlierExperience?: boolean
}) {
  return (
    <>
      <div className="mt-8 space-y-10">
        {experience.map((entry) => (
          <div key={entry.company} className="border-border border-l-2 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-text text-lg font-bold">
                {entry.role} — {entry.company}
              </h3>
              <span className="text-text-muted font-mono text-xs">{entry.period}</span>
            </div>
            <ul className="text-text-muted mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {showEarlierExperience && (
        <div className="border-border mt-10 border-t pt-8">
          <p className="text-text-muted font-mono text-xs tracking-wide uppercase">
            Earlier Experience
          </p>
          <div className="mt-6 space-y-8">
            {earlierExperience.map((entry) => (
              <div key={entry.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-text text-sm font-bold">
                    {entry.role} — {entry.company}
                  </h3>
                  <span className="text-text-muted font-mono text-xs">{entry.period}</span>
                </div>
                <p className="text-text-muted mt-2 text-sm leading-relaxed">
                  {entry.highlights[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-border mt-10 grid gap-4 border-t pt-8 sm:grid-cols-2">
        <div>
          <p className="text-text-muted font-mono text-xs tracking-wide uppercase">Education</p>
          <p className="text-text mt-1 text-sm font-semibold">{education.degree}</p>
          <p className="text-text-muted text-sm">
            {education.school} · {education.period}
          </p>
        </div>
        <div>
          <p className="text-text-muted font-mono text-xs tracking-wide uppercase">Certification</p>
          <p className="text-text mt-1 text-sm font-semibold">{certification.name}</p>
          <p className="text-text-muted text-sm">
            {certification.school} · {certification.period}
          </p>
        </div>
      </div>
    </>
  )
}
