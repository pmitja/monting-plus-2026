import { routing, type Locale } from "@/i18n/routing";

export type NavItem = {
  href: string;
  label: string;
};

export type Card = {
  title: string;
  text: string;
  items?: string[];
};

export type Project = {
  title: string;
  meta: string;
  items: string[];
};

export type DetailPageKey =
  | "services"
  | "industries"
  | "certifications"
  | "projects"
  | "team"
  | "about"
  | "contact"
  | "legal";

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    items: NavItem[];
    quote: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    vat: string;
    managingDirector: string;
    registerCourt: string;
    registrationNumber: string;
    response: string;
  };
  form: {
    title: string;
    description: string;
    submit: string;
    projectTypes: string[];
    fields: Record<
      | "name"
      | "company"
      | "country"
      | "email"
      | "phone"
      | "projectType"
      | "workforce"
      | "startDate",
      string
    >;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    phases: string[];
    trust: string[];
    stats: Card[];
    whyTitle: string;
    whyIntro: string;
    why: Card[];
    contractorTitle: string;
    contractorText: string;
    servicesTitle: string;
    servicesIntro: string;
    services: Card[];
    workflowTitle: string;
    workflowText: string;
    workflow: string[];
    certificationsTitle: string;
    certificationsIntro: string;
    certifications: string[];
    downloads: string[];
    teamTitle: string;
    teamIntro: string;
    team: Card[];
    projectsTitle: string;
    projectsIntro: string;
    projects: Project[];
    availabilityTitle: string;
    availabilityIntro: string;
    availability: Card[];
    finalTitle: string;
    finalText: string;
  };
  pages: Record<
    DetailPageKey,
    {
      eyebrow: string;
      title: string;
      description: string;
      cards: Card[];
      ctaTitle: string;
      ctaText: string;
    }
  >;
  footer: {
    company: string;
    legal: string;
    downloads: string;
    certifications: string;
    contact: string;
    copyright: string;
  };
};

const sharedContact = {
  phone: "+386 31 711 346",
  whatsapp: "+386 31 711 346",
  email: "info@monting-plus.eu",
  address: "Krajgerjeva ulica 19D, 2230 Lenart v Slov. Goricah, Slovenia",
  vat: "SI56273703",
  managingDirector: "Miroslav Milincic",
  registerCourt: "Okrožno sodišče Maribor (District Court Maribor)",
  registrationNumber: "Pending official confirmation",
};

