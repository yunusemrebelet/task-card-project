import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements AfterViewInit {
  // Array of card data, each containing a name, image URL, and profile link
  cards = [
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
    {
      name: 'NickDe Jesus',
      imageUrl:
        'https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg',
      profileLink: '#',
    },
  ];

  // ViewChild to reference the card element in the template
  @ViewChild('card') card!: ElementRef;
  // ViewChild to reference the shine effect element in the template
  @ViewChild('shine') shine!: ElementRef;

  constructor(private renderer: Renderer2) {}

  // Lifecycle hook that runs after the view is initialized
  ngAfterViewInit(): void {
    // Initialize the card effects (e.g., rotation, shine effect)
    this.initializeCardEffects();
  }

  // Method to set up the card hover effects
  private initializeCardEffects(): void {
    // Get the native HTML element of the card
    const cardElement = this.card.nativeElement as HTMLElement;
    // Get the native HTML element of the shine effect
    const shineElement = this.shine.nativeElement as HTMLElement;

    // Add an event listener for mouse movement over the card
    this.renderer.listen(cardElement, 'mousemove', (e: MouseEvent) => {
      // Calculate the mouse position relative to the card's bounding box
      const rect = cardElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate rotation angles based on mouse position
      const rotateX = (mouseY / rect.height - 0.5) * 5;
      const rotateY = (mouseX / rect.width - 0.5) * -5;
      this.renderer.setStyle(
        cardElement,
        'transform',
        `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      );

      // Adjust shine effect based on mouse position
      this.renderer.setStyle(shineElement, 'opacity', '1');
      this.renderer.setStyle(
        shineElement,
        'transform',
        `translate(${mouseX}px, ${mouseY}px)`
      );
    });

    // Add an event listener for when the mouse leaves the card
    this.renderer.listen(cardElement, 'mouseleave', () => {
      // Reset the card's rotation when the mouse leaves
      this.renderer.setStyle(
        cardElement,
        'transform',
        `perspective(700px) rotateX(0) rotateY(0)`
      );

      // Hide the shine effect when the mouse leaves
      this.renderer.setStyle(shineElement, 'opacity', '0');
    });
  }
}
