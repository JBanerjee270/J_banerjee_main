import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

// Move servicesData to a separate file if it grows large


const servicesData = {
  "intellectual-property-rights": {
    title: "Intellectual Property Rights",
    description: "Expert trademark, copyright, and patent legal services in Kolkata | J Banerjee & Co Advocates",
    longDescription: [
      "At J Banerjee & Co Advocates, we provide comprehensive intellectual property legal solutions with 20+ years of experience. Our IPR services protect your innovations, creative works, and brand identity through strategic legal frameworks.",
      "We've successfully handled over 200 IP cases, helping businesses and individuals secure their intellectual assets. Our expertise covers all aspects of IP law including registration, licensing, and infringement litigation."
    ],
    icon: "📜",
    image: "/prop.webp",
    keyFeatures: [
      "Trademark registration and protection",
      "Copyright filing and enforcement",
      "Patent application assistance",
      "IP infringement litigation",
      "Brand protection strategies",
      "Licensing agreements",
      "IP portfolio management",
      "Domain name disputes"
    ],
    seo: {
      title: "IPR Lawyer in Kolkata | Trademark & Copyright Attorney | J Banerjee & Co",
      metaDescription: "Expert intellectual property rights legal services in Kolkata. Protect your trademarks, copyrights and patents with our 20+ years experienced IPR lawyers.",
      keywords: "IPR lawyer Kolkata, trademark attorney, copyright lawyer, patent attorney, intellectual property rights",
      ogImage: "/ipr-law-og.jpg"
    },
    faqs: [
      {
        question: "How long does trademark registration take in India?",
        answer: "Typically 18-24 months if there are no objections or oppositions."
      },
      {
        question: "What's the difference between copyright and trademark?",
        answer: "Copyright protects original creative works while trademarks protect brand identifiers like logos and names."
      }
    ],
    testimonials: [
      {
        name: "Rahul Sharma",
        company: "TechInnovate Solutions",
        content: "J Banerjee & Co successfully registered our trademark and handled an infringement case with excellent results."
      }
    ],
    process: [
      "Initial consultation to understand your IP needs",
      "Comprehensive search and analysis",
      "Document preparation and filing",
      "Regular status updates",
      "Post-registration protection strategy"
    ]
  },

  "civil-cases": {
    title: "Civil Litigation",
    description: "Experienced civil lawyers in Kolkata handling property disputes, contracts, and personal injury cases",
    longDescription: [
      "Our civil litigation team at J Banerjee & Co Advocates has successfully resolved over 150 civil disputes through negotiation, mediation, and courtroom advocacy.",
      "With deep understanding of civil procedure codes and 20+ years of practice in Kolkata courts, we provide strategic representation for both plaintiffs and defendants."
    ],
    icon: "⚖️",
    image: "/civil.webp",
    keyFeatures: [
      "Property dispute resolution",
      "Contract enforcement",
      "Debt recovery",
      "Personal injury claims",
      "Injunction proceedings",
      "Appellate representation",
      "Landlord-tenant disputes",
      "Specific performance suits"
    ],
    seo: {
      title: "Civil Lawyer in Kolkata | Property & Contract Dispute Attorney",
      metaDescription: "Expert civil litigation services in Kolkata. Resolve property disputes, contract conflicts with our experienced civil lawyers.",
      keywords: "civil lawyer Kolkata, property dispute lawyer, contract lawyer, civil litigation attorney",
      ogImage: "/civil.webp"
    },
    faqs: [
      {
        question: "How long do civil cases typically take in India?",
        answer: "It varies but most civil cases take 3-5 years to reach conclusion in trial courts."
      }
    ],
    process: [
      "Case evaluation and strategy development",
      "Evidence collection and documentation",
      "Pleadings preparation",
      "Court representation",
      "Alternative dispute resolution options"
    ]
  },
  "criminal-matters": {
    title: "Criminal Defense",
    description: "Top criminal defense lawyers in Kolkata with 20+ years experience handling complex criminal cases",
    longDescription: [
      "J Banerjee & Co Advocates provides aggressive criminal defense representation across all levels of the judicial system in Kolkata.",
      "Our criminal law practice has successfully defended clients in over 100 cases involving charges ranging from white-collar crimes to serious felonies."
    ],
    icon: "🔒",
    image: "/criminal.webp",
    keyFeatures: [
      "Bail applications and hearings",
      "Trial defense strategy",
      "Appellate representation",
      "White-collar crime defense",
      "Cyber crime cases",
      "Domestic violence defense",
      "Negotiated settlements",
      "Criminal appeals"
    ],
    seo: {
      title: "Best Criminal Lawyer in Kolkata | Criminal Defense Attorney",
      metaDescription: "Experienced criminal defense attorneys in Kolkata. Strong representation for bail, trials and appeals with 20+ years experience.",
      keywords: "criminal lawyer Kolkata, best criminal attorney, bail lawyer, criminal defense",
      ogImage: "/criminal-law-og.jpg"
    },
    testimonials: [
      {
        name: "Anonymous Client",
        content: "They secured my bail within 24 hours and got the charges dropped completely. Excellent criminal defense team."
      }
    ]
  },
  "services-matters": {
    title: "Service Matters",
    description: "Expert legal representation for government and private sector service matters in Kolkata",
    longDescription: [
      "Our firm specializes in service matter litigation involving employment disputes, disciplinary proceedings, and service benefits.",
      "With particular expertise in public sector service matters, we've represented over 50 clients in various service tribunals and high courts."
    ],
    icon: "🏛️",
    image: "/services.webp",
    keyFeatures: [
      "Departmental inquiry representation",
      "Service benefit claims",
      "Promotion disputes",
      "Pension matters",
      "Disciplinary proceedings",
      "Service termination appeals",
      "Pay scale revisions",
      "Seniority disputes"
    ],
    seo: {
      title: "Service Matter Lawyer Kolkata | Employment Dispute Attorney",
      metaDescription: "Expert legal services for government and private sector employment disputes in Kolkata with 20+ years experience.",
      keywords: "service matter lawyer, employment dispute attorney, departmental inquiry lawyer",
      ogImage: "/service-law-og.jpg"
    }
  },
  "writs": {
    title: "Writ Petitions",
    description: "Specialized writ petition lawyers in Kolkata for constitutional remedies and judicial review",
    longDescription: [
      "Our firm has filed over 75 successful writ petitions in Calcutta High Court, protecting clients' fundamental rights and challenging unlawful administrative actions.",
      "We specialize in Article 226 petitions for immediate judicial intervention in matters requiring urgent resolution."
    ],
    icon: "✍️",
    image: "/writs.webp",
    keyFeatures: [
      "Article 226 petitions",
      "Habeas corpus",
      "Mandamus writs",
      "Certiorari petitions",
      "Quo warranto",
      "Public interest litigation",
      "Stay orders",
      "Administrative law challenges"
    ],
    seo: {
      title: "Writ Petition Lawyer Kolkata | Constitutional Remedies Attorney",
      metaDescription: "Expert writ petition filing services in Calcutta High Court. Protect your constitutional rights with our experienced lawyers.",
      keywords: "writ petition lawyer Kolkata, constitutional lawyer, high court attorney",
      ogImage: "/writ-law-og.jpg"
    }
  },
  "divorce-matters": {
    title: "Divorce & Family Law",
    description: "Compassionate yet strong divorce lawyers in Kolkata handling all family law matters",
    longDescription: [
      "We approach divorce and family law matters with sensitivity while aggressively protecting our clients' rights in child custody, alimony and property division.",
      "Our family law practice has resolved over 60 divorce cases through both negotiated settlements and courtroom litigation."
    ],
    icon: "💔",
    image: "/div.webp",
    keyFeatures: [
      "Contested and mutual divorce",
      "Child custody agreements",
      "Alimony and maintenance",
      "Domestic violence cases",
      "Property division",
      "Child support",
      "Marriage annulment",
      "Pre-nuptial agreements"
    ],
    seo: {
      title: "Divorce Lawyer in Kolkata | Family Law Attorney | J Banerjee & Co",
      metaDescription: "Experienced divorce and family law attorneys in Kolkata. Compassionate representation for custody, alimony and property matters.",
      keywords: "divorce lawyer Kolkata, family law attorney, child custody lawyer",
      ogImage: "/divorce-law-og.jpg"
    },
    testimonials: [
      {
        name: "Priya M.",
        content: "They handled my divorce with professionalism and care, ensuring fair settlement while minimizing conflict."
      }
    ]
  },
  "design-matters": {
    title: "Design Protection",
    description: "Specialized design registration and protection legal services in Kolkata",
    longDescription: [
      "We provide comprehensive legal services for design registration under the Designs Act, 2000 and enforcement against infringement.",
      "Our team has successfully registered over 30 industrial designs and handled multiple design infringement cases."
    ],
    icon: "🎨",
    image: "/design.webp",
    keyFeatures: [
      "Design registration",
      "Infringement litigation",
      "Design searches",
      "Portfolio management",
      "Licensing agreements",
      "International protection",
      "Cease and desist notices",
      "Design assignment agreements"
    ],
    seo: {
      title: "Design Law Attorney Kolkata | Design Registration & Protection",
      metaDescription: "Expert legal services for industrial design registration and protection in Kolkata with 20+ years experience.",
      keywords: "design lawyer Kolkata, design registration attorney, industrial design protection",
      ogImage: "/design-law-og.jpg"
    }
  },
  "cheque-bounce": {
  title: "cheque bounce lawyer in kolkata",
  description: "Expert cheque bounce case lawyers in Kolkata under Section 138 of the NI Act",
  longDescription: [
    "At J Banerjee & Co Advocates, we specialize in handling cheque dishonor cases under Section 138 of the Negotiable Instruments Act, 1881. With decades of experience, our firm offers strategic and time-bound legal remedies to individuals and businesses facing cheque bounce issues.",
    "We have successfully represented clients in over 90 cheque bounce matters, including recovery proceedings, settlement negotiations, and criminal prosecution."
  ],
  icon: "💳",
  image: "/cheque.webp", // Ensure this image exists in your public folder
  keyFeatures: [
    "Legal notice drafting & dispatch",
    "Filing Section 138 complaints",
    "Defense in cheque bounce cases",
    "Out-of-court settlements",
    "Criminal proceedings under NI Act",
    "Banking dispute resolution",
    "Debt recovery litigation",
    "Representation in Magistrate Courts"
  ],
  seo: {
    title: "cheque bounce lawyer in kolkata",
    metaDescription: "Top cheque bounce case lawyers in Kolkata. Get expert help under Section 138 of the NI Act for cheque dishonor, recovery & criminal proceedings.",
    keywords: "cheque bounce lawyer Kolkata, NI Act Section 138, cheque dishonor attorney, cheque case legal help",
    ogImage: "/cheque-bounce-og.jpg" // Optional: add image in `public` folder
  },
  faqs: [
    {
      question: "What is the time limit for filing a cheque bounce case?",
      answer: "You must send a legal notice within 30 days of bounce, and file the case within 15 days of notice expiry if no payment is made."
    },
    {
      question: "Is cheque bounce a criminal offense in India?",
      answer: "Yes, it is punishable with imprisonment up to 2 years or a fine up to twice the amount of the cheque, or both."
    }
  ],
  testimonials: [
    {
      name: "Manish Agarwal",
      company: "Metro Hardware",
      content: "Their legal team helped us recover dues through quick cheque bounce prosecution. Highly recommended."
    }
  ],
  process: [
    "Initial consultation and case assessment",
    "Preparation and dispatch of legal notice",
    "Filing Section 138 complaint before Magistrate",
    "Hearing and argument stage",
    "Recovery and enforcement actions"
  ]
}

};


