<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the SysDesign Lab project. Here's a summary of all changes made:

**New files created:**
- `instrumentation-client.ts` — Client-side PostHog initialization using the Next.js 15.3+ pattern. Initializes posthog-js with the `/ingest` reverse proxy, error tracking, and debug mode in development.
- `lib/posthog-server.ts` — Singleton server-side PostHog client using `posthog-node` for API route tracking.
- `.env.local` — PostHog public token and host environment variables.

**Modified files:**
- `next.config.ts` — Added reverse proxy rewrites for `/ingest/*`, `/ingest/static/*`, and `/ingest/array/*` routes, plus `skipTrailingSlashRedirect: true`.
- `components/canvas/Header.tsx` — Added client-side event tracking with `posthog-js` and `captureException` for errors.
- `app/canvas/[problemId]/page.tsx` — Added `canvas_component_dropped` event tracking on drag-and-drop.
- `components/sections/HeroSection.tsx` — Added `hero_cta_clicked` event with email capture.
- `components/sections/PricingSection.tsx` — Added `pricing_plan_cta_clicked` event with plan name and price.
- `components/sections/FinalCta.tsx` — Added `final_cta_clicked` event.
- `app/problems/page.tsx` — Added `problem_selected` event with problem ID, title, and difficulty.
- `app/api/designs/save/route.ts` — Added server-side `design_saved` event via `posthog-node`.
- `app/api/evaluate/route.ts` — Added server-side `architecture_evaluation_completed` event with score and feedback counts.

---

## Events instrumented

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks "Start Designing for Free" in the hero section | `components/sections/HeroSection.tsx` |
| `pricing_plan_cta_clicked` | User clicks a pricing plan CTA (Free, Pro, or Team) | `components/sections/PricingSection.tsx` |
| `final_cta_clicked` | User clicks "Start for Free" in the bottom CTA section | `components/sections/FinalCta.tsx` |
| `problem_selected` | User clicks "Launch Simulator" to start a design problem | `app/problems/page.tsx` |
| `canvas_component_dropped` | User drops a system design component onto the canvas | `app/canvas/[problemId]/page.tsx` |
| `architecture_evaluated` | User runs an architecture evaluation — includes score | `components/canvas/Header.tsx` |
| `simulation_started` | User runs a failure simulation on their design | `components/canvas/Header.tsx` |
| `architecture_saved` | User saves their architecture design | `components/canvas/Header.tsx` |
| `design_saved` | Server-side: design successfully saved to database | `app/api/designs/save/route.ts` |
| `architecture_evaluation_completed` | Server-side: evaluation completed with score and feedback | `app/api/evaluate/route.ts` |

---

## Next steps

We've built a dashboard and five insights for you to monitor user behavior based on the events just instrumented:

- [Analytics basics dashboard](/dashboard/1587590)
- [Landing Page CTA Conversion Funnel](/insights/9cJXXIkT) — Tracks the top-of-funnel conversion from hero CTA → pricing CTA → final CTA
- [Canvas Engagement Over Time](/insights/ikbxDkxE) — Trends for evaluations, simulations, and saves on the canvas
- [Problems Selected by Difficulty](/insights/CTisbysw) — Which problems users launch, broken down by difficulty level
- [Average Architecture Score](/insights/Nn9syAKk) — Average score from architecture evaluations over time
- [Canvas Activation Funnel](/insights/s9KznSkh) — Full user journey from selecting a problem to saving a design

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
