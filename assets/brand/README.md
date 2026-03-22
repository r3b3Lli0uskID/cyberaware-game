# CyberGuard Brand Assets

## Files

| File | Format | Use |
|------|--------|-----|
| `cyberguard-logo-horizontal.svg` | SVG (scalable) | Primary logo — white/light backgrounds |
| `cyberguard-logo-darkbg.svg` | SVG (scalable) | Dark background variant (nav, dark slides) |
| `cyberguard-icon.svg` | SVG (scalable) | Icon only — favicons, app icons, avatars |
| `cyberguard-wallpaper-4k.html` | HTML → PNG | 4K wallpaper — Cyan/Navy (original) |
| `cyberguard-wallpaper-2k.html` | HTML → PNG | 2K wallpaper — Cyan/Navy (original) |
| `cyberguard-wallpaper-4k-crimson.html` | HTML → PNG | 4K wallpaper — Crimson/Red variant |
| `cyberguard-wallpaper-2k-crimson.html` | HTML → PNG | 2K wallpaper — Crimson/Red variant |
| `cyberguard-wallpaper-4k-gold.html` | HTML → PNG | 4K wallpaper — Gold/Obsidian variant |
| `cyberguard-wallpaper-2k-gold.html` | HTML → PNG | 2K wallpaper — Gold/Obsidian variant |

## Exporting PNG from SVG (for print / marketing)

Open the SVG in a browser, right-click → Save as, or use Inkscape:

```
inkscape cyberguard-logo-horizontal.svg --export-png=cyberguard-logo-4000w.png --export-width=4000
inkscape cyberguard-icon.svg --export-png=cyberguard-icon-1024.png --export-width=1024
```

Or via browser (Chrome/Edge):
1. Open the SVG file
2. Zoom to desired size
3. DevTools → Screenshot (Ctrl+Shift+P → "Capture full size screenshot")

## Exporting the Wallpaper as PNG

1. Open `cyberguard-wallpaper-4k.html` in Chrome/Edge
2. Set zoom to 100%
3. DevTools → Ctrl+Shift+P → "Capture full size screenshot"
4. Saved as PNG at native 3840×2160

## Brand Colours

| Role | Hex |
|------|-----|
| Background (deep) | `#020810` |
| Shield navy | `#091520` → `#112236` |
| Cyan primary | `#00E5FF` |
| Cyan mid | `#00C8F0` |
| Cyan dark | `#0099CC` |
| Text dark | `#0F2A45` |
| Muted text | `#4A7090` |
| White | `#FFFFFF` |

## Typography

Primary: **Segoe UI** 800 weight, tracking 1–4
Secondary: **Segoe UI** 400 weight, tracking 3–6 uppercase
Fallback stack: `'Helvetica Neue', Helvetica, Arial, sans-serif`
