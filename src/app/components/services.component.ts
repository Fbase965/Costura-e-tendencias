import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

interface AtelierServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicos" class="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest mb-3 shadow-2xs">
            <span>Especialidades do Atelier</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Os Nossos Serviços &amp; Confecção
          </h2>
          <p class="text-base text-slate-600 mt-2">
            Trabalhos reais de confecção e instalação em casas de clientes. Da medição no seu espaço ao acabamento final.
          </p>
        </div>

        <!-- Services Grid (2x2 Balanced Layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          @for (service of services; track service.id) {
            <div class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              
              <div>
                <!-- Real Service Image (Vibrant & Enhanced) -->
                <div class="h-64 overflow-hidden bg-slate-100 relative">
                  <img [src]="service.image" [alt]="service.title" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-md shadow-2xs border border-slate-100">
                    {{ service.badge }}
                  </span>
                </div>

                <!-- Service Content -->
                <div class="p-6 sm:p-7 space-y-3">
                  <h3 class="font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug">
                    {{ service.title }}
                  </h3>
                  
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {{ service.description }}
                  </p>

                  <ul class="pt-3 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                    @for (feat of service.features; track feat) {
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-600 font-bold text-sm">✓</span>
                        <span>{{ feat }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>

              <!-- Service Footer Action -->
              <div class="p-6 sm:p-7 pt-0">
                <a 
                  [href]="getServiceWhatsAppUrl(service.title)" 
                  target="_blank" 
                  rel="noopener"
                  class="w-full bg-slate-950 hover:bg-slate-800 text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 text-center shadow-2xs cursor-pointer"
                >
                  <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>
              </div>

            </div>
          }
        </div>

        <!-- Direct Contact Banner -->
        <div class="mt-14 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="text-2xl font-extrabold">Quer agendar uma visita de medição em sua casa?</h3>
            <p class="text-xs sm:text-sm text-slate-300 max-w-xl">
              Fale connosco pelo WhatsApp. Deslocamo-nos ao seu domicílio com as amostras de tecidos para apresentar a proposta ideal.
            </p>
          </div>

          <a 
            [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
            target="_blank" 
            rel="noopener"
            class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Falar com o Atelier (+351 919 943 031)</span>
          </a>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  catalogService = inject(CatalogService);

  services: AtelierServiceItem[] = [
    {
      id: 'cortinados-onda',
      title: 'Cortinados por Medida & Instalação',
      badge: 'Montagem no Domicílio',
      description: 'Confeção personalizada de cortinados de onda perfeita em linho translúcido, gaze nobre ou blackout. Deslocamo-nos a sua casa para tirar medidas e fazemos a montagem completa de calhas, varões e cortinados.',
      features: [
        'Tecidos exclusivos de linho, gaze e blackout 100%',
        'Medição milimétrica no local com catálogo de amostras',
        'Montagem de calhas e colocação de cortinados chave-na-mão'
      ],
      image: 'assets/service-cortinados.jpg'
    },
    {
      id: 'estores-rolo',
      title: 'Estores de Rolo & Blackout Técnico',
      badge: 'Proteção Solar & Luz',
      description: 'Instalação de estores de rolo à medida para quartos, salas e escritórios. Telas térmicas, translúcidas ou blackout total para controlo de luminosidade e privacidade.',
      features: [
        'Mecanismos de precisão manuais ou motorizados',
        'Telas fáceis de limpar e resistentes aos raios solares',
        'Instalação e fixação técnica na sua janela'
      ],
      image: 'assets/service-estores.jpg'
    },
    {
      id: 'roupa-cama',
      title: 'Roupa de Cama & Edredões 100% Algodão',
      badge: '100% Algodão Português',
      description: 'Jogos de cama completos em algodão português de qualidade superior com padrões modernos e clássicos. Disponíveis em várias cores para solteiro, casal, queen e king size.',
      features: [
        'Lençóis macios, respiráveis e de alta durabilidade',
        'Disponíveis em Rosa, Cinza, Bege, Azul e tons neutros',
        'Confeção e medidas standard ou personalizadas'
      ],
      image: 'assets/service-cama.jpg'
    },
    {
      id: 'mesa-cozinha',
      title: 'Mesa & Cozinha Confeccionada por Medida',
      badge: 'Confeção Artesanal',
      description: 'Toalhas de mesa confeccionadas no comprimento e formato exato da sua mesa de jantar (retangular, redonda ou oval), com padrões elegantes, barras e acabamentos reforçados.',
      features: [
        'Confeção personalizada para mesas de 4 a 14 lugares',
        'Padrões requintados para o dia a dia e ocasiões festivas',
        'Acabamento de alfaiataria têxtil e caimento impecável'
      ],
      image: 'assets/service-mesa.jpg'
    }
  ];

  getServiceWhatsAppUrl(serviceTitle: string): string {
    const text = `Olá Costura & Tendências! Gostaria de pedir um orçamento e informações sobre o vosso serviço de *${serviceTitle}*.`;
    return `https://wa.me/${this.catalogService.PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
  }
}
