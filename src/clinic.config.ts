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
      "img": "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800"
    },
    {
      "id": "harmonizacao-facial",
      "name": "HOF Tudo em Um",
      "desc": "Protocolo integrando ácido hialurônico, toxina e fios PDO.",
      "img": "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800"
    },
    {
      "id": "botox",
      "name": "Rinomodelação",
      "desc": "Reestruturação não invasiva do nariz com ácido hialurônico.",
      "img": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    },
    {
      "id": "bioestimulador",
      "name": "Fios PDO",
      "desc": "Sustentação e firmeza minimamente invasiva.",
      "img": "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800"
    }
  ],
  "doctor": {
    "name": "Dr. Paulo Teles",
    "title": "CRO-SP 125063 · Especialista em Harmonização Orofacial",
    "bio": "Referência em harmonização orofacial com atuação fundamentada na ciência, estética e técnica avançada. Mais de 7 anos de experiência e milhares de procedimentos realizados.",
    "avatar": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
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
  ]
} as const;
export type ClinicConfig = typeof CLINIC;
