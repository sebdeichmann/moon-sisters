import { useEffect } from 'react';
import retreatContent from './content/retreatContent.js';

function MailLink({ email, subject, children, className }) {
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return <a className={className} href={href}>{children}</a>;
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M17 10H3m0 0 5.25-5.25M3 10l5.25 5.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RetreatHeader({ contactEmail }) {
  return (
    <header className="retreat-header">
      <a className="retreat-home-link" href="/" aria-label="Zur Moon Sisters Hauptseite">
        <ArrowLeftIcon />
        <img src="/assets/moon-sisters-logo.png" alt="Moon Sisters" />
      </a>
      <nav aria-label="Retreat Navigation">
        <a href="#ort">Der Ort</a>
        <a href="#praktisches">Praktisches</a>
        <a href="#faq">FAQs</a>
        <MailLink className="retreat-nav-cta" email={contactEmail} subject={retreatContent.emailSubject}>
          Anmelden
        </MailLink>
      </nav>
    </header>
  );
}

function RetreatFooter({ content }) {
  return (
    <footer className="site-footer retreat-site-footer">
      <div>
        <h2>{content.brand}</h2>
        <p>{content.founders}</p>
        <p>{content.footer.text}</p>
      </div>
      <div>
        <h3>Zur Hauptseite</h3>
        <a href="/#angebote">Angebote</a>
        <a href="/#ueber-uns">Über uns</a>
        <a href="/#stimmen">Stimmen</a>
      </div>
      <div>
        <h3>Kontakt & Rechtliches</h3>
        <a href={`mailto:${content.contactEmail}`}>{content.contactLabel}</a>
        {content.footer.legal.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </div>
      <p className="footer-note">© 2026 {content.brand}. {content.footer.made}</p>
    </footer>
  );
}

export default function RetreatPage({ content }) {
  const { contactEmail } = content;

  useEffect(() => {
    const description = 'Ein Retreat für Frauen, die mehr bei sich ankommen wollen. 13.–15. November 2026 in der Alten Schule Bordelum an der Nordsee.';
    const canonical = 'https://moon-sisters.de/retreat/';
    const image = 'https://moon-sisters.de/assets/retreat/northsea.webp';
    const setMeta = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', retreatContent.title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[name="twitter:title"]', retreatContent.title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);
  }, []);

  return (
    <div className="retreat-page">
      <RetreatHeader contactEmail={contactEmail} />

      <main>
        <section className="retreat-hero" aria-labelledby="retreat-title">
          <img src="/assets/retreat/northsea.webp" alt="Weite Nordseelandschaft im November" />
          <div className="retreat-hero-shade" aria-hidden="true" />
          <div className="retreat-hero-copy">
            <h1 id="retreat-title">{retreatContent.title}</h1>
            <p className="retreat-subtitle">{retreatContent.subtitle}</p>
            <p className="retreat-date-line">{retreatContent.dateLine}</p>
            <MailLink className="button retreat-hero-cta" email={contactEmail} subject={retreatContent.emailSubject}>
              Meinen Platz buchen
            </MailLink>
          </div>
        </section>

        <section className="retreat-intro retreat-shell">
          <h2>{retreatContent.intro.title}</h2>
          <div className="retreat-intro-copy">
            {retreatContent.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="retreat-senses" aria-label="Sinnliche Eindrücke des Retreats">
            {retreatContent.intro.senses.map((sense) => <p key={sense}>{sense}</p>)}
          </div>
          <p className="retreat-refrain">
            {retreatContent.intro.refrain.map((line) => <span key={line}>{line}</span>)}
          </p>
        </section>

        <section className="retreat-invitation retreat-shell">
          <div className="retreat-invitation-copy">
            {retreatContent.invitation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="retreat-pull-line">{retreatContent.invitation.closing}</p>
          </div>
        </section>

        <section className="retreat-at-glance" aria-labelledby="retreat-at-glance-title">
          <div className="retreat-shell retreat-at-glance-inner">
            <div className="retreat-at-glance-heading">
              <h2 id="retreat-at-glance-title">Auf einen Blick</h2>
              <p>13.–15. November 2026 · zwei Übernachtungen · vegetarische Verpflegung · ab 444 €</p>
            </div>
            <div className="retreat-at-glance-included">
              <h3>Im Preis enthalten</h3>
              <ul>
                {retreatContent.included.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href="#praktisches">Alle praktischen Details</a>
            </div>
          </div>
        </section>

        <section className="retreat-for-you">
          <div className="retreat-shell retreat-for-you-inner">
            <h2>Dieses Retreat ist für dich, wenn …</h2>
            <div className="retreat-for-you-list">
              {retreatContent.forYou.map((item) => <p key={item}>{item}</p>)}
            </div>
            <p className="retreat-reassurance">{retreatContent.reassurance}</p>
          </div>
        </section>

        <section className="retreat-expect retreat-shell">
          <div className="retreat-section-heading">
            <h2>Was dich erwartet</h2>
            <p>Ein gehaltener Rahmen mit gemeinsamen Zeiten – und bewusst viel Raum dazwischen. Kein starrer Ablaufplan.</p>
          </div>
          <div className="retreat-experience-list">
            {retreatContent.experiences.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="retreat-everything-invitation">Alles ist eine Einladung: So viel oder so wenig, wie du magst.</p>
        </section>

        <section className="retreat-venue" id="ort">
          <div className="retreat-shell">
            <div className="retreat-venue-heading">
              <h2>Der Ort</h2>
              <div>
                <h3>{retreatContent.venue.title}</h3>
                <p>{retreatContent.venue.text}</p>
              </div>
            </div>
            <div className="retreat-gallery">
              <figure className="retreat-gallery-main">
                <img src="/assets/retreat/venue-bewegungsraum.webp" alt="Heller Bewegungsraum mit Holzboden und großen Fenstern in der Alten Schule" loading="lazy" />
              </figure>
              <figure>
                <img src="/assets/retreat/interior-dining.webp" alt="Heller Essbereich mit Wintergarten in der Alten Schule" loading="lazy" />
              </figure>
              <figure>
                <img src="/assets/retreat/venue-kitchen.webp" alt="Gemeinschaftsküche im Seminarhaus Alte Schule" loading="lazy" />
              </figure>
            </div>
            <p className="retreat-photo-credit">Fotos: Gäste- & Seminarhaus Alte Schule</p>
          </div>
        </section>

        <section className="retreat-practical retreat-shell" id="praktisches">
          <div className="retreat-section-heading">
            <h2>Praktisches</h2>
            <p>Datum, Ort, Preis und alles, was enthalten ist – ruhig und klar zusammengefasst.</p>
          </div>
          <div className="retreat-practical-panel">
            <dl className="retreat-facts">
              {retreatContent.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="retreat-included">
              <div>
                <h3>Im Preis enthalten</h3>
                <ul>
                  {retreatContent.included.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3>Im Retreatprogramm</h3>
                <ul>
                  {retreatContent.programIncluded.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="retreat-not-included">
                <h3>Nicht enthalten</h3>
                {retreatContent.notIncluded.map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
            <aside className="retreat-booking-note">
              <h3>Gut zu wissen</h3>
              <p>{retreatContent.bookingNote}</p>
            </aside>
            <div className="retreat-booking" id="anmelden">
              <div>
                <h3>Dein Platz am Meer</h3>
                <p>Anmeldung und Fragen per E-Mail an <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
              </div>
              <MailLink className="button" email={contactEmail} subject={retreatContent.emailSubject}>
                Meinen Platz buchen
              </MailLink>
            </div>
          </div>
        </section>

        <section className="retreat-faq retreat-shell" id="faq" aria-labelledby="retreat-faq-title">
          <div className="retreat-section-heading">
            <h2 id="retreat-faq-title">Häufige Fragen</h2>
            <p>Damit du vor deiner Buchung weißt, worauf du dich einlässt – praktisch, persönlich und finanziell.</p>
          </div>
          <div className="retreat-faq-list">
            {retreatContent.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="retreat-faq-answer">
                  {faq.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {faq.bullets && (
                    <ul>
                      {faq.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {faq.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="retreat-hosts retreat-shell">
          <div className="retreat-section-heading">
            <h2>Julie & Nina</h2>
            <p>{content.about.intro}</p>
          </div>
          <div className="retreat-host-grid">
            {content.about.people.map((person) => (
              <article key={person.name}>
                <img src={person.image} alt={person.imageAlt} loading="lazy" />
                <div>
                  <p>{person.role}</p>
                  <h3>{person.name}</h3>
                  <a href={person.link} target="_blank" rel="noreferrer">{person.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="retreat-closing">
          <div className="retreat-closing-copy">
            <h2>Eine Einladung, wieder ganz da zu sein – und dich vom Leben berühren zu lassen.</h2>
            <p>{retreatContent.dateLine} · ab 444 €</p>
            <MailLink className="button retreat-closing-cta" email={contactEmail} subject={retreatContent.emailSubject}>
              Meinen Platz buchen
            </MailLink>
          </div>
        </section>
      </main>

      <div className="retreat-footer-home retreat-shell">
        <a href="/"><ArrowLeftIcon /> Zur Moon Sisters Hauptseite</a>
      </div>
      <RetreatFooter content={content} />
    </div>
  );
}
