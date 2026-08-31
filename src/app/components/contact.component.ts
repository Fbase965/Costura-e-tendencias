import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="py-16 sm:py-20 bg-slate-50 border-b border-slate-100 pb-28 sm:pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-1 rounded-full text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-3 shadow-2xs">
            <span>Visite-nos ou Fale Connosco</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Contactos &amp; Localização
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-2.5 max-w-2xl mx-auto">
            Estamos localizados em Argivai, na Póvoa de Varzim. Teremos todo o gosto em recebê-lo(a) no atelier ou agendar uma deslocação a sua casa.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Large Visual Contact Cards -->
          <div class="lg:col-span-5 space-y-4">
            
            <!-- Direct Phone & WhatsApp Card -->
            <div class="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 class="font-extrabold text-base sm:text-lg text-slate-950">Atendimento Direto</h3>
              
              <div class="space-y-3">
                <!-- Phone Direct Tap -->
                <a 
                  href="tel:+351919943031" 
                  class="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs active:scale-98"
                >
                  <div class="w-10 h-10 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="text-left leading-tight">
                    <span class="text-slate-300 font-bold block text-[11px] uppercase tracking-wider">Chamada Telefónica</span>
                    <span class="font-black text-base text-white">+351 919 943 031</span>
                  </div>
                </a>

                <!-- WhatsApp Direct Tap -->
                <a 
                  [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex items-center gap-3.5 p-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-xs active:scale-98"
                >
                  <div class="w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div class="text-left leading-tight">
                    <span class="text-emerald-100 font-bold block text-[11px] uppercase tracking-wider">Conversa no WhatsApp</span>
                    <span class="font-black text-base text-white">Enviar Mensagem</span>
                  </div>
                </a>

                <!-- Facebook Page Direct Tap -->
                <a 
                  [href]="catalogService.FACEBOOK_URL" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex items-center gap-3.5 p-3.5 rounded-xl bg-blue-50 hover:bg-blue-100/70 transition-colors border border-blue-200"
                >
                  <div class="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div class="text-left">
                    <span class="text-blue-800 font-medium block text-[10px]">Página de Facebook</span>
                    <span class="font-bold text-xs text-blue-950">Costura &amp; Tendências</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Atelier Address & Hours -->
            <div class="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 class="font-extrabold text-base sm:text-lg text-slate-950">Morada &amp; Horário</h3>
              
              <div class="text-xs text-slate-600 space-y-2.5">
                <div class="flex items-start gap-2.5">
                  <span class="text-lg">📍</span>
                  <p><strong class="text-slate-950">Argivai</strong>, Póvoa de Varzim, Portugal</p>
                </div>

                <div class="flex items-start gap-2.5">
                  <span class="text-lg">🕒</span>
                  <div class="space-y-0.5">
                    <p><strong class="text-slate-950">Segunda a Sexta:</strong> 09:00 - 19:00</p>
                    <p><strong class="text-slate-950">Sábado:</strong> 09:30 - 13:00</p>
                    <p><strong class="text-slate-950">Domingo:</strong> Encerrado</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: Interactive Form / Message -->
          <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            
            <div>
              <h3 class="font-extrabold text-xl text-slate-950">Envie-nos uma Mensagem ou Pedido de Medição</h3>
              <p class="text-xs text-slate-500 mt-1">Preencha o formulário abaixo e entraremos em contacto consigo pelo WhatsApp ou telefone para agendamento.</p>
            </div>

            @if (formSent()) {
              <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <div class="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 class="font-bold text-slate-900 text-sm">Mensagem enviada com sucesso!</h4>
                <p class="text-xs text-slate-600">Obrigado pelo contacto. Responderemos em breve.</p>
                <button (click)="formSent.set(false)" class="text-xs font-bold text-emerald-800 underline mt-2 cursor-pointer">
                  Enviar outra mensagem
                </button>
              </div>
            } @else {
              <form (submit)="submitForm($event)" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Nome Completo:</label>
                    <input 
                      type="text" 
                      required 
                      [(ngModel)]="name" 
                      name="name" 
                      placeholder="O seu nome"
                      class="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Telemóvel / WhatsApp:</label>
                    <input 
                      type="tel" 
                      required 
                      [(ngModel)]="phone" 
                      name="phone" 
                      placeholder="Ex: 919 943 031"
                      class="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Especialidade Pretendida:</label>
                    <select 
                      [(ngModel)]="serviceType" 
                      name="serviceType"
                      class="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 font-medium"
                    >
                      <option value="cortinados-calha">Cortinados de Onda Perfeita em Calha</option>
                      <option value="estores-rolo">Estores de Rolo &amp; Blackout Técnico</option>
                      <option value="roupa-cama">Roupa de Cama &amp; Edredões 100% Algodão</option>
                      <option value="mesa-cozinha">Toalhas de Mesa Confeccionadas por Medida</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Localidade da Sua Casa:</label>
                    <input 
                      type="text" 
                      [(ngModel)]="location" 
                      name="location" 
                      placeholder="Ex: Póvoa de Varzim, Vila do Conde, Porto..."
                      class="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">A sua Mensagem ou Dimensões:</label>
                  <textarea 
                    rows="4" 
                    required 
                    [(ngModel)]="message" 
                    name="message" 
                    placeholder="Descreva o tipo de cortinados em calha, tecidos ou agendamento de medição..."
                    class="w-full text-xs p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full bg-slate-950 hover:bg-slate-800 text-white py-4 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-98"
                >
                  Enviar Pedido de Informação / Agendamento
                </button>
              </form>
            }

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  catalogService = inject(CatalogService);

  name = '';
  phone = '';
  location = '';
  serviceType = 'cortinados-calha';
  message = '';
  formSent = signal(false);

  submitForm(e: Event) {
    e.preventDefault();
    if (!this.name || !this.phone || !this.message) return;

    let text = `Olá! O meu nome é *${this.name}* (Tel: ${this.phone}).\nServiço pretendido: *${this.serviceType}*`;
    if (this.location) text += `\nLocalidade: ${this.location}`;
    text += `\nMensagem: ${this.message}`;

    const url = `https://wa.me/${this.catalogService.PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    this.formSent.set(true);
  }
}
