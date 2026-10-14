import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../services/catalog.service';
import { Photo, PhotoGridComponent } from './photo-grid.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PhotoGridComponent],
  template: `
    <section id="trabalhos" class="py-20 sm:py-28 bg-white border-b border-[#EAE3D9]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section Header with Editorial Serif -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span class="text-xs font-sans font-bold text-[#78716C] uppercase tracking-[0.25em] block mb-2">
            Trabalhos Realizados
          </span>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Cortinados Instalados em Casas Reais
          </h2>
          <p class="text-sm sm:text-base text-[#57534E] mt-3 max-w-xl mx-auto font-sans leading-relaxed">
            Fotografias reais de instalações feitas pelo nosso atelier, tal como as publicamos no Facebook. Toque numa foto para a ver maior.
          </p>
        </div>

        <app-photo-grid [photos]="photos" />

        <div class="mt-10 text-center">
          <a [href]="catalogService.FACEBOOK_URL" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#1C1917] bg-white px-5 py-2.5 rounded-full border border-[#EAE3D9] shadow-2xs hover:shadow-xs transition-all">
            Ver mais trabalhos no Facebook &rarr;
          </a>
        </div>

      </div>
    </section>
  `
})
export class GalleryComponent {
  catalogService = inject(CatalogService);

  photos: Photo[] = [
    { src: 'assets/galeria/cortinado-sala-duas-janelas.webp', alt: 'Cortinados de onda numa sala com duas janelas', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-calha-embutida.webp', alt: 'Voile em calha embutida no teto', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-quarto-cama.webp', alt: 'Cortinado de onda num quarto', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-voile-sala-jantar.webp', alt: 'Voile e cortinado numa sala de jantar', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-quarto-bege.webp', alt: 'Cortinado bege em calha num quarto', width: 750, height: 1000 },
    { src: 'assets/galeria/cortinado-voile-parede.webp', alt: 'Voile de parede a parede', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-quarto-voile.webp', alt: 'Voile e cortinado num quarto', width: 1000, height: 750 },
    { src: 'assets/galeria/cortinado-voile-sala.webp', alt: 'Voile e cortinado numa sala', width: 1000, height: 750 }
  ];
}
