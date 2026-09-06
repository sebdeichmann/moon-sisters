import { useEffect, useState } from 'react';

const translations = {
  'Home': 'Home',
  'Angebote': 'Offerings',
  'Über uns': 'About',
  'Stimmen': 'Voices',
  'Kontakt': 'Contact',
  'Kontakt & Rechtliches': 'Contact & Legal',
  'Navigation': 'Navigation',
  'Rechtliches': 'Legal',
  'Datenschutzerklärung': 'Privacy Policy',
  'Impressum': 'Imprint',
  'Mit Sorgfalt gemacht.': 'Made with care.',
  'Julie Robbins & Nina Horn': 'Julie Robbins & Nina Horn',

  'Ein Raum für Frauen, um anzukommen, zu teilen und sich wirklich zu begegnen.': 'A space for women to arrive, to share and to truly meet one another.',
  'Frauenkreise, Retreats und Workshops in Norddeutschland – für Verbindung, Tiefe und gemeinsames Erleben.': 'Women’s circles, retreats and workshops in Northern Germany – for connection, depth and shared experience.',
  'Hier ist Platz für das, was du gerade trägst. Ohne Bewertung, ohne Erwartung. Ein Ort, an dem du sein darfst, wie du bist – und der Raum hält, was sich zeigen möchte.': 'There is room here for whatever you are carrying. Without judgment, without expectation. A place where you can be as you are – and where space is held for whatever wants to show itself.',

  'Was hier geschieht': 'What happens here',
  'Ein klarer Raum – für das, was zwischen Frauen entstehen kann.': 'A clear space – for what can emerge between women.',
  'sprechen': 'speaking',
  'Was wirklich da ist – ohne Filter.': 'What is truly present – without filters.',
  'zuhören': 'listening',
  'Anderen Frauen mit voller Präsenz begegnen.': 'Meeting other women with full presence.',
  'sich sicher fühlen': 'feeling safe',
  'Vertraulich, getragen, ohne Druck.': 'Confidential, held, without pressure.',
  'gesehen werden': 'being seen',
  'Mit dem, was du mitbringst.': 'With whatever you bring.',
  'Verbindung erleben': 'experiencing connection',
  'Echt, ehrlich, auf Augenhöhe.': 'Real, honest, eye to eye.',
  'ohne Druck da sein': 'being here without pressure',
  'Du musst nichts leisten oder lösen.': 'You do not have to perform or fix anything.',

  'Frauenkreise, Retreat & Workshops': 'Women’s Circles, Retreat & Workshops',
  'Geschützte, klar gehaltene und doch offene Räume für Verbindung, Reflexion und gemeinsames Erleben. Strukturiert genug, um zu tragen – offen genug, um zu lassen, was sich zeigt.': 'Protected, clearly held yet open spaces for connection, reflection and shared experience. Structured enough to hold – open enough to let what wants to emerge be there.',
  'Fortlaufender Kreis': 'Ongoing circle',
  'Frauenkreis 3.0': 'Women’s Circle 3.0',
  'Frauenkreis 4.0': 'Women’s Circle 4.0',
  'Ein gemeinsamer Durchlauf für Frauen, die sich nach echter Begegnung sehnen – mit anderen und mit sich selbst.': 'A shared cycle for women longing for real encounter – with others and with themselves.',
  'Der nächste Durchlauf im Herbst – für Verbindung, Reflexion und achtsames Miteinander.': 'The next autumn cycle – for connection, reflection and mindful togetherness.',
  'Termine': 'Dates',
  'Zeit': 'Time',
  'Ort': 'Place',
  'Beitrag': 'Contribution',
  'Datum': 'Date',
  'Gruppe': 'Group',
  'Verpflegung': 'Food',
  'Rahmen': 'Context',
  'montags, 19:30 Uhr': 'Mondays, 7:30 pm',
  'BELLA DONNA HAUS': 'BELLA DONNA HAUS',
  '150 €': '€150',
  '13.–15. November 2026': '13–15 November 2026',
  'Alte Schule Bordelum, Nordsee': 'Alte Schule Bordelum, North Sea',
  'max. 10 Frauen plus Julie & Nina': 'max. 10 women plus Julie & Nina',
  'Selbstverpflegung': 'Self-catering',
  '12. September 2026': '12 September 2026',
  '14–17 Uhr': '2–5 pm',
  'Frauenkulturtage Bad Oldesloe': 'Women’s Culture Days Bad Oldesloe',
  'Die einzelnen Abende gehören zu einem gemeinsamen Durchlauf. Wir teilen, was uns gerade bewegt, hören einander zu und machen Erfahrungen, die verbinden und befreien.': 'The individual evenings are part of one shared cycle. We share what is moving us, listen to each other and create experiences that connect and free.',
  'Klar gerahmt, vertraulich und ohne Leistungsdruck.': 'Clearly framed, confidential and without pressure to perform.',
  'Auch hier gehören die Termine zusammen: sechs Abende als gemeinsamer Kreis, in dem Vertrauen wachsen und Begegnung tiefer werden kann.': 'Here, too, the dates belong together: six evenings as one shared circle in which trust can grow and encounter can deepen.',
  'Du darfst kommen, wie du bist – ohne Bewertung, ohne Muss.': 'You may come as you are – without judgment, without having to be anything.',
  'Für Frauenkreis 3.0 anmelden': 'Register for Women’s Circle 3.0',
  'Für Frauenkreis 4.0 anmelden': 'Register for Women’s Circle 4.0',
  'Anmeldung per E-Mail.': 'Registration by email.',
  'Retreat': 'Retreat',
  'Frauen-Retreat zum Durchatmen': 'Women’s Retreat to Breathe',
  'Ein Wochenende zum Weichwerden, Erinnern und Durchatmen – mit Zeit für dich und Raum für Gemeinschaft.': 'A weekend to soften, remember and breathe – with time for yourself and space for community.',
  'Gemeinsam ankommen und einfach sein, auftanken, zur Ruhe kommen und neue Kraft sammeln.': 'Arriving together and simply being, recharging, becoming quiet and gathering new strength.',
  'Mit Verbindung, Körperwahrnehmung, achtsamem Miteinander – und gemeinsamem Kochen, Essen, Lachen und Genießen. Du kannst allein kommen oder gemeinsam mit einer Freundin.': 'With connection, body awareness, mindful togetherness – and shared cooking, eating, laughter and enjoyment. You can come alone or with a friend.',
  'Interesse am Retreat anmelden': 'Register interest in the retreat',
  'Details folgen.': 'Details to follow.',
  'Workshop': 'Workshop',
  'Begegnung als Kunst': 'Encounter as Art',
  'Ein Workshop im Rahmen der Frauenkulturtage Bad Oldesloe – für Begegnung, Wahrnehmung und lebendigen Austausch.': 'A workshop as part of the Women’s Culture Days Bad Oldesloe – for encounter, perception and lively exchange.',
  'Ein Nachmittagsraum für Frauen, die Begegnung nicht als Technik, sondern als etwas Lebendiges verstehen möchten: aufmerksam, ehrlich und mit Neugier auf das, was entsteht.': 'An afternoon space for women who want to understand encounter not as a technique, but as something alive: attentive, honest and curious about what emerges.',
  'Zum Workshop anfragen': 'Ask about the workshop',
  'Weitere Infos per E-Mail.': 'Further information by email.',

  'Die Moon Sisters': 'Meet the Moon Sisters',
  'Zwei Frauen, zwei Wege – ein gemeinsamer Raum. Wir bringen unsere jeweilige Arbeit, unsere Erfahrungen und unsere unterschiedlichen Perspektiven in die Moon Sisters ein.': 'Two women, two paths – one shared space. We bring our individual work, our experience and our different perspectives into Moon Sisters.',
  'Coach & Begleiterin': 'Coach & Guide',
  'Coach für Beziehungsgestaltung': 'Coach for Relationship Design',
  'Julie arbeitet mit Frauen, die spüren, dass etwas in ihrem Leben in Bewegung kommen will – ohne dass sich schon ganz klar zeigt, was es ist.': 'Julie works with women who sense that something in their lives wants to move – even if it is not yet fully clear what it is.',
  'In ihren 1:1-Sessions und längeren Begleitungen entsteht ein ruhiger, klarer Raum, in dem du dich nicht erklären musst. Es geht weniger ums Reparieren, mehr darum, dem, was schon da ist, wirklich zu begegnen.': 'In her 1:1 sessions and longer processes, a calm and clear space opens up where you do not have to explain yourself. It is less about fixing and more about truly meeting what is already there.',
  'Mehr zu Julie →': 'More about Julie →',
  'Nina begleitet Menschen einzeln und als Paar in Fragen rund um Beziehung, Emotionen und das Gestalten eines eigenen, stimmigen Wegs – auch jenseits klassischer Modelle.': 'Nina supports individuals and couples with questions around relationships, emotions and shaping their own coherent path – including beyond conventional models.',
  'Sie arbeitet klar, warmherzig und mit viel Erfahrung. In den Moon Sisters bringt sie diese Haltung in den Kreis: Raum für ehrliches Sprechen, für Lebendigkeit und für echte Verbindung.': 'She works with clarity, warmth and deep experience. In Moon Sisters, she brings this attitude into the circle: space for honest speaking, aliveness and real connection.',
  'Mehr zu Nina →': 'More about Nina →',

  'Was Frauen mitnehmen': 'What women take with them',
  'Teilnehmerin': 'Participant',
  'Brauchst du einen Frauenkreis in tiefer Verbundenheit, Entspannung, eine gewisse Magie? Dann geh unbedingt zu den Moon Sisters.': 'If you need a women’s circle with deep connection, relaxation and a certain kind of magic, definitely go to Moon Sisters.',
  'Es ist ein Kreis, in dem man einfach sein kann, ohne Wertung, ohne Muss.': 'It is a circle where you can simply be, without judgment, without having to do anything.',
  'Du kannst viele Dinge über dich lernen und auch sehen, wie andere Menschen dich wahrnehmen. Es ist ein guter Ort, um wieder bei dir anzukommen.': 'You can learn many things about yourself and also see how other people perceive you. It is a good place to arrive back in yourself.',
  'Komm einfach mal mit und fühle, ob es etwas für dich ist. Hier darfst du einfach sein, ganz ohne Bewertung.': 'Just come along and feel whether it is for you. Here you are allowed to simply be, without any judgment.',
  'Hier wird dein Gedankenkarussell komprimiert und du gehst beseelt nach Hause.': 'Here, the carousel of thoughts quiets down – and you go home with your soul a little fuller.',

  'Schreib uns – wir freuen uns.': 'Write to us – we’d love to hear from you.',
  'Du möchtest dich für einen Frauenkreis anmelden, hast Interesse am Retreat oder eine Frage zum Workshop? Schreib uns gern eine kurze Nachricht.': 'Would you like to register for a women’s circle, are you interested in the retreat or do you have a question about the workshop? Send us a short message.',
  'Frauenkreise, Retreats & Workshops in Bad Oldesloe, an der Nordsee und online.': 'Women’s circles, retreats & workshops in Bad Oldesloe, at the North Sea and online.',

  'Angaben gemäß § 5 DDG': 'Information according to § 5 DDG',
  'Verantwortliche Stelle': 'Responsible party',
  '1. Verantwortliche Stelle': '1. Responsible party',
  '2. Allgemeine Hinweise zur Datenverarbeitung': '2. General information on data processing',
  '3. Hosting und technische Bereitstellung der Website': '3. Hosting and technical provision of the website',
  '4. Kontaktaufnahme per E-Mail': '4. Contact by email',
  '5. Cookies und ähnliche Technologien': '5. Cookies and similar technologies',
  '6. Empfänger personenbezogener Daten': '6. Recipients of personal data',
  '7. Speicherdauer': '7. Storage period',
  '8. Deine Rechte': '8. Your rights',
  '9. Beschwerderecht bei einer Aufsichtsbehörde': '9. Right to lodge a complaint with a supervisory authority',
  '10. Datensicherheit': '10. Data security',
  '11. Stand und Änderungen dieser Datenschutzerklärung': '11. Status and changes to this privacy policy',


  // Updated July 2026 copy
  'Räume für Frauen, die sich selbst und einander ehrlich begegnen möchten.': 'Spaces for women who want to meet themselves and one another honestly.',
  'Frauenkreise, Retreats und Workshops mit Achtsamkeit, Bewegung, Kreativität und ehrlichem Austausch – gehalten von Julie & Nina.': 'Women’s circles, retreats and workshops with mindfulness, movement, creativity and honest exchange – held by Julie & Nina.',
  'Wir öffnen Räume, in denen du ankommen darfst – bei dir selbst, in deinem Körper und in Verbindung mit anderen. Mit Achtsamkeit, Bewegung, kreativem Ausdruck, Austausch und einer warmen, getragenen Atmosphäre.': 'We open spaces where you are invited to arrive – in yourself, in your body and in connection with others. With mindfulness, movement, creative expression, exchange and a warm, held atmosphere.',
  'Julie und Nina von Moon Sisters': 'Julie and Nina from Moon Sisters',
  'Ein klarer Raum – zum Ankommen, Teilen und Lebendigsein.': 'A clear space – to arrive, share and feel alive.',
  'Ankommen': 'Arriving',
  'Ein Raum, in dem du nichts leisten musst. Du darfst da sein, zur Ruhe kommen und spüren, was gerade in dir lebendig ist.': 'A space where you do not have to perform. You may simply be here, become quiet and sense what is alive in you right now.',
  'Verbindung': 'Connection',
  'Ehrlicher Austausch, Zuhören und Gesehenwerden – vertraulich, achtsam und ohne Druck.': 'Honest exchange, listening and being seen – confidential, mindful and without pressure.',
  'Lebendigkeit': 'Aliveness',
  'Bewegung, Kreativität, Körperwahrnehmung und kleine Rituale bringen dich in Kontakt mit dir und der Gruppe.': 'Movement, creativity, body awareness and small rituals bring you into contact with yourself and the group.',
  'Sich sicher fühlen': 'Feeling safe',
  'Ein warm gehaltener Rahmen, in dem du dich zeigen darfst – leise, klar, vorsichtig oder ganz unfertig.': 'A warmly held frame where you may show yourself – quietly, clearly, carefully or still unfinished.',
  'Ehrlich teilen': 'Sharing honestly',
  'Mit dem, was gerade da ist. Ohne etwas beweisen, erklären oder sofort lösen zu müssen.': 'With whatever is present. Without having to prove, explain or immediately solve anything.',
  'Gemeinsam erleben': 'Experiencing together',
  'Durch Achtsamkeit, Bewegung, Kreativität und Begegnung entsteht ein Raum, der trägt.': 'Through mindfulness, movement, creativity and encounter, a space emerges that can hold.',
  'Frauenkreise, Retreats und Workshops': 'Women’s circles, retreats and workshops',
  'Unsere Angebote laden dich ein, aus dem Alltag herauszutreten und wieder bei dir anzukommen. Manchmal still, manchmal bewegt, manchmal im Austausch, manchmal im gemeinsamen Lachen. Immer mit dem Wunsch, einen Raum zu schaffen, in dem du dich sicher, gesehen und verbunden fühlen kannst.': 'Our offerings invite you to step out of everyday life and arrive back in yourself. Sometimes quiet, sometimes moving, sometimes in exchange, sometimes in shared laughter. Always with the wish to create a space where you can feel safe, seen and connected.',
  'Frauenkreise': 'Women’s circles',
  'Frauenkreis mit achtsamer Atmosphäre': 'Women’s circle with a mindful atmosphere',
  'Ein regelmäßiger Raum für Frauen, die ankommen, auftanken und sich selbst und anderen ehrlich begegnen möchten.': 'A regular space for women who want to arrive, recharge and meet themselves and others honestly.',
  'Kosten': 'Cost',
  'Anmeldung': 'Registration',
  'per E-Mail': 'by email',
  'Unsere Frauenkreise sind achtsam gehaltene Abende mit Meditation, Körperwahrnehmung, Bewegung, kreativem Ausdruck und Austausch. Du musst nichts können, nichts leisten und nichts Bestimmtes mitbringen.': 'Our women’s circles are mindfully held evenings with meditation, body awareness, movement, creative expression and exchange. You do not have to know, perform or bring anything specific.',
  'Es geht darum, bei dir anzukommen, dich selbst wahrzunehmen, gehört zu werden und in Verbindung mit anderen Frauen zu sein. Die Gruppen finden in festen Zyklen statt. So entsteht Vertrautheit, Tiefe und ein Raum, der über mehrere Abende hinweg wachsen darf.': 'It is about arriving in yourself, sensing yourself, being heard and being in connection with other women. The groups take place in fixed cycles, allowing familiarity, depth and a space that can grow over several evenings.',
  'Per E-Mail anfragen': 'Enquire by email',
  'Die aktuellen Zyklen findest du direkt hier.': 'You can find the current cycles right here.',
  'Retreat zum Durchatmen': 'Retreat to Breathe',
  'Ein nährendes Wochenende für Frauen – zum Durchatmen, Auftanken, einfach Sein und in Gemeinschaft sein.': 'A nourishing weekend for women – to breathe, recharge, simply be and be in community.',
  'ca. 10 Teilnehmerinnen plus Julie & Nina': 'approx. 10 participants plus Julie & Nina',
  'werden ergänzt': 'to be added',
  'Unser Retreat lädt dich ein, für ein Wochenende aus dem Alltag auszusteigen und bei dir anzukommen. Wir schaffen einen warmen, gemütlichen Rahmen mit Zeit für Achtsamkeit, Bewegung, Austausch, Ruhe, Kreativität und gemeinsames Essen.': 'Our retreat invites you to step out of everyday life for a weekend and arrive in yourself. We create a warm, cosy frame with time for mindfulness, movement, exchange, rest, creativity and shared meals.',
  'Es geht nicht darum, etwas zu erreichen. Es geht darum, Raum zu haben: für dich, für Verbindung, für Stille, für Lebendigkeit und für das, was dich gerade stärkt.': 'It is not about achieving something. It is about having space: for yourself, for connection, for stillness, for aliveness and for what strengthens you right now.',
  'Mit gemeinsamem Kochen, Selbstversorgung, achtsamen Impulsen, Bewegung und Raum für Ruhe, Verbindung und Gemeinschaft.': 'With shared cooking, self-catering, mindful impulses, movement and space for rest, connection and community.',
  'Interesse am Retreat anmelden': 'Register interest in the retreat',
  'Kosten und weitere Details werden ergänzt.': 'Cost and further details will be added.',
  'Was passiert, wenn Begegnung selbst zum Kunstwerk wird?': 'What happens when encounter itself becomes a work of art?',
  'Kreativer Workshop mit Farbe und Begegnung': 'Creative workshop with colour and encounter',
  'Termin': 'Date',
  'Samstag, 12. September 2026': 'Saturday, 12 September 2026',
  'BELLA DONNA HAUS – Ein Haus von Frauen e.V.': 'BELLA DONNA HAUS – Ein Haus von Frauen e.V.',
  '29 € p. P. / 50 € für zwei Personen': '€29 per person / €50 for two people',
  'Inklusive': 'Included',
  'Tee, Snacks und Material': 'Tea, snacks and materials',
  'Mit einfachen künstlerischen Impulsen, Farbe und spielerischer Interaktion entsteht ein gemeinsames Kunstwerk. Der Workshop lädt dazu ein, Verbindung einmal anders zu erleben – kreativ, leicht, achtsam und ohne künstlerischen Leistungsdruck.': 'With simple artistic impulses, colour and playful interaction, a shared artwork emerges. The workshop invites you to experience connection in a different way – creative, light, mindful and without artistic pressure to perform.',
  'Offen für Einzelpersonen, Paare, Freundschaften, Geschwister und alle, die Lust haben, Begegnung auf neue Weise zu erfahren. Mit Julie & Nina von Moon Sisters.': 'Open to individuals, couples, friends, siblings and anyone who wants to experience encounter in a new way. With Julie & Nina from Moon Sisters.',
  'Für „Begegnung als Kunst“ anmelden': 'Register for “Encounter as Art”',
  'Wir sind Julie & Nina. Uns verbindet die Freude daran, Räume zu öffnen, in denen Menschen sich selbst und einander auf ehrliche, achtsame und lebendige Weise begegnen können.': 'We are Julie & Nina. We are connected by the joy of opening spaces where people can meet themselves and one another in an honest, mindful and lively way.',
  'Julie bringt eine warme, ruhige und klare Begleitung mit. Ihr ist wichtig, dass Frauen in ihrem eigenen Tempo ankommen dürfen – ohne sich erklären oder funktionieren zu müssen.': 'Julie brings warm, calm and clear guidance. It matters to her that women can arrive at their own pace – without having to explain themselves or function.',
  'In den Moon Sisters hält sie Raum für Selbstwahrnehmung, kreativen Ausdruck und ehrlichen Austausch: körpernah, achtsam und mit liebevoller Struktur.': 'In Moon Sisters, she holds space for self-awareness, creative expression and honest exchange: body-based, mindful and with loving structure.',
  'Nina begleitet Menschen mit viel Erfahrung, Klarheit und Warmherzigkeit in Fragen rund um Beziehung, Emotionen und stimmige Lebensgestaltung.': 'Nina supports people with experience, clarity and warmth in questions around relationships, emotions and coherent life design.',
  'Bei den Moon Sisters bringt sie Leichtigkeit, Tiefe und den Blick für Verbindung ein – damit ein Raum entstehen kann, der vertraulich, lebendig und zugleich klar gehalten ist.': 'At Moon Sisters, she brings lightness, depth and an eye for connection – so that a space can emerge that is confidential, lively and clearly held.',
  'Stimmen aus unseren Räumen': 'Voices from our spaces',
  'Ein Raum, wo ich mir selbst und zugleich anderen Frauen offen begegnen kann. Das hat eine ganz besondere Energie.': 'A space where I can openly meet myself and other women at the same time. It has a very special energy.',
  'Ein Ort, an dem ich ankommen und zur Ruhe kommen kann. Ein Ort, an dem ich gehört werde und höre.': 'A place where I can arrive and become quiet. A place where I am heard and where I listen.',
  'Ihr seid meine Achtsamkeitsmusen!': 'You are my mindfulness muses!',
  'Gegenseitige Inspiration, Warmherzigkeit, Verstehen, Spaß und Lebensfreude geben Mut und Kraft.': 'Mutual inspiration, warmth, understanding, fun and joy of life give courage and strength.',
  'Du möchtest dich für einen Frauenkreis anmelden, Interesse am Retreat zeigen oder dich für „Begegnung als Kunst“ anmelden? Schreib uns gern eine kurze Nachricht.': 'Would you like to register for a women’s circle, show interest in the retreat or register for “Encounter as Art”? Feel free to send us a short message.',
};

