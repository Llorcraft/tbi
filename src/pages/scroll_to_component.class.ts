import { Keyboard } from "ionic-angular";

export class ScrollToComponent {
  constructor(protected keyboard: Keyboard) {
    // if (!!this.keyboard) {
    //   this.keyboard.onClose(() => {
    //     window.alert('Cerrado');
    //     Array.from(document.querySelectorAll('.scroll-content'))
    //       .forEach((x) => x.scrollTo(0, 0))
    //   });
    // }
  }
  protected on_keypress(event: KeyboardEvent) {
    if (event.which === 13) {
      (event.currentTarget as HTMLElement).closest('.scroll-content').scrollTo(0, 0);
      document.getElementById('submit-button').focus();
    }
  }

  public on_focus(event: any) {
    const elm = event._elementRef.nativeElement
    const offset = 60;
    elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
    this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
  }

  protected scroll(elm: any, top: number) {
    if (elm.scrollTop < top) {
      elm.scrollTo(0, elm.scrollTop += 50);
      setTimeout(() => this.scroll(elm, top), 1);
    } else {
      elm.scrollTo(0, top)
    }
  }

  // public on_focus(event: FocusEvent) {
  //   event.preventDefault();
  //   setTimeout(() => {
  //     const elm = (event.currentTarget || event.target) as HTMLElement;
  //     const offset = 60;
  //     elm.closest('.scroll-content').scrollTo(0, 0);
  //     elm.closest('.scroll-content').scrollTo(0, elm.closest('ion-item').getBoundingClientRect().top - offset);
  //   }, 250);
  // }
}