export type ServiceSlug = 'home' | 'aprimoramento-vocal' | 'reabilitacao-vocal' | 'voz-falada';

const homeService = {
  slug: 'home',
  path: '/',
  title: 'Aprimoramento Vocal para Cantores',
  pageTitle: 'Liege Milhioli | Aprimoramento Vocal para Cantores em Vila Velha',
  metaDescription: 'Aprimoramento vocal para cantores com Liege Milhioli, fonoaudióloga em Vila Velha - ES, com foco em resistência vocal, alcance, saúde da voz e performance para shows.',
  heroTitle: 'Fonoaudiologia\navançada para\nprofissionais',
  heroImage: '/images/hero-home-fonoaudiologia-avancada.webp',
  heroMobileImage: '/images/hero-home-fonoaudiologia-avancada-mobile.webp',
  aboutPhoto: '/images/sobre-aprimoramento-profissional.webp',
  introTitle: ['Aprimoramento vocal', 'para cantores', 'com plano individual'],
  quote: '“A voz do cantor precisa responder à emoção, ao repertório e à agenda de shows sem perder cuidado técnico.”',
  imagePrimary: '/images/liege-aprimoramento-funcional-image.webp',
  imageSecondary: '/images/liege-aprimoramento-funcional-treatment.webp',
  cardImage: '/images/liege-aprimoramento-vocal-estudio.webp',
  cardAlt: 'Aprimoramento vocal para cantores profissionais',
  cardText: 'Plano para resistência, alcance e performance de cantores em rotina de shows, ensaios e gravações.',
  cards: [
    {
      titulo: 'O que é aprimoramento vocal?',
      texto: 'É um acompanhamento fonoaudiológico voltado para melhorar eficiência, resistência e controle da voz cantada, respeitando a identidade vocal do artista.',
      variant: 'outline',
    },
    {
      titulo: 'Por que é necessário?',
      texto: 'Porque a voz cantada exige resistência, controle e segurança para acompanhar ensaios, gravações e apresentações sem sobrecarga.',
      variant: 'mid',
    },
    {
      titulo: 'Quais ganhos terei?',
      texto: 'Mais resistência, controle, alcance e confiança para cantar com menor esforço, preservando sua identidade vocal e sua performance.',
      variant: 'light',
    },
  ],
  faqs: [
    ['Aprimoramento vocal é apenas para quem tem lesão?', 'Não. Cantores podem procurar acompanhamento mesmo sem lesão, especialmente quando desejam cantar por mais tempo, ampliar recursos técnicos ou lidar melhor com uma rotina intensa de shows.'],
    ['Esse trabalho substitui aula de canto?', 'Não. A fonoaudiologia vocal complementa a formação artística ao cuidar de eficiência, saúde, resistência e ajustes funcionais da voz.'],
    ['É possível ampliar alcance vocal com segurança?', 'A evolução depende da avaliação individual, da prática orientada e dos hábitos vocais. O foco é buscar ganho técnico sem sobrecarga e sem promessa de resultado padronizado.'],
    ['O acompanhamento ajuda em períodos de shows?', 'Sim. O plano pode organizar aquecimento, desaquecimento, recuperação vocal, manejo de esforço e estratégias para sustentar a demanda de apresentações.'],
    ['Quem trabalha com voz falada também pode ser atendido?', 'Sim. Além de cantores, o atendimento contempla professores, advogados, médicos, palestrantes, políticos, empresários e outros profissionais que dependem da comunicação.'],
  ],
} as const;

