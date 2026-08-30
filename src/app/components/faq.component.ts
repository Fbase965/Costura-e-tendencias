import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white border-b border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest mb-3">
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas &amp; Respostas
          </h2>
          <p class="text-base text-slate-600 mt-2">
            Tudo o que precisa de saber sobre encomendas, medições e prazos de entrega.
          </p>
        </div>

        <!-- Accordion List -->
        <div class="space-y-3">
          @for (faq of catalogService.faqs; track faq.question; let idx = $index) {
            <div class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
              <button 
                (click)="toggle(idx)"
                class="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-100/60 transition-colors cursor-pointer"
              >
                <span>{{ faq.question }}</span>
                <span class="text-slate-400 font-normal shrink-0 text-lg">
                  {{ openIndex() === idx ? '−' : '+' }}
                </span>
              </button>

              @if (openIndex() === idx) {
                <div class="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
