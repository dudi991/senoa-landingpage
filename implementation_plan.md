# Umsetzungsplan - LYVAN Digital Flagship Rebranding & Restrukturierung

Wir strukturieren die Landingpage in `elys_final` um, um die neue Markenidentität **LYVAN** und die neue 9-teilige Seitenstruktur zu implementieren. Die minimalistische, edle "Quiet Luxury"-Ästhetik (helle Hintergründe, großzügige Abstände, feine Linien, Serif-Schriftzüge) bleibt dabei vollkommen erhalten.

---

## 📐 Die neue Seitenstruktur & Kopie (German Version)

### 1. **Header & Navigation (Navbar.tsx)**
*   **Logo:** `L Y V A N` (tracking-widest font-sans)
*   **Links:** `RITUAL`, `REZEPTUR`, `PHILOSOPHIE`, `WARTELISTE`
*   **CTA Button:** `WARTELISTE BEITRETEN` (bg-accent text-white)

### 2. **Hero – Der Wunschzustand (Hero.tsx)**
*   **Headline:** `Feierabend beginnt im Kopf.`
*   **Subheading:** `LYVAN ist dein tägliches Abendritual — ein bewusster Übergang aus dem Leistungsmodus in echte Ruhe.`
*   **CTA Button:** `WARTELISTE BEITRETEN`
*   **Key Benefits Grid:**
    *   *Emotional Decompression* ➔ *Mentales Entlasten*
    *   *Nervous System Relief* ➔ *Regeneration*
    *   *Quiet Presence* ➔ *Innere Stille*

### 3. **Benefit Strip – Der innere Wechsel (BenefitStrip.tsx)**
*   Ein edler, horizontaler Streifen mit 5 feinen Icons und Beschreibungen:
    1.  **Abschalten:** *Den Arbeitstag bewusst hinter dir lassen.* (Icon: `Moon`)
    2.  **Ankommen:** *Wieder bei dir statt im nächsten Gedanken.* (Icon: `Anchor`)
    3.  **Loslassen:** *Weniger müssen. Mehr Ruhe.* (Icon: `Wind`)
    4.  **Dein Moment:** *Ein Ritual, das nur dir gehört.* (Icon: `GlassWater`)
    5.  **Langsamer werden:** *Für ruhigere Abende und klarere Gedanken.* (Icon: `Hourglass`)
*   *Stil:* Sehr feine Trennlinien (`border-r border-primary/10`) zwischen den Abschnitten, minimalistische Strichstärke (`strokeWidth={1}`).

### 4. **Customer Story – Der Tag endet nicht von allein (CustomerStory.tsx)**
*   Ein wunderschönes, redaktionelles Layout mit einem großflächigen Widescreen-Bild (`images/derAbend.png`).
*   **Headline:** `Der Tag endet nicht von allein.`
*   **Story-Text:**
    *   *Zwischen Meetings, Nachrichten und Gedanken, die nie ganz still werden, vergessen viele Menschen, wie sich echte Ruhe anfühlt.*
    *   *LYVAN schafft Raum für den Übergang — bevor aus Erschöpfung wieder Regeneration werden kann.*

### 5. **Editorial Pause – Weniger funktionieren. Mehr ankommen. (EditorialPause.tsx)**
*   Ein typografisches Ruhebild als visuelle Atempause der Seite.
*   **Zentrierter Text:** `Weniger funktionieren.` <br/> `Mehr ankommen.` (In wunderschöner, großer `"Instrument Serif"` Kursivschrift).
*   *Stil:* Ganz cleaner, weißer Hintergrund mit viel Freiraum.

### 6. **Ritual Moment – Ein kleiner Moment. Große Wirkung. (Ritual.tsx)**
*   Perfekt ausbalanciertes 3-Spalten-Layout:
    *   **Linke Spalte:**
        *   `Das Ritual`
        *   `Ein kleiner Moment. Große Wirkung.`
        *   `Ein bewusstes Ritual am Abend — entwickelt für Menschen, die nicht nur schlafen, sondern wirklich runterkommen wollen.`
        *   Checkmarks: *Optimierte Regeneration*, *Nervensystem-Support*, *Mentale Entlastung*.
    *   **Mittlere Spalte:** Das Zubereitungs-Bild (`images/kleinerMoment.png`) im quadratischen Format (1:1).
    *   **Rechte Spalte:** Die 3 Schritte sauber über die Bildhöhe verteilt (I. Ankunft, II. Präsenz, III. Ruhe).

