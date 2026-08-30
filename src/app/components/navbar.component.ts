import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Announcement Bar -->
    <div class="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800/80">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-2.5 font-medium tracking-wide">
          <span class="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[11px] text-amber-300 font-semibold uppercase tracking-wider">
            ★ Atelier em Argivai
          </span>
          <span class="hidden md:inline text-slate-300">Confecção por medida e instalação ao domicílio • Póvoa de Varzim</span>
          <span class="md:hidden text-slate-300">Confecção &amp; Instalação no Domicílio</span>
        </div>
        
        <div class="flex items-center gap-4 text-slate-300 text-[11px]">
          <a href="tel:+351919943031" class="hover:text-white transition-colors flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="font-semibold">+351 919 943 031</span>
          </a>
          <span class="text-slate-700">|</span>
          <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="hidden sm:inline">Página Facebook</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo -->
          <a href="#" class="flex items-center gap-3 group shrink-0">
            <div class="w-12 h-12 rounded-full overflow-hidden shadow-xs border border-slate-200 bg-white p-0.5 group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img src="assets/logo.png" alt="Costura & Tendências" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight leading-tight group-hover:text-slate-800 transition-colors">
                Costura &amp; Tendências
              </span>
              <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Artigos para o Lar • Argivai
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Tabs (Pill style, no wrapping) -->
          <nav class="hidden lg:flex items-center gap-1.5 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/80">
            <a href="#servicos" class="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Serviços
            </a>
            <a href="#atelier" class="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              O Atelier
            </a>
            <a href="#testemunhos" class="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Avaliações
            </a>
            <a href="#faq" class="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Perguntas Frequentes
            </a>
            <a href="#contacto" class="px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Contactos
            </a>
          </nav>

          <!-- Right Action: Premium WhatsApp CTA Button -->
          <div class="flex items-center gap-3 shrink-0">
            
            <a 
              [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
              target="_blank" 
              rel="noopener" 
              class="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2.5 rounded-full text-xs font-extrabold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap group"
            >
              <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <span class="tracking-wide">Pedir Orçamento</span>
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button (click)="mobileMenuOpen.set(!mobileMenuOpen())" class="lg:hidden p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Abrir menu">
              <svg *ngIf="!mobileMenuOpen()" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg *ngIf="mobileMenuOpen()" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div *ngIf="mobileMenuOpen()" class="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
        <a (click)="mobileMenuOpen.set(false)" href="#servicos" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 hover:bg-slate-50">Serviços</a>
        <a (click)="mobileMenuOpen.set(false)" href="#atelier" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 hover:bg-slate-50">O Atelier em Argivai</a>
        <a (click)="mobileMenuOpen.set(false)" href="#testemunhos" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 hover:bg-slate-50">Avaliações de Clientes</a>
        <a (click)="mobileMenuOpen.set(false)" href="#faq" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 hover:bg-slate-50">Perguntas Frequentes</a>
        <a (click)="mobileMenuOpen.set(false)" href="#contacto" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 hover:bg-slate-50">Contactos e Morada</a>
        
        <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <a [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" target="_blank" class="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm">
            <span>Falar no WhatsApp (+351 919 943 031)</span>
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  catalogService = inject(CatalogService);
  mobileMenuOpen = signal(false);
}
