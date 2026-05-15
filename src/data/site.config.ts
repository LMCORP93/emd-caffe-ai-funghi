// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number; name: string; brand: string; slug: string; image: string; brandLogo: string;
  rating: number; reviewCount: number; promoCode: string; promoPercent: number;
  originalPrice: string; discountPrice: string; affiliateLink: string; origin: string;
  availability: string; productType: string; pros: string[]; cons: string[]; description: string;
}
export interface SiteConfig {
  domain: string; isIndexable?: boolean; siteName: string; brand: string; product: string;
  productCategory: string; productFormat: string; tagline: string; affiliateLink: string;
  promoCode: string; originalPrice: string; discountPrice: string; rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string; breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[]; cons: string[]; faq: { question: string; answer: string }[];
  products: Product[]; tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Boisson Boost',
    brand: 'French Mush',
    slug: 'french-mush',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68df9c4752b86513fd872399_BOOST_French_Mush.avif',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68df99d27d2df19761dbfa26_Group_1.svg',
    rating: 9.6,
    reviewCount: 85,
    promoCode: 'LMC',
    promoPercent: 12,
    originalPrice: '32,00 €',
    discountPrice: '28,16 €',
    affiliateLink: 'https://taap.it/french-mush-boisson-boost',
    origin: '🇫🇷 Francia',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Bevanda funzionale con estratti di funghi',
    pros: [
      'Marca specializzata nei funghi funzionali, con posizionamento molto coerente per questa SERP',
      'Buon equilibrio tra ingredienti, credibilità e uso quotidiano',
      'Adatta a chi cerca un prodotto più tecnico di una semplice alternativa al caffè',
      'Codice promo chiaro e link affiliato verificato'
    ],
    cons: [
      'Esperienza più vicina al mondo degli adattogeni che al caffè italiano classico',
      'Richiede un minimo di interesse per Lion’s Mane, Reishi, Cordyceps e Chaga',
      'Meno immediata per chi vuole solo una bevanda dolce da colazione'
    ],
    description: 'French Mush è una marca specializzata nelle bevande funzionali a base di funghi adattogeni. Il suo punto forte è la chiarezza: non prova a imitare un espresso italiano, ma propone una routine più morbida, pensata per chi cerca energia stabile, concentrazione e ingredienti come Lion’s Mane, Reishi, Cordyceps o Chaga.\n\nBoisson Boost è il prodotto più rappresentativo della marca per chi vuole scoprire il caffè ai funghi in modo serio. Si prepara facilmente, si integra bene al mattino e punta su un profilo più funzionale che gourmand. È una scelta interessante se vuoi una bevanda calda con un vero focus sugli estratti, non solo un prodotto che usa il trend “mushroom coffee” come argomento marketing.\n\nNel confronto, French Mush si distingue per la coerenza tra marca, formula e promessa. È meno adatto a chi cerca il gusto di un caffè da bar, ma molto pertinente per chi vuole provare una bevanda funzionale quotidiana con un posizionamento premium e un codice promo disponibile.'
  },
  {
    rank: 2,
    name: 'Super Café',
    brand: 'Bonjour Drink',
    slug: 'bonjour-drink',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d7c7d22051cb9faf0ade48_bonjour%20drink%202e%CC%80me%20image.avif',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d666ee3daf1b2e78ab7a9a_logo%20Bonjour%20Drink.svg',
    rating: 9.5,
    reviewCount: 320,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '39,00 €',
    discountPrice: '31,20 €',
    affiliateLink: 'https://taap.it/bonjour-drink-lmc',
    origin: '🇫🇷 Francia',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Polvere solubile senza caffeina',
    pros: [
      'Alternativa morbida al caffè, facile da integrare al mattino',
      'Formula accessibile con orzo tostato, cacao ed estratti funzionali',
      'Ottimo codice promo e prezzo leggibile per il pubblico italiano',
      'Profilo ideale per ridurre caffeina, nervosismo e acidità'
    ],
    cons: [
      'Non è un espresso né un caffè tradizionale',
      'Meno tecnico di French Mush o Mush N Go sul lato funghi',
      'Il gusto resta quello di una bevanda funzionale tostato-cacao'
    ],
    description: 'Bonjour Drink si presenta come una marca accessibile per chi vuole cambiare la routine del caffè senza perdere il piacere della tazza calda. Il tono è semplice, rassicurante e più lifestyle rispetto alle marche molto tecniche: questo la rende facile da capire anche per chi scopre appena le alternative al caffè.\n\nSuper Café è pensato per sostituire o alleggerire il caffè quotidiano. Il prodotto punta su un gusto tostato, una preparazione rapida e una sensazione più dolce per lo stomaco. È una buona opzione se vuoi ridurre nervosismo, acidità o consumo di caffeina senza passare subito a una formula troppo orientata integratori.\n\nNel confronto, Bonjour Drink è una delle scelte più facili per iniziare. È meno centrata sui funghi rispetto a French Mush, ma compensa con un’esperienza più immediata, un’immagine molto chiara e un prezzo interessante dopo codice promo.'
  },
  {
    rank: 3,
    name: 'Not Coffee',
    brand: 'Clearly',
    slug: 'clearly-not-coffee',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfb594d12ef2866803e9e1_Clearly.avif',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dfaffbcd9575da42dea912_67604f816f6f25a217f35605_Clearly_-_Dark_Blue_150x.avif',
    rating: 9.1,
    reviewCount: 65,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '30,00 €',
    discountPrice: '25,50 €',
    affiliateLink: 'https://taap.it/clearly-not-coffee',
    origin: '🇳🇱 Paesi Bassi',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Not Coffee / alternativa funzionale',
    pros: [
      'Posizionamento molto chiaro per chi vuole lasciare o ridurre il caffè',
      'Buona scelta se si cerca una bevanda moderna, pulita e facile da capire',
      'Prezzo competitivo dopo il codice promo',
      'Interessante per energia più stabile e routine senza eccessi'
    ],
    cons: [
      'Non è la formula più concentrata in funghi del confronto',
      'Meno riconosciuta in Italia rispetto a brand locali o marketplace',
      'Non soddisfa chi vuole caffeina forte'
    ],
    description: 'Clearly lavora su un posizionamento molto diretto: offrire una bevanda “Not Coffee” per chi vuole cambiare abitudine senza cercare una copia del caffè. La marca parla a chi associa il caffè classico a nervosismo, acidità o cali di energia, e vuole una soluzione più leggera per la routine quotidiana.\n\nNot Coffee è interessante perché non richiede di conoscere ogni fungo adattogeno o ogni ingrediente funzionale. Il prodotto si capisce velocemente: una bevanda alternativa, moderna, pronta da integrare al mattino o durante la giornata. Il valore sta tanto nella semplicità del concetto quanto nella promessa di una routine più stabile.\n\nNel confronto, Clearly è molto forte per chi vuole ridurre il caffè classico senza entrare in un universo troppo tecnico. Il prodotto resta meno verticalizzato sui funghi rispetto ai primi prodotti, ma il suo posizionamento è chiaro, utile e facile da integrare nell’uso quotidiano.'
  },
  {
    rank: 4,
    name: 'Brainstoorm',
    brand: 'Mush N Go',
    slug: 'mush-n-go',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dd05ab94d90e0a289b2ccc_image%201%20(1).avif',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68dd03c74aa741ba6fbc75d7_Logo%20mush%20n%20go.svg',
    rating: 9.0,
    reviewCount: 170,
    promoCode: 'LMC15',
    promoPercent: 15,
    originalPrice: '33,90 €',
    discountPrice: '28,82 €',
    affiliateLink: 'https://taap.it/mushngo-brainstorm',
    origin: '🇫🇷 Francia',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Polvere concentrata',
    pros: [
      'Formula più orientata a focus, produttività ed energia mentale',
      'Include Lion’s Mane, Cordyceps, Chaga e piante adattogene',
      'Buona opzione per utenti già interessati ai funghi funzionali',
      'Brand specializzato, con codice promo verificato'
    ],
    cons: [
      'Può risultare più intensa per un principiante',
      'Meno morbida come prima alternativa al caffè',
      'Il posizionamento è più performance che piacere da colazione'
    ],
    description: 'Mush N Go è una marca più tecnica, orientata a focus, produttività e performance mentale. Il suo universo parla a chi cerca una bevanda funzionale con ingredienti adattogeni, più che una semplice alternativa dolce al caffè del mattino.\n\nBrainstoorm è il prodotto più adatto a chi associa il caffè ai funghi alla concentrazione. La formula mette in evidenza ingredienti come Lion’s Mane, Cordyceps o Chaga, con una lettura più vicina al biohacking che alla bevanda da piacere. È una scelta pertinente per lavorare, studiare o strutturare una routine mattutina più funzionale.\n\nNel confronto, Mush N Go è meno immediato per un principiante, ma molto interessante per chi cerca soprattutto l’effetto focus. Se il criterio principale è la semplicità, Bonjour Drink o Clearly sono più accessibili. Se il criterio è la formula, Mush N Go diventa molto più convincente.'
  },
  {
    rank: 5,
    name: 'Super Coffee',
    brand: 'Drink Dyna',
    slug: 'drink-dyna',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69697e4bba6d906ecff4fd4e_Frame%201.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69b2b2c55bedf6616bd8c52b_logo%20dyna.png',
    rating: 8.6,
    reviewCount: 120,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '24,00 €',
    discountPrice: '21,60 €',
    affiliateLink: 'https://taap.it/Dyna-pack-decouverte-trio',
    origin: '🇫🇷 Francia',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Super Coffee funzionale',
    pros: [
      'Prezzo di ingresso interessante',
      'Profilo più vicino al caffè funzionale che al supplemento puro',
      'Pack scoperta utile per testare gusti diversi',
      'Buon compromesso per chi vuole restare vicino al rituale del caffè'
    ],
    cons: [
      'Meno focalizzato sui funghi rispetto ai primi quattro',
      'Può contenere una componente più stimolante secondo la versione scelta',
      'Il messaggio è meno verticale su “caffè ai funghi”'
    ],
    description: 'Drink Dyna propone un approccio più semplice e accessibile al super coffee. La marca punta su praticità, prezzo d’ingresso e facilità di adozione, con un prodotto che resta vicino all’universo del caffè funzionale senza diventare troppo tecnico.\n\nSuper Coffee è utile per chi vuole provare una bevanda energizzante diversa dal caffè classico, ma non vuole iniziare direttamente con una formula molto specializzata. Il formato si presta bene a una routine quotidiana: facile da capire, facile da testare e più mainstream rispetto alle opzioni più concentrate sui funghi.\n\nNel confronto, Drink Dyna ha senso come scelta pratica e conveniente. Non è il prodotto più forte se cerchi una formula molto orientata funghi adattogeni, ma può essere interessante per prezzo, semplicità e transizione verso bevande funzionali.'
  },
  {
    rank: 6,
    name: 'Flow State',
    brand: 'Upraising',
    slug: 'upraising',
    image: 'https://cdn.shopify.com/s/files/1/0645/6793/5201/files/fs-1.png?v=1763898137',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68de7e6cfcc570563301033d_67604b9d89d0bb97e4a1c609_Logo%20upraising.svg',
    rating: 8.1,
    reviewCount: 40,
    promoCode: 'LMC',
    promoPercent: 10,
    originalPrice: '34,00 €',
    discountPrice: '30,60 €',
    affiliateLink: 'https://taap.it/uprising-full-color',
    origin: '🇧🇪 Belgio',
    availability: 'Consegna in Italia possibile; verificare le condizioni sul sito ufficiale',
    productType: 'Caffè ai funghi',
    pros: [
      'Prodotto vicino all’idea internazionale di mushroom coffee',
      'Utile per completare il panorama del mercato',
      'Buona alternativa da confrontare su gusto e posizionamento',
      'Codice promo disponibile per testerlo a prezzo ridotto'
    ],
    cons: [
      'Dati commerciali e disponibilità da monitorare nel tempo',
      'Meno prioritario rispetto alle opzioni più semplici per iniziare',
      'Non è la prima scelta da spingere finché il mercato italiano resta piccolo'
    ],
    description: 'Upraising si avvicina di più all’immaginario internazionale del mushroom coffee. La marca parla a un pubblico già curioso di bevande funzionali, routine mentale e alternative moderne al caffè classico, con un posizionamento meno tradizionale e più orientato allo stato di concentrazione.\n\nFlow State è interessante perché porta nel confronto un profilo diverso: non solo una bevanda calda per sostituire il caffè, ma un prodotto pensato per accompagnare energia mentale, attenzione e rituale quotidiano. È una proposta adatta a chi cerca qualcosa di più internazionale e meno vicino al semplice gusto da colazione.\n\nNel confronto, Upraising completa bene la selezione. Non è la scelta più immediata per tutti, ma aiuta a coprire una categoria importante del mercato: il mushroom coffee pensato come routine funzionale, più che come alternativa classica all’espresso.'
  }
];

