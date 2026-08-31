import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-badges',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white border-b border-[#EAE3D9] py-8 sm:py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <!-- Pillar 1 -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group">
            <div class="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center shrink-0 text-[#1C1917] group-hover:border-[#1C1917] transition-colors">
              <svg class="w-5 h-5 text-[#44403C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L11.758 4.758a3 3 0 114.242 4.242L13.121 11.88" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#1C1917] font-sans">Confeção por Medida</h4>
              <p class="text-[11px] text-[#78716C] mt-0.5 font-sans">Corte e costura manuais no atelier.</p>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group">
            <div class="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center shrink-0 text-[#1C1917] group-hover:border-[#1C1917] transition-colors">
              <svg class="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#1C1917] font-sans">Instalação no Lar</h4>
              <p class="text-[11px] text-[#78716C] mt-0.5 font-sans">Montagem técnica de calhas no local.</p>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group">
            <div class="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center shrink-0 text-[#1C1917] group-hover:border-[#1C1917] transition-colors">
              <svg class="w-5 h-5 text-[#44403C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#1C1917] font-sans">Qualidade Certificada</h4>
              <p class="text-[11px] text-[#78716C] mt-0.5 font-sans">Tecidos nobres de linho e puro algodão.</p>
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 group">
            <div class="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9] flex items-center justify-center shrink-0 text-[#1C1917] group-hover:border-[#1C1917] transition-colors">
              <svg class="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#1C1917] font-sans">Medição no Domicílio</h4>
              <p class="text-[11px] text-[#78716C] mt-0.5 font-sans">Amostras de tecidos levadas ao seu espaço.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class TrustBadgesComponent {}
