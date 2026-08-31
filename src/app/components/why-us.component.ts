import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="atelier" class="py-20 sm:py-28 bg-white border-b border-[#EAE3D9]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left: Real Works Photo Composition with Linen Border -->
          <div class="lg:col-span-6 relative">
            <div class="p-3.5 bg-[#FAF8F5] rounded-3xl border border-[#EAE3D9]">
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <div class="space-y-3 sm:space-y-4">
                  <div class="rounded-2xl overflow-hidden shadow-xs bg-[#F5EFEB] h-44 sm:h-56">
                    <img src="assets/service-cortinados.jpg" alt="Instalação de cortinados em calha" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div class="rounded-2xl overflow-hidden shadow-xs bg-[#F5EFEB] h-32 sm:h-44">
                    <img src="assets/service-mesa.jpg" alt="Toalha de mesa confecionada" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                <div class="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <div class="rounded-2xl overflow-hidden shadow-xs bg-[#F5EFEB] h-32 sm:h-44">
                    <img src="assets/service-estores.jpg" alt="Estore de rolo em janela" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div class="rounded-2xl overflow-hidden shadow-xs bg-[#F5EFEB] h-44 sm:h-56">
                    <img src="assets/service-cama.jpg" alt="Roupa de cama 100% algodão" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Central Atelier Badge -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1C1917] text-white p-5 rounded-2xl shadow-xl text-center border-4 border-white max-w-[190px]">
              <span class="block font-serif text-2xl font-bold text-amber-200">100%</span>
              <span class="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D6CEC3]">Trabalhos Reais</span>
            </div>
          </div>

          <!-- Right: Editorial Craft Process -->
          <div class="lg:col-span-6 space-y-7">
            
            <div>
              <span class="text-[11px] font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] block mb-2">
                O Processo de Confeção
              </span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight leading-tight">
                O rigor do atelier tradicional com serviço completo em sua casa
              </h2>
            </div>

            <p class="text-sm sm:text-base text-[#57534E] leading-relaxed font-sans">
              Na <strong>Costura &amp; Tendências</strong> acompanhamos o seu projeto do início ao fim: desde a escolha dos tecidos e medição no seu ambiente até à montagem e fixação técnica final das calhas e estores.
            </p>

            <div class="space-y-4 pt-2">
              
              <!-- Step 01 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:bg-[#F5EFEB] transition-colors">
                <span class="font-serif text-xl font-bold text-[#1C1917] w-8 shrink-0">01</span>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-[#1C1917] font-sans">Medição e Aconselhamento no seu Lar</h4>
                  <p class="text-xs text-[#78716C] mt-1 font-sans">Deslocamo-nos a sua casa para tirar as medidas das janelas, analisar a luminosidade e apresentar as amostras de tecidos no local.</p>
                </div>
              </div>

              <!-- Step 02 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:bg-[#F5EFEB] transition-colors">
                <span class="font-serif text-xl font-bold text-[#1C1917] w-8 shrink-0">02</span>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-[#1C1917] font-sans">Corte e Confeção Manual no Atelier</h4>
                  <p class="text-xs text-[#78716C] mt-1 font-sans">Execução rigorosa no atelier em Argivai com costuras reforçadas, chumbo de caimento inferior e acabamento artesanal de precisão.</p>
                </div>
              </div>

              <!-- Step 03 -->
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D9] hover:bg-[#F5EFEB] transition-colors">
                <span class="font-serif text-xl font-bold text-[#1C1917] w-8 shrink-0">03</span>
                <div>
                  <h4 class="text-sm sm:text-base font-bold text-[#1C1917] font-sans">Montagem Exclusiva em Calha Chave-na-Mão</h4>
                  <p class="text-xs text-[#78716C] mt-1 font-sans">Levamos, montamos as <strong>calhas técnicas de teto ou parede</strong> e penduramos os cortinados com efeito de onda perfeita (ou levantamento no atelier).</p>
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
