import { Injectable, signal, computed } from '@angular/core';
import { Product, CartItem, Testimonial } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  readonly PHONE_NUMBER = '+351 919 943 031';
  readonly PHONE_CLEAN = '351919943031';
  readonly FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100067887818173';
  readonly LOCATION = 'Argivai, Póvoa de Varzim, Portugal';

  // Signals for state management
  private cartItemsSignal = signal<CartItem[]>([]);
  private isCartOpenSignal = signal<boolean>(false);
  private selectedProductSignal = signal<Product | null>(null);
  private activeCategorySignal = signal<string>('todos');
  private searchQuerySignal = signal<string>('');

  // Public readonly signals
  readonly cartItems = this.cartItemsSignal.asReadonly();
  readonly isCartOpen = this.isCartOpenSignal.asReadonly();
  readonly selectedProduct = this.selectedProductSignal.asReadonly();
  readonly activeCategory = this.activeCategorySignal.asReadonly();
  readonly searchQuery = this.searchQuerySignal.asReadonly();

  // Computed values
  readonly cartCount = computed(() => {
    return this.cartItemsSignal().reduce((acc, item) => acc + item.quantity, 0);
  });

  readonly products: Product[] = [
    // --- QUARTO ---
    {
      id: 'jogo-lencois-percal-ajour',
      name: 'Jogo de Lençóis Percal 200 Fios c/ Ponto Ajour',
      category: 'quarto',
      categoryLabel: 'Quarto & Cama',
      priceDisplay: 'Desde 34,90 €',
      priceNum: 34.90,
      badge: '100% Algodão Penteado',
      shortDescription: 'Confeção tradicional com acabamento delicado em Ponto Ajour na vira do lençol e nas fronhas.',
      fullDescription: 'Jogo de lençóis confeccionado no nosso atelier em tecido Percal 200 fios de algodão puro. Proporciona uma sensação de frescura incomparável, respirabilidade natural e durabilidade comprovada. O acabamento em ponto Ajour confere um toque clássico e elegante a qualquer quarto.',
      images: [
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Algodão Penteado Percal 200 Fios (Origem Portugal)',
      careInstructions: [
        'Lavar à máquina a máx. 40°C',
        'Não usar lixívia',
        'Passar a ferro até 150°C',
        'Secar em tambor a temperatura moderada'
      ],
      features: [
        'Inclui lençol de cima com vira trabalhada, lençol ajustável com elástico e 2 fronhas',
        'Elástico a toda a volta para ajuste perfeito em colchões até 30cm de altura',
        'Toque sedoso que fica mais macio a cada lavagem',
        'Disponível em medidas standard ou personalizado para o seu colchão'
      ],
      sizes: [
        { name: 'Solteiro', dimensions: 'Colchão 90x200 cm', priceEstimate: '34,90 €' },
        { name: 'Casal Standard', dimensions: 'Colchão 140x200 cm', priceEstimate: '44,90 €' },
        { name: 'Queen Size', dimensions: 'Colchão 160x200 cm', priceEstimate: '49,90 €' },
        { name: 'King Size', dimensions: 'Colchão 180x200 cm', priceEstimate: '54,90 €' },
        { name: 'Medida Especial / Sob Medida', dimensions: 'Sob medida indicada por si', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Branco Clássico', hex: '#FFFFFF' },
        { name: 'Bege Linho', hex: '#E6D7C3' },
        { name: 'Cinza Prata', hex: '#D1D5DB' },
        { name: 'Azul Céu', hex: '#BAE6FD' }
      ],
      customizable: true,
      featured: true
    },
    {
      id: 'capa-edredao-linho-puro',
      name: 'Capa de Edredão em Linho Lavado Natural',
      category: 'quarto',
      categoryLabel: 'Quarto & Cama',
      priceDisplay: 'Desde 59,90 €',
      priceNum: 59.90,
      badge: 'Linho Europeu',
      shortDescription: 'Elegância intemporal, textura descontraída e regulação térmica ideal tanto no verão como no inverno.',
      fullDescription: 'Capa de edredão em puro linho lavado com fecho de botões ocultos de madeira ou madrepérola. O linho é um dos tecidos mais nobres e ecológicos do mundo, garantindo noites de sono serenas e uma decoração sofisticada e acolhedora.',
      images: [
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Linho Natural Lavado (210 g/m²)',
      careInstructions: [
        'Lavar a 30°C ou 40°C em ciclo suave',
        'Secar ao ar livre para manter a textura amarrotada natural',
        'Não necessita passar a ferro'
      ],
      features: [
        'Fecho prático com botões no fundo',
        'Laços internos nos 4 cantos para fixar o enchimento do edredão',
        'Propriedades antibacterianas e hipoalergénicas'
      ],
      sizes: [
        { name: 'Solteiro (160x220 cm)', dimensions: 'Para cama de 90/100', priceEstimate: '59,90 €' },
        { name: 'Casal (240x220 cm)', dimensions: 'Para cama de 140/160', priceEstimate: '79,90 €' },
        { name: 'King (260x240 cm)', dimensions: 'Para cama de 180/200', priceEstimate: '89,90 €' },
        { name: 'Sob Medida', dimensions: 'Personalizado', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Linho Natural Areia', hex: '#D6C7B2' },
        { name: 'Branco Giz', hex: '#F9FAFB' },
        { name: 'Verde Sálvia', hex: '#87A997' },
        { name: 'Terracota Rústica', hex: '#B4624D' }
      ],
      customizable: true,
      featured: true
    },
    {
      id: 'colcha-bouti-texturada',
      name: 'Colcha Bouti Reversível com Almofadas',
      category: 'quarto',
      categoryLabel: 'Quarto & Cama',
      priceDisplay: 'Desde 39,90 €',
      priceNum: 39.90,
      badge: 'Bestseller Atelier',
      shortDescription: 'Colcha de meia-estação com relevo geométrico requintado, toque suave e acabamento com cantos arredondados.',
      fullDescription: 'Colcha bouti acolchoada leve de confecção nacional, perfeita para arrumar a cama com perfeição. O padrão em relevo acrescenta profundidade visual ao quarto. Acompanha 2 capas de almofada a condizer.',
      images: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1592789705501-f9be4294726e?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: 'Exterior 100% Microfibra Aveludada Soft-Touch / Enchimento 100% Algodão 120g/m²',
      careInstructions: ['Lavar na máquina a 30°C', 'Secagem rápida'],
      features: [
        'Inclui 2 capas de almofada 50x70 cm a condizer',
        'Caimento elegante e sem rugas',
        'Cantos arredondados para não arrastar no chão'
      ],
      sizes: [
        { name: 'Casal (240x260 cm)', dimensions: 'Cama 140/150 cm', priceEstimate: '39,90 €' },
        { name: 'King (260x260 cm)', dimensions: 'Cama 160/180 cm', priceEstimate: '46,90 €' },
        { name: 'Super King (280x260 cm)', dimensions: 'Cama 200 cm', priceEstimate: '52,90 €' }
      ],
      colors: [
        { name: 'Pérola / Bege Suave', hex: '#F3EFEA' },
        { name: 'Cinza Antracite', hex: '#64748B' },
        { name: 'Azul Petróleo', hex: '#0E7490' }
      ],
      customizable: false,
      featured: false
    },

    // --- CORTINADOS ---
    {
      id: 'cortinado-onda-perfeita-linho',
      name: 'Cortinado Onda Perfeita em Linho Translúcido',
      category: 'cortinados',
      categoryLabel: 'Cortinados por Medida',
      priceDisplay: 'Sob Medida & Instalação',
      badge: 'Instalação ao Domicílio',
      shortDescription: 'Onda moderna impecável do teto ao chão. Filtra a luz natural conferindo privacidade e amplitude ao espaço.',
      fullDescription: 'Especialidade de assinatura da Costura & Tendências em Argivai. Os nossos cortinados de onda perfeita são confeccionados milimetricamente à medida da sua janela e calha. Oferecemos o serviço de deslocação a sua casa para medição, montagem de calhas e instalação dos cortinados.',
      images: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1502005229762-ee1b2b93e083?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: 'Mistura de Linho Europeu e Poliéster Nobre (não amarrota e mantém a forma da onda)',
      careInstructions: [
        'Lavar a 30°C em saco protetor',
        'Pendurar húmido diretamente na calha para secar sem necessidade de engomar'
      ],
      features: [
        'Fita de onda perfeita com deslizadores articulados incluídos',
        'Bainhas laterais duplas de 3 cm e bainha inferior com chumbo integrado para caimento perfeito',
        'Serviço opcional de montagem e instalação na sua casa'
      ],
      sizes: [
        { name: 'Janela Standard (Largura até 2,00m)', dimensions: 'Altura sob medida', priceEstimate: 'Sob Orçamento' },
        { name: 'Porta-Janela / Sala Ampla (Largura 2,50m - 4,00m)', dimensions: 'Altura sob medida', priceEstimate: 'Sob Orçamento' },
        { name: 'Grande Formato / Pé Direito Duplo', dimensions: 'Sob medida personalizada', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Branco Puro Translúcido', hex: '#FFFFFF' },
        { name: 'Linho Cru Natural', hex: '#E3DAC9' },
        { name: 'Areia Suave', hex: '#DDD2C3' },
        { name: 'Cinza Bruma', hex: '#D6D3D1' }
      ],
      customizable: true,
      featured: true
    },
    {
      id: 'cortinado-blackout-acustico',
      name: 'Cortinado Blackout Térmico & Acústico 100% Opaco',
      category: 'cortinados',
      categoryLabel: 'Cortinados por Medida',
      priceDisplay: 'Sob Medida & Instalação',
      badge: 'Bloqueio Total 100%',
      shortDescription: 'Bloqueia 100% da luminosidade exterior e reduz o calor no verão e o frio no inverno.',
      fullDescription: 'Confeção sob medida com tecido blackout tripla camada de alta tecnologia. Ideal para quartos sem estores ou para salas de estar. Fazemos a instalação completa das calhas e cortinados no seu domicílio.',
      images: [
        'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Poliéster Tripla Camada com Revestimento Acrílico Térmico',
      careInstructions: ['Limpar com pano húmido ou lavagem a seco'],
      features: [
        '100% Escuridão garantida mesmo em pleno dia',
        'Redução acústica de ruídos da rua',
        'Montagem de calhas e suporte no domicílio pelo nosso atelier'
      ],
      sizes: [
        { name: '1 Painel Sob Medida', dimensions: 'Medida exacta fornecida', priceEstimate: 'Sob Orçamento' },
        { name: 'Par de Painéis Sob Medida', dimensions: 'Medida exacta fornecida', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Cinza Antracite', hex: '#334155' },
        { name: 'Bege Champagne', hex: '#EFE7DA' },
        { name: 'Azul Petróleo Escuro', hex: '#0F172A' },
        { name: 'Branco Ótico Blackout', hex: '#F8FAFC' }
      ],
      customizable: true,
      featured: true
    },

    // --- SALA & DECORAÇÃO ---
    {
      id: 'capa-sofa-sob-medida',
      name: 'Capa de Sofá & Chaise Longue Sob Medida',
      category: 'sala',
      categoryLabel: 'Sala & Sofás',
      priceDisplay: 'Desde 65,00 €',
      badge: 'Proteção & Ajuste no Local',
      shortDescription: 'Confeção personalizada para sofás de 2, 3 lugares, Chaise Longue ou poltronas. Tecido lavável e resistente a animais.',
      fullDescription: 'Dê uma nova vida ao seu sofá sem ter de comprar um novo! Confeccionamos capas à medida exata da estrutura do seu sofá com tecidos de alta resistência, anti-garras e com tratamento impermeabilizante. Fazemos a colocação e ajuste direto no seu domicílio.',
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: 'Malha Bielástica Encorpada ou Sarja de Algodão c/ Tratamento Hidrorrepelente',
      careInstructions: ['Lavar à máquina a 30°C', 'Fácil de colocar e retirar com fechos e elásticos reforçados'],
      features: [
        'Molde sob as medidas do seu sofá (vamos ao local ou envie-nos foto com medidas)',
        'Espumas de fixação para não sair do lugar ao sentar',
        'Resistente a nódoas de café, vinho e líquidos'
      ],
      sizes: [
        { name: 'Poltrona / Cadeirão 1 Lugar', dimensions: 'Largura 80-110 cm', priceEstimate: '45,00 €' },
        { name: 'Sofá 2 Lugares', dimensions: 'Largura 140-180 cm', priceEstimate: '65,00 €' },
        { name: 'Sofá 3 Lugares', dimensions: 'Largura 185-230 cm', priceEstimate: '75,00 €' },
        { name: 'Sofá c/ Chaise Longue (Esq/Dir)', dimensions: 'Sob medida e modelo', priceEstimate: 'Desde 95,00 €' }
      ],
      colors: [
        { name: 'Cinza Rato', hex: '#4B5563' },
        { name: 'Bege Cru', hex: '#E5DFD3' },
        { name: 'Castanho Chocolate', hex: '#3E2723' },
        { name: 'Verde Seco', hex: '#4A5D4E' }
      ],
      customizable: true,
      featured: true
    },
    {
      id: 'almofadas-veludo-artesanal',
      name: 'Conjunto de Almofadas Decorativas em Veludo Cotelê',
      category: 'sala',
      categoryLabel: 'Sala & Decoração',
      priceDisplay: 'Desde 14,90 €',
      priceNum: 14.90,
      badge: 'Confeção Própria',
      shortDescription: 'Capa de almofada com fecho invisível e acabamento vivo contrastante. Toque incrivelmente macio.',
      fullDescription: 'Almofadas confecionadas uma a uma com materiais de primeira qualidade no atelier em Argivai. Disponíveis como capa simples ou com enchimento viscoelástico / fibra oca siliconada hipoalergénica.',
      images: [
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Veludo de Algodão / Poliéster Premium',
      careInstructions: ['Lavar a 30°C do avesso com fecho fechado'],
      features: [
        'Fecho zipper invisível reforçado',
        'Costuras internas com remalhadora para evitar desfiar',
        'Opção com ou sem enchimento fofo de alta densidade'
      ],
      sizes: [
        { name: 'Quadrada 45x45 cm', dimensions: '45x45 cm', priceEstimate: '14,90 €' },
        { name: 'Quadrada 50x50 cm', dimensions: '50x50 cm', priceEstimate: '16,90 €' },
        { name: 'Retangular Lombar 30x50 cm', dimensions: '30x50 cm', priceEstimate: '13,90 €' },
        { name: 'Almofadão de Chão 60x60 cm', dimensions: '60x60 cm', priceEstimate: '22,90 €' }
      ],
      colors: [
        { name: 'Mostarda Quente', hex: '#CA8A04' },
        { name: 'Terracota', hex: '#9A3412' },
        { name: 'Verde Eucalipto', hex: '#3F6212' },
        { name: 'Azul Petróleo', hex: '#155E75' }
      ],
      customizable: true,
      featured: false
    },

    // --- BANHO ---
    {
      id: 'jogo-toalhas-hotel-600g',
      name: 'Jogo de Toalhas Banho 600g/m² 100% Algodão',
      category: 'banho',
      categoryLabel: 'Casa de Banho',
      priceDisplay: 'Desde 24,90 €',
      priceNum: 24.90,
      badge: '600g/m² Ultra Absorvente',
      shortDescription: 'Felpo denso e macio de hotel 5 estrelas. Máxima absorção de água desde a primeira utilização.',
      fullDescription: 'Fabricadas no norte de Portugal com o melhor fio de algodão penteado. Cada toalha passa por acabamento pré-lavado para garantir que não encolhe e que tem capacidade máxima de absorção imediata.',
      images: [
        'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Algodão Puro Hidrófilo 600 g/m²',
      careInstructions: ['Lavar a 40°C', 'Não usar amaciador em excesso para preservar o poder de absorção'],
      features: [
        'Kit completo: 1 Toalha de Banho Grande (100x150cm) + 1 Toalha de Rosto (50x100cm) + 1 Toalhete de Bidé (30x50cm)',
        'Barra decorativa em relevo discreto',
        'Costura dupla nos remates para não descosturar'
      ],
      sizes: [
        { name: 'Jogo 3 Peças (Banho + Rosto + Bidé)', dimensions: 'Kit Standard', priceEstimate: '24,90 €' },
        { name: 'Jogo 5 Peças (2 Banhão + 2 Rosto + 1 Bidé)', dimensions: 'Kit Família', priceEstimate: '44,90 €' },
        { name: 'Toalha de Banho Individual 100x150 cm', dimensions: '100x150 cm', priceEstimate: '16,50 €' }
      ],
      colors: [
        { name: 'Branco Hotel', hex: '#FFFFFF' },
        { name: 'Cinza Prata', hex: '#9CA3AF' },
        { name: 'Verde Água', hex: '#A7F3D0' },
        { name: 'Rosa Velho', hex: '#FDA4AF' }
      ],
      customizable: true,
      featured: true
    },

    // --- COZINHA & MESA ---
    {
      id: 'toalha-mesa-antimanchas-teflon',
      name: 'Toalha de Mesa Antimanchas & Impermeável',
      category: 'cozinha',
      categoryLabel: 'Mesa & Cozinha',
      priceDisplay: 'Desde 18,90 €',
      priceNum: 18.90,
      badge: 'Tecnologia Teflon',
      shortDescription: 'Líquidos e molhos não penetram no tecido: basta passar um pano ou guardanapo para limpar!',
      fullDescription: 'Toalha de mesa de confecção própria com tecido resinado suave ao toque (não parece plástico). O tratamento impermeabilizante repele vinho, café, molho de tomate e gorduras, tornando-a perfeita para refeições em família sem preocupações.',
      images: [
        'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '65% Algodão / 35% Poliéster com Dupla Camada Acrílica Teflon',
      careInstructions: ['Limpeza diária com pano húmido', 'Lavar na máquina a 30°C quando necessário sem centrifugação forte'],
      features: [
        'Confeccionamos em qualquer comprimento para mesas de 4, 6, 8, 10 ou 12 lugares',
        'Opções para mesas retangulares, ovais e redondas',
        'Bainha clássica de 2 cm cosida com precisão'
      ],
      sizes: [
        { name: 'Mesa 4-6 Lugares (140x200 cm)', dimensions: '140x200 cm', priceEstimate: '18,90 €' },
        { name: 'Mesa 6-8 Lugares (140x250 cm)', dimensions: '140x250 cm', priceEstimate: '22,90 €' },
        { name: 'Mesa 8-10 Lugares (140x300 cm)', dimensions: '140x300 cm', priceEstimate: '26,90 €' },
        { name: 'Mesa Redonda / Sob Medida', dimensions: 'Indique o diâmetro/tamanho', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Linho Bege Rústico', hex: '#D7C4B7' },
        { name: 'Xadrez Bistro Cinza', hex: '#64748B' },
        { name: 'Floral Provençal Suave', hex: '#E2E8F0' },
        { name: 'Verde Botânico', hex: '#4D7C0F' }
      ],
      customizable: true,
      featured: true
    },

    // --- BEBÉ & CRIANÇA ---
    {
      id: 'enxoval-berco-personalizado',
      name: 'Enxoval de Berço Bordado Personalizado',
      category: 'infantil',
      categoryLabel: 'Bebé & Criança',
      priceDisplay: 'Sob Medida / Encomenda',
      badge: '100% Algodão Hipoalergénico',
      shortDescription: 'Jogos de lençol de berço, resguardos acolchoados e protetores laterais com opção de bordado do nome.',
      fullDescription: 'Confeção carinhosa e cuidada para os mais pequenos. Utilizamos apenas tecidos 100% algodão biológico com certificação OEKO-TEX, garantindo que nenhum produto nocivo toca na pele sensível do bebé.',
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1592789705501-f9be4294726e?auto=format&fit=crop&w=1000&q=80'
      ],
      composition: '100% Algodão Orgânico Certificado OEKO-TEX Standard 100',
      careInstructions: ['Lavar a 30°C com detergente suave para bebé'],
      features: [
        'Lençol ajustável para colchões de berço 60x120 cm ou 70x140 cm',
        'Opção de personalização com o nome do bebé bordado à mão ou máquina',
        'Tecido respirável e antissufocamento'
      ],
      sizes: [
        { name: 'Berço Next2Me / Moisés (50x83 cm)', dimensions: '50x83 cm', priceEstimate: 'Sob Orçamento' },
        { name: 'Berço Standard (60x120 cm)', dimensions: '60x120 cm', priceEstimate: 'Sob Orçamento' },
        { name: 'Cama de Grades Evolutiva (70x140 cm)', dimensions: '70x140 cm', priceEstimate: 'Sob Orçamento' }
      ],
      colors: [
        { name: 'Branco Puro Bebé', hex: '#FFFFFF' },
        { name: 'Rosa Bebé Suave', hex: '#FCE7F3' },
        { name: 'Azul Bebé Pastel', hex: '#E0F2FE' },
        { name: 'Verde Água Menta', hex: '#DCFCE7' }
      ],
      customizable: true,
      featured: false
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Liliana Oliveira',
      location: 'Póvoa de Varzim',
      rating: 5,
      date: 'Publicação no Facebook',
      comment: 'Foi um prazer enorme receber este trabalho tão especial no nosso espaço e ver tudo pensado ao pormenor para proporcionar ainda mais conforto e elegância. ❤️',
      service: 'Cortinados de Onda Perfeita em Calha',
      avatar: 'assets/avatar-liliana-oliveira.jpg',
      verified: true
    },
    {
      id: 't2',
      name: 'Liliana Pinheiro',
      location: 'Póvoa de Varzim',
      rating: 5,
      date: 'Publicação no Facebook',
      comment: 'Mãos de fada 🥰 mais uma vez um excelente trabalho, muito obrigada! 🫶🥰',
      service: 'Confeção & Instalação de Cortinados',
      avatar: 'assets/avatar-liliana-pinheiro.jpg',
      verified: true
    },
    {
      id: 't3',
      name: 'Bruna Martins',
      location: 'Argivai',
      rating: 5,
      date: 'Publicação no Facebook',
      comment: 'Trabalho excecional, qualidade top! ❤️ Super recomendo o atelier.',
      service: 'Têxteis-Lar & Confeção por Medida',
      avatar: 'assets/avatar-bruna-martins.jpg',
      verified: true
    },
    {
      id: 't4',
      name: 'Mary Lima',
      location: 'Póvoa de Varzim',
      rating: 5,
      date: 'Publicação no Facebook',
      comment: 'Super profissionais e simpáticos. Muito obrigada pelo profissionalismo, ficou tudo impecável! ❤️',
      service: 'Medição & Instalação no Lar',
      avatar: 'assets/avatar-mary-lima.jpg',
      verified: true
    }
  ];

  readonly faqs = [
    {
      question: 'Como funciona o serviço de Medição & Instalação em casa?',
      answer: 'Para sua total comodidade, deslocamo-nos ao seu domicílio para tirar as medidas exatas, levar as amostras de tecidos da nossa coleção e, após a confeção no atelier, realizamos a montagem completa de calhas técnicas e cortinados de onda perfeita (serviço de montagem/deslocação orçamentado sob consulta de acordo com a localidade).'
    },
    {
      question: 'Que tipo de suporte instalam para os cortinados? Fazem instalação em varão?',
      answer: 'No nosso atelier instalamos exclusivamente sistemas em calha técnica (de teto, parede ou calha embutida). Não trabalhamos com instalação de varões, uma vez que as calhas técnicas são o único sistema que garante o efeito de onda perfeita contínua, o deslizamento suave e o caimento sofisticado que distinguem o nosso trabalho.'
    },
    {
      question: 'Posso levar o meu próprio tecido para a confeção dos cortinados?',
      answer: 'Não. Na Costura & Tendências não trabalhamos com tecidos trazidos de fora. Todos os tecidos são fornecidos exclusivamente pelo nosso atelier e pelos nossos parceiros têxteis de alta qualidade. Esta exigência garante o caimento perfeito, a durabilidade do tecido e o resultado impecável na montagem final.'
    },
    {
      question: 'Fazem envios por correio ou transportadora?',
      answer: 'Não fazemos envios por correio. O nosso serviço foca-se na máxima qualidade e proximidade: instalamos diretamente na sua residência ou o cliente pode efetuar o levantamento gratuito das suas encomendas diretamente no nosso atelier em Argivai, Póvoa de Varzim.'
    },
    {
      question: 'Como posso pedir um orçamento para a minha casa?',
      answer: 'É muito simples! Pode contactar-nos diretamente pelo WhatsApp (+351 919 943 031) ou por chamada telefónica. Basta indicar a sua localidade e o tipo de trabalho pretendido (cortinados em calha, estores, roupa de cama, toalhas de mesa) e agendamos a visita ou apresentamos a proposta.'
    },
    {
      question: 'Quais são as formas de pagamento disponíveis?',
      answer: 'Aceitamos MB WAY, Transferência Bancária e Pagamento em Numerário / Cartão no nosso atelier ou no momento da instalação.'
    }
  ];

  // Actions
  setCategory(cat: string) {
    this.activeCategorySignal.set(cat);
  }

  setSearchQuery(query: string) {
    this.searchQuerySignal.set(query);
  }

  openProductModal(product: Product) {
    this.selectedProductSignal.set(product);
  }

  closeProductModal() {
    this.selectedProductSignal.set(null);
  }

  openCart() {
    this.isCartOpenSignal.set(true);
  }

  closeCart() {
    this.isCartOpenSignal.set(false);
  }

  toggleCart() {
    this.isCartOpenSignal.update(open => !open);
  }

  addToCart(product: Product, size: string, color: string, quantity = 1, notes = '') {
    const existingIndex = this.cartItemsSignal().findIndex(
      item => item.productId === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingIndex > -1) {
      this.cartItemsSignal.update(items => {
        const updated = [...items];
        updated[existingIndex].quantity += quantity;
        if (notes) updated[existingIndex].customNotes = notes;
        return updated;
      });
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${size}-${color}-${Date.now()}`,
        productId: product.id,
        productName: product.name,
        categoryLabel: product.categoryLabel,
        image: product.images[0],
        selectedSize: size,
        selectedColor: color,
        quantity,
        customNotes: notes,
        priceDisplay: product.priceDisplay
      };
      this.cartItemsSignal.update(items => [...items, newItem]);
    }
    this.isCartOpenSignal.set(true);
  }

  updateQuantity(itemId: string, change: number) {
    this.cartItemsSignal.update(items => {
      return items
        .map(item => {
          if (item.id === itemId) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  }

  removeFromCart(itemId: string) {
    this.cartItemsSignal.update(items => items.filter(item => item.id !== itemId));
  }

  clearCart() {
    this.cartItemsSignal.set([]);
  }

  // Generate WhatsApp links
  getWhatsAppProductUrl(product: Product, selectedSize?: string, selectedColor?: string, customNote?: string): string {
    let msg = `Olá Costura & Tendências! Gostaria de pedir informações/orçamento sobre o artigo:\n\n📌 *${product.name}* (${product.priceDisplay})`;
    if (selectedSize) msg += `\n📏 Medida/Tamanho: ${selectedSize}`;
    if (selectedColor) msg += `\n🎨 Cor/Tecido: ${selectedColor}`;
    if (customNote) msg += `\n📝 Notas/Medidas: ${customNote}`;
    msg += `\n\nPoderiam dar-me informações sobre disponibilidade e agendamento de medição/instalação? Obrigado!`;

    return `https://wa.me/${this.PHONE_CLEAN}?text=${encodeURIComponent(msg)}`;
  }

  getWhatsAppCartUrl(customerName?: string, customerLocation?: string): string {
    const items = this.cartItemsSignal();
    if (items.length === 0) return `https://wa.me/${this.PHONE_CLEAN}`;

    let msg = `Olá Costura & Tendências! Gostaria de pedir um orçamento para a seguinte lista de artigos:\n\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.productName}*\n`;
      msg += `   - Quantidade: ${item.quantity}\n`;
      msg += `   - Tamanho/Medida: ${item.selectedSize}\n`;
      msg += `   - Cor/Tecido: ${item.selectedColor}\n`;
      if (item.customNotes) {
        msg += `   - Notas: ${item.customNotes}\n`;
      }
      msg += `\n`;
    });

    if (customerName) msg += `👤 Nome: ${customerName}\n`;
    if (customerLocation) msg += `📍 Localidade para Instalação / Levantamento: ${customerLocation}\n`;
    msg += `\nPodem confirmar-me o orçamento incluindo a montagem/instalação ao domicílio? Muito obrigado!`;

    return `https://wa.me/${this.PHONE_CLEAN}?text=${encodeURIComponent(msg)}`;
  }
}
