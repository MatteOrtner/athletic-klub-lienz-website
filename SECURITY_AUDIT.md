# Security Audit (April 2, 2026)

## Scope

- Dependency vulnerability scan (`npm audit`)
- Runtime security posture review (HTTP headers, framework config)
- Source review for common leak/XSS patterns
- Cleanup of dead/duplicate assets and code

## Findings

1. Dependencies had known advisories:
- `next@16.1.6` (multiple moderate CVEs)
- Transitive `flatted`, `picomatch`, `brace-expansion` advisories

2. Runtime headers were missing:
- No explicit hardening headers (e.g. `X-Frame-Options`, `nosniff`, HSTS)
- `X-Powered-By` was enabled by default

3. Code quality and maintainability risks:
- Unused imports (`Squad`, `Clock`)
- Duplicate hardcoded external URLs
- Non-optimized image tags in `KitShowcase`
- Unused files in `public/` (legacy/duplicate assets)

## Remediations Applied

- Upgraded `next` and `eslint-config-next` to `16.2.2`
- Ran dependency fix/dedupe; current audit status: **0 vulnerabilities**
- Added security headers and disabled `X-Powered-By` in `next.config.ts`
- Added `reactStrictMode: true`
- Removed unused imports and dead types/constants
- Centralized repeated site/external URLs into shared constants
- Replaced raw `<img>` with `next/image` in `KitShowcase`
- Removed unused static assets from `public/`
- Added repeatable verification scripts (`check`, `audit`)

## Verification Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run audit
```

All commands pass on this branch after changes.
