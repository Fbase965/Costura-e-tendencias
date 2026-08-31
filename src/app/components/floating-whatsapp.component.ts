import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- 1. MOBILE FIXED BOTTOM ACTION BAR (Ultra-Accessible, Visual-First for Mobile/All Users) -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-3 shadow-2xl safe-area-pb">
      <div class="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        <!-- Call Direct Button (Big Handset Icon + Call Action) -->
        <a 
          href="tel:+351919943031" 
          class="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-3 rounded-xl font-extrabold text-xs shadow-md active:scale-95 transition-all text-center"
          aria-label="Ligar por Telefone"
        >
          <div class="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="text-left leading-tight">
            <span class="block text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Ligar Agora</span>
            <span class="block text-xs font-black">919 943 031</span>
          </div>
        </a>

        <!-- WhatsApp Direct Button (Official Green + Large Logo + Direct Chat) -->
        <a 
          [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
          target="_blank" 
          rel="noopener"
          class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-3 rounded-xl font-extrabold text-xs shadow-md active:scale-95 transition-all text-center"
          aria-label="Abrir conversa no WhatsApp"
        >
          <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <div class="text-left leading-tight">
            <span class="block text-[10px] text-emerald-100 uppercase tracking-wider font-semibold">WhatsApp</span>
            <span class="block text-xs font-black">Conversar</span>
          </div>
        </a>

      </div>
    </div>

    <!-- 2. DESKTOP FLOATING WHATSAPP LAUNCHER -->
    <div class="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
      
      <!-- Tooltip Bubble -->
      @if (showTooltip()) {
        <div class="bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 text-xs text-slate-800 max-w-[230px] relative animate-bounce-subtle">
          <button (click)="showTooltip.set(false)" class="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 cursor-pointer" aria-label="Fechar">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="flex items-center gap-1.5 mb-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span class="font-extrabold text-[11px] text-slate-900">Atelier em Argivai</span>
          </div>
          <p class="text-[11px] text-slate-600 leading-tight">
            Tire dúvidas, peça orçamento ou agende medição no domicílio pelo WhatsApp!
          </p>
        </div>
      }

      <!-- Main WhatsApp Floating Button -->
      <a 
        [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
        target="_blank" 
        rel="noopener"
        class="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <span class="absolute -top-1 -right-1 flex h-4 w-4">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>

        <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
  `
})
export class FloatingWhatsappComponent {
  catalogService = inject(CatalogService);
  showTooltip = signal(true);
}
