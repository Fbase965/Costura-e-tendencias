import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-badges',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white border-b border-slate-100 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div class="p-2.5 bg-white rounded-lg shadow-xs text-slate-900">
              <svg class="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L11.758 4.758a3 3 0 114.242 4.242L13.121 11.88" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">Confeção Sob Medida</h4>
              <p class="text-xs text-slate-500 mt-0.5">Corte e costura personalizados no atelier em Argivai.</p>
            </div>
          </div>

          <div class="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div class="p-2.5 bg-white rounded-lg shadow-xs text-slate-900">
              <svg class="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">Instalação em Sua Casa</h4>
              <p class="text-xs text-slate-500 mt-0.5">Montagem completa de calhas, varões e cortinados no local.</p>
            </div>
          </div>

          <div class="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div class="p-2.5 bg-white rounded-lg shadow-xs text-slate-900">
              <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">100% Qualidade Nacional</h4>
              <p class="text-xs text-slate-500 mt-0.5">Tecidos certificados de excelência e toque nobre.</p>
            </div>
          </div>

          <div class="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div class="p-2.5 bg-white rounded-lg shadow-xs text-slate-900">
              <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900">Medição &amp; Aconselhamento</h4>
              <p class="text-xs text-slate-500 mt-0.5">Ajudamos a escolher os tecidos no seu próprio espaço.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class TrustBadgesComponent {}
