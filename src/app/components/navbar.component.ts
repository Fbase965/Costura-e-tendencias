import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Artisan Announcement Bar -->
    <div class="bg-[#1C1917] text-[#D6CEC3] text-xs py-2.5 px-4 border-b border-[#292524]">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-3 text-[11px] font-medium tracking-wide">
          <span class="inline-flex items-center gap-1.5 bg-[#292524] border border-[#44403C] px-2.5 py-0.5 rounded-full text-[10px] text-[#E7DFD5] uppercase tracking-widest font-sans">
            Atelier em Argivai
          </span>
          <span class="hidden md:inline text-[#A8A196]">Confeção por medida e instalação de cortinados no domicílio • Póvoa de Varzim</span>
          <span class="md:hidden text-[#A8A196]">Confeção &amp; Instalação no Domicílio</span>
        </div>
        
        <div class="flex items-center gap-4 text-[#D6CEC3] text-[11px]">
          <a href="tel:+351919943031" class="hover:text-white transition-colors flex items-center gap-1.5 font-medium">
            <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+351 919 943 031</span>
          </a>
          <span class="text-[#44403C]">|</span>
          <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="hidden sm:inline">Facebook</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3D9] transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-4">
          
          <!-- Brand Logo & Signature -->
          <a href="#" class="flex items-center gap-3.5 group shrink-0">
            <div class="w-12 h-12 rounded-full overflow-hidden border border-[#D6CEC3] bg-white p-0.5 shadow-2xs group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <img src="assets/logo.png" alt="Costura & Tendências" class="w-full h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <span class="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight leading-tight group-hover:text-[#44403C] transition-colors">
                Costura &amp; Tendências
              </span>
              <span class="text-[9px] sm:text-[10px] font-sans font-bold text-[#78716C] uppercase tracking-[0.2em]">
                Atelier Têxtil • Argivai
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center gap-1 bg-[#F5EFEB] p-1.5 rounded-full border border-[#EAE3D9]">
            <a href="#servicos" class="px-4 py-2 rounded-full text-xs font-bold text-[#57534E] hover:text-[#1C1917] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Serviços
            </a>
            <a href="#atelier" class="px-4 py-2 rounded-full text-xs font-bold text-[#57534E] hover:text-[#1C1917] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              O Atelier
            </a>
            <a href="#testemunhos" class="px-4 py-2 rounded-full text-xs font-bold text-[#57534E] hover:text-[#1C1917] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Testemunhos
            </a>
            <a href="#faq" class="px-4 py-2 rounded-full text-xs font-bold text-[#57534E] hover:text-[#1C1917] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Perguntas Frequentes
            </a>
            <a href="#contacto" class="px-4 py-2 rounded-full text-xs font-bold text-[#57534E] hover:text-[#1C1917] hover:bg-white hover:shadow-2xs transition-all whitespace-nowrap">
              Contactos
            </a>
          </nav>

          <!-- Right Action: Gentle Atelier Contact Button -->
          <div class="flex items-center gap-3 shrink-0">
            <a 
              [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
              target="_blank" 
              rel="noopener" 
              class="hidden sm:inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-2xs hover:shadow-xs transition-all whitespace-nowrap"
            >
              <svg class="w-3.5 h-3.5 text-emerald-400 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Falar com o Atelier</span>
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button (click)="mobileMenuOpen.set(!mobileMenuOpen())" class="lg:hidden p-2.5 rounded-xl border border-[#EAE3D9] text-[#1C1917] hover:bg-[#F5EFEB] transition-colors" aria-label="Abrir menu">
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
      <div *ngIf="mobileMenuOpen()" class="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-4 pt-2 pb-6 space-y-2 shadow-lg">
        <a (click)="mobileMenuOpen.set(false)" href="#servicos" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-[#1C1917] hover:bg-[#F5EFEB]">Serviços</a>
        <a (click)="mobileMenuOpen.set(false)" href="#atelier" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-[#1C1917] hover:bg-[#F5EFEB]">O Atelier em Argivai</a>
        <a (click)="mobileMenuOpen.set(false)" href="#testemunhos" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-[#1C1917] hover:bg-[#F5EFEB]">Testemunhos de Clientes</a>
        <a (click)="mobileMenuOpen.set(false)" href="#faq" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-[#1C1917] hover:bg-[#F5EFEB]">Perguntas Frequentes</a>
        <a (click)="mobileMenuOpen.set(false)" href="#contacto" class="block py-2.5 px-3 rounded-lg font-bold text-xs text-[#1C1917] hover:bg-[#F5EFEB]">Contactos e Morada</a>
        
        <div class="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2">
          <a [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" target="_blank" class="w-full text-center bg-[#1C1917] hover:bg-[#292524] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-2xs">
            <span>Falar com o Atelier (+351 919 943 031)</span>
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