const content: Record<Locale, SiteContent> = {
  sl: {
    meta: {
      title: "Monting Plus | Industriemontaža za evropske projekte",
      description:
        "Organiziran podizvajalec za industrijsko montažo z lastnimi certificiranimi ekipami, vodenjem na gradbišču in izkušnjami v težki industriji.",
      keywords: ["industrijska montaža", "jeklene konstrukcije", "remonti", "podizvajalec", "Evropa"],
    },
    nav: {
      quote: "Povpraševanje",
      items: [
        { href: "/about", label: "O podjetju" },
        { href: "/services", label: "Storitve" },
        { href: "/certifications", label: "Certifikati" },
        { href: "/projects", label: "Reference" },
        { href: "/contact", label: "Kontakt" },
        { href: "/legal", label: "Pravni podatki" },
      ],
    },
    contact: {
      ...sharedContact,
      address: "Krajgerjeva ulica 19D, 2230 Lenart v Slov. Goricah, Slovenija",
      vat: "ID za DDV: SI56273703",
      response: "Odgovorimo v enem delovnem dnevu.",
    },
    form: {
      title: "Hitro povpraševanje",
      description: "Pošljite osnovne podatke o projektu in potrebni ekipi.",
      submit: "Pošlji povpraševanje",
      projectTypes: ["Industrijska montaža", "Shutdown / remont", "Jeklene konstrukcije", "HVAC / ventilacija", "Transportni sistemi"],
      fields: {
        name: "Ime",
        company: "Podjetje",
        country: "Država",
        email: "E-pošta",
        phone: "Telefon",
        projectType: "Tip projekta",
        workforce: "Velikost ekipe",
        startDate: "Predviden začetek",
      },
    },
    home: {
      eyebrow: "Industriemontaža po Evropi",
      title:
        "Industrijske montažne in varilske rešitve za Nemčijo in Evropo",
      subtitle:
        "Monting Plus izvaja industrijsko montažo, jeklene konstrukcije, varjenje in instalacije za proizvodne, logistične, energetske in infrastrukturne projekte po vsej Evropi.",
      primaryCta: "Pošlji povpraševanje",
      secondaryCta: "Oglej si reference",
      phases: ["Planiranje", "Inženiring", "Izdelava", "Montaža", "Predaja"],
      trust: [
        "25 monterjev in varilcev",
        "2 vodji ekip",
        "1 senior foreman",
        "EN 1090 EXC4",
        "SCC",
        "Nemčija, Avstrija, Belgija, Švedska",
      ],
      stats: [
        { title: "25", text: "lastnih monterjev in varilcev" },
        { title: "14 let", text: "mednarodnih izkušenj" },
        { title: "EXC4", text: "EN 1090 izvedbeni razred" },
        { title: "EU", text: "projekti po Evropi" },
      ],
      whyTitle: "Zakaj nas najamejo naročniki",
      whyIntro:
        "Monting Plus ni agencija za začasno delo. Delujemo kot organiziran podizvajalec z lastno strukturo vodenja.",
      why: [
        {
          title: "Stalna ekipa",
          text: "Stabilna ekipa izkušenih monterjev in varilcev, pripravljena za industrijska okolja.",
        },
        {
          title: "Vodenje na terenu",
          text: "Vsaka napotitev vključuje vodje ekip, ki se usklajujejo z naročnikovim projektnim vodstvom.",
        },
        {
          title: "Hitra mobilizacija",
          text: "Primerno za remonte, jeklene konstrukcije in urgentne industrijske montaže po Evropi.",
        },
      ],
      contractorTitle: "Zgrajeno za glavne izvajalce in EPC podjetja",
      contractorText:
        "Vključimo se v obstoječo projektno strukturo. Naš vodja na terenu samostojno koordinira ljudi, varnost in izvedbo ter poroča neposredno projektnemu vodji naročnika.",
      servicesTitle: "Storitve za težko industrijo",
      servicesIntro:
        "Ekipe za montažo, zastoje in tehnične instalacije v cementni, kemični, energetski in drugih industrijah.",
      services: [
        {
          title: "Industrijska montaža",
          text: "Montaža obratov, platform, sprememb in industrijskih konstrukcij.",
          items: ["jeklene konstrukcije", "industrijske platforme", "modifikacije"],
        },
        {
          title: "Shutdowni in remonti",
          text: "Hitro razpoložljive ekipe za vzdrževalne zastoje in obrate pod časovnim pritiskom.",
          items: ["vzdrževalni zastoji", "turnaround podpora", "urgentne ekipe"],
        },
        {
          title: "HVAC in ventilacija",
          text: "Industrijski kanali, ventilacijski sistemi in naprave za obdelavo zraka.",
          items: ["industrijski kanali", "ventilacijski sistemi", "AHU sistemi"],
        },
        {
          title: "Transportni sistemi",
          text: "Montaža transportne tehnologije, transporterjev in sistemov za materialni tok.",
          items: ["transporterji", "material handling", "transportna tehnologija"],
        },
        {
          title: "Stahlbaumontaža",
          text: "EN 1090 skladna montaža težkih jeklenih konstrukcij.",
          items: ["EN 1090", "težke konstrukcije", "vijačenje in varjenje"],
        },
        {
          title: "Varilska podpora",
          text: "Certificirani varilci za industrijske konstrukcije, remonte in montažna dela.",
          items: ["certificirani varilci", "industrijske konstrukcije", "remonti"],
        },
      ],
      workflowTitle: "Kako delamo",
      workflowText:
        "Delujemo kot podizvajalec v naročnikovi projektni hierarhiji. Naš vodja organizira ljudi, izvedbo in varnost na terenu.",
      workflow: [
        "Projektni vodja naročnika",
        "Vodja gradbišča Monting Plus",
        "Vodje ekip",
        "Monterji in varilci",
      ],
      certificationsTitle: "Certifikati in skladnost",
      certificationsIntro:
        "Dokumentacija je pripravljena za projekte v Nemčiji, Avstriji, Beneluksu in širše.",
      certifications: [
        "EN 1090 EXC4",
        "SCC",
        "Certifikati varilcev (DIN EN ISO 9606-1)",
        "OZO za delo na višini",
        "Dokazilo o zavarovanju",
        "Potrdilo o davčni oprostitvi",
      ],
      downloads: ["EN 1090 PDF", "SCC PDF", "Certifikati varilcev", "OZO", "Dokazilo o zavarovanju", "Potrdilo o davčni oprostitvi"],
      teamTitle: "Lastna ekipa z jasnim vodenjem",
      teamIntro:
        "Zaupanje gradimo z organizacijo: senior foreman, vodje ekip in izkušeni monterji ter varilci.",
      team: [
        {
          title: "Senior foreman",
          text: "14 let mednarodnih izkušenj v industrijski montaži.",
        },
        {
          title: "Vodje ekip",
          text: "Nemško govoreča koordinacija na terenu.",
        },
        {
          title: "Monterji in varilci",
          text: "Izkušena industrijska ekipa za zahtevne montaže.",
        },
      ],
      projectsTitle: "Reference brez nepotrebnega razkrivanja",
      projectsIntro:
        "Predstavimo tip projekta, obseg in vlogo ekipe, občutljive podatke naročnikov pa varujemo.",
      projects: [
        {
          title: "Projekt v cementni industriji — Nemčija",
          meta: "12 monterjev in varilcev",
          items: [
            "montaža jeklenih konstrukcij",
            "650 t jeklene konstrukcije",
            "vgradnja toplotnega izmenjevalnika",
          ],
        },
        {
          title: "Industrijska ventilacija — Nemčija",
          meta: "shutdown okolje",
          items: ["HVAC sistemi", "industrijski kanali", "koordinacija v zastoju"],
        },
        {
          title: "Airinotec — industrijska ventilacija",
          meta: "referenčni projekt",
          items: ["industrijska ventilacija", "montažna podpora", "izvedba na terenu"],
        },
        {
          title: "Binderholz — lesnopredelovalna industrija",
          meta: "referenčni projekt",
          items: ["industrijska montaža", "podpora pri izvedbi", "koordinacija na terenu"],
        },
      ],
      availabilityTitle: "Razpoložljive ekipe za prihajajoče projekte",
      availabilityIntro:
        "Za kratkoročne potrebe, srednjeročne montaže in večje shutdown projekte.",
      availability: [
        { title: "Kratkoročno", text: "4-6 monterjev in varilcev" },
        { title: "Srednjeročno", text: "do 12 delavcev" },
        { title: "Shutdown projekti", text: "celotne izvedbene ekipe" },
      ],
      finalTitle: "Potrebujete izkušeno industrijsko montažno ekipo?",
      finalText:
        "Pogovorimo se o vašem naslednjem shutdownu, jekleni montaži ali industrijski instalaciji.",
    },
    pages: makePages("sl"),
    footer: {
      company: "Monting Plus d.o.o.",
      legal: "Pravni podatki",
      downloads: "Prenosi",
      certifications: "Certifikati",
      contact: "Kontakt",
      copyright: "© Monting Plus d.o.o. 2026",
    },
  },
  de: {
    meta: {
      title: "Monting Plus | Industriemontage Subunternehmer Europa",
      description:
        "Organisierter Industriemontage-Subunternehmer mit zertifizierten Teams, Bauleitung vor Ort und Erfahrung in der Schwerindustrie.",
      keywords: ["Industriemontage", "Anlagenmontage", "Stahlbaumontage", "Shutdown Montage", "EN 1090 Montage"],
    },
    nav: {
      quote: "Team anfragen",
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "Über uns" },
        { href: "/services", label: "Leistungen" },
        { href: "/certifications", label: "Zertifizierungen" },
        { href: "/projects", label: "Referenzen" },
        { href: "/contact", label: "Kontakt" },
        { href: "/legal", label: "Impressum" },
      ],
    },
    contact: {
      ...sharedContact,
      address: "Krajgerjeva ulica 19D, 2230 Lenart v Slov. Goricah, Slowenien",
      vat: "UID-Nr.: SI56273703",
      response: "Antwort innerhalb eines Werktages.",
    },
    form: {
      title: "Schnellanfrage",
      description: "Senden Sie Projektdaten und die benötigte Teamgröße.",
      submit: "Verfügbarkeit anfragen",
      projectTypes: ["Industriemontage", "Shutdown / Turnaround", "Stahlbaumontage", "HVAC / Lüftung", "Fördertechnik"],
      fields: {
        name: "Name",
        company: "Unternehmen",
        country: "Land",
        email: "E-Mail",
        phone: "Telefon",
        projectType: "Projektart",
        workforce: "Benötigte Teamgröße",
        startDate: "Geplanter Start",
      },
    },
    home: makeHome("de"),
    pages: makePages("de"),
    footer: {
      company: "Monting Plus d.o.o.",
      legal: "Rechtliche Angaben",
      downloads: "Downloads",
      certifications: "Zertifizierungen",
      contact: "Kontakt",
      copyright: "© Monting Plus d.o.o. 2026",
    },
  },
  en: {
    meta: {
      title: "Monting Plus | Industrial Assembly Teams Across Europe",
      description:
        "Industrial assembly subcontractor with certified fitters and welders, onsite leadership and heavy industry project experience.",
      keywords: ["industrial assembly", "plant assembly", "structural steel assembly", "shutdown support", "EN 1090"],
    },
    nav: {
      quote: "Request team",
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About us" },
        { href: "/services", label: "Services" },
        { href: "/certifications", label: "Certifications" },
        { href: "/projects", label: "References" },
        { href: "/contact", label: "Contact" },
        { href: "/legal", label: "Legal notice" },
      ],
    },
    contact: {
      ...sharedContact,
      vat: "VAT ID: SI56273703",
      response: "We respond within one business day.",
    },
    form: {
      title: "Quick project inquiry",
      description: "Share your project, timing and required workforce size.",
      submit: "Request availability",
      projectTypes: ["Industrial assembly", "Shutdown / turnaround", "Structural steel", "HVAC / ventilation", "Conveyor systems"],
      fields: {
        name: "Name",
        company: "Company",
        country: "Country",
        email: "Email",
        phone: "Phone",
        projectType: "Project type",
        workforce: "Required workforce size",
        startDate: "Planned start date",
      },
    },
    home: makeHome("en"),
    pages: makePages("en"),
    footer: {
      company: "Monting Plus d.o.o.",
      legal: "Legal company information",
      downloads: "Downloads",
      certifications: "Certifications",
      contact: "Contact",
      copyright: "© Monting Plus d.o.o. 2026",
    },
  },
  sr: {
    meta: {
      title: "Monting Plus | Industrijska montaža širom Evrope",
      description:
        "Organizovan podizvođač za industrijsku montažu sa sertifikovanim ekipama, vođenjem na terenu i iskustvom u teškoj industriji.",
      keywords: ["industrijska montaža", "čelične konstrukcije", "remonti", "podizvođač", "Evropa"],
    },
    nav: {
      quote: "Pošalji upit",
      items: [
        { href: "/", label: "Početna" },
        { href: "/about", label: "O nama" },
        { href: "/services", label: "Usluge" },
        { href: "/certifications", label: "Sertifikati" },
        { href: "/projects", label: "Reference" },
        { href: "/contact", label: "Kontakt" },
        { href: "/legal", label: "Pravni podaci" },
      ],
    },
    contact: {
      ...sharedContact,
      address: "Krajgerjeva ulica 19D, 2230 Lenart v Slov. Goricah, Slovenija",
      vat: "PIB za PDV: SI56273703",
      response: "Odgovaramo u roku od jednog radnog dana.",
    },
    form: {
      title: "Brzi upit",
      description: "Pošaljite osnovne podatke o projektu i potrebnoj ekipi.",
      submit: "Zatraži raspoloživost",
      projectTypes: ["Industrijska montaža", "Shutdown / remont", "Čelične konstrukcije", "HVAC / ventilacija", "Transportni sistemi"],
      fields: {
        name: "Ime",
        company: "Kompanija",
        country: "Država",
        email: "E-mail",
        phone: "Telefon",
        projectType: "Tip projekta",
        workforce: "Veličina ekipe",
        startDate: "Planirani početak",
      },
    },
    home: makeHome("sr"),
    pages: makePages("sr"),
    footer: {
      company: "Monting Plus d.o.o.",
      legal: "Pravni podaci",
      downloads: "Preuzimanja",
      certifications: "Sertifikati",
      contact: "Kontakt",
      copyright: "© Monting Plus d.o.o. 2026",
    },
  },
};

