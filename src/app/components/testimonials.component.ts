import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testemunhos" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1 rounded-full text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-3 shadow-2xs">
            <span>Comentários Reais no Facebook</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            A Opinião de Quem Confia no Nosso Atelier
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
            Mensagens e comentários deixados por clientes reais nas publicações dos nossos trabalhos no Facebook.
          </p>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (t of catalogService.testimonials; track t.id) {
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              
              <div class="space-y-3.5">
                <!-- Stars + Facebook Icon -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1 text-amber-400">
                    @for (star of [1,2,3,4,5]; track star) {
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    }
                  </div>

                  <div class="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-0.5 rounded text-[10px] font-bold">
                    <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </div>
                </div>

                <p class="text-xs text-slate-700 leading-relaxed font-normal">
                  "{{ t.comment }}"
                </p>
              </div>

              <!-- Author Info with Real Avatar -->
              <div class="pt-3 border-t border-slate-100 flex items-center gap-3">
                <img 
                  [src]="t.avatar" 
                  [alt]="t.name" 
                  class="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs shrink-0"
                />
                
                <div class="leading-tight">
                  <h4 class="font-extrabold text-xs text-slate-900">{{ t.name }}</h4>
                  <p class="text-[10px] text-slate-400">{{ t.location }} • {{ t.service }}</p>
                </div>
              </div>

            </div>
          }
        </div>

        <!-- Social Proof Callout -->
        <div class="mt-12 text-center">
          <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-2xs hover:shadow-xs">
            <svg class="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Ver mais publicações e comentários na nossa página de Facebook &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  `
})
export class TestimonialsComponent {
  catalogService = inject(CatalogService);
}