function translateValue(value, language) {
  if (language !== 'en') return value;

  if (typeof value === 'string') {
    return translations[value] ?? value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateValue(item, language));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateValue(item, language)]),
    );
  }

  return value;
}

function MailLink({ email, subject, children, className }) {
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function Header({ content, language, setLanguage }) {
  return (
    <header className="site-header">
      <a className="brand" href="/#home" aria-label="Moon Sisters Startseite">
        <img className="brand-logo" src="/assets/moon-sisters-logo.png" alt="" aria-hidden="true" />
      </a>
      <nav className="main-nav" aria-label="Hauptnavigation">
        {content.nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="language-toggle" role="group" aria-label="Sprache wählen">
        <button
          type="button"
          className={language === 'de' ? 'is-active' : ''}
          onClick={() => setLanguage('de')}
          aria-pressed={language === 'de'}
        >
          DE
        </button>
        <span>/</span>
        <button
          type="button"
          className={language === 'en' ? 'is-active' : ''}
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </header>
  );
}

function Footer({ content, language }) {
  const { brand, founders, contactEmail, contactLabel } = content;

  return (
    <footer className="site-footer">
      <div>
        <h2>{brand}</h2>
        <p>{founders}</p>
        <p>{content.footer.text}</p>
      </div>
      <div>
        <h3>{translateValue('Navigation', language)}</h3>
        {content.nav.slice(1).map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>
      <div>
        <h3>{translateValue('Kontakt & Rechtliches', language)}</h3>
        <a href={`mailto:${contactEmail}`}>{contactLabel}</a>
        {content.footer.legal.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>
      <p className="footer-note">© 2026 {brand}. {content.footer.made}</p>
    </footer>
  );
}

function OfferCard({ offer, contactEmail }) {
  return (
    <article className={`offer-card soft-panel${offer.cycles ? ' offer-card-featured' : ''}${offer.imageFit === 'contain' ? ' offer-card-poster' : ''}`}>
      <figure className="image-frame offer-card-image">
        <img src={offer.image} alt={offer.imageAlt} loading="lazy" />
      </figure>
      <div className="offer-card-copy">
        <p className="card-label">{offer.tag}</p>
        <h3>{offer.title}</h3>
        <p className="offer-intro">{offer.intro}</p>
        <dl className="offer-facts">
          {offer.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        {offer.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {offer.cycles && (
          <div className="cycle-grid" aria-label="Aktuelle Frauenkreis-Zyklen">
            {offer.cycles.map((cycle) => (
              <article className="cycle-card" key={cycle.title}>
                <h4>{cycle.title}</h4>
                <p><strong>Termine:</strong> {cycle.dates}</p>
                <MailLink className="text-link" email={contactEmail} subject={cycle.ctaSubject}>
                  {cycle.cta}
                </MailLink>
              </article>
            ))}
          </div>
        )}
        {(offer.cta || offer.note) && (
          <div className="cta-row">
            {offer.cta && (
              <MailLink className="button" email={contactEmail} subject={offer.ctaSubject}>
                {offer.cta}
              </MailLink>
            )}
            {offer.note && <span>{offer.note}</span>}
          </div>
        )}
      </div>
    </article>
  );
}

function LegalPage({ content, page, language, setLanguage }) {
  return (
    <>
      <Header content={content} language={language} setLanguage={setLanguage} />
      <main className="legal-main">
        <article className="legal-article section-shell">
          <p className="section-label">{translateValue('Rechtliches', language)}</p>
          <h1>{page.title}</h1>
          <div className="legal-sections">
            {page.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph.split('\n').map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer content={content} language={language} />
    </>
  );
}

function HomePage({ content, language, setLanguage }) {
  const { founders, contactEmail, contactLabel } = content;

  return (
    <>
      <Header content={content} language={language} setLanguage={setLanguage} />

      <main id="home">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1 id="hero-title">{content.hero.title}</h1>
            <p className="hero-lead">{content.hero.lead}</p>
            <p className="hero-body">{content.hero.body}</p>
            <p className="founders">{founders}</p>
          </div>
          <figure className="hero-image image-frame">
            <img src={content.hero.image} alt={content.hero.imageAlt} />
          </figure>
        </section>

        <section className="qualities section-shell" aria-labelledby="qualities-title">
          <SectionHeading label={content.qualities.label} title={content.qualities.title} />
          <div className="quality-grid">
            {content.qualities.items.map((item) => (
              <article className="quality-card" key={item.title}>
                <span className="quality-dot" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="offers section-shell" id="angebote" aria-labelledby="offers-title">
          <div className="offers-top">
            <SectionHeading label={content.offers.label} title={content.offers.title}>
              {content.offers.intro}
            </SectionHeading>
            <figure className="image-frame offers-image">
              <img src={content.offers.circleImage} alt={content.offers.circleImageAlt} />
            </figure>
          </div>

          <div className="offer-grid">
            {content.offers.cards.map((offer) => (
              <OfferCard key={offer.title} offer={offer} contactEmail={contactEmail} />
            ))}
          </div>
        </section>

        <section className="about section-shell" id="ueber-uns" aria-labelledby="about-title">
          <SectionHeading label={content.about.label} title={content.about.title}>
            {content.about.intro}
          </SectionHeading>
          <div className="people-grid">
            {content.about.people.map((person) => (
              <article className="person-card" key={person.name}>
                <figure className="portrait image-frame">
                  <img src={person.image} alt={person.imageAlt} />
                </figure>
                <div className="person-copy">
                  <p className="card-label">{person.role}</p>
                  <h3>{person.name}</h3>
                  {person.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <a href={person.link} target="_blank" rel="noreferrer">{person.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section-shell" id="stimmen" aria-labelledby="testimonials-title">
          <SectionHeading label={content.testimonials.label} title={content.testimonials.title} />
          <div className="testimonial-grid">
            {content.testimonials.items.map((item, index) => (
              <figure className="testimonial-card" key={`${item.author}-${index}`}>
                <blockquote>„{item.quote}“</blockquote>
                <figcaption>— {item.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <SectionHeading label={content.contact.label} title={content.contact.title}>
                {content.contact.text}
              </SectionHeading>
              <MailLink className="contact-mail" email={contactEmail}>{contactLabel}</MailLink>
            </div>
            <figure className="contact-image image-frame">
              <img src="/assets/generated/contact-letter-tea-generated.png" alt="Brief, Tee und getrocknete Blumen auf einem warmen Holztisch" loading="lazy" />
            </figure>
          </div>
        </section>
      </main>

      <Footer content={content} language={language} />
    </>
  );
}

export default function App({ content }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('moonSistersLanguage') || 'de');
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const visibleContent = translateValue(content, language);

  useEffect(() => {
    localStorage.setItem('moonSistersLanguage', language);
    document.documentElement.lang = language;
  }, [language]);

  if (path === '/datenschutz') {
    document.title = language === 'en' ? 'Privacy Policy – Moon Sisters' : 'Datenschutzerklärung – Moon Sisters';
    return <LegalPage content={visibleContent} page={visibleContent.legal.privacy} language={language} setLanguage={setLanguage} />;
  }

  if (path === '/impressum') {
    document.title = language === 'en' ? 'Imprint – Moon Sisters' : 'Impressum – Moon Sisters';
    return <LegalPage content={visibleContent} page={visibleContent.legal.impressum} language={language} setLanguage={setLanguage} />;
  }

  document.title = language === 'en'
    ? 'Moon Sisters – Women’s Circles, Retreats & Workshops'
    : 'Moon Sisters – Frauenkreise, Retreats & Workshops';
  return <HomePage content={visibleContent} language={language} setLanguage={setLanguage} />;
}
