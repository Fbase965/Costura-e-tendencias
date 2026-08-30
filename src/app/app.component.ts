import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { TrustBadgesComponent } from './components/trust-badges.component';
import { ServicesComponent } from './components/services.component';
import { WhyUsComponent } from './components/why-us.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FaqComponent } from './components/faq.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { FloatingWhatsappComponent } from './components/floating-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TrustBadgesComponent,
    ServicesComponent,
    WhyUsComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FloatingWhatsappComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <!-- Top Navigation -->
      <app-navbar></app-navbar>

      <!-- Main Content Flow -->
      <main class="flex-1">
        <app-hero></app-hero>
        <app-trust-badges></app-trust-badges>
        <app-services></app-services>
        <app-why-us></app-why-us>
        <app-testimonials></app-testimonials>
        <app-faq></app-faq>
        <app-contact></app-contact>
      </main>

      <!-- Footer -->
      <app-footer></app-footer>

      <!-- Floating Direct WhatsApp Action -->
      <app-floating-whatsapp></app-floating-whatsapp>
    </div>
  `
})
export class AppComponent {}