export const services = [
  {
    slug: 'voz-falada',
    path: '/aperfeicoamento-da-voz-falada',
    title: 'Aperfeiçoamento da Voz Falada',
    pageTitle: 'Liege Milhioli | Aperfeiçoamento da Voz Falada em Vila Velha',
    metaDescription: 'Aperfeiçoamento da voz falada com Liege Milhioli para comunicação, retórica, presença e performance de palestrantes, políticos e empresários.',
    heroTitle: 'Aperfeiçoamento da voz falada para comunicar com presença, clareza e segurança',
    heroImage: '/images/hero-voz-falada-png.webp',
    heroMobileImage: '/images/hero-voz-falada-mobile.webp',
    aboutPhoto: '/images/sobre-voz-falada-profissional.webp',
    introTitle: ['Aperfeiçoamento', 'da voz falada', 'para comunicação'],
    quote: '“A voz falada comunica presença, intenção e segurança antes mesmo das palavras terminarem.”',
    imagePrimary: '/images/generated/voz-falada-funcional-image-v2.webp',
    imageSecondary: '/images/generated/voz-falada-funcional-treatment-v2.webp',
    cardImage: '/images/generated/voz-falada-funcional-image-v2.webp',
    cardAlt: 'Aperfeiçoamento da voz falada para comunicação profissional',
    cardText: 'Trabalho para comunicação, retórica, habilidades comunicativas e performance de palestrantes, políticos e empresários.',
    cards: [
      {
        titulo: 'O que é aperfeiçoamento da voz falada?',
        texto: 'É um trabalho voltado ao uso estratégico da voz na comunicação profissional, apresentações, reuniões e fala pública.',
        variant: 'outline',
      },
      {
        titulo: 'Para quem é indicado?',
        texto: 'É indicado para palestrantes, políticos, empresários, líderes, professores e profissionais que precisam comunicar com clareza.',
        variant: 'mid',
      },
      {
        titulo: 'O que pode ser trabalhado?',
        texto: 'Projeção, ritmo, articulação, presença vocal, resistência, pausas e expressividade, sempre conforme avaliação individual.',
        variant: 'light',
      },
    ],
    faqs: [
      ['Aperfeiçoamento da voz falada é terapia?', 'É um acompanhamento fonoaudiológico voltado à comunicação e performance vocal, com objetivos definidos conforme a necessidade profissional.'],
      ['Serve para palestrantes e empresários?', 'Sim. O trabalho pode apoiar apresentações, reuniões, discursos, negociações e situações de alta exposição.'],
      ['A voz pode transmitir mais segurança?', 'A percepção vocal envolve ritmo, intensidade, articulação, pausas e presença. Esses recursos podem ser treinados de forma orientada.'],
      ['Preciso ter problema de voz para fazer?', 'Não. Muitos profissionais procuram o aperfeiçoamento para evoluir comunicação, retórica e performance sem ter lesão vocal.'],
      ['O plano é igual para todos?', 'Não. A avaliação considera objetivo, contexto profissional, rotina, estilo de fala e pontos de ajuste individuais.'],
    ],
  },
  {
    slug: 'aprimoramento-vocal',
    path: '/aprimoramento-vocal',
    title: 'Aprimoramento Vocal para Cantores',
    pageTitle: 'Liege Milhioli | Aprimoramento Vocal para Cantores em Vila Velha',
    metaDescription: 'Aprimoramento vocal para cantores com Liege Milhioli, fonoaudióloga em Vila Velha - ES, com foco em resistência vocal, alcance, saúde da voz e performance para shows.',
    heroTitle: 'Especialista em aprimoramento vocal para cantores profissionais',
    heroImage: '/images/hero-aprimoramento-vocal-png.webp',
    heroMobileImage: '/images/hero-aprimoramento-vocal-mobile.webp',
    aboutPhoto: '/images/sobre-aprimoramento-profissional.webp',
    introTitle: ['Aprimoramento vocal', 'para cantores', 'com plano individual'],
    quote: '“A voz do cantor precisa responder à emoção, ao repertório e à agenda de shows sem perder cuidado técnico.”',
    imagePrimary: '/images/generated/aprimoramento-vocal-funcional-image-v2.webp',
    imageSecondary: '/images/generated/aprimoramento-vocal-funcional-treatment-v2.webp',
    cardImage: '/images/generated/aprimoramento-vocal-funcional-image-v2.webp',
    cardAlt: 'Aprimoramento vocal para cantores profissionais',
    cardText: 'Plano para resistência, alcance e performance de cantores em rotina de shows, ensaios e gravações.',
    cards: [
      {
        titulo: 'O que é aprimoramento vocal?',
        texto: 'É um acompanhamento fonoaudiológico voltado para melhorar eficiência, resistência e controle da voz cantada, respeitando a identidade vocal do artista.',
        variant: 'outline',
      },
      {
        titulo: 'Por que é necessário?',
        texto: 'Porque a voz cantada exige resistência, controle e segurança para acompanhar ensaios, gravações e apresentações sem sobrecarga.',
        variant: 'mid',
      },
      {
        titulo: 'Quais ganhos terei?',
        texto: 'Mais resistência, controle, alcance e confiança para cantar com menor esforço, preservando sua identidade vocal e sua performance.',
        variant: 'light',
      },
    ],
    faqs: [
      ['Aprimoramento vocal é apenas para quem tem lesão?', 'Não. Cantores podem procurar acompanhamento mesmo sem lesão, especialmente quando desejam cantar por mais tempo, ampliar recursos técnicos ou lidar melhor com uma rotina intensa de shows.'],
      ['Esse trabalho substitui aula de canto?', 'Não. A fonoaudiologia vocal complementa a formação artística ao cuidar de eficiência, saúde, resistência e ajustes funcionais da voz.'],
      ['É possível ampliar alcance vocal com segurança?', 'A evolução depende da avaliação individual, da prática orientada e dos hábitos vocais. O foco é buscar ganho técnico sem sobrecarga e sem promessa de resultado padronizado.'],
      ['O acompanhamento ajuda em períodos de shows?', 'Sim. O plano pode organizar aquecimento, desaquecimento, recuperação vocal, manejo de esforço e estratégias para sustentar a demanda de apresentações.'],
      ['Quem trabalha com voz falada também pode ser atendido?', 'Sim. Além de cantores, o atendimento contempla professores, advogados, médicos, palestrantes, políticos, empresários e outros profissionais que dependem da comunicação.'],
    ],
  },
  {
    slug: 'reabilitacao-vocal',
    path: '/reabilitacao-vocal',
    title: 'Reabilitação Vocal',
    pageTitle: 'Liege Milhioli | Reabilitação Vocal em Vila Velha',
    metaDescription: 'Reabilitação vocal com Liege Milhioli em Vila Velha - ES para lesões, fadiga, alterações vocais e profissionais que dependem da voz.',
    heroTitle: 'Reabilitação vocal para recuperar segurança, conforto e resistência na voz',
    heroImage: '/images/hero-reabilitacao-vocal-png.webp',
    heroMobileImage: '/images/hero-reabilitacao-vocal-mobile.webp',
    aboutPhoto: '/images/sobre-reabilitacao-profissional.webp',
    introTitle: ['Reabilitação vocal', 'para lesões e fadiga', 'com plano individual'],
    quote: '“Reabilitar a voz exige escuta, precisão e um plano possível para a rotina de quem depende dela.”',
    imagePrimary: '/images/generated/reabilitacao-vocal-funcional-image-v2.webp',
    imageSecondary: '/images/generated/reabilitacao-vocal-funcional-treatment-v2.webp',
    cardImage: '/images/generated/reabilitacao-vocal-funcional-image-v2.webp',
    cardAlt: 'Atendimento fonoaudiológico para reabilitação vocal',
    cardText: 'Cuidado para lesões, fadiga e alterações vocais em cantores, professores, advogados, médicos e outros profissionais.',
    cards: [
      {
        titulo: 'O que é reabilitação vocal?',
        texto: 'É o acompanhamento fonoaudiológico indicado quando há lesões, fadiga, rouquidão, desconforto ou perda de rendimento vocal.',
        variant: 'outline',
      },
      {
        titulo: 'Para quem é indicada?',
        texto: 'Pode ajudar cantores, professores, advogados, médicos, palestrantes e profissionais que usam a voz de forma intensa.',
        variant: 'mid',
      },
      {
        titulo: 'Como o plano é conduzido?',
        texto: 'A conduta considera avaliação vocal, rotina de uso da voz, sinais de sobrecarga e estratégias para recuperar função sem prometer resultado imediato.',
        variant: 'light',
      },
    ],
    faqs: [
      ['Quando procurar reabilitação vocal?', 'Quando há rouquidão recorrente, fadiga, dor, desconforto, perda de potência, falhas ou diagnóstico de alteração vocal.'],
      ['Reabilitação vocal serve para cantores?', 'Sim. Cantores podem precisar de reabilitação para recuperar conforto, resistência e segurança após sinais de sobrecarga ou lesão.'],
      ['Preciso parar de usar a voz?', 'A orientação depende da avaliação. Em muitos casos, o foco é organizar uso, repouso relativo e exercícios adequados à rotina.'],
      ['Quanto tempo leva a reabilitação?', 'O tempo varia conforme quadro, hábitos, demanda vocal e adesão ao plano. A evolução é acompanhada caso a caso.'],
      ['Profissionais da voz falada também podem fazer?', 'Sim. Professores, advogados, médicos, palestrantes e executivos podem se beneficiar quando a voz está sobrecarregada.'],
    ],
  },
] as const;

const allServices = [homeService, ...services] as const;

export type Service = (typeof allServices)[number];

export const getService = (slug: ServiceSlug) => allServices.find((service) => service.slug === slug)!;
export const getRelatedServices = (slug: ServiceSlug) => services.filter((service) => service.slug !== slug);
