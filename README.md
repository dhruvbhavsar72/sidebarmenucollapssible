# Sidebar Menu (Collapsible) — Practical

Small demo project showcasing a collapsible sidebar with an icon-only menu and a content sidebar that supports:

- Light and dark themes (toggle persisted to localStorage)
- Theme-aware icon menu background and search input styling
- Accordion submenus (only one submenu open at a time)
- Responsive behavior: sidebar auto-collapses on small screens and supports mobile open/close


## Files of interest

- `index.html` — main HTML page and structure. The icon menu is in the left `aside.sidebar_menu`, the main content navigation is in `aside.sidebar`.
- `styles.css` — theme variables, layout, and component styling. Default (dark) variables live in `:root`; light theme overrides are under `html[data-theme="light"]`.
- `script.js` — menu generation from a JSON-like `menuConfig`, theme initialization and toggle, responsive behavior, submenu accordion logic, and event handlers.

## Key behaviors

1. Theme toggle
   - The theme toggle button appears below the user icon in the icon menu.
   - Theme is applied by setting `data-theme` on the root (`<html>`): `html[data-theme="light"]` for light theme; default values act as dark theme.
   - The selected theme is saved to `localStorage` under key `theme` and is applied on page load.

2. Icon menu color and search border
   - CSS variables control the icon menu background (`--menu-bg`), active icon background (`--menu-item-active-bg`), and search border (`--search-border`). These variables are overridden for light theme so the UI adapts automatically when the theme changes.

3. Submenu accordion
   - Only one submenu may be open at a time. Clicking a menu item with a submenu will close other expanded submenus.

4. Accessibility & small notes
   - The main `aside#sidebar` has an `aria-label` for the sidebar.
   - Menu items are made focusable (`tabIndex = 0`) and support `Enter` key toggling in the current implementation.

## How to run / test locally (Windows PowerShell)

1. Open the project folder in your file explorer (or from PowerShell run):

```powershell
Start-Process .\index.html
```

2. Interact with the UI in your browser:
   - Click items in the icon menu to switch menu groups.
   - Click items with chevrons to expand/collapse submenus — notice only one submenu is open at a time.
   - Click the moon/sun toggle (below the user icon) to switch themes; refresh the page to confirm persistence.
   - Resize the window to test responsive collapse behavior.

## Developer notes & suggestions

- Lint/style: the JS currently uses `document.querySelectorAll(...).forEach(...)` in multiple places. Some linters prefer `for...of` loops and `element.dataset` over `getAttribute`. These are stylistic only and do not affect runtime behavior. If you want, we can refactor JS to match stricter lint rules.

- Theme polish: color choices for the light theme are intentionally conservative. If you have a design system or brand colors, replace the values in `html[data-theme="light"]` with official tokens.

- Accessibility: consider adding `aria-expanded` and `aria-controls` attributes for submenu controls to improve screen-reader support.


## Next improvements (optional)

- Convert the theme toggle to a labelled switch component to improve discoverability.
- Add animation to theme color transitions for smoother UX.
- Refactor menu generation to accept remote JSON or to lazy-load submenu contents.