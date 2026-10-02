// Edite aqui os textos, links e imagens. Caminhos de imagens partem de public/.
export const company = {
  name: "Jujuba's Dev",
  headerLogo: 'images/jujuba-logo-light.svg',
  headerLogoDark: 'images/jujuba-logo-dark.svg',
  symbol: 'images/jujuba-simbolo.svg',
  email: '', // Insira um e-mail real para ativar o contato.
  logo: 'images/jujuba-logo-light.svg',
  tagline: 'if(you need) { we code }',
};
export const projects = [
  { id: 'kiora', number: '01', name: 'Kiora', category: 'GASTRONOMIA & EXPERIÊNCIA', headline: 'Uma experiência além do sabor.', description: 'Da vontade de pedir um lámen à organização do salão. Um ecossistema digital que aproxima o restaurante de seus clientes e simplifica a rotina da equipe.', url: 'https://kiorarestaurante.onrender.com', linkLabel: 'Visitar o site Kiora', logo: 'images/kiora-logo.svg',
    platforms: [
      { name: 'Web delivery', title: 'O restaurante, onde você estiver.', text: 'Uma experiência web para explorar o cardápio e criar pedidos de delivery.', features: ['Cardápio digital', 'Criação de pedidos', 'Experiência do cliente'], image: 'images/kiora-ramen.webp', visualType: 'brand', imageAlt: 'Composição visual do Kiora com pratos de lámen e acompanhamentos', caption: 'Universo visual Kiora · imagem ilustrativa' },
      { name: 'Aplicativo', title: 'O salão na palma da mão.', text: 'Aplicativo voltado a reservas, criação de pedidos e gerenciamento de mesas pelos funcionários.', features: ['Reservas', 'Pedidos', 'Gestão de mesas'], image: 'images/kiora-ambiente.webp', visualType: 'brand', imageAlt: 'Ambientação ilustrativa do restaurante Kiora com mesas, sakura e iluminação dourada', caption: 'Conceito de ambiente · não é uma tela do aplicativo' },
    ]
  },
  { id: 'techstart', number: '02', name: 'TechStart', category: 'EVENTOS & CONEXÕES', headline: 'Grandes encontros começam com uma ideia.', description: 'Uma proposta de startup que conecta presença digital e organização de eventos. Da apresentação da ideia ao gerenciamento no desktop.', url: 'https://ghostriley115.github.io/techstart-landing-page/', linkLabel: 'Visitar a TechStart', logo: 'images/techstart-simbolo.webp',
    platforms: [
      { name: 'Landing page', title: 'Uma ideia que merece ser vista.', text: 'Página de apresentação da startup, sua proposta e a solução para eventos.', features: ['Apresentação da startup', 'Proposta da solução', 'Presença digital'], image: 'images/techstart-site.webp', visualType: 'screen', imageAlt: 'Captura da landing page TechStart fornecida no projeto original', caption: 'Landing page · captura do projeto fornecido' },
      { name: 'Sistema desktop', title: 'Cada evento no seu lugar.', text: 'Sistema de gerenciamento para cadastrar, consultar, atualizar e excluir eventos.', features: ['Cadastro de eventos', 'Consulta e edição', 'Exclusão de registros'], image: 'images/techstart-desktop.webp', visualType: 'mockup', imageAlt: 'Mockup de notebook com o sistema desktop TechStart', caption: 'Sistema desktop · mockup do projeto original' },
    ]
  }
];
export const gallery = [
  { src: 'images/kiora-ambiente.webp', title: 'Uma experiência que começa no ambiente', category: 'Kiora', alt: 'Conceito visual do restaurante Kiora com iluminação quente e sakura', kind: 'Ambientação ilustrativa', fit: 'cover' },
  { src: 'images/techstart-desktop.webp', title: 'Conexões que saem do papel', category: 'TechStart', alt: 'Mockup original do sistema desktop TechStart em um notebook', kind: 'Mockup do sistema', fit: 'contain' },
  { src: 'images/jujuba-simbolo.svg', title: 'Nossa essência tem asas', category: 'Jujuba’s Dev', alt: 'Símbolo original da Jujuba’s Dev: ararajuba amarela com asas verdes', kind: 'Identidade visual', fit: 'contain' },
  { src: 'images/kiora-fachada.webp', title: 'Tradição, presença e personalidade', category: 'Kiora', alt: 'Fachada ilustrativa do restaurante Kiora à noite', kind: 'Aplicação da marca', fit: 'cover' },
  { src: 'images/techstart-site.webp', title: 'O primeiro encontro com a TechStart', category: 'TechStart', alt: 'Captura da página de apresentação da TechStart', kind: 'Captura da landing page', fit: 'contain' },
  { src: 'images/kiora-menu.webp', title: 'Cuidado em cada ponto de contato', category: 'Kiora', alt: 'Mockup ilustrativo de cardápio com identidade Kiora', kind: 'Aplicação da marca', fit: 'cover' },
];
export const values = ['Criatividade', 'Inovação', 'Acessibilidade', 'Proximidade', 'Qualidade', 'Aprendizado', 'Brasilidade', 'Ética'];
