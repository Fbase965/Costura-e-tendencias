import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicos" class="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1 rounded-full text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-3 shadow-2xs">
            <span>Especialidades do Atelier</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Os Nossos Serviços &amp; Confeção
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto">
            Trabalhos reais de confeção e instalação em casas de clientes. Acompanhamos tudo desde a medição no seu espaço até à montagem final.
          </p>
        </div>

        <!-- Services Grid (2x2 Balanced Layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <!-- 1. Cortinados de Onda Perfeita em Calha -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div class="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img src="assets/service-cortinados.jpg" alt="Cortinados de Onda Perfeita em Calha" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                
                <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  <span class="bg-slate-950 text-white text-[11px] font-extrabold px-3 py-1 rounded-md shadow-md">
                    Instalação Exclusiva em Calha
                  </span>
                  <span class="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded shadow-2xs">
                    Não Instalamos Varões
                  </span>
                </div>
              </div>

              <div class="p-6 sm:p-7 space-y-3.5">
                <h3 class="font-extrabold text-xl sm:text-2xl text-slate-950 leading-snug">
                  Cortinados de Onda Perfeita em Calha
                </h3>
                
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Confeção personalizada de cortinados de onda contínua em linho translúcido, gaze nobre ou blackout. Deslocamo-nos a sua casa para tirar medidas e realizamos a <strong>instalação de calhas técnicas</strong> (de teto ou parede) para um caimento reto e impecável.
                </p>

                <!-- Clarification Note -->
                <div class="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-[11px] sm:text-xs text-amber-900 font-medium flex items-start gap-2">
                  <span class="text-amber-700 font-bold shrink-0">⚠️</span>
                  <span><strong>Aviso:</strong> Apenas instalamos sistemas em <strong>calha técnica</strong> (não instalamos varões), garantindo o deslize suave e a elegância da onda perfeita.</span>
                </div>

                <ul class="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Tecidos de linho, gaze translúcida e blackout total</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Medição milimétrica no local com catálogo de amostras</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Fixação e montagem de calhas de teto/parede no domicílio</span></li>
                </ul>
              </div>
            </div>

            <div class="p-6 sm:p-7 pt-0">
              <a 
                [href]="getServiceWhatsAppUrl('Cortinados de Onda Perfeita em Calha')" 
                target="_blank" 
                rel="noopener" 
                class="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center shadow-md active:scale-98 cursor-pointer"
              >
                <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- 2. Estores de Rolo -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div class="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img src="assets/service-estores.jpg" alt="Estores de Rolo & Blackout Técnico" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-md shadow-2xs border border-slate-100">
                  Proteção Solar &amp; Luz
                </span>
              </div>

              <div class="p-6 sm:p-7 space-y-3.5">
                <h3 class="font-extrabold text-xl sm:text-2xl text-slate-950 leading-snug">
                  Estores de Rolo &amp; Blackout Técnico
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instalação de estores de rolo à medida para quartos, salas e escritórios. Telas térmicas, translúcidas ou blackout total para controlo de luminosidade e privacidade.
                </p>
                <ul class="pt-3 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Mecanismos de precisão manuais de corrente ou motorizados</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Telas resistentes aos raios solares e fáceis de limpar</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Instalação e fixação técnica segura na janela</span></li>
                </ul>
              </div>
            </div>

            <div class="p-6 sm:p-7 pt-0">
              <a 
                [href]="getServiceWhatsAppUrl('Estores de Rolo & Blackout Técnico')" 
                target="_blank" 
                rel="noopener" 
                class="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center shadow-md active:scale-98 cursor-pointer"
              >
                <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- 3. Roupa de Cama -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div class="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img 
                  [src]="selectedBedColor().img" 
                  [alt]="'Roupa de Cama 100% Algodão - ' + selectedBedColor().name" 
                  class="w-full h-full object-cover object-center transition-all duration-500" 
                />
                
                <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-md shadow-2xs border border-slate-100">
                  100% Algodão Português
                </span>

                <!-- Color selector pills overlay -->
                <div class="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between">
                  <span class="text-xs font-extrabold text-slate-900">
                    Tom: <strong class="text-emerald-700">{{ selectedBedColor().name }}</strong>
                  </span>
                  
                  <div class="flex items-center gap-2">
                    @for (c of bedColors; track c.name) {
                      <button 
                        (click)="selectedBedColor.set(c)" 
                        [title]="c.name"
                        [class.ring-2]="selectedBedColor().name === c.name"
                        [class.ring-slate-950]="selectedBedColor().name === c.name"
                        [class.scale-110]="selectedBedColor().name === c.name"
                        class="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow-xs cursor-pointer transition-all hover:scale-110"
                        [style.background-color]="c.hex"
                      ></button>
                    }
                  </div>
                </div>
              </div>

              <div class="p-6 sm:p-7 space-y-3.5">
                <h3 class="font-extrabold text-xl sm:text-2xl text-slate-950 leading-snug">
                  Roupa de Cama &amp; Edredões 100% Algodão
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Jogos de lençóis completos confecionados em puro algodão de alta qualidade. Tecido suave, respirável e com caimento elegante para noites de descanso com o máximo conforto.
                </p>
                <ul class="pt-3 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>100% Algodão natural suave e resistente a lavagens</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Disponível em Bege Areia, Cinza Pérola, Rosa Seco e Azul Céu</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Confeção para Solteiro, Casal, Queen, King ou sob medida</span></li>
                </ul>
              </div>
            </div>

            <div class="p-6 sm:p-7 pt-0">
              <a 
                [href]="getServiceWhatsAppUrl('Roupa de Cama 100% Algodão')" 
                target="_blank" 
                rel="noopener" 
                class="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center shadow-md active:scale-98 cursor-pointer"
              >
                <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

          <!-- 4. Mesa & Cozinha -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              <div class="h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                <img src="assets/service-mesa.jpg" alt="Mesa & Cozinha Confeccionada por Medida" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-[11px] font-extrabold px-3 py-1 rounded-md shadow-2xs border border-slate-100">
                  Confeção Artesanal
                </span>
              </div>

              <div class="p-6 sm:p-7 space-y-3.5">
                <h3 class="font-extrabold text-xl sm:text-2xl text-slate-950 leading-snug">
                  Mesa &amp; Cozinha Confeccionada por Medida
                </h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Toalhas de mesa confecionadas no comprimento e formato exato da sua mesa de jantar (retangular, redonda ou oval), com padrões elegantes, barras reforçadas e caimento perfeito.
                </p>
                <ul class="pt-3 space-y-2 border-t border-slate-100 text-xs text-slate-700">
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Confeção personalizada para mesas de 4 a 14 lugares</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Padrões requintados para o dia a dia e ocasiões festivas</span></li>
                  <li class="flex items-center gap-2.5"><span class="text-emerald-600 font-bold text-base">✓</span><span>Acabamento de alfaiataria têxtil e corte rigoroso</span></li>
                </ul>
              </div>
            </div>

            <div class="p-6 sm:p-7 pt-0">
              <a 
                [href]="getServiceWhatsAppUrl('Mesa & Cozinha Confeccionada')" 
                target="_blank" 
                rel="noopener" 
                class="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 text-center shadow-md active:scale-98 cursor-pointer"
              >
                <svg class="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Direct Contact Banner -->
        <div class="mt-12 sm:mt-14 bg-slate-950 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div class="space-y-2 text-center md:text-left">
            <h3 class="text-xl sm:text-2xl font-extrabold">Quer agendar uma visita de medição em sua casa?</h3>
            <p class="text-xs sm:text-sm text-slate-300 max-w-xl">
              Fale connosco pelo WhatsApp ou chamada direta. Deslocamo-nos à sua residência com as amostras de tecidos para apresentar a proposta ideal.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a 
              href="tel:+351919943031" 
              class="bg-slate-800 hover:bg-slate-700 text-white px-5 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Ligar 919 943 031</span>
            </a>

            <a 
              [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
              target="_blank" 
              rel="noopener"
              class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Abrir WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  catalogService = inject(CatalogService);

  bedColors = [
    { name: 'Bege Areia', hex: '#D6C7B2', img: 'assets/cama-bege.jpg' },
    { name: 'Cinza Pérola', hex: '#9CA3AF', img: 'assets/cama-cinza.jpg' },
    { name: 'Rosa Seco', hex: '#E2A9B2', img: 'assets/cama-rosa.jpg' },
    { name: 'Azul Céu', hex: '#93C5FD', img: 'assets/cama-azul.jpg' },
  ];

  selectedBedColor = signal(this.bedColors[0]);

  getServiceWhatsAppUrl(serviceTitle: string): string {
    const text = `Olá Costura & Tendências! Gostaria de pedir um orçamento e informações sobre o vosso serviço de *${serviceTitle}*.`;
    return `https://wa.me/${this.catalogService.PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
  }
}
