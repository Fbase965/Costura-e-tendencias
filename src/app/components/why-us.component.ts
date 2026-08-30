import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="atelier" class="py-16 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: Atelier Visuals -->
          <div class="lg:col-span-6 relative">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-48 sm:h-60">
                  <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" alt="Tecidos e corte artesanal" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-36 sm:h-44">
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Tecidos para o lar" class="w-full h-full object-cover" />
                </div>
              </div>

              <div class="space-y-4 pt-6">
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-36 sm:h-44">
                  <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Cortinados instalados na sala" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-48 sm:h-60">
                  <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800&q=80" alt="Cama com lençóis de qualidade" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 text-white p-5 rounded-2xl shadow-xl text-center border-4 border-white max-w-[200px]">
              <span class="block text-2xl font-extrabold text-amber-300 font-serif">100%</span>
              <span class="text-xs font-bold uppercase tracking-wider">Atelier &amp; Instalação no Lar</span>
            </div>
          </div>

          <!-- Right: Process & Values -->
          <div class="lg:col-span-6 space-y-6">
            
            <div class="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-widest">
              <span>Como Trabalhamos</span>
            </div>

            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              O Rigor do Atelier Tradicional com Serviço Completo em Sua Casa
            </h2>

            <p class="text-base text-slate-600 leading-relaxed">
              Na <strong>Costura &amp; Tendências</strong> acompanhamos o seu projeto do início ao fim: desde a escolha e medição dos tecidos no seu ambiente até à montagem e instalação final.
            </p>

            <div class="space-y-4 pt-2">
              
              <div class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                <div class="w-9 h-9 rounded-lg bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Medição e Aconselhamento no seu Lar</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Vamos a sua casa tirar as medidas das janelas, analisar a luminosidade e apresentar as amostras de tecidos no local.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                <div class="w-9 h-9 rounded-lg bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Corte e Confeção Manual no Atelier</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Execução no atelier em Argivai com costuras reforçadas, chumbo de caimento inferior e acabamento artesanal rigoroso.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                <div class="w-9 h-9 rounded-lg bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Montagem &amp; Instalação Chave-na-Mão</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Levamos, montamos as calhas/varões e penduramos os cortinados com caimento impecável (ou levantamento no atelier).</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class WhyUsComponent {}