export function getSiteContent(locale: string): SiteContent {
  return content[locale as Locale] ?? content[routing.defaultLocale];
}

function makeHome(locale: Exclude<Locale, "sl">): SiteContent["home"] {
  if (locale === "de") {
    return {
      eyebrow: "Industriemontage in Europa",
      title:
        "Industrielle Montage- und Schweißlösungen für Deutschland und Europa",
      subtitle:
        "Monting Plus liefert Industriemontage, Stahlbau, Schweißtechnik und Installationsleistungen für Produktions-, Logistik-, Energie- und Infrastrukturprojekte in ganz Europa.",
      primaryCta: "Projekt anfragen",
      secondaryCta: "Referenzen ansehen",
      phases: ["Planung", "Engineering", "Fertigung", "Montage", "Übergabe"],
      trust: [
        "25 Monteure und Schweißer",
        "2 Teamleiter",
        "1 Senior Foreman",
        "EN 1090 EXC4",
        "SCC zertifiziert",
        "Deutschland, Österreich, Belgien, Schweden",
      ],
      stats: [
        { title: "25", text: "eigene Monteure und Schweißer" },
        { title: "14 Jahre", text: "internationale Erfahrung" },
        { title: "EXC4", text: "EN 1090 Ausführungsklasse" },
        { title: "EU", text: "Projekte in Europa" },
      ],
      whyTitle: "Warum Auftraggeber uns einsetzen",
      whyIntro:
        "Monting Plus ist kein Personaldienstleister, sondern ein organisierter Subunternehmer mit eigener Führungsstruktur.",
      why: [
        {
          title: "Stammteam",
          text: "Erfahrene Monteure und Schweißer, vorbereitet auf industrielle Baustellen.",
        },
        {
          title: "Führung vor Ort",
          text: "Jeder Einsatz enthält Teamleiter, die direkt mit der Projektleitung des Kunden koordinieren.",
        },
        {
          title: "Schnelle Mobilisierung",
          text: "Für Shutdowns, Stahlbaumontage und dringende Industriemontage in Europa.",
        },
      ],
      contractorTitle: "Gebaut für Generalunternehmer und EPC-Unternehmen",
      contractorText:
        "Wir integrieren uns in bestehende Projektstrukturen. Unsere Bauleitung koordiniert Personal, Arbeitssicherheit und Ausführung eigenständig und berichtet direkt an die Projektleitung des Kunden.",
      servicesTitle: "Leistungen für die Schwerindustrie",
      servicesIntro:
        "Montageteams für Anlagenmontage, Shutdowns und technische Installationen in Zement, Chemie, Energie und weiteren Industrien.",
      services: [
        {
          title: "Industriemontage",
          text: "Anlagenmontage, Plattformen, Modifikationen und industrielle Konstruktionen.",
          items: ["Stahlkonstruktionen", "Industrieplattformen", "Umbauten"],
        },
        {
          title: "Shutdowns & Turnarounds",
          text: "Schnell verfügbare Teams für Wartungsstillstände und zeitkritische Arbeiten.",
          items: ["Wartungsstillstände", "Turnaround Support", "Soforteinsatz"],
        },
        {
          title: "HVAC & Lüftung",
          text: "Industriekanäle, Lüftungssysteme und Air-Handling-Anlagen.",
          items: ["Industriekanäle", "Lüftungssysteme", "AHU Systeme"],
        },
        {
          title: "Fördertechnik",
          text: "Montage von Förderanlagen, Transporttechnik und Materialfluss-Systemen.",
          items: ["Förderanlagen", "Transporttechnik", "Material Handling"],
        },
        {
          title: "Stahlbaumontage",
          text: "EN 1090 konforme Montage schwerer Stahlkonstruktionen.",
          items: ["EN 1090", "Schwerstahlbau", "Schrauben und Schweißen"],
        },
        {
          title: "Schweißunterstützung",
          text: "Zertifizierte Schweißer für Industriekonstruktionen, Stillstände und Montagearbeiten.",
          items: ["zertifizierte Schweißer", "Industriekonstruktionen", "Stillstände"],
        },
      ],
      workflowTitle: "So arbeiten wir",
      workflowText:
        "Monting Plus arbeitet als Subunternehmer innerhalb der Projektstruktur des Kunden. Unsere Bauleitung organisiert Personal, Ausführung und Sicherheit vor Ort.",
      workflow: [
        "Projektleiter des Kunden",
        "Monting Plus Bauleiter",
        "Teamleiter",
        "Monteure und Schweißer",
      ],
      certificationsTitle: "Zertifikate und Compliance",
      certificationsIntro:
        "Dokumentation für Projekte in Deutschland, Österreich, Benelux und weiteren europäischen Märkten.",
      certifications: [
        "EN 1090 EXC4",
        "SCC",
        "Schweißerzertifikate (DIN EN ISO 9606-1)",
        "PSAgA",
        "Versicherungsnachweis",
        "Freistellungsbescheinigung",
      ],
      downloads: ["EN 1090 PDF", "SCC PDF", "Schweißerzertifikate", "PSAgA", "Versicherungsnachweis", "Freistellungsbescheinigung"],
      teamTitle: "Eigenes Team mit klarer Führung",
      teamIntro:
        "Vertrauen entsteht durch Organisation: Senior Foreman, Teamleiter und erfahrene Monteure sowie Schweißer.",
      team: [
        {
          title: "Senior Foreman",
          text: "14 Jahre internationale Erfahrung in der Industriemontage.",
        },
        {
          title: "Teamleiter",
          text: "Deutschsprachige Koordination direkt auf der Baustelle.",
        },
        {
          title: "Monteure und Schweißer",
          text: "Erfahrene Fachkräfte für anspruchsvolle Industriemontage.",
        },
      ],
      projectsTitle: "Referenzen mit Vertraulichkeit",
      projectsIntro:
        "Wir zeigen Projekttyp, Umfang und Rolle der Teams, ohne sensible Kundendaten unnötig offenzulegen.",
      projects: [
        {
          title: "Zementindustrie-Projekt — Deutschland",
          meta: "12 Monteure und Schweißer",
          items: [
            "Stahlbaumontage",
            "650 t Stahlkonstruktion",
            "Wärmetauscher-Installation",
          ],
        },
        {
          title: "Industrielle Lüftung — Deutschland",
          meta: "Shutdown-Umgebung",
          items: ["HVAC Systeme", "Industriekanäle", "Koordination im Stillstand"],
        },
        {
          title: "Airinotec — industrielle Lüftung",
          meta: "Referenzprojekt",
          items: ["industrielle Lüftung", "Montageunterstützung", "Ausführung vor Ort"],
        },
        {
          title: "Binderholz — Holzverarbeitung",
          meta: "Referenzprojekt",
          items: ["Industriemontage", "Ausführungsunterstützung", "Koordination vor Ort"],
        },
      ],
      availabilityTitle: "Verfügbare Teams für kommende Projekte",
      availabilityIntro:
        "Für kurzfristige Einsätze, mittelfristige Montageprojekte und größere Shutdowns.",
      availability: [
        { title: "Kurzfristig", text: "4-6 Monteure und Schweißer" },
        { title: "Mittelfristig", text: "bis zu 12 Mitarbeiter" },
        { title: "Shutdowns", text: "vollständige Einsatzteams verfügbar" },
      ],
      finalTitle: "Benötigen Sie ein erfahrenes Industriemontage-Team?",
      finalText:
        "Lassen Sie uns über Ihren nächsten Shutdown, Ihre Stahlbaumontage oder industrielle Installation sprechen.",
    };
  }

  if (locale === "sr") {
    return {
      ...makeHome("en"),
      eyebrow: "Industrijska montaža širom Evrope",
      title:
        "Industrijska montažna i zavarivačka rešenja za Nemačku i Evropu",
      subtitle:
        "Monting Plus izvodi industrijsku montažu, čelične konstrukcije, zavarivanje i instalacije za proizvodne, logističke, energetske i infrastrukturne projekte širom Evrope.",
      primaryCta: "Pošalji upit",
      secondaryCta: "Pogledaj reference",
      phases: ["Planiranje", "Inženjering", "Izrada", "Montaža", "Primopredaja"],
      trust: [
        "25 montera i zavarivača",
        "2 vođe ekipa",
        "1 senior foreman",
        "EN 1090 EXC4",
        "SCC sertifikat",
        "Nemačka, Austrija, Belgija, Švedska",
      ],
      stats: [
        { title: "25", text: "sopstvenih montera i zavarivača" },
        { title: "14 god.", text: "međunarodnog iskustva" },
        { title: "EXC4", text: "EN 1090 klasa izvođenja" },
        { title: "EU", text: "projekti širom Evrope" },
      ],
      whyTitle: "Zašto nas klijenti angažuju",
      whyIntro:
        "Monting Plus nije agencija za privremeno zapošljavanje. Radimo kao organizovan podizvođač sa sopstvenom strukturom vođenja.",
      why: [
        {
          title: "Stalna ekipa",
          text: "Iskusni monteri i zavarivači spremni za industrijska gradilišta.",
        },
        {
          title: "Vođenje na terenu",
          text: "Svaki angažman uključuje vođe ekipa koji direktno koordiniraju sa projektnim timom klijenta.",
        },
        {
          title: "Brza mobilizacija",
          text: "Za remonte, čelične konstrukcije i hitne industrijske montaže širom Evrope.",
        },
      ],
      contractorTitle: "Organizovani za glavne izvođače i EPC kompanije",
      contractorText:
        "Uključujemo se u postojeće projektne strukture. Naše vođe na terenu samostalno koordiniraju ljude, bezbednost i izvođenje radova i direktno izveštavaju projektnom timu klijenta.",
      servicesTitle: "Usluge za tešku industriju",
      servicesIntro:
        "Montažne ekipe za postrojenja, remonte i tehničke instalacije u cementnoj, hemijskoj, energetskoj i drugim industrijama.",
      services: [
        {
          title: "Industrijska montaža",
          text: "Montaža postrojenja, platformi, izmena i industrijskih konstrukcija.",
          items: ["čelične konstrukcije", "industrijske platforme", "modifikacije"],
        },
        {
          title: "Shutdowni i remonti",
          text: "Brzo dostupne ekipe za remonte i vremenski kritične radove.",
          items: ["remonti", "turnaround podrška", "hitne ekipe"],
        },
        {
          title: "HVAC i ventilacija",
          text: "Industrijski kanali, ventilacioni sistemi i sistemi za obradu vazduha.",
          items: ["industrijski kanali", "ventilacioni sistemi", "AHU sistemi"],
        },
        {
          title: "Transportni sistemi",
          text: "Montaža transportera, transportne tehnologije i sistema za protok materijala.",
          items: ["transporteri", "transportna tehnologija", "material handling"],
        },
        {
          title: "Montaža čeličnih konstrukcija",
          text: "EN 1090 usklađena montaža teških čeličnih konstrukcija.",
          items: ["EN 1090", "teške konstrukcije", "vijčani spojevi i zavarivanje"],
        },
        {
          title: "Zavarivačka podrška",
          text: "Sertifikovani zavarivači za industrijske konstrukcije, remonte i montažne radove.",
          items: ["sertifikovani zavarivači", "industrijske konstrukcije", "remonti"],
        },
      ],
      workflowTitle: "Kako radimo",
      workflowText:
        "Monting Plus radi kao podizvođač u okviru projektne strukture klijenta. Naš vođa na terenu organizuje ljude, izvođenje radova i bezbednost.",
      workflow: ["Projektni menadžer klijenta", "Vođa gradilišta Monting Plus", "Vođe ekipa", "Monteri i zavarivači"],
      certificationsTitle: "Sertifikati i usklađenost",
      certificationsIntro:
        "Dokumentacija za projekte u Nemačkoj, Austriji, Beneluksu i na drugim evropskim tržištima.",
      certifications: [
        "EN 1090 EXC4",
        "SCC",
        "Sertifikati zavarivača (DIN EN ISO 9606-1)",
        "LZO za zaštitu od pada",
        "Dokaz o osiguranju",
        "Potvrda o poreskom oslobođenju",
      ],
      downloads: ["EN 1090 PDF", "SCC PDF", "Sertifikati zavarivača", "LZO", "Dokaz o osiguranju", "Potvrda o poreskom oslobođenju"],
      teamTitle: "Sopstveni tim sa jasnim vođenjem",
      teamIntro:
        "Poverenje gradimo organizacijom: senior foreman, vođe ekipa i iskusni monteri i zavarivači.",
      team: [
        { title: "Senior foreman", text: "14 godina međunarodnog iskustva u industrijskoj montaži." },
        { title: "Vođe ekipa", text: "Koordinacija na nemačkom jeziku direktno na gradilištu." },
        { title: "Monteri i zavarivači", text: "Iskusni stručnjaci za zahtevne industrijske montaže." },
      ],
      projectsTitle: "Reference uz poverljivost",
      projectsIntro:
        "Prikazujemo tip projekta, obim i ulogu ekipe uz zaštitu osetljivih podataka klijenata.",
      projects: [
        {
          title: "Projekat u cementnoj industriji — Nemačka",
          meta: "12 montera i zavarivača",
          items: ["montaža čeličnih konstrukcija", "650 t čelične konstrukcije", "ugradnja izmenjivača toplote"],
        },
        {
          title: "Industrijska ventilacija — Nemačka",
          meta: "shutdown okruženje",
          items: ["HVAC sistemi", "industrijski kanali", "koordinacija tokom remonta"],
        },
        {
          title: "Airinotec — industrijska ventilacija",
          meta: "referentni projekat",
          items: ["industrijska ventilacija", "montažna podrška", "izvođenje na terenu"],
        },
        {
          title: "Binderholz — prerada drveta",
          meta: "referentni projekat",
          items: ["industrijska montaža", "podrška izvođenju", "koordinacija na terenu"],
        },
      ],
      availabilityTitle: "Raspoložive ekipe za naredne projekte",
      availabilityIntro:
        "Za kratkoročne potrebe, srednjoročne montažne projekte i veće remonte.",
      availability: [
        { title: "Kratkoročno", text: "4-6 montera i zavarivača" },
        { title: "Srednjoročno", text: "do 12 radnika" },
        { title: "Shutdown projekti", text: "kompletne ekipe za izvođenje" },
      ],
      finalTitle: "Treba vam iskusna industrijska montažna ekipa?",
      finalText:
        "Razgovarajmo o vašem sledećem remontu, čeličnoj konstrukciji ili industrijskoj instalaciji.",
    };
  }

  return {
    eyebrow: "Industrial assembly across Europe",
    title:
      "Industrial assembly and welding solutions for Germany and Europe",
    subtitle:
      "Monting Plus delivers industrial assembly, steel construction, welding, and installation services for manufacturing, logistics, energy, and infrastructure projects across Europe.",
    primaryCta: "Request a project",
    secondaryCta: "View references",
    phases: ["Planning", "Engineering", "Fabrication", "Installation", "Handover"],
    trust: [
      "25 fitters & welders",
      "2 team leaders",
      "1 senior foreman",
      "EN 1090 EXC4",
      "SCC certified",
      "Germany, Austria, Belgium, Sweden",
    ],
    stats: [
      { title: "25", text: "own fitters and welders" },
      { title: "14 yrs", text: "international experience" },
      { title: "EXC4", text: "EN 1090 execution class" },
      { title: "EU", text: "projects across Europe" },
    ],
    whyTitle: "Why clients hire us",
    whyIntro:
      "Monting Plus is not a temporary staffing agency. We operate as an organized subcontractor with our own leadership structure.",
    why: [
      {
        title: "Permanent team",
        text: "Stable team of experienced fitters and welders ready for industrial environments.",
      },
      {
        title: "Onsite leadership",
        text: "Every deployment includes team leaders coordinating directly with your project management.",
      },
      {
        title: "Fast deployment",
        text: "Available for shutdowns, steel assembly and urgent industrial projects across Europe.",
      },
    ],
    contractorTitle: "Built for main contractors and EPC companies",
    contractorText:
      "We integrate into existing project structures. Our onsite leaders independently coordinate manpower, safety and execution while reporting directly to client management.",
    servicesTitle: "Services for heavy industry",
    servicesIntro:
      "Assembly teams for plant installation, shutdowns and technical systems in cement, chemical, energy and other industries.",
    services: [
      {
        title: "Industrial assembly",
        text: "Plant assembly, platforms, modifications and industrial structures.",
        items: ["structural steel", "industrial platforms", "modifications"],
      },
      {
        title: "Shutdowns & turnarounds",
        text: "Fast deployment teams for maintenance shutdowns and time-critical work.",
        items: ["maintenance shutdowns", "turnaround support", "urgent teams"],
      },
      {
        title: "HVAC & ventilation",
        text: "Industrial ducts, ventilation systems and air handling systems.",
        items: ["industrial ducts", "ventilation systems", "air handling"],
      },
      {
        title: "Conveyor systems",
        text: "Installation of conveyor, transport technology and material handling systems.",
        items: ["conveyors", "transport technology", "material handling"],
      },
      {
        title: "Structural steel assembly",
        text: "EN 1090 compliant assembly of heavy steel structures.",
        items: ["EN 1090", "heavy steel structures", "bolting and welding"],
      },
      {
        title: "Welding support",
        text: "Certified welders for industrial structures, shutdowns and assembly work.",
        items: ["certified welders", "industrial structures", "shutdowns"],
      },
    ],
    workflowTitle: "How we work",
    workflowText:
      "Monting Plus works as a subcontractor within the client project structure. Our onsite leader manages workforce organization, execution and safety.",
    workflow: [
      "Client project manager",
      "Monting Plus site leader",
      "Team leaders",
      "Fitters and welders",
    ],
    certificationsTitle: "Certifications and compliance",
    certificationsIntro:
      "Documentation prepared for projects in Germany, Austria, Benelux and wider European markets.",
    certifications: [
      "EN 1090 EXC4",
      "SCC",
      "Welder certificates (DIN EN ISO 9606-1)",
      "PPE against falls",
      "Insurance certificate",
      "Tax exemption certificate",
    ],
    downloads: ["EN 1090 PDF", "SCC PDF", "Welder certificates", "Fall-protection PPE", "Insurance certificate", "Tax exemption certificate"],
    teamTitle: "Own team with clear leadership",
    teamIntro:
      "Trust comes from organization: senior foreman, team leaders and experienced industrial fitters and welders.",
    team: [
      {
        title: "Senior foreman",
        text: "14 years of international industrial assembly experience.",
      },
      {
        title: "Team leaders",
        text: "German-speaking onsite coordination.",
      },
      {
        title: "Fitters and welders",
        text: "Experienced workforce for demanding industrial assembly.",
      },
    ],
    projectsTitle: "References with confidentiality",
    projectsIntro:
      "We show project type, scope and team role while protecting sensitive client information.",
    projects: [
      {
        title: "Cement industry project — Germany",
        meta: "12 fitters and welders",
        items: [
          "structural steel assembly",
          "650 t steel construction",
          "heat exchanger installation",
        ],
      },
      {
        title: "Industrial ventilation project — Germany",
        meta: "shutdown environment",
        items: ["HVAC systems", "industrial duct installation", "shutdown coordination"],
      },
      {
        title: "Airinotec — industrial ventilation",
        meta: "reference project",
        items: ["industrial ventilation", "assembly support", "onsite execution"],
      },
      {
        title: "Binderholz — wood processing",
        meta: "reference project",
        items: ["industrial assembly", "execution support", "onsite coordination"],
      },
    ],
    availabilityTitle: "Available teams for upcoming projects",
    availabilityIntro:
      "For short-term needs, medium-term assembly projects and larger shutdowns.",
    availability: [
      { title: "Short-term", text: "4-6 fitters and welders" },
      { title: "Medium-term", text: "up to 12 workers" },
      { title: "Shutdown projects", text: "full deployment teams available" },
    ],
    finalTitle: "Need an experienced industrial assembly team?",
    finalText:
      "Let us discuss your next shutdown, steel assembly or industrial installation project.",
  };
}

