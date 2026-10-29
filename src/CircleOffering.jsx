import './styles/circle-offering.css';

export default function CircleOffering({ offer, layout, newsletter, contactEmail }) {
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(offer.nextCircleSubject)}`;

  return (
    <section className="circle-offering section-shell" id="angebote" aria-labelledby="offers-title">
      <div className="circle-offering-visual">
        <figure className="circle-offering-photo">
          <img src="/assets/frauenkreis-centre.webp" width="1280" height="960" alt={layout.photoAlt} loading="lazy" />
        </figure>
        <a className="circle-offering-poster" href={offer.image} target="_blank" rel="noopener noreferrer">
          <img src={offer.image} width="1200" height="1500" alt={offer.imageAlt} loading="lazy" />
          <span>{layout.posterLabel}<span className="circle-poster-hint">{layout.posterHint}</span></span>
        </a>
      </div>

      <div className="circle-offering-intro">
        <h2 id="offers-title">{layout.title}</h2>
        <p>{offer.intro}</p>
        <dl className="circle-visible-facts">
          {offer.cycles.map((cycle) => (
            <div className="circle-dates" key={cycle.title}>
              <dt>{cycle.title} · {layout.datesLabel}</dt><dd>{cycle.dates}</dd>
            </div>
          ))}
          {offer.facts.filter((fact) => fact.label !== layout.statusLabel).map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>
      </div>

      <div className="circle-offering-invitation">
        <h3>{layout.fullHeading}</h3>
        <p>{layout.nextText}</p>
        <a className="button circle-signup" href={newsletter.href}>{offer.newsletterCta}</a>
        <a className="circle-email" href={emailHref}>{layout.emailLabel}</a>
      </div>

      <details className="circle-offering-details">
        <summary>{layout.detailsLabel}</summary>
        <div className="circle-details-body">
          {offer.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </details>
    </section>
  );
}
