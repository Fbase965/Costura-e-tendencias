import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="atelier" class="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: Real Works Composition -->
          <div class="lg:col-span-6 relative">
            <div class="grid grid-cols-2 gap-3.5 sm:gap-4">
              <div class="space-y-3.5 sm:space-y-4">
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-44 sm:h-60 border border-slate-100">
                  <img src="assets/service-cortinados.jpg" alt="Instalação de cortinados em calha no quarto" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-32 sm:h-44 border border-slate-100">
                  <img src="assets/service-mesa.jpg" alt="Toalha de mesa confecionada" class="w-full h-full object-cover" />
                </div>
              </div>

              <div class="space-y-3.5 sm:space-y-4 pt-4 sm:pt-6">
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-32 sm:h-44 border border-slate-100">
                  <img src="assets/service-estores.jpg" alt="Estore de rolo em janela" class="w-full h-full object-cover" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md bg-slate-100 h-44 sm:h-60 border border-slate-100">
                  <img src="assets/service-cama.jpg" alt="Roupa de cama 100% algodão" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 text-white p-4 sm:p-5 rounded-2xl shadow-xl text-center border-4 border-white max-w-[180px] sm:max-w-[200px]">
              <span class="block text-xl sm:text-2xl font-extrabold text-amber-300">100%</span>
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Trabalhos Reais de Atelier</span>
            </div>
          </div>

          <!-- Right: Process & Values -->
          <div class="lg:col-span-6 space-y-6">
            
            <div class="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-extrabold text-slate-900 uppercase tracking-widest">
              <span>Como Trabalhamos</span>
            </div>

            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              O Rigor do Atelier Tradicional com Serviço Completo em Sua Casa
            </h2>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Na <strong>Costura &amp; Tendências</strong> acompanhamos o seu projeto do início ao fim: desde a escolha dos tecidos e medição no seu ambiente até à montagem e fixação técnica final das calhas e estores.
            </p>

            <div class="space-y-4 pt-2">
              
              <!-- Step 1 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-slate-950 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                  1
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-950">Medição e Aconselhamento no seu Lar</h4>
                  <p class="text-xs text-slate-500 mt-1">Deslocamo-nos a sua casa para tirar as medidas das janelas, analisar a luminosidade e apresentar as amostras de tecidos no local.</p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-slate-950 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                  2
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-950">Corte e Confeção Manual no Atelier</h4>
                  <p class="text-xs text-slate-500 mt-1">Execução rigorosa no atelier em Argivai com costuras reforçadas, chumbo de caimento inferior e acabamento artesanal de precisão.</p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100/70 transition-colors">
                <div class="w-10 h-10 rounded-xl bg-slate-950 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                  3
                </div>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-slate-950">Montagem Exclusiva em Calha Chave-na-Mão</h4>
                  <p class="text-xs text-slate-500 mt-1">Levamos, montamos as <strong>calhas técnicas de teto ou parede</strong> e penduramos os cortinados com efeito de onda perfeita (ou levantamento no atelier).</p>
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
