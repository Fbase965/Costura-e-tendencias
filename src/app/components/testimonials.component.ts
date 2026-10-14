import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testemunhos" class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span class="text-xs font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] block mb-2">
            Testemunhos &amp; Opiniões
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            A Opinião de Quem Confia no Nosso Atelier
          </h2>
          <p class="text-sm sm:text-base text-[#57534E] mt-3 max-w-xl mx-auto font-sans">
            Comentários e mensagens deixadas por clientes reais nas publicações dos nossos trabalhos no Facebook.
          </p>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (t of catalogService.testimonials; track t.id) {
            <div class="bg-white p-7 rounded-3xl border border-[#EAE3D9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5">
              
              <div class="space-y-4">
                <!-- Quote Mark & Facebook Tag -->
                <div class="flex items-center justify-between">
                  <span class="font-serif text-4xl leading-none text-[#D6CEC3]" aria-hidden="true">&ldquo;</span>

                  <span class="text-xs font-sans font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </span>
                </div>

                <p class="text-sm sm:text-base text-[#44403C] leading-relaxed font-sans font-normal">
                  {{ t.comment }}
                </p>
              </div>

              <!-- Author Info -->
              <div class="pt-4 border-t border-[#F5EFEB] flex items-center justify-between">
                <div class="leading-tight">
                  <h4 class="font-bold text-sm text-[#1C1917] font-sans">{{ t.name }}</h4>
                  <p class="text-xs text-[#78716C] mt-0.5 font-sans">{{ t.location }} • {{ t.service }}</p>
                </div>
              </div>

            </div>
          }
        </div>

        <!-- Social Proof Callout -->
        <div class="mt-12 text-center">
          <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#1C1917] hover:text-blue-700 transition-colors bg-white px-5 py-2.5 rounded-full border border-[#EAE3D9] shadow-2xs hover:shadow-xs">
            <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Mais de 2 mil seguidores no Facebook &middot; ver publicações e comentários &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  `
})
export class TestimonialsComponent {
  catalogService = inject(CatalogService);
}
