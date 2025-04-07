import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;

    const mockRenderer = jasmine.createSpyObj<Renderer2>('Renderer2', ['setStyle']);

    const directive = new HighlightDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
