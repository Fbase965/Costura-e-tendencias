import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#181614] text-[#A8A196] text-xs pt-20 pb-14 border-t border-[#292524]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <!-- Column 1: Brand & Atelier Story -->
          <div class="lg:col-span-5 space-y-5">
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-full overflow-hidden border border-[#44403C] bg-white p-0.5 shrink-0 flex items-center justify-center">
                <img src="assets/logo.png" alt="Costura & Tendências" class="w-full h-full object-contain" />
              </div>
              <div>
                <span class="font-serif font-bold text-xl text-[#FAF8F5] tracking-tight">Costura &amp; Tendências</span>
                <p class="text-[10px] text-[#A8A196] uppercase tracking-[0.2em] font-sans font-semibold">Atelier Têxtil • Argivai</p>
              </div>
            </div>

            <p class="text-[#A8A196] leading-relaxed text-xs max-w-sm font-sans">
              Especialistas em cortinados de onda perfeita com serviço de medição e instalação de calhas ao domicílio, roupa de cama em 100% algodão português, estores de rolo e toalhas de mesa confeccionadas por medida em Argivai, Póvoa de Varzim.
            </p>

            <div class="pt-1 flex items-center gap-3">
              <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-[#292524] hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" target="_blank" rel="noopener" class="w-9 h-9 rounded-xl bg-[#292524] hover:bg-emerald-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Especialidades -->
          <div class="lg:col-span-3 space-y-3">
            <h4 class="font-sans font-bold text-[#FAF8F5] uppercase text-[11px] tracking-widest">Especialidades</h4>
            <ul class="space-y-2.5 font-sans">
              <li><a href="#servicos" class="hover:text-white transition-colors">Cortinados de Onda em Calha</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Estores de Rolo &amp; Blackout</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Roupa de Cama 100% Algodão</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Toalhas de Mesa por Medida</a></li>
            </ul>
          </div>

          <!-- Column 3: Contactos Rápidos -->
          <div class="lg:col-span-4 space-y-3">
            <h4 class="font-sans font-bold text-[#FAF8F5] uppercase text-[11px] tracking-widest">Atelier &amp; Contactos</h4>
            <ul class="space-y-3 font-sans">
              <li class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+351919943031" class="hover:text-white font-bold text-sm text-[#FAF8F5]">+351 919 943 031</a>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sm shrink-0">📍</span>
                <span>Rua de Argivai, Póvoa de Varzim, Portugal</span>
              </li>
              <li class="text-[11px] text-[#78716C] pt-1">
                Segunda a Sexta: 09:00 - 19:00<br>Sábado: 09:30 - 13:00
              </li>
            </ul>
          </div>

        </div>

        <div class="pt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#78716C] text-[11px] font-sans">
          <p>© {{ currentYear }} Costura &amp; Tendências. Confeção de Têxteis-Lar. Feito em Portugal.</p>
          <div class="flex items-center gap-4">
            <span class="text-[#A8A196]">Argivai • Póvoa de Varzim</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  catalogService = inject(CatalogService);
  currentYear = new Date().getFullYear();
}
