import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const form = await req.formData()
  const lead = {
    name: form.get('name'),
    phone: form.get('phone'),
    email: form.get('email'),
    zip: form.get('zip'),
    service: form.get('service'),
    items: form.get('items'),
    volume: form.get('volume'),
    notes: form.get('notes') ?? form.get('message'),
    receivedAt: new Date().toISOString(),
  }

  const webhook = process.env.GHL_WEBHOOK_URL
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      })
    } catch (err) {
      console.error('GHL webhook failed', err)
    }
  } else {
    console.log('[lead]', lead)
  }

  return NextResponse.json({ ok: true })
}