const config: SiteConfig = {
  domain: 'https://caffe-ai-funghi.com',
  isIndexable: true,
  siteName: 'Caffè ai Funghi',
  brand: 'French Mush',
  product: 'Boisson Boost',
  productCategory: 'Caffè ai funghi e bevande adattogene',
  productFormat: 'Polvere solubile',
  tagline: 'Comparativo italiano dei migliori caffè ai funghi e alternative funzionali al caffè.',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: { name: 'Tim', avatar: '/author-avatar.png', bio: 'Analista di integratori, bevande funzionali e nutrizione pratica per LMC dal 2024.' },
  seo: {
    title: 'Miglior caffè ai funghi 2026: Top 6 in Italia',
    description: 'Comparativo italiano dei migliori caffè ai funghi: French Mush, Bonjour Drink, Clearly Not Coffee, Mush N Go, Dyna e Upraising.',
    ogImage: 'https://caffe-ai-funghi.com/og-image.jpg',
  },
  analyticsMeasurementId: 'G-CEC87CDXK4',
  breadcrumbs: [{ label: 'Comparativo caffè ai funghi', href: '/' }],
  quickSummary: {
    assets: ['Top 6 focalizzato su caffè ai funghi e alternative al caffè', 'French Mush primo per coerenza con funghi funzionali ed estratti', 'Bonjour Drink secondo per facilità, gusto e routine quotidiana', 'Clearly Not Coffee terzo per chi vuole ridurre il caffè classico'],
    considerations: ['Il mercato italiano è ancora giovane', 'Non tutti i prodotti sono veri caffè classici', 'Prezzo, coupon e disponibilità possono cambiare secondo paese'],
  },
  pros: ['Comparativo diretto per scegliere velocemente', 'Include opzioni morbide, tecniche e più vicine al caffè', 'Priorità a uso reale, formula, prezzo e chiarezza commerciale'],
  cons: ['Alcuni brand non sono ancora molto conosciuti in Italia', 'La categoria resta diversa dal caffè espresso tradizionale'],
  faq: [
    { question: 'Qual è il miglior caffè ai funghi?', answer: 'Per questa prima versione scegliamo French Mush come numero uno per coerenza con i funghi funzionali, qualità percepita e chiarezza. Bonjour Drink è la scelta più semplice per iniziare, mentre Clearly Not Coffee è ottimo per chi vuole ridurre il caffè classico.' },
    { question: 'Il caffè ai funghi contiene caffeina?', answer: 'Dipende dal prodotto. Alcune formule sono alternative al caffè e non puntano sulla caffeina, altre mantengono una base più simile al caffè. Bisogna leggere etichetta e dosaggio prima di acquistare.' },
    { question: 'A cosa serve il caffè ai funghi?', answer: 'Viene cercato soprattutto per energia più stabile, concentrazione, rituale mattutino più leggero e minore nervosismo rispetto al caffè tradizionale. Non va però presentato come una cura medica.' },
    { question: 'Ci sono controindicazioni?', answer: 'Se assumi farmaci, sei in gravidanza, hai patologie autoimmuni o sei molto sensibile alla caffeina, è meglio chiedere il parere di un professionista sanitario. Per iniziare, una dose ridotta è spesso più prudente.' },
    { question: 'Dove comprare caffè ai funghi in Italia?', answer: 'Le opzioni più serie si acquistano online dai siti ufficiali dei brand o tramite link verificati. Questo riduce il rischio di prezzi gonfiati, prodotti imitati o coupon non validi.' },
    { question: 'Vale la pena rispetto al caffè normale?', answer: 'Sì, se vuoi ridurre nervosismo, acidità o picchi di energia. Se cerchi solo gusto espresso e stimolo forte, un caffè classico resta probabilmente più adatto.' },
  ],
  products,
  tocItems: [
    { id: 'introduzione', label: 'Riassunto' },
    { id: 'ranking', label: 'Top 6' },
    { id: 'metodologia', label: 'Metodo' },
    { id: 'scegliere', label: 'Come scegliere' },
    { id: 'tabella', label: 'Guida rapida' },
    { id: 'benefici', label: 'Benefici' },
    { id: 'prezzo', label: 'Prezzo e coupon' },
    { id: 'verdetto', label: 'Verdetto' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparativo', slug: '/', image: '/images/content/emd-cafe-champignons-banner.webp' },
    { type: 'blog', label: 'Mushroom coffee Italia', slug: '/mushroom-coffee-italia/' },
    { type: 'blog', label: 'Controindicazioni', slug: '/caffe-ai-funghi-controindicazioni/' },
  ],
};

export default config;
