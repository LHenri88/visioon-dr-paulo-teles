export const CLINIC = {
  "slug": "dr-paulo-teles",
  "name": "Dr. Paulo Teles",
  "tagline": "Harmonização Orofacial · Resultados Únicos",
  "slogan": "Resultados Únicos",
  "hero_headline_real": "Harmonização Facial · Abordagem Personalizada e Precisa",
  "domain": "drpauloteles.com.br",
  "email": "contato@drpauloteles.com.br",
  "city": "São Paulo · SP",
  "category": "Harmonização Orofacial",
  "primary_procedure": "preenchimento-labial",
  "brand": {
    "primary": "#0F1B2D",
    "secondary": "#C8A464",
    "accent": "#F2EAD5",
    "ink": "#08111F",
    "paper": "#FFFFFF",
    "font_display": "'Libre Caslon Display', serif",
    "font_body": "'Inter', sans-serif",
    "logo_glyph": "PT"
  },
  "tone_of_voice": "Premium-masculino, técnico-artístico. Posiciona o doutor como artista-cirurgião. Curto, afirmativo.",
  "icp": "25-45, ambos os sexos, públicos exigentes (influencers, executivos), priorizam assinatura do profissional.",
  "sections": [
    "Hero",
    "Doctor",
    "Signature",
    "Procedures",
    "Simulator",
    "Results",
    "FAQ",
    "Schedule",
    "Footer",
    "ChatWidget"
  ],
  "hero": {
    "kicker": "Resultados Únicos · Dr. Paulo Teles",
    "headline": "Precisão milimétrica. Resultado visualizado.",
    "sub": "Para quem busca técnica clínica e respeito à individualidade. Visão técnica e olhar artístico — agora com pré-visualização por IA."
  },
  "cta_primary": "Ver meu novo perfil",
  "chat_persona": "Sou Lara, assistente do Dr. Paulo. Posso explicar tipos de ácido hialurônico, técnicas e agendar avaliação clínica.",
  "procedures": [
    "preenchimento-labial",
    "harmonizacao-facial",
    "botox",
    "bioestimulador"
  ],
  "procedure_details": [
    {
      "id": "preenchimento-labial",
      "name": "Preenchimento Labial",
      "desc": "Realça formato, volume e definição com proporção áurea calculada.",
      "img": "/img/photo-output-10-1024x1024-63a5be.jpg"
    },
    {
      "id": "harmonizacao-facial",
      "name": "HOF Tudo em Um",
      "desc": "Protocolo integrando ácido hialurônico, toxina e fios PDO.",
      "img": "/img/Imagem-do-WhatsApp-de-2025-04-01-as-16-2-ce6254.webp"
    },
    {
      "id": "botox",
      "name": "Rinomodelação",
      "desc": "Reestruturação não invasiva do nariz com ácido hialurônico.",
      "img": "/img/photo-output-7-38f915.jpg"
    },
    {
      "id": "bioestimulador",
      "name": "Fios PDO",
      "desc": "Sustentação e firmeza minimamente invasiva.",
      "img": "/img/IMG-4128-2-1020x1024-978302.jpg"
    }
  ],
  "doctor": {
    "name": "Dr. Paulo Teles",
    "title": "CRO-SP 125063 · Especialista em Harmonização Orofacial",
    "bio": "Referência em harmonização orofacial com atuação fundamentada na ciência, estética e técnica avançada. Mais de 7 anos de experiência e milhares de procedimentos realizados.",
    "avatar": "/img/Group-5-e1753906628472-b546b5.webp"
  },
  "signature": {
    "title": "A assinatura Paulo Teles",
    "sub": "Resultados naturais e precisos. Valorizamos sua identidade, sem fórmulas genéricas.",
    "pillars": [
      {
        "title": "Visão técnica",
        "desc": "Anatomia rigorosa, proporção áurea calculada, planejamento digital."
      },
      {
        "title": "Olhar artístico",
        "desc": "Cada rosto é único — técnicas adaptadas à sua geometria facial."
      },
      {
        "title": "Protocolo seguro",
        "desc": "Rigorosos protocolos de biossegurança, produtos premium."
      }
    ]
  },
  "faq": [
    {
      "q": "Quanto dura um preenchimento labial?",
      "a": "Em média 12-18 meses, dependendo do metabolismo e do produto. Reaplicações são planejadas."
    },
    {
      "q": "Vou ficar com cara de pato?",
      "a": "Não. Nosso protocolo respeita proporção 1:1.6 e descarta a estética padronizada. Resultado natural."
    },
    {
      "q": "É doloroso?",
      "a": "Anestesia tópica torna o procedimento praticamente indolor. Você sai da clínica caminhando."
    }
  ],
  "images": {
    "hero": "/img/Group-5-e1753906628472-b546b5.webp",
    "doctor": "/img/Group-5-e1753906628472-b546b5.webp",
    "clinic": "/img/DSC02357-2d6da1.webp",
    "procedures": {
      "harmonizacao-facial": "/img/Imagem-do-WhatsApp-de-2025-04-01-as-16-2-ce6254.webp",
      "preenchimento-labial": "/img/photo-output-10-1024x1024-63a5be.jpg",
      "botox": "/img/photo-output-7-38f915.jpg",
      "bioestimulador": "/img/IMG-4128-2-1020x1024-978302.jpg"
    },
    "results_gallery": [
      "/img/bruno--613dd2.jpg",
      "/img/mcdaniel-ed05f4.jpg",
      "/img/julia-1024-x-1024-pxcwdcwcw-a1f737.jpeg",
      "/img/mulher-ps-fa6f0b.jpg",
      "/img/julia-1024-x-1024-pxnknikni-f0c535.jpeg",
      "/img/2A08937B-2609-47A5-A60A-6A1C2994FCD8-sca-112f39.jpg",
      "/img/Design-sem-nome-20-7fd518.png",
      "/img/CDCE5E23-967C-4AB2-8D91-EEFCEC9819D7-sca-96ddd8.jpg"
    ]
  }
} as const;
export type ClinicConfig = typeof CLINIC;
