import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.css'],
})
export class InfoPersonComponent implements AfterViewInit {

  @Input() userName?: string;
  @Input() userAge?: number;
  @Input() userImg?: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const DECISION_THRESHOLD = 75;
    let isAnimating = false;
    let pullDeltaX = 0;

    const actualCard = this.elementRef.nativeElement.querySelector('article');

    this.elementRef.nativeElement.addEventListener('mousedown', startDrag);
    this.elementRef.nativeElement.addEventListener('touchstart', startDrag, {
      passive: true,
    });

    function startDrag(event: MouseEvent | TouchEvent) {
      if (isAnimating) return;

      // get the first article element
      const actualCard = (event.target as HTMLElement)?.closest('article');
      if (!actualCard) return;

      // get initial position of mouse or finger
      let startX: number;
      if (event instanceof MouseEvent) {
        startX = event.pageX;
      } else if (event instanceof TouchEvent) {
        if (event.touches.length > 0) {
          startX = event.touches[0].pageX;
        } else {
          // Manejar el caso donde no hay toques
          return;
        }
      } else {
        // Manejar otros tipos de eventos si es necesario
        return;
      }
      // const startX = event.pageX ?? event.touches[0].pageX;

      // listen the mouse and touch movements
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onEnd);

      document.addEventListener('touchmove', onMove, { passive: true });
      document.addEventListener('touchend', onEnd, { passive: true });

      function onMove(event: MouseEvent | TouchEvent) {
        // current position of mouse or finger
        let currentX: number;

        if ('touches' in event) {
          currentX = event.touches[0].pageX;
        } else {
          currentX = event.pageX;
        }

        // the distance between the initial and current position
        pullDeltaX = currentX - startX;

        // there is no distance traveled in X axis
        if (pullDeltaX === 0) return;

        // change the flag to indicate we are animating
        isAnimating = true;

        // calculate the rotation of the card using the distance
        const deg = pullDeltaX / 14;

        // apply the transformation to the card
        if (actualCard) {
          actualCard.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;
        }

        // change the cursor to grabbing
        if (actualCard) {
          actualCard.style.cursor = 'grabbing';
        }

        // change opacity of the choice info
        const opacity = Math.abs(pullDeltaX) / 100;
        const isRight = pullDeltaX > 0;

        const choiceEl = actualCard
          ? isRight
            ? actualCard.querySelector('.choice.like')
            : actualCard.querySelector('.choice.nope')
          : null;

        if (choiceEl instanceof HTMLElement) {
          choiceEl.style.opacity = String(opacity);
        }
      }

      function onEnd(event: MouseEvent | TouchEvent) {
        // remove the event listeners
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onEnd);

        document.removeEventListener('touchmove', onMove);
        document.removeEventListener('touchend', onEnd);

        // saber si el usuario tomo una decisión
        const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD;

        if (decisionMade) {
          const goRight = pullDeltaX >= 0;

          // add class according to the decision
          if (actualCard) {
            actualCard.classList.add(goRight ? 'go-right' : 'go-left');
          }
          // actualCard.classList.add(goRight ? 'go-right' : 'go-left');
          if (actualCard) {
            actualCard.addEventListener('transitionend', () => {
              actualCard.remove();
            });
          }
        } else {
          if (actualCard) {
            actualCard.classList.add('reset');
            actualCard.classList.remove('go-right', 'go-left');

            (actualCard.querySelectorAll('.choice') as NodeListOf<HTMLElement>).forEach((choice) => {
              choice.style.opacity = '0';
            });
          }
        }

        // reset the variables
        if (actualCard) {
          actualCard.addEventListener('transitionend', () => {
            actualCard.removeAttribute('style');
            actualCard.classList.remove('reset');

            pullDeltaX = 0;
            isAnimating = false;
          });
        }

        // reset the choice info opacity
        if (actualCard) {
          (actualCard.querySelectorAll('.choice') as NodeListOf<HTMLElement>).forEach((el) => {
            el.style.opacity = '0';
          });
        }
      }
    }
  }
}
