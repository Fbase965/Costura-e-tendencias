import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contacto" class="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9] pb-32 sm:pb-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header with Serif Elegance -->
        <div class="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span class="text-[11px] font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] block mb-2">
            Localização &amp; Atendimento
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Visite o Atelier ou Fale Connosco
          </h2>
          <p class="text-sm sm:text-base text-[#57534E] mt-3 max-w-xl mx-auto font-sans">
            Estamos localizados em Argivai, na Póvoa de Varzim. Teremos todo o gosto em recebê-lo(a) ou agendar uma visita de medição em sua casa.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          <!-- Left: Atelier Direct Contact Cards -->
          <div class="lg:col-span-5 space-y-5">
            
            <!-- Direct Phone & WhatsApp Card -->
            <div class="bg-white p-7 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-4">
              <h3 class="font-serif font-bold text-xl text-[#1C1917]">Atendimento Direto</h3>
              
              <div class="space-y-3">
                <!-- Phone Direct Tap -->
                <a 
                  href="tel:+351919943031" 
                  class="flex items-center gap-3.5 p-4 rounded-2xl bg-[#1C1917] text-white hover:bg-[#292524] transition-all shadow-xs active:scale-98"
                >
                  <div class="w-10 h-10 bg-[#292524] text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="text-left leading-tight">
                    <span class="text-[#A8A196] font-bold block text-[10px] uppercase tracking-wider font-sans">Chamada Telefónica</span>
                    <span class="font-extrabold text-base text-white font-sans">+351 919 943 031</span>
                  </div>
                </a>

                <!-- WhatsApp Direct Tap -->
                <a 
                  [href]="'https://wa.me/' + catalogService.PHONE_CLEAN" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex items-center gap-3.5 p-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-xs active:scale-98"
                >
                  <div class="w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div class="text-left leading-tight">
                    <span class="text-emerald-100 font-bold block text-[10px] uppercase tracking-wider font-sans">Conversa no WhatsApp</span>
                    <span class="font-extrabold text-base text-white font-sans">Enviar Mensagem</span>
                  </div>
                </a>

                <!-- Facebook Direct Tap -->
                <a 
                  [href]="catalogService.FACEBOOK_URL" 
                  target="_blank" 
                  rel="noopener" 
                  class="flex items-center gap-3.5 p-3.5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 transition-colors border border-blue-200/80"
                >
                  <div class="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div class="text-left">
                    <span class="text-blue-800 font-medium block text-[10px] font-sans">Página de Facebook</span>
                    <span class="font-bold text-xs text-blue-950 font-sans">Costura &amp; Tendências</span>
                  </div>
                </a>
              </div>
            </div>

            <!-- Atelier Location & Hours Card -->
            <div class="bg-white p-7 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-3 font-sans">
              <h3 class="font-serif font-bold text-xl text-[#1C1917]">Morada &amp; Horário</h3>
              
              <div class="text-xs text-[#57534E] space-y-2.5">
                <div class="flex items-start gap-2.5">
                  <span class="text-base shrink-0">📍</span>
                  <p><strong class="text-[#1C1917]">Argivai</strong>, Póvoa de Varzim, Portugal</p>
                </div>

                <div class="flex items-start gap-2.5">
                  <span class="text-base shrink-0">🕒</span>
                  <div>
                    <p class="font-bold text-[#1C1917]">Segunda a Sexta: 09:00 - 19:00</p>
                    <p>Sábado: 09:30 - 13:00</p>
                    <p class="text-[11px] text-[#78716C] mt-0.5">Domingos e Feriados: Encerrado</p>
                  </div>
                </div>

                <div class="flex items-start gap-2.5">
                  <span class="text-base shrink-0">🚗</span>
                  <p>Estacionamento fácil e gratuito junto ao atelier.</p>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: Clean Contact Form -->
          <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE3D9] shadow-sm space-y-6">
            
            <div>
              <h3 class="font-serif font-bold text-2xl text-[#1C1917]">Fale Connosco</h3>
              <p class="text-xs sm:text-sm text-[#78716C] mt-1 font-sans">Preencha os seus dados e entraremos em contacto consigo pelo WhatsApp ou telefone para tirar dúvidas ou agendar uma medição.</p>
            </div>

            @if (formSent()) {
              <div class="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 class="font-bold text-sm text-emerald-950 font-sans">Mensagem Enviada com Sucesso!</h4>
                <p class="text-xs text-emerald-800 font-sans">Obrigado pelo seu contacto. Entraremos em contacto muito brevemente pelo WhatsApp ou chamada.</p>
              </div>
            } @else {
              <form (submit)="submitForm($event)" class="space-y-4 font-sans">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-[#1C1917]">O Seu Nome *</label>
                    <input 
                      type="text" 
                      name="name" 
                      [(ngModel)]="formData.name" 
                      required 
                      placeholder="Ex: Maria Silva" 
                      class="w-full px-4 py-3.5 rounded-xl border border-[#D6CEC3] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1917] text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-[#1C1917]">Telemóvel / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      [(ngModel)]="formData.phone" 
                      required 
                      placeholder="Ex: 912 345 678" 
                      class="w-full px-4 py-3.5 rounded-xl border border-[#D6CEC3] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1917] text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-[#1C1917]">Localidade (para medição)</label>
                    <input 
                      type="text" 
                      name="location" 
                      [(ngModel)]="formData.location" 
                      placeholder="Ex: Póvoa de Varzim, Vila do Conde, etc." 
                      class="w-full px-4 py-3.5 rounded-xl border border-[#D6CEC3] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1917] text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label class="text-xs font-bold text-[#1C1917]">Artigo de Interesse</label>
                    <select 
                      name="interest" 
                      [(ngModel)]="formData.interest"
                      class="w-full px-4 py-3.5 rounded-xl border border-[#D6CEC3] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1917] text-xs sm:text-sm transition-all"
                    >
                      <option value="Cortinados de Onda Perfeita em Calha">Cortinados em Calha Técnica</option>
                      <option value="Estores de Rolo & Blackout">Estores de Rolo / Blackout</option>
                      <option value="Roupa de Cama 100% Algodão">Roupa de Cama 100% Algodão</option>
                      <option value="Toalhas de Mesa por Medida">Toalhas de Mesa por Medida</option>
                      <option value="Outro Artigo ou Dúvida">Outro Assunto / Dúvida</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-[#1C1917]">Mensagem / Detalhes (Opcional)</label>
                  <textarea 
                    name="message" 
                    [(ngModel)]="formData.message" 
                    rows="3" 
                    placeholder="Indique-nos se pretende agendamento de medição em sua casa ou informações sobre tecidos..." 
                    class="w-full px-4 py-3 rounded-xl border border-[#D6CEC3] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1C1917] text-xs sm:text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full bg-[#1C1917] hover:bg-[#292524] text-white py-4 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer active:scale-98"
                >
                  Enviar Mensagem
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
  formSent = signal(false);

  formData = {
    name: '',
    phone: '',
    location: '',
    interest: 'Cortinados de Onda Perfeita em Calha',
    message: ''
  };

  submitForm(e: Event) {
    e.preventDefault();
    if (!this.formData.name || !this.formData.phone) return;

    // Send direct to WhatsApp with all filled fields
    const text = `*Novo Contacto do Site*\n👤 Nome: ${this.formData.name}\n📱 Telemóvel: ${this.formData.phone}\n📍 Localidade: ${this.formData.location || 'Não especificada'}\n🪟 Interesse: ${this.formData.interest}\n💬 Mensagem: ${this.formData.message || 'Sem notas adicionais'}`;
    const url = `https://wa.me/${this.catalogService.PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    this.formSent.set(true);
  }
}
