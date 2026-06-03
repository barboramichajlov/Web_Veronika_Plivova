# Instrukce pro tvorbu webu – Veronika Plívová

## Situace

Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Cíl

Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

---

## Úkol

Vytvoř funkční web, který bude obsahovat:

- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)

---

## Znalosti

- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formátu svg (pokud ho nemáš dodaný, vytvoř ho)
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu
- Všechny interní odkazy piš bez přípony .html – př. /sluzby a ne sluzby.html
- Do .htaccess přidej mod_rewrite pravidla: přesměrování *.html → * (301) a interní obsluhu čistých URL na příslušný .html soubor
- Jako kanonickou (tj. preferovanou) URL webu chci domena.cz a web přesměruj z verze www na bez www
- Přesměrování http→https je řešeno na úrovni hostingu, nepřidávej ho do souboru .htaccess

---

## Základní SEO

- Strukturuj nadpisy H1–H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

---

## Optimalizace obrázků

- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

---

## Vizuální hierarchie a čitelnost

- Jasná typografická hierarchie (nadpisy H1–H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, minimální velikost 16px
- Správné řádkování (line-height 1.5–1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Maximální šířka textu 70 % obrazovky (nikdy nepiš od kraje po kraj)

---

## Layout

- Šířku celého webu dej na 85 % obrazovky
- Jasné oddělení sekcí a obsahových celků
- Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace – logo na střed, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

---

## Obsah

- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404" dej ikonu `<wa-icon name="face-frown" variant="regular"></wa-icon>`) a přidej ji na web pomocí příkazu v souboru .htaccess: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

---

## Konzistence

- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie (používej Font Awesome, ne emotikony)
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

---

## Barevná paleta

- Omezený počet barev (2–3 hlavní + neutrální)
- Primární barva pro CTA (call-to-action) tlačítka
- Neutrální jemné barvy pro pozadí
- Pro text `#333333`

| Role       | HEX       |
|------------|-----------|
| Primární   | `#e03f5a` |
| Sekundární | `#ffccd1` |
| Tlačítka   | `#e03f5a` |
| Pozadí     | `#ffffff` |
| Text       | `#333333` |

---

## Fonty

Zvol vhodný patkový nebo bezpatkový font podle obsahu webu. Pokud není jasné, zvol moderní sans-serif font (př. Outfit).

---

## Struktura

Vícestránkový web. Položky menu:

- Portfolio
- O mně
- Ceník
- Kontakt

---

## Design

Vytvoř moderní mobile-first web: použít můžeš trendy jako souměrný bento grid layout se zaoblenými rohy, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky.

### Moderní design

- **Layout:** používej souměrný Bento grid
- **Barvy:** Jemné gradienty, plynulé přechody
- **Prvky:** Zaoblené rohy (border-radius 16–24px), jemné stíny, 3D prvky
- **Glass efekt:** Skleněný efekt v pozadí karet (glassmorphism)
- **Animace:** Mikro interakce na hover, jemné scroll animace

---

## Obrázky

Na webu použij fotky (přílohy), které najdeš ve složce:

| Složka                   | Použití                              |
|--------------------------|--------------------------------------|
| `Obrazky/Hlavni`         | Hlavní strana (hero sekce atd.)      |
| `Obrazky/Deti`           | Sekce Děti                           |
| `Obrazky/Dospeli`        | Sekce Dospělí                        |
| `Obrazky/Produktove`     | Sekce Produktové fotografie          |
| `Obrazky/Rodina`         | Sekce Rodina                         |
| `Obrazky/Svatba`         | Sekce Svatba                         |
| `Obrazky/Tehotenstvi`    | Sekce Těhotenství                    |
| `Obrazky/Zvirata`        | Sekce Zvířata                        |
| `Obrazky/Omne`           | Stránka O mně a Patička              |

Použij vlastní ikony.

---

## Texty

Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej.

---

### Hero sekce

> Fotografka Veronika Plívová
>
> Rodinné focení, děti, páry, svatby,..
>
> Fotím v ateliéru v Lovosicích, ale prakticky celý rok i venku, takže je možnost domluvit jakoukoli lokalitu dle vašeho přání

---

### Ceník

**platný od 1. 1. 2026**

**Focení dětí, těhotenské focení, páry, rodinné (ateliér nebo exteriér) – 1 900 Kč**
- cena zahrnuje 10 fotografií v el. podobě v plné velikosti
- čas vyhrazený v délce 60 min.
- každá další fotografie vybraná navíc je za 190 Kč

**Svatební focení**

Kratší balíček – 4 900 Kč
- focení v délce 2 hod. (focení obřadu, novomanželů, skupinek)
- cena zahrnuje 70 upravených záběrů zaslaných přes internetové uložiště úschovna
- v ceně je cesta do 30 km, nad tuto vzdálenost 8 Kč/km
- každá další započatá hodina nad rámec balíčku je za 800 Kč

Delší balíček – 9 900 Kč
- focení v délce 8 hod. (focení příprav nevěsty, obřadu, novomanželů, skupinek, hostina, zábava)
- cena zahrnuje 250 upravených záběrů na flash disku
- v ceně je cesta do 30 km, nad tuto vzdálenost 8 Kč/km
- každá další započatá hodina nad rámec balíčku je za 800 Kč

**Produktová fotografie**
- pro cenovou nabídku mě prosím kontaktujte

---

### O mně

> Fotit jsem začala před více jak deseti lety. Vážněji jsem se do focení potom obula na mateřské dovolené, kdy jsem si pořídila novou vysněnou zrcadlovku. Baví mě fotit skoro cokoliv, ale nejvíce se věnuji dětem a rodinné fotografii.
>
> Fotím v ateliéru v Lovosicích.

**Vybavení:**

Nikon D750, Nikon D800 ; Sigma 105 mm/1,4 DG HSM Art  
Tamron 24–70 mm/2,8, Nikon 50 mm/1,8

---

### Kontakt

> Veronika Plívová  
> Terezínská 1111  
> (nad cukrářskými potřebami Lilie)  
> Lovosice  
> +420 608 296 398  
> photoplivova@email.cz  
> facebook.cz/photoplivova
