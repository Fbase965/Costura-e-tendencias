import { Component, HostListener, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-2 gap-3 sm:gap-4" [ngClass]="columnsClass()">
      @for (photo of photos(); track photo.src; let idx = $index) {
        <button
          type="button"
          (click)="open(idx)"
          class="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EAE3D9] border border-[#EAE3D9] cursor-zoom-in"
          [attr.aria-label]="'Ampliar foto: ' + photo.alt"
        >
          <img
            [src]="photo.src"
            [alt]="photo.alt"
            [attr.width]="photo.width"
            [attr.height]="photo.height"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1C1917]/80 to-transparent text-white text-xs sm:text-sm font-sans font-semibold text-left px-3 pt-8 pb-2.5">
            {{ photo.alt }}
          </span>
        </button>
      }
    </div>

    <!-- Lightbox -->
    @if (openIndex() !== null) {
      <div
        class="fixed inset-0 z-[60] bg-[#1C1917]/95 flex flex-col items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        (click)="close()"
      >
        <img
          [src]="current().src"
          [alt]="current().alt"
          class="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
          (click)="$event.stopPropagation()"
        />
        <p class="mt-4 text-sm sm:text-base text-[#FAF8F5] font-sans text-center">{{ current().alt }}</p>

        <div class="mt-4 flex items-center gap-3" (click)="$event.stopPropagation()">
          <button type="button" (click)="step(-1)" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold font-sans cursor-pointer" aria-label="Foto anterior">&larr; Anterior</button>
          <span class="text-sm text-[#A8A196] font-sans">{{ (openIndex() ?? 0) + 1 }} / {{ photos().length }}</span>
          <button type="button" (click)="step(1)" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold font-sans cursor-pointer" aria-label="Foto seguinte">Seguinte &rarr;</button>
        </div>

        <button type="button" (click)="close()" class="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none cursor-pointer" aria-label="Fechar">&times;</button>
      </div>
    }
  `
})
export class PhotoGridComponent {
  photos = input.required<Photo[]>();
  columnsClass = input('md:grid-cols-4');

  openIndex = signal<number | null>(null);

  current() {
    return this.photos()[this.openIndex() ?? 0];
  }

  open(idx: number) {
    this.openIndex.set(idx);
  }

  close() {
    this.openIndex.set(null);
  }

  step(delta: number) {
    const total = this.photos().length;
    this.openIndex.update(i => ((i ?? 0) + delta + total) % total);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.openIndex() === null) return;
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowRight') this.step(1);
    if (event.key === 'ArrowLeft') this.step(-1);
  }
}