function makePages(locale: Locale): SiteContent["pages"] {
  const baseHome = makePageHome(locale);

  if (locale === "de") {
    return {
      services: {
        eyebrow: "Leistungen",
        title: "Industriemontage, Stahlbaumontage und Shutdown-Unterstützung",
        description:
          "Zertifizierte Teams für Anlagenmontage, Wartungsstillstände, HVAC, Fördertechnik und Schweißunterstützung.",
        cards: baseHome.services,
        ctaTitle: "Planen Sie einen Einsatz?",
        ctaText: "Senden Sie Zeitplan, Standort und benötigte Teamgröße.",
      },
      industries: {
        eyebrow: "Branchen",
        title: "Einsatzbereit für anspruchsvolle Industrien",
        description:
          "Monting Plus unterstützt Industrieanlagen, in denen Sicherheit, Koordination und zuverlässige Teams entscheidend sind.",
        cards: industryCards("de"),
        ctaTitle: "Passt Ihr Projekt dazu?",
        ctaText: "Wir prüfen kurzfristig, welche Teamstruktur sinnvoll ist.",
      },
      certifications: {
        eyebrow: "Compliance",
        title: "Zertifikate, Sicherheitsunterlagen und EU-Dokumentation",
        description:
          "Dokumentation für Subunternehmer-Einsätze in Deutschland, Österreich, Benelux und weiteren Märkten.",
        cards: certificationCards("de"),
        ctaTitle: "Dokumente anfordern",
        ctaText: "PDFs und Sicherheitsunterlagen können projektbezogen bereitgestellt werden.",
      },
      projects: {
        eyebrow: "Referenzen",
        title: "Projektbeispiele aus der Schwerindustrie",
        description:
          "Auszüge aus Montage-, Stahlbau-, HVAC- und Shutdown-Einsätzen ohne sensible Kundendaten.",
        cards: projectCards("de"),
        ctaTitle: "Ähnliche Aufgabe?",
        ctaText: "Wir besprechen Umfang, Teamgröße und Mobilisierung.",
      },
      team: {
        eyebrow: "Team",
        title: "Eigene Fachkräfte mit Baustellenführung",
        description:
          "Die Struktur aus Senior Foreman, Teamleitern, Monteuren und Schweißern reduziert Organisationsaufwand für den Kunden.",
        cards: baseHome.team,
        ctaTitle: "Teamprofil anfragen",
        ctaText: "Wir stellen verfügbare Teamgrößen und Qualifikationen bereit.",
      },
      about: {
        eyebrow: "Über uns",
        title: "Ein organisierter Montagepartner aus Slowenien für Europa",
        description:
          "Monting Plus steht für klare Führung, zertifizierte Arbeit und zuverlässige Integration in industrielle Projektstrukturen.",
        cards: baseHome.why,
        ctaTitle: "Sprechen wir über Ihr Projekt",
        ctaText: "Wir passen Teamgröße und Führung an Ihre Baustellenstruktur an.",
      },
      contact: {
        eyebrow: "Kontakt",
        title: "Schnelle Anfrage für verfügbare Montageteams",
        description:
          "Telefon, WhatsApp, E-Mail und ein kurzer Projektfragebogen für minimale Reibung.",
        cards: contactCards("de"),
        ctaTitle: "Verfügbarkeit prüfen",
        ctaText: "Antwort innerhalb eines Werktages.",
      },
      legal: {
        eyebrow: "Impressum",
        title: "Impressum und Unternehmensangaben",
        description:
          "Rechtliche Angaben zu Monting Plus d.o.o. für Geschäftspartner in Deutschland, Österreich und Europa.",
        cards: legalCards("de"),
        ctaTitle: "Fragen zu unseren Unterlagen?",
        ctaText: "Kontaktieren Sie uns für aktuelle Unternehmens- und Projektdokumente.",
      },
    };
  }

  if (locale === "en" || locale === "sr") {
    const isSr = locale === "sr";
    return {
      services: {
        eyebrow: isSr ? "Usluge" : "Services",
        title: isSr
          ? "Industrijska montaža, čelične konstrukcije i shutdown podrška"
          : "Industrial assembly, structural steel and shutdown support",
        description: isSr
          ? "Sertifikovane ekipe za montažu postrojenja, održavanje, HVAC, transportne sisteme i zavarivačku podršku."
          : "Certified teams for plant assembly, maintenance shutdowns, HVAC, conveyor systems and welding support.",
        cards: baseHome.services,
        ctaTitle: isSr ? "Planirate angažman?" : "Planning an installation?",
        ctaText: isSr
          ? "Pošaljite rok, lokaciju i potrebnu veličinu ekipe."
          : "Share timing, location and the required workforce size.",
      },
      industries: {
        eyebrow: isSr ? "Industrije" : "Industries",
        title: isSr
          ? "Spremni za zahtevne industrijske sektore"
          : "Ready for demanding industrial sectors",
        description: isSr
          ? "Podržavamo postrojenja gde su sigurnost, koordinacija i pouzdana ekipa presudni."
          : "Monting Plus supports plants where safety, coordination and reliable teams matter.",
        cards: industryCards(locale),
        ctaTitle: isSr ? "Da li se vaš projekat uklapa?" : "Is your project a match?",
        ctaText: isSr
          ? "Brzo procenjujemo koja struktura ekipe ima smisla."
          : "We quickly assess the team structure that makes sense.",
      },
      certifications: {
        eyebrow: isSr ? "Sertifikati" : "Compliance",
        title: isSr
          ? "Sertifikati, sigurnosna dokumentacija i EU usklađenost"
          : "Certifications, safety files and EU documentation",
        description: isSr
          ? "Dokumentacija za podizvođačke angažmane u Nemačkoj, Austriji, Beneluksu i šire."
          : "Documentation for subcontractor deployments in Germany, Austria, Benelux and wider markets.",
        cards: certificationCards(locale),
        ctaTitle: isSr ? "Zatražite dokumente" : "Request documents",
        ctaText: isSr
          ? "PDF-ovi i sigurnosni dokumenti dostupni su po projektu."
          : "PDFs and safety documents can be provided per project.",
      },
      projects: {
        eyebrow: isSr ? "Projekti" : "Projects",
        title: isSr
          ? "Primeri projekata iz teške industrije"
          : "Project examples from heavy industry",
        description: isSr
          ? "Primeri montaže, čeličnih konstrukcija, HVAC i shutdown radova bez osetljivih podataka."
          : "Examples from assembly, steel construction, HVAC and shutdown work without sensitive client data.",
        cards: projectCards(locale),
        ctaTitle: isSr ? "Sličan zadatak?" : "Similar scope?",
        ctaText: isSr
          ? "Razgovaramo o obimu, veličini ekipe i mobilizaciji."
          : "We can discuss scope, team size and mobilization.",
      },
      team: {
        eyebrow: isSr ? "Tim" : "Team",
        title: isSr
          ? "Sopstveni stručnjaci sa vođenjem na terenu"
          : "Own skilled workforce with onsite leadership",
        description: isSr
          ? "Struktura senior foreman, vođe ekipa, monteri i zavarivači smanjuje teret organizacije za klijenta."
          : "The structure of senior foreman, team leaders, fitters and welders reduces organizational load for the client.",
        cards: baseHome.team,
        ctaTitle: isSr ? "Zatražite profil ekipe" : "Request team profile",
        ctaText: isSr
          ? "Dostavljamo dostupne veličine timova i kvalifikacije."
          : "We provide available team sizes and qualifications.",
      },
      about: {
        eyebrow: isSr ? "O nama" : "About",
        title: isSr
          ? "Organizovan montažni partner iz Slovenije za Evropu"
          : "An organized assembly partner from Slovenia for Europe",
        description: isSr
          ? "Monting Plus znači jasno vođenje, sertifikovan rad i pouzdanu integraciju u industrijske projektne strukture."
          : "Monting Plus stands for clear leadership, certified work and reliable integration into industrial project structures.",
        cards: baseHome.why,
        ctaTitle: isSr ? "Razgovarajmo o projektu" : "Let us discuss your project",
        ctaText: isSr
          ? "Veličinu ekipe i vođenje prilagođavamo vašoj strukturi."
          : "We adapt team size and leadership to your site structure.",
      },
      contact: {
        eyebrow: isSr ? "Kontakt" : "Contact",
        title: isSr
          ? "Brzi upit za raspoložive montažne ekipe"
          : "Fast inquiry for available assembly teams",
        description: isSr
          ? "Telefon, WhatsApp, e-mail i kratak projektni obrazac za minimalno trenje."
          : "Phone, WhatsApp, email and a short project form with minimal friction.",
        cards: contactCards(locale),
        ctaTitle: isSr ? "Proverite raspoloživost" : "Check availability",
        ctaText: isSr ? "Odgovor u roku jednog radnog dana." : "Response within one business day.",
      },
      legal: {
        eyebrow: isSr ? "Pravni podaci" : "Legal notice",
        title: isSr ? "Pravni podaci i podaci o kompaniji" : "Legal notice and company information",
        description: isSr
          ? "Pravni podaci kompanije Monting Plus d.o.o. za poslovne partnere širom Evrope."
          : "Legal company information for Monting Plus d.o.o. for business partners across Europe.",
        cards: legalCards(locale),
        ctaTitle: isSr ? "Pitanja o dokumentaciji?" : "Questions about our documents?",
        ctaText: isSr
          ? "Kontaktirajte nas za aktuelnu kompanijsku i projektnu dokumentaciju."
          : "Contact us for current company and project documentation.",
      },
    };
  }

  return {
    services: {
      eyebrow: "Storitve",
      title: "Industrijska montaža, jeklene konstrukcije in shutdown podpora",
      description:
        "Certificirane ekipe za montažo obratov, remonte, HVAC, transportne sisteme in varilsko podporo.",
      cards: baseHome.services,
      ctaTitle: "Načrtujete projekt?",
      ctaText: "Pošljite termin, lokacijo in potrebno velikost ekipe.",
    },
    industries: {
      eyebrow: "Industrije",
      title: "Pripravljeni za zahtevne industrijske sektorje",
      description:
        "Podpiramo obrate, kjer so varnost, koordinacija in zanesljiva ekipa ključni.",
      cards: industryCards("sl"),
      ctaTitle: "Je vaš projekt primeren?",
      ctaText: "Hitro ocenimo, katera struktura ekipe je smiselna.",
    },
    certifications: {
      eyebrow: "Skladnost",
      title: "Certifikati, varnostna dokumentacija in EU skladnost",
      description:
        "Dokumentacija za podizvajalske projekte v Nemčiji, Avstriji, Beneluksu in širše.",
      cards: certificationCards("sl"),
      ctaTitle: "Zahtevajte dokumente",
      ctaText: "PDF-ji in varnostne mape so na voljo glede na projekt.",
    },
    projects: {
      eyebrow: "Projekti",
      title: "Primeri projektov iz težke industrije",
      description:
        "Izseki iz montažnih, jeklarskih, HVAC in shutdown projektov brez občutljivih podatkov naročnikov.",
      cards: projectCards("sl"),
      ctaTitle: "Podoben obseg?",
      ctaText: "Pogovorimo se o obsegu, ekipi in mobilizaciji.",
    },
    team: {
      eyebrow: "Ekipa",
      title: "Lastni strokovnjaki z vodenjem na terenu",
      description:
        "Struktura senior foreman, vodje ekip, monterji in varilci razbremeni organizacijo naročnika.",
      cards: baseHome.team,
      ctaTitle: "Zahtevajte profil ekipe",
      ctaText: "Predstavimo razpoložljive velikosti ekip in kvalifikacije.",
    },
    about: {
      eyebrow: "O nas",
      title: "Organiziran montažni partner iz Slovenije za Evropo",
      description:
        "Monting Plus pomeni jasno vodenje, certificirano delo in zanesljivo vključitev v industrijske projektne strukture.",
      cards: baseHome.why,
      ctaTitle: "Pogovorimo se o projektu",
      ctaText: "Velikost ekipe in vodenje prilagodimo vaši strukturi gradbišča.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Hitro povpraševanje za razpoložljive montažne ekipe",
      description:
        "Telefon, WhatsApp, e-pošta in kratek projektni obrazec z minimalnim trenjem.",
      cards: contactCards("sl"),
      ctaTitle: "Preverite razpoložljivost",
      ctaText: "Odgovor v enem delovnem dnevu.",
    },
    legal: {
      eyebrow: "Pravni podatki",
      title: "Pravni podatki in podatki o podjetju",
      description:
        "Pravni podatki podjetja Monting Plus d.o.o. za poslovne partnerje po Evropi.",
      cards: legalCards("sl"),
      ctaTitle: "Vprašanja o dokumentaciji?",
      ctaText: "Kontaktirajte nas za aktualno dokumentacijo podjetja in projektov.",
    },
  };
}

function legalCards(locale: Locale): Card[] {
  const labels = {
    sl: [
      ["Podjetje", "Monting Plus d.o.o.\nKrajgerjeva ulica 19D\n2230 Lenart v Slov. Goricah\nSlovenija"],
      ["Direktor", sharedContact.managingDirector],
      ["Kontakt", `${sharedContact.phone}\n${sharedContact.email}`],
      ["ID za DDV", "SI56273703"],
      ["Registrsko sodišče", "Okrožno sodišče Maribor"],
      ["Matična številka", "Čaka na uradno potrditev"],
    ],
    de: [
      ["Unternehmen", "Monting Plus d.o.o.\nKrajgerjeva ulica 19D\n2230 Lenart v Slov. Goricah\nSlowenien"],
      ["Geschäftsführer", sharedContact.managingDirector],
      ["Kontakt", `${sharedContact.phone}\n${sharedContact.email}`],
      ["UID-Nr.", "SI56273703"],
      ["Registergericht", "Okrožno sodišče Maribor (Bezirksgericht Maribor)"],
      ["Eintragungsnummer", "Amtliche Nummer noch einzufügen"],
    ],
    en: [
      ["Company", "Monting Plus d.o.o.\nKrajgerjeva ulica 19D\n2230 Lenart v Slov. Goricah\nSlovenia"],
      ["Managing director", sharedContact.managingDirector],
      ["Contact", `${sharedContact.phone}\n${sharedContact.email}`],
      ["VAT ID", "SI56273703"],
      ["Register court", "Okrožno sodišče Maribor (District Court Maribor)"],
      ["Registration number", "Pending official confirmation"],
    ],
    sr: [
      ["Kompanija", "Monting Plus d.o.o.\nKrajgerjeva ulica 19D\n2230 Lenart v Slov. Goricah\nSlovenija"],
      ["Direktor", sharedContact.managingDirector],
      ["Kontakt", `${sharedContact.phone}\n${sharedContact.email}`],
      ["PIB za PDV", "SI56273703"],
      ["Registarski sud", "Okrožno sodišče Maribor"],
      ["Matični broj", "Čeka zvaničnu potvrdu"],
    ],
  }[locale];

  return labels.map(([title, text]) => ({ title, text }));
}

