import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden py-12 lg:py-20 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Content -->
          <div class="lg:col-span-7 space-y-6 text-left">
            
            <!-- Atelier Provenance Pill -->
            <div class="inline-flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors border border-slate-200/80">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Atelier em Argivai • Serviço de Medição &amp; Instalação no Domicílio</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              O conforto dos <br class="hidden sm:inline">
              <span class="underline decoration-amber-400/80 decoration-wavy decoration-2">melhores têxteis</span> para o seu lar.
            </h1>

            <!-- Descriptive Subtitle -->
            <p class="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Confeção de cortinados sob medida com <strong>instalação na sua casa</strong>, jogos de cama em 100% algodão português, toalhas de banho hotel e toalhas de mesa antimanchas com acabamento artesanal de excelência.
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a href="#servicos" class="inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white px-6 py-4 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                <span>Ver Serviços &amp; Especialidades</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl text-base font-bold shadow-sm transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Falar no WhatsApp (+351 919 943 031)</span>
              </a>
            </div>

            <!-- Key Quick Value Props -->
            <div class="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80">
              <div class="space-y-1">
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</p>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Algodão &amp; Linho</p>
              </div>
              <div class="space-y-1">
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900">Sob Medida</p>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Corte de Atelier</p>
              </div>
              <div class="space-y-1">
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900">Em Sua Casa</p>
                <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Medição &amp; Montagem</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Visual Composition with real textiles -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Main Hero Image -->
              <div class="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1000&q=80" 
                  alt="Quarto com roupa de cama e cortinados de luxo" 
                  class="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div class="text-white">
                    <span class="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded mb-1">
                      Confeção &amp; Instalação
                    </span>
                    <h3 class="text-lg font-bold">Cortinados &amp; Roupa de Cama</h3>
                    <p class="text-xs text-slate-200">Montagem de calhas e cortinados no domicílio</p>
                  </div>
                </div>
              </div>

              <!-- Floating Badge: Quality Tag -->
              <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3.5 max-w-xs">
                <div class="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 leading-tight">Instalação no Lar</h4>
                  <p class="text-xs text-slate-500">Vamos a sua casa tirar medidas e fazer a montagem</p>
                </div>
              </div>

              <!-- Floating Badge: WhatsApp Link -->
              <div class="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 text-white px-3.5 py-2 rounded-lg shadow-md items-center gap-2 text-xs font-semibold">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Atendimento Direto +351 919 943 031</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  catalogService = inject(CatalogService);
}
