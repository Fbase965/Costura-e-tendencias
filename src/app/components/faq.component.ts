import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="py-20 sm:py-28 bg-white border-b border-[#EAE3D9]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header with Serif Elegance -->
        <div class="text-center mb-14 sm:mb-16">
          <span class="text-[11px] font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] block mb-2">
            Esclarecimentos
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p class="text-sm sm:text-base text-[#57534E] mt-3 font-sans max-w-lg mx-auto">
            Tudo o que precisa de saber sobre o serviço de medição, confeção de cortinados em calha e encomendas.
          </p>
        </div>

        <!-- Accordion List with Warm Atelier Styling -->
        <div class="space-y-3.5">
          @for (faq of catalogService.faqs; track faq.question; let idx = $index) {
            <div class="rounded-2xl border border-[#EAE3D9] overflow-hidden bg-[#FAF8F5] transition-all">
              <button 
                (click)="toggle(idx)"
                class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-sans font-bold text-sm sm:text-base text-[#1C1917] hover:bg-[#F5EFEB] transition-colors cursor-pointer"
              >
                <span>{{ faq.question }}</span>
                <span class="text-[#78716C] font-normal shrink-0 text-xl font-serif">
                  {{ openIndex() === idx ? '−' : '+' }}
                </span>
              </button>

              @if (openIndex() === idx) {
                <div class="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#EAE3D9] bg-white font-sans">
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class FaqComponent {
  catalogService = inject(CatalogService);
  openIndex = signal<number | null>(0);

  toggle(idx: number) {
    this.openIndex.update(current => (current === idx ? null : idx));
  }
}
