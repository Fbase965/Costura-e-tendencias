import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';
import { Photo, PhotoGridComponent } from './photo-grid.component';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [CommonModule, PhotoGridComponent],
  template: `
    <section id="limpeza" class="py-20 sm:py-28 bg-[#F5EFEB] border-b border-[#EAE3D9]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section Header with Editorial Serif -->
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span class="inline-flex items-center gap-2 bg-white border border-[#E0D7CB] text-[#57534E] px-3.5 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Novo Serviço
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Limpeza de Sofás, Tapetes e Colchões ao Domicílio
          </h2>
          <p class="text-sm sm:text-base text-[#57534E] mt-3 max-w-2xl mx-auto font-sans leading-relaxed">
            Limpeza e higienização profissional de sofás, estofos, tapetes, carpetes, alcatifas, colchões, cortinados e cadeiras, <strong>sem sair de casa</strong>. Deslocamo-nos a sua casa na Póvoa de Varzim, Vila do Conde e arredores, avaliamos as peças e apresentamos orçamento sem compromisso.
          </p>
        </div>

        <!-- How It Works (3 steps) -->
        <div class="mb-12 sm:mb-14">
          <h3 class="text-center text-xs font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] mb-5">Como funciona</h3>
          <ol class="grid grid-cols-1 md:grid-cols-3 gap-4">
            @for (step of steps; track step.title; let idx = $index) {
              <li class="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-[#E0D7CB]">
                <span class="font-serif text-xl font-bold text-[#1C1917] w-8 shrink-0">0{{ idx + 1 }}</span>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-[#1C1917] font-sans">{{ step.title }}</h4>
                  <p class="text-sm text-[#78716C] mt-1 font-sans">{{ step.text }}</p>
                </div>
              </li>
            }
          </ol>
        </div>

        <!-- Real Cleaning Jobs (Facebook photos) -->
        <div class="mb-12 sm:mb-14">
          <h3 class="text-center text-xs font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] mb-5">Limpezas feitas por nós</h3>
          <app-photo-grid [photos]="photos" columnsClass="md:grid-cols-3" />
        </div>

        <!-- Cleaning Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

          @for (item of cleaningServices; track item.title; let idx = $index) {
            <article class="bg-white rounded-3xl border border-[#EAE3D9] shadow-sm hover:shadow-md transition-all duration-300 p-7 sm:p-8 space-y-4">
              <span class="font-serif text-xl font-bold text-[#A8A196]">0{{ idx + 1 }}</span>
              <h3 class="font-serif font-bold text-xl sm:text-2xl text-[#1C1917] leading-snug">
                {{ item.title }}
              </h3>
              <p class="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
                {{ item.description }}
              </p>
              <ul class="pt-1 space-y-2 text-sm text-[#44403C] font-sans">
                @for (point of item.points; track point) {
                  <li class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span><span>{{ point }}</span></li>
                }
              </ul>
            </article>
          }

          <!-- Quote CTA Card -->
          <div class="bg-[#1C1917] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-sm">
            <div class="space-y-3">
              <h3 class="font-serif font-bold text-xl sm:text-2xl text-[#FAF8F5] leading-snug">
                Peça o seu orçamento de limpeza
              </h3>
              <ul class="space-y-2 text-sm text-[#D6CEC3] font-sans">
                <li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span><span>Atendimento ao domicílio, com avaliação no local</span></li>
                <li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span><span>Produtos profissionais de alta eficácia, sem danos nos tecidos</span></li>
                <li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5"></span><span>Orçamento sem compromisso</span></li>
              </ul>
            </div>

            <div class="flex flex-col gap-2.5">
              <a
                [href]="cleaningWhatsAppUrl"
                target="_blank"
                rel="noopener"
                class="w-full bg-white hover:bg-[#F5EFEB] text-[#1C1917] py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 text-center active:scale-98 cursor-pointer"
              >
                <svg class="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Pedir Orçamento no WhatsApp</span>
              </a>
              <a
                href="tel:+351919943031"
                class="w-full border border-[#44403C] hover:bg-[#292524] text-[#FAF8F5] py-3.5 px-4 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Ligar 919 943 031</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CleaningComponent {
  catalogService = inject(CatalogService);

  photos: Photo[] = [
    { src: 'assets/galeria/limpeza-sofa.webp', alt: 'Limpeza de sofá ao domicílio', width: 1000, height: 750 },
    { src: 'assets/galeria/limpeza-colchao.webp', alt: 'Limpeza de colchão', width: 750, height: 1000 },
    { src: 'assets/galeria/limpeza-tapete-sala.webp', alt: 'Limpeza de tapete de sala', width: 750, height: 1000 },
    { src: 'assets/galeria/limpeza-colchao-extracao.webp', alt: 'Higienização de colchão com máquina de extração', width: 750, height: 1000 },
    { src: 'assets/galeria/limpeza-sofa-chaise.webp', alt: 'Sofá com chaise longue limpo', width: 1000, height: 750 },
    { src: 'assets/galeria/limpeza-tapete.webp', alt: 'Limpeza de tapete', width: 750, height: 1000 }
  ];

  steps = [
    { title: 'Contacte-nos', text: 'Ligue ou envie mensagem pelo WhatsApp a dizer o que precisa de limpar.' },
    { title: 'Avaliação em sua casa', text: 'Deslocamo-nos ao local, avaliamos as peças e apresentamos orçamento sem compromisso.' },
    { title: 'Limpeza sem sair de casa', text: 'Limpamos e higienizamos no local, com produtos profissionais que não danificam os tecidos.' }
  ];

  cleaningServices = [
    {
      title: 'Limpeza de Sofás e Estofos',
      description: 'Limpeza profunda e higienização de sofás de tecido no conforto da sua sala. Removemos sujidade, nódoas e odores, devolvendo a frescura ao estofo.',
      points: ['Sofás de 1, 2 e 3 lugares', 'Sofás com chaise longue', 'Sofás de canto e modulares']
    },
    {
      title: 'Limpeza de Tapetes, Carpetes e Alcatifas',
      description: 'Lavagem e higienização de tapetes pequenos e grandes, carpetes e alcatifas ao domicílio, com produtos adequados a cada tipo de fibra.',
      points: ['Tapetes pequenos e grandes', 'Carpetes e alcatifas (preço por m²)', 'Remoção de pó, ácaros e nódoas']
    },
    {
      title: 'Limpeza de Colchões',
      description: 'Higienização de colchões para um descanso mais saudável, com remoção de ácaros, manchas e odores acumulados.',
      points: ['Colchões de bebé', 'Solteiro, individual e casal', 'Queen e King Size']
    },
    {
      title: 'Limpeza de Cortinas e Cortinados',
      description: 'Limpeza de cortinas e cortinados sem complicações, incluindo tecidos blackout e voiles transparentes, com opção de impermeabilização.',
      points: ['Por painel ou por metro linear', 'Blackout, voile e transparentes', 'Impermeabilização de tecidos']
    },
    {
      title: 'Limpeza de Cadeiras e Cadeirões',
      description: 'Limpeza de cadeiras estofadas de sala de jantar, cadeirões, bancos e puffs, renovando o aspeto dos tecidos.',
      points: ['Só assento ou assento + encosto', 'Cadeiras com braços e cadeirões', 'Bancos e puffs']
    }
  ];

  cleaningWhatsAppUrl = `https://wa.me/${this.catalogService.PHONE_CLEAN}?text=${encodeURIComponent('Olá Costura & Tendências! Gostaria de pedir um orçamento para o serviço de *Limpeza ao Domicílio*.')}`;
}
