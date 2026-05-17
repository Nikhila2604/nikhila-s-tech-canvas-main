# Contact Form → Email Notification (Lovable Emails)

When a visitor submits the contact form, you'll receive an email at **poolanikhila2604@gmail.com** with their name, email, and message. The visitor also gets a confirmation email back.

## What you'll need to do once
1. Enable Lovable Cloud (one click).
2. Set up a sender email domain (you'll need a domain you own — used as the "from" address). If you don't own one, we can fall back to Formspree instead.

## What I'll build

### 1. Backend infrastructure
- Enable Lovable Cloud and set up the email queue + sender domain.
- Create a `contact_submissions` table to store every message (so nothing is lost even if email fails).

### 2. Two email templates
- **Notification to you** — sent to your inbox with the visitor's name, email, message, and timestamp. Reply-to is set to the visitor's email so you can reply directly.
- **Confirmation to visitor** — friendly "thanks, I'll get back to you" email branded to match your portfolio.

### 3. Public API route
- New server route `src/routes/api/public/contact.ts` that:
  - Validates input with Zod (name, email, message — length limits, format checks).
  - Inserts the submission into the database.
  - Sends both emails via the queue.
  - Returns success/error JSON.

### 4. Update the contact form
- `src/routes/contact.tsx` currently posts to `https://formspree.io/f/YOUR_FORM_ID`. I'll switch it to POST to `/api/public/contact`.
- Existing UI (success animation, validation, styling) stays exactly the same.

## Technical details
- Stack: TanStack Start server route under `/api/public/` (no auth required since visitors aren't logged in).
- Validation: Zod schema, server-side.
- Email delivery: Lovable's pgmq-based queue with auto-retry.
- Storage: `contact_submissions` table with RLS (insert-only for anon, select for you).
