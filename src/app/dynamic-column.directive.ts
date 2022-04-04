import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: "[dynamicColumn]"
})
export class DynamicColumnDirective implements OnInit {

  constructor(private renderer: Renderer2, private column:ElementRef) {
    this.column = column;
  }

  @Input("dynamicColumn") dynamicCol: Boolean;

  private pressed: boolean;
  private startPos: number;
  private width: number;
  private newWidth: number;
  private mattable: HTMLElement;

  ngOnInit(): void {
    // get elements to listen and add to
    const row = this.renderer.parentNode(this.column.nativeElement);
    const thead = this.renderer.parentNode(row);
    this.mattable = this.renderer.parentNode(thead);

    // add resizer element for user to grab
    const resizer = this.renderer.createElement("span");
    this.renderer.addClass(resizer, "resize-holder");
    this.renderer.appendChild(this.column.nativeElement, resizer);
    
    // set up listeners
    this.renderer.listen(resizer, "mousedown", this.onMouseDown);
    this.renderer.listen(this.mattable, "mousemove", this.onMouseMove);
    this.renderer.listen("document", "mouseup", this.onMouseUp);
  }

  onMouseDown = (event: MouseEvent) => {
    // get initial width and x when mouse down
    this.pressed = true;
    this.startPos = event.pageX;
    this.width = this.column.nativeElement.offsetWidth;
  }

  onMouseMove = (event: MouseEvent) => {
    // calc and apply new width on mouse move
    const offset = 5;
    if (this.pressed && event.buttons == 1){
      this.renderer.addClass(this.mattable, "resizing");
      this.newWidth = this.width + (event.pageX - this.startPos - offset);
      this.renderer.setStyle(this.column.nativeElement, "width", `${this.newWidth}px`);
    }
  };

  onMouseUp = (event: MouseEvent) => {
    // mouse off set pressed to false and remove the resizing style class
    if (this.pressed){
      this.pressed = false;
      this.renderer.removeClass(this.mattable, "resizing");
      this.width = this.newWidth; // sets directive for elements width as a property in case of manipulation need
    }
  }
}
