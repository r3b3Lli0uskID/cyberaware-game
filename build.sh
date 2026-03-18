#!/bin/bash
# ─── CyberGuard — Cloudflare Pages build script ───────────────────────────────
# Generates js/config.js from environment variables set in CF Pages dashboard.
# Required env vars:  SUPABASE_URL   SUPABASE_ANON
# ─────────────────────────────────────────────────────────────────────────────

set -e  # exit on any error

if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_ANON" ]; then
  echo "ERROR: SUPABASE_URL and SUPABASE_ANON must be set as environment variables."
  exit 1
fi

node -e "
const fs   = require('fs');
const url  = process.env.SUPABASE_URL;
const anon = process.env.SUPABASE_ANON;

const example = fs.readFileSync('js/config.example.js', 'utf8');
const output  = example
  .replace(\"'https://YOUR_PROJECT_REF.supabase.co'\", \"'\" + url  + \"'\")
  .replace(\"'YOUR_ANON_PUBLIC_KEY'\",                  \"'\" + anon + \"'\");

fs.writeFileSync('js/config.js', output);
console.log('✅  js/config.js generated from environment variables');
"

echo "✅  Build complete — output dir: ."