### 7. **Ingredient Curation – Sorgfältig ausgewählt. Für deinen Abend. (Ingredients.tsx)**
*   Unser edler Inhaltsstoff-Katalog, erweitert auf 10 Premium-Mikronährstoffe mit ihren neuen Makrofotos:
    1.  Magnesium Bisglycinat (`images/MagnesiumB.png`)
    2.  Magnesium L-Threonat (Magtein®) (`images/L-THREONAT.png`)
    3.  Suntheanine® L-Theanine (`images/L-THEANINE.png`)
    4.  Shoden® Ashwagandha (`images/ASHWAGANDH.png`)
    5.  Affron® Safran Extrakt (`images/affron.png`)
    6.  Phosphatidylserin (`images/PHOSPHATIDYLSERINE.png`)
    7.  Reishi Dual Extract (`images/reishi.png`)
    8.  Apigenin (`images/apegenin.png`)
    9.  Glycin (`images/glycine.png`)
    10. Madagascar Vanilla mit Tonka Bean (`images/vanille.png`)

### 8. **Evening Culture – Moderne Abende brauchen neue Rituale. (Gallery.tsx)**
*   Unsere edle Bildergalerie mit der neuen deutschen Überschrift:
    *   `Moderne Abende brauchen neue Rituale.`

### 9. **Waitlist – Werde Teil von LYVAN. (Waitlist.tsx)**
*   Ein extrem minimalistisches Eingabefeld für E-Mails (feiner 1px-Rahmen) mit dem dominanten, kontrastreichen Button `DABEI SEIN`.

### 10. **Footer – Minimaler Abschluss (Footer.tsx)**
*   Abschluss-Branding `LYVAN` mit dem Claim "Dein Abend. Deine Ruhe. Dein Ritual." sowie Impressum & Datenschutz.

---

## 🛠️ Geplante Änderungen in `elys_final`

1.  **[MODIFY] [App.tsx](file:///d:/antigravity/elys_final/src/App.tsx):** Strukturierung der Seitenreihenfolge und Einbindung der neuen/angepassten Komponenten.
2.  **[MODIFY] [Navbar.tsx](file:///d:/antigravity/elys_final/src/components/Navbar.tsx):** Umbenennung auf LYVAN & deutsche Navigation.
3.  **[MODIFY] [Hero.tsx](file:///d:/antigravity/elys_final/src/components/Hero.tsx):** Aktualisierung der Texte und Anpassung an das helle Design.
4.  **[NEW] [BenefitStrip.tsx](file:///d:/antigravity/elys_final/src/components/BenefitStrip.tsx):** Der feine 5er-Vorteilsstreifen.
5.  **[NEW] [CustomerStory.tsx](file:///d:/antigravity/elys_final/src/components/CustomerStory.tsx):** Die neue Editorial-Sektion "Der Tag endet nicht von allein".
6.  **[NEW] [EditorialPause.tsx](file:///d:/antigravity/elys_final/src/components/EditorialPause.tsx):** Die minimalistische typografische Pause.
7.  **[MODIFY] [Ritual.tsx](file:///d:/antigravity/elys_final/src/components/Ritual.tsx):** Das überarbeitete 3-Spalten-Ritual.
8.  **[MODIFY] [Ingredients.tsx](file:///d:/antigravity/elys_final/src/components/Ingredients.tsx):** Erweiterung auf die 10 neuen Inhaltsstoffe mit Makro-Fotos.
9.  **[MODIFY] [Gallery.tsx](file:///d:/antigravity/elys_final/src/components/Gallery.tsx):** Anpassung der Überschrift.
10. **[NEW] [Waitlist.tsx](file:///d:/antigravity/elys_final/src/components/Waitlist.tsx):** Das minimalistische Newsletter-Formular.
11. **[MODIFY] [Footer.tsx](file:///d:/antigravity/elys_final/src/components/Footer.tsx):** Anpassung des Brandings.

---

## 🔬 Verifikationsplan

*   **Lokale Prüfung:** Wir starten den Vite-Entwicklungsserver und kontrollieren das Layout und die Bildpfade in Echtzeit über den Browser, um absolute Pixelperfektion zu garantieren.