function industryCards(locale: Locale): Card[] {
  const labels = {
    sl: [
      ["Cementna industrija", "Montaže in remonti v cementarnah."],
      ["Apnena industrija", "Delo v vročih in prašnih industrijskih okoljih."],
      ["Kemična industrija", "Koordinirana montaža v reguliranih obratih."],
      ["Energetika", "Jeklene konstrukcije, kanali in tehnični sistemi."],
      ["Lesna predelava", "Transportni sistemi in industrijske instalacije."],
      ["Težki industrijski obrati", "Ekipe za kompleksne evropske projekte."],
    ],
    de: [
      ["Zementindustrie", "Montage und Stillstände in Zementwerken."],
      ["Kalkindustrie", "Arbeit in heißen und staubigen Industrieumgebungen."],
      ["Chemische Industrie", "Koordinierte Montage in regulierten Anlagen."],
      ["Energie", "Stahlbau, Kanäle und technische Systeme."],
      ["Holzverarbeitung", "Fördertechnik und industrielle Installationen."],
      ["Schwerindustrie", "Teams für komplexe europäische Projekte."],
    ],
    en: [
      ["Cement industry", "Assembly and shutdowns in cement plants."],
      ["Lime industry", "Work in hot and dusty industrial environments."],
      ["Chemical industry", "Coordinated assembly in regulated plants."],
      ["Energy industry", "Steel structures, ducts and technical systems."],
      ["Wood processing", "Conveyors and industrial installations."],
      ["Heavy industrial plants", "Teams for complex European projects."],
    ],
    sr: [
      ["Cementna industrija", "Montaža i remonti u cementarama."],
      ["Industrija kreča", "Rad u toplim i prašnjavim industrijskim okruženjima."],
      ["Hemijska industrija", "Koordinisana montaža u regulisanim postrojenjima."],
      ["Energetika", "Čelične konstrukcije, kanali i tehnički sistemi."],
      ["Prerada drveta", "Transportni sistemi i industrijske instalacije."],
      ["Teški industrijski pogoni", "Ekipe za kompleksne evropske projekte."],
    ],
  }[locale];

  return labels.map(([title, text]) => ({ title, text }));
}

