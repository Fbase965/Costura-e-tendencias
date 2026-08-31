import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-[#FAF8F5] overflow-hidden py-12 lg:py-24 border-b border-[#EAE3D9]">
      
      <!-- Subtle background ambient warm glow -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#F5EFEB]/80 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Editorial Headline & Story -->
          <div class="lg:col-span-7 space-y-7 text-left">
            
            <!-- Provenance Badge -->
            <div class="inline-flex items-center gap-2 bg-[#F5EFEB] border border-[#E0D7CB] text-[#57534E] px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Atelier de Confeção em Argivai • Póvoa de Varzim</span>
            </div>

            <!-- Editorial Headline with Serif Elegance -->
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.12]">
              A elegância dos <br class="hidden sm:inline">
              <span class="italic font-normal font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#78716C]">têxteis nobres</span> para o seu lar.
            </h1>

            <!-- Descriptive Paragraph -->
            <p class="text-sm sm:text-base text-[#57534E] max-w-xl leading-relaxed font-sans font-normal">
              Especialistas em cortinados de onda perfeita com <strong>instalação de calhas na sua casa</strong>, estores de rolo à medida, roupa de cama em 100% algodão e atoalhados de mesa com acabamento de atelier.
            </p>

            <!-- Action Buttons -->
            <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a 
                href="#servicos" 
                class="inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
              >
                <span>Conhecer os Nossos Serviços</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a 
                [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
                target="_blank" 
                rel="noopener" 
                class="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5EFEB] text-[#292524] border border-[#D6CEC3] px-6 py-4 rounded-xl text-xs sm:text-sm font-bold transition-all"
              >
                <svg class="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            <!-- Key Atelier Value Pillars -->
            <div class="pt-6 grid grid-cols-3 gap-6 border-t border-[#EAE3D9]">
              <div>
                <p class="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">100%</p>
                <p class="text-[11px] font-sans font-medium text-[#78716C] uppercase tracking-wider mt-0.5">Algodão &amp; Linho</p>
              </div>
              <div>
                <p class="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">À Medida</p>
                <p class="text-[11px] font-sans font-medium text-[#78716C] uppercase tracking-wider mt-0.5">Corte de Atelier</p>
              </div>
              <div>
                <p class="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">Em Casa</p>
                <p class="text-[11px] font-sans font-medium text-[#78716C] uppercase tracking-wider mt-0.5">Medição &amp; Calhas</p>
              </div>
            </div>

          </div>

          <!-- Right Column: Architectural Photography Frame -->
          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Subtle Linen Border Frame -->
              <div class="p-3 bg-white rounded-3xl border border-[#EAE3D9] shadow-xl">
                <div class="relative rounded-2xl overflow-hidden bg-[#F5EFEB]">
                  <img 
                    src="assets/hero-cortinado.jpg" 
                    alt="Instalação real de cortinados de onda perfeita em calha da Costura & Tendências" 
                    class="w-full h-80 sm:h-[440px] object-cover object-center transition-transform duration-700 hover:scale-102"
                  />
                  
                  <!-- Minimalist Atelier Label -->
                  <div class="absolute bottom-4 left-4 right-4 bg-[#1C1917]/85 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs shadow-md">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span class="font-sans font-bold text-[#FAF8F5]">Cortinados em Calha Técnica</span>
                    </div>
                    <span class="text-[10px] text-[#D6CEC3] uppercase tracking-wider font-sans">Trabalho Real</span>
                  </div>
                </div>
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