export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({
    slug
  }));
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: "Service Not Found | J Banerjee & Co Advocates",
      description: "The requested legal service could not be found."
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.metaDescription,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.metaDescription,
      images: [
        {
          url: service.seo.ogImage,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ]
    }
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug];
  
  if (!service) {
    return notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0d1b2a] text-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-300">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-orange-400 transition">Services</Link>
            </li>
            <li>/</li>
            <li className="text-orange-400">{service.title}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            
            <div className="mb-8">
              {service.longDescription.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Key Services Include:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Section */}
            {service.process && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Our Process:</h3>
                <ol className="space-y-3">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-orange-400 text-[#0d1b2a] font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Stats */}
            {service.stats && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {service.stats.map((stat, index) => (
                  <div key={index} className="bg-[#112B45] p-4 rounded-lg text-center border border-white/10">
                    <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials */}
            {service.testimonials && service.testimonials.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Client Testimonials:</h3>
                <div className="space-y-4">
                  {service.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-[#112B45] p-4 rounded-lg border border-white/10">
                      <p className="italic mb-2">{testimonial.content}</p>
                      <p className="font-semibold">
                        {testimonial.name}
                        {testimonial.company && (
                          <span className="text-gray-300">, {testimonial.company}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Frequently Asked Questions:</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="bg-[#112B45] p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <p className="mb-4">With 20+ years of experience and 1600+ satisfied clients, J Banerjee & Co Advocates brings unparalleled expertise to your case.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-orange-400 text-[#0d1b2a] px-6 py-3 rounded-md hover:bg-orange-500 transition font-medium text-center"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="tel:+919748231841" 
                  className="inline-block border border-orange-400 text-orange-400 px-6 py-3 rounded-md hover:bg-orange-400 hover:text-[#0d1b2a] transition font-medium text-center"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="sticky top-32 space-y-8">
            {/* Service Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Contact Card */}
            <div className="bg-[#112B45] p-6 rounded-lg border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Contact Our {service.title} Expert</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <p>16 Dr. Suresh Sarkar Road, Kolkata – 700014</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <a href="tel:+919748231841" className="hover:text-orange-400 transition">+91 97482 31841</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@banerjee.co.in" className="hover:text-orange-400 transition">info@banerjee.co.in</a>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-[#112B45] p-6 rounded-lg border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Other Services</h3>
              <ul className="space-y-2">
                {Object.entries(servicesData)
                  .filter(([key]) => key !== params.slug)
                  .slice(0, 3)
                  .map(([key, service]) => (
                    <li key={key}>
                      <Link 
                        href={`/services/${key}`} 
                        className="block py-2 hover:text-orange-400 transition border-b border-white/10 last:border-0"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


 const metadata = {
  title: "Legal Services in Kolkata | Criminal, Divorce & Corporate Lawyers | J Banerjee & Co",
  description: "Comprehensive legal services in Kolkata including criminal defense, divorce cases, IPR, civil litigation, and corporate law. 20+ years experienced advocates.",
  keywords: [
    "best criminal lawyer Kolkata",
    "top divorce attorney Kolkata",
    "trademark lawyer near me",
    "High Court advocate West Bengal",
    "civil litigation lawyer",
    "cheque bounce case specialist",
    "service matter attorney",
    "writ petition lawyer",
    "design protection legal services",
    "family court advocate",
    "property dispute lawyer",
    "corporate legal services",
    "experienced advocates in Kolkata",
    "reputed law firm"
  ].join(', '),
  openGraph: {
    title: "Legal Services in Kolkata | J Banerjee & Co Advocates",
    description: "Specialized legal services including criminal law, divorce cases, civil litigation and corporate matters. Serving Kolkata for 20+ years.",
    url: "https://www.banerjeeadvocates.com/services",
    type: 'website',
    images: [
      {
        url: 'https://www.banerjeeadvocates.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'J Banerjee & Co Legal Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Legal Services in Kolkata | J Banerjee & Co Advocates",
    description: "Expert legal representation in criminal, family and corporate law matters. Contact our experienced advocates today.",
    images: ['https://www.banerjeeadvocates.com/twitter-services.jpg'],
  },
  alternates: {
    canonical: 'https://www.banerjeeadvocates.com/services',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};