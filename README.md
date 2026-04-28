# Nobu-Ya Menu

A free, mobile-first QR-code menu for the shop. Customers scan a QR code,
the menu opens in their browser. Staff can hide items "not served today"
**and** edit names, prices, descriptions, or photos right from a simple
admin page — no coding required.

## What's in this folder

```
NBY Menu/
├── index.html      ← customer menu (the QR code points here)
├── admin.html      ← staff admin (toggle + edit any item)
├── menu.js         ← all menu data + admin password + cloud config
├── Pictures/       ← dish photos (already wired up to each dish)
├── README.md       ← this file
└── design/         ← original Claude design files (kept for reference)
```

You only ever need to **edit `menu.js`** when the menu STRUCTURE changes
(adding a brand-new dish, deleting one entirely, renaming a section).
Everything else — daily availability, name tweaks, price changes,
description edits — happens through `admin.html`.

---

## How the editing works

`menu.js` holds the **default** menu (the version in the printed PDF).
The admin page stores **overrides** on top of that — only the fields
you change get saved. So you can:

- **Hide an item for the day** → toggle off → item disappears from the menu
- **Change a price for tonight** → edit the price field → only that price changes
- **Tweak a description seasonally** → edit the description → others untouched
- **Change a dish photo** → paste a new image path → only that photo updates
- **Restore one item** → click "Reset to default" → that item only returns to PDF defaults
- **Restore everything** → click "Reset all edits" → wipes all edits, keeps hides
- **Show everything** → click "All available" → un-hides everything, keeps edits

Edits are visible in real time on the admin page. They become live for
customers when you press **Save changes**.

---

## Quick start

### 1. Try it locally

Double-click `index.html` to see the customer view.
Double-click `admin.html` to see the admin view (password
defaults to `change-me-please`, set in `menu.js`).

### 2. Change the admin password

Open `menu.js` in any text editor (TextEdit, Notepad, VS Code…), find:

```js
admin: {
  password: 'change-me-please',
```

Pick something memorable and **don't reuse a password you use elsewhere**
(see Security notes below).

### 3. Sanity-check the menu

Scroll through `index.html` once. Everything from the PDF should be there
in the right sections with the right photos. If something is wrong:

- **Wrong photo on a dish** → fix the `image` field in `menu.js`,
  or override it through admin
- **Typo / wrong description** → fix in `menu.js`,
  or override through admin (if you'd rather not touch code)
- **Missing dish** → add a new entry in `menu.js` (copy an existing one
  as a template)

---

## Publishing the menu (free hosting)

You need to put the files online so people scanning the QR code can
reach them.

### Option A — Netlify Drop (easiest, no signup)

1. Go to <https://app.netlify.com/drop>
2. Drag the entire **NBY Menu** folder onto the page
3. Netlify gives you a URL like `https://amazing-name-1234.netlify.app`
4. Use that URL to make your QR code (e.g. <https://www.qr-code-generator.com>)
5. To update the photos or menu later, drag the folder again
   (sign up free to keep the same URL)

### Option B — GitHub Pages (also free, more permanent)

1. Make a free GitHub account
2. Create a new repository (e.g. `nobu-ya-menu`)
3. Upload all the files **including the Pictures folder**
4. In the repo's **Settings → Pages**, set source to `main` branch, root folder
5. Your menu will be at `https://<your-username>.github.io/nobu-ya-menu/`

Other free options that work the same way: Cloudflare Pages, Vercel, Surge.sh.

> **Photo tip:** the `Pictures/` folder is ~95 MB. That's fine for
> Netlify Drop and GitHub Pages, but each photo is ~1.7 MB which is
> heavier than ideal. For best customer experience, consider running
> the images through <https://squoosh.app/> (drag in, save smaller).
> The site will still work without doing this.

---

## Letting staff hide / edit items

Once your site is live:

- **Customer menu URL:** `https://<your-site>/`
- **Staff admin URL:** `https://<your-site>/admin.html`

Bookmark the admin URL on the staff phone or tablet.
Each evening someone opens `/admin.html`, signs in,
toggles off anything not being served, edits any tonight-only prices,
and presses **Save changes**.

By default, **changes only apply to the device the admin used.**
To make changes visible on every customer's phone, set up cloud sync ↓

### Setting up cloud sync (one-time, ~5 minutes)

This is the bit that lets one tablet's edits → reach every customer's phone.

1. Go to <https://jsonbin.io> and sign up (free)
2. Click **API Keys** → copy your **X-MASTER-KEY**
3. Click **Create Bin**, paste `{}` as the content, set **Private**, **Create**
4. Copy the **Bin ID** from the URL (the long string after `/b/`)
5. Open `menu.js` and fill in:

   ```js
   cloud: {
     provider: 'jsonbin',
     jsonbinId: 'paste-your-bin-id-here',
     jsonbinKey: 'paste-your-master-key-here',
   },
   ```

6. Re-upload the folder (Netlify Drop) or commit (GitHub Pages)

After this, the admin will show **Cloud sync on**, and saves reach every
customer device. JSONBin's free plan covers up to ~10,000 menu loads
per month — plenty for a small shop.

---

## Security notes

- **The admin password lives in `menu.js`**, which means anyone who
  views the page source can read it. This is "lobby key" security —
  enough to stop a curious customer, not a determined attacker.
- The same applies to the JSONBin master key. Worst case if it leaks:
  someone toggles items on or off. There's no customer data to steal.
- **Don't reuse a password you use elsewhere.**
- If the shop wants stronger security later, they'd need a real backend
  with server-side auth — out of scope for a free static site.

---

## Notes on the data we built from the PDF

- **Sake section**: the printed PDF has 10 sake entries all labelled
  "Sake Name" with the same Japanese text. These are obviously
  placeholders in your printed copy — the names + producers + grades
  are something the shop will fill in. Just edit them in the admin
  (or in `menu.js` for permanent changes).
- **Asari Butter**'s Japanese was identical to Asari Mushi in the PDF
  (clearly a typo). I corrected it to あさりバター. Edit it in admin if
  the shop prefers a different romanization.
- **Kawa Ebi**'s Japanese was identical to Kaki Fry's in the PDF
  (also a typo). I corrected it to 川えび.
- Dishes with size pricing (Yaki Soba "18/45", Sapporo "8/10",
  Shouchu "10/90") are shown as "X / Y" in the price column with the
  size labels in the description — change to whatever format you prefer
  via the admin.

---

## Common things you'll want to do

| Task                                | Where                                                    |
| ----------------------------------- | -------------------------------------------------------- |
| Hide a dish for tonight             | `admin.html` → flip the toggle off                       |
| Change a price for tonight          | `admin.html` → edit the price field                      |
| Tweak a description for tonight     | `admin.html` → edit the description                      |
| Update a sake entry                 | `admin.html` → edit name + Japanese + 4 prices           |
| Reset one item to PDF defaults      | `admin.html` → click "Reset to default" on that item     |
| Wipe all overrides                  | `admin.html` → "Reset all edits" (keeps hides)           |
| Bring back every hidden dish        | `admin.html` → "All available"                           |
| Add a brand-new dish                | `menu.js` → add an entry to the `items` array            |
| Permanently rename a section        | `menu.js` → edit `name` / `subtitle` / `number`          |
| Permanently change the photo for X  | `menu.js` → set the `image` field                        |
| Change the restaurant tagline       | `menu.js` → `restaurant.tagline`                         |
| Change the admin password           | `menu.js` → `admin.password`                             |

---

## Troubleshooting

**"Cloud unreachable — using local copy" in admin**
→ Your JSONBin ID or key is wrong, or the device is offline.
Double-check the values in `menu.js`.

**Admin changes don't show up on customer phones**
→ You haven't set up cloud sync yet. See the section above.

**A photo is missing / broken in the customer view**
→ The image path in `menu.js` doesn't match the filename in `Pictures/`.
Image paths are case-sensitive on most hosts (Netlify, GitHub Pages).

**Photos look stretched**
→ All photos are auto-cropped to a square. For best results, use square
(1:1) source images.

**A whole section disappeared from the customer menu**
→ Every item in that section is toggled off. Re-enable at least one,
or hit **All available**.

**Customer page shows "Loading..." forever**
→ `menu.js` has a JavaScript syntax error (probably from manual editing).
Open the browser console (F12) — it'll point at the line. Common
culprits: missing comma between items, missing closing `}` or `]`.

**Lost the admin password**
→ It's in `menu.js` (`admin.password`). Open the file in a text editor.
