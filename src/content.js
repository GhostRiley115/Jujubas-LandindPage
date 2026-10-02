// Edite aqui os textos, links e imagens. Caminhos de imagens partem de public/.
export const company = {
  name: "Jujuba's Dev",
  headerLogo: '', // Opcional: images/logo-jujubas.png ou sua logo transparente.
  email: '', // Insira um e-mail real para ativar o contato.
  logo: 'images/logo-jujubas.png',
  tagline: 'if(you need) { we code }',
};
export const projects = [
  { id: 'kiora', number: '01', name: 'Kiora', category: 'GASTRONOMIA & EXPERIÊNCIA', headline: 'Uma experiência além do sabor.', description: 'Da vontade de pedir um lámen à organização do salão. Um ecossistema digital que aproxima o restaurante de seus clientes e simplifica a rotina da equipe.', url: 'https://kiorarestaurante.onrender.com', linkLabel: 'Visitar o site Kiora', logo: 'images/logo-kiora.png',
    platforms: [
      { name: 'Web delivery', title: 'O restaurante, onde você estiver.', text: 'Uma experiência web para explorar o cardápio e criar pedidos de delivery.', features: ['Cardápio digital', 'Criação de pedidos', 'Experiência do cliente'], image: '' },
      { name: 'Aplicativo', title: 'O salão na palma da mão.', text: 'Aplicativo voltado a reservas, criação de pedidos e gerenciamento de mesas pelos funcionários.', features: ['Reservas', 'Pedidos', 'Gestão de mesas'], image: '' },
    ]
  },
  { id: 'techstart', number: '02', name: 'TechStart', category: 'EVENTOS & CONEXÕES', headline: 'Grandes encontros começam com uma ideia.', description: 'Uma proposta de startup que conecta presença digital e organização de eventos. Da apresentação da ideia ao gerenciamento no desktop.', url: 'https://ghostriley115.github.io/techstart-landing-page/', linkLabel: 'Visitar a TechStart', logo: '',
    platforms: [
      { name: 'Landing page', title: 'Uma ideia que merece ser vista.', text: 'Página de apresentação da startup, sua proposta e a solução para eventos.', features: ['Apresentação da startup', 'Proposta da solução', 'Presença digital'], image: '' },
      { name: 'Sistema desktop', title: 'Cada evento no seu lugar.', text: 'Sistema de gerenciamento para cadastrar, consultar, atualizar e excluir eventos.', features: ['Cadastro de eventos', 'Consulta e edição', 'Exclusão de registros'], image: '' },
    ]
  }
];
export const gallery = [
  { src: 'images/galeria/jujubas-cartao.jpg', title: 'Uma marca com raízes brasileiras', category: 'Jujuba’s Dev', alt: 'Cartão da Jujuba’s Dev com ararajuba e cores verde e amarelo' },
  { src: 'images/galeria/kiora-cartao.jpg', title: 'Tradição encontra o digital', category: 'Kiora', alt: 'Identidade Kiora com ensō dourado e sakura sobre fundo preto' },
  { src: 'images/galeria/kiora-identidade.jpg', title: 'Identidade em cada detalhe', category: 'Kiora', alt: 'Logo vertical Kiora com círculo dourado e flores vermelhas' },
];
export const values = ['Criatividade', 'Inovação', 'Acessibilidade', 'Proximidade', 'Qualidade', 'Aprendizado', 'Brasilidade', 'Ética'];
