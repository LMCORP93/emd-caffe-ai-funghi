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
    availability: 'Disponibile online',
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
    description: 'French Mush prende il primo posto perché è la scelta più coerente per un EMD italiano sul caffè ai funghi. La marca è specializzata negli estratti funzionali e comunica in modo chiaro il valore della categoria: non solo gusto, ma anche routine, concentrazione e qualità degli ingredienti.\n\nLa consigliamo come prima opzione per chi vuole capire davvero cosa compra, senza cadere in promesse esagerate. È meno “caffè da bar” e più bevanda funzionale, ma proprio per questo si posiziona bene su una ricerca ancora giovane come caffè ai funghi.'
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
    availability: 'Disponibile online',
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
    description: 'Bonjour Drink è il secondo prodotto perché risponde benissimo a un bisogno pratico: sostituire il caffè quotidiano con una bevanda più stabile e più dolce per lo stomaco. È probabilmente l’opzione più facile da consigliare a chi parte da zero e non vuole entrare subito nel mondo degli estratti puri.\n\nIl suo vantaggio è la semplicità. Si prepara velocemente, ha un gusto rassicurante e permette di conservare il rituale della tazza calda. Per l’Italia, dove il caffè è una routine forte, questa accessibilità è un punto decisivo.'
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
    availability: 'Disponibile online',
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
    description: 'Clearly Not Coffee è terzo perché intercetta un’intenzione molto precisa: trovare una bevanda che sostituisca il caffè senza copiarlo. La promessa è semplice e comprensibile, meno nervosismo, meno acidità e una routine più leggera.\n\nÈ una buona scelta per chi non vuole studiare ogni singolo fungo adattogeno, ma vuole un’alternativa pronta e coerente. Nel comparativo resta dietro French Mush e Bonjour Drink perché è meno centrale sul concetto “funghi”, ma molto forte sull’uso quotidiano.'
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
    availability: 'Disponibile online',
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
    description: 'Mush N Go è quarto, ma non perché sia debole. È semplicemente più tecnico. La formula parla a chi cerca concentrazione, ritmo di lavoro e supporto mentale, più che a chi vuole solo una bevanda calda al posto dell’espresso.\n\nPer questo lo mettiamo dopo le opzioni più accessibili. Se però l’obiettivo principale è il focus, Mush N Go può diventare la scelta più interessante del confronto, soprattutto per chi conosce già Lion’s Mane e adattogeni.'
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
    availability: 'Disponibile online',
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
    description: 'Drink Dyna entra in quinta posizione come opzione più accessibile e più vicina al concetto di super coffee. È utile per chi vuole una bevanda funzionale senza passare subito a una formula troppo specialistica.\n\nIl limite è la pertinenza SEO: per una pagina centrata su caffè ai funghi, Dyna è meno diretto di French Mush, Bonjour Drink, Clearly e Mush N Go. Resta però valido come alternativa pratica per confrontare prezzo, gusto e facilità di adozione.'
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
    availability: 'Disponibile online',
    productType: 'Caffè ai funghi',
    pros: [
      'Prodotto vicino all’idea internazionale di mushroom coffee',
      'Utile per completare il panorama del mercato',
      'Buona alternativa da confrontare su gusto e posizionamento',
      'Link e codice promo presenti in Supabase'
    ],
    cons: [
      'Dati commerciali e disponibilità da monitorare nel tempo',
      'Meno prioritario rispetto ai partner LMC più forti',
      'Non è la prima scelta da spingere finché il mercato italiano resta piccolo'
    ],
    description: 'Upraising chiude il Top 6 perché ha senso come prodotto di confronto, ma non come raccomandazione principale. È più vicino al mushroom coffee internazionale e può interessare chi cerca proprio quel formato.\n\nLo teniamo nel comparativo per dare una panoramica completa, ma la priorità commerciale resta sulle marche con miglior fit LMC, maggiore chiarezza e proposta più facile da spiegare al pubblico italiano.'
  }
];

const config: SiteConfig = {
  domain: 'https://emd-caffe-ai-funghi.pages.dev',
  isIndexable: false,
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
    ogImage: '/og-image.jpg',
  },
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
    { type: 'comparatif', label: 'Comparativo', slug: '/' },
  ],
};

export default config;