function certificationCards(locale: Locale): Card[] {
  const home = makePageHome(locale);
  return home.certifications.map((title) => ({
    title,
    text:
      locale === "de"
        ? "Bereit für projektbezogene Prüfung und Dokumentation."
        : locale === "en"
          ? "Ready for project-specific review and documentation."
          : locale === "sr"
            ? "Spremno za projektnu proveru i dokumentaciju."
            : "Pripravljeno za projektni pregled in dokumentacijo.",
  }));
}

function projectCards(locale: Locale): Card[] {
  const home = makePageHome(locale);
  return home.projects.map((project) => ({
    title: project.title,
    text: project.meta,
    items: project.items,
  }));
}

function makePageHome(locale: Locale): SiteContent["home"] {
  if (locale !== "sl") {
    return makeHome(locale as Exclude<Locale, "sl">);
  }

  return {
    ...makeHome("en"),
    servicesTitle: "Storitve za težko industrijo",
    services: [
      {
        title: "Industrijska montaža",
        text: "Montaža obratov, platform, sprememb in industrijskih konstrukcij.",
        items: ["jeklene konstrukcije", "industrijske platforme", "modifikacije"],
      },
      {
        title: "Shutdowni in remonti",
        text: "Hitro razpoložljive ekipe za vzdrževalne zastoje in časovno kritična dela.",
        items: ["vzdrževalni zastoji", "turnaround podpora", "urgentne ekipe"],
      },
      {
        title: "HVAC in ventilacija",
        text: "Industrijski kanali, ventilacijski sistemi in naprave za obdelavo zraka.",
        items: ["industrijski kanali", "ventilacijski sistemi", "AHU sistemi"],
      },
      {
        title: "Transportni sistemi",
        text: "Montaža transporterjev, transportne tehnologije in materialnih tokov.",
        items: ["transporterji", "transportna tehnologija", "material handling"],
      },
      {
        title: "Stahlbaumontaža",
        text: "EN 1090 skladna montaža težkih jeklenih konstrukcij.",
        items: ["EN 1090", "težke konstrukcije", "vijačenje in varjenje"],
      },
      {
        title: "Varilska podpora",
        text: "Certificirani varilci za industrijske konstrukcije, remonte in montažna dela.",
        items: ["certificirani varilci", "industrijske konstrukcije", "remonti"],
      },
    ],
    why: [
      {
        title: "Stalna ekipa",
        text: "Izkušeni monterji in varilci, pripravljeni za industrijska gradbišča.",
      },
      {
        title: "Vodenje na terenu",
        text: "Vsaka napotitev vključuje vodje ekip za neposredno koordinacijo z naročnikom.",
      },
      {
        title: "Hitra mobilizacija",
        text: "Za shutdowne, jeklene konstrukcije in urgentne montaže po Evropi.",
      },
    ],
    team: [
      {
        title: "Senior foreman",
        text: "14 let mednarodnih izkušenj v industrijski montaži.",
      },
      {
        title: "Vodje ekip",
        text: "Nemško govoreča koordinacija neposredno na gradbišču.",
      },
      {
        title: "Monterji in varilci",
        text: "Izkušeni strokovnjaki za zahtevne industrijske montaže.",
      },
    ],
    certifications: [
      "EN 1090 EXC4",
      "SCC",
      "Certifikati varilcev (DIN EN ISO 9606-1)",
      "OZO za delo na višini",
      "Dokazilo o zavarovanju",
      "Potrdilo o davčni oprostitvi",
    ],
    projects: [
      {
        title: "Projekt v cementni industriji — Nemčija",
        meta: "12 monterjev in varilcev",
        items: [
          "montaža jeklenih konstrukcij",
          "650 t jeklene konstrukcije",
          "vgradnja toplotnega izmenjevalnika",
        ],
      },
      {
        title: "Industrijska ventilacija — Nemčija",
        meta: "shutdown okolje",
        items: ["HVAC sistemi", "industrijski kanali", "koordinacija v zastoju"],
      },
      {
        title: "Airinotec — industrijska ventilacija",
        meta: "referenčni projekt",
        items: ["industrijska ventilacija", "montažna podpora", "izvedba na terenu"],
      },
      {
        title: "Binderholz — lesnopredelovalna industrija",
        meta: "referenčni projekt",
        items: ["industrijska montaža", "podpora pri izvedbi", "koordinacija na terenu"],
      },
    ],
  };
}

function contactCards(locale: Locale): Card[] {
  const labels = {
    sl: [
      ["Telefon", sharedContact.phone],
      ["WhatsApp", sharedContact.whatsapp],
      ["E-pošta", sharedContact.email],
    ],
    de: [
      ["Telefon", sharedContact.phone],
      ["WhatsApp", sharedContact.whatsapp],
      ["E-Mail", sharedContact.email],
    ],
    en: [
      ["Phone", sharedContact.phone],
      ["WhatsApp", sharedContact.whatsapp],
      ["Email", sharedContact.email],
    ],
    sr: [
      ["Telefon", sharedContact.phone],
      ["WhatsApp", sharedContact.whatsapp],
      ["E-mail", sharedContact.email],
    ],
  }[locale];

  return labels.map(([title, text]) => ({ title, text }));
}
