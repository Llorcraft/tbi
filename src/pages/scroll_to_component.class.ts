import { Keyboard } from "ionic-angular";

export class ScrollToComponent {
  constructor(protected keyboard: Keyboard) { }

  protected on_keypress(event: KeyboardEvent) {
    if (event.which === 13) {
      (event.currentTarget as HTMLElement).closest('.scroll-content').scrollTo(0, 0);
      document.getElementById('submit-button').focus();
      //this.keyboard.hideFormAccessoryBar(true);
    }
  }

  public scrollTo(position: number) {
    Array.from(document.getElementsByClassName('scroll-content')).forEach(e => e.scrollTo(0, position));
  }
  public on_focus(event: any) {
    // setTimeout(() => {
    //   event._elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //   setTimeout(() => {
    //     event._elementRef.nativeElement.closest('.scroll-content').scrollTop -= 30;
    //   }, 250);
    // }, 500);

    setTimeout(() => {
      const elm = event._elementRef.nativeElement
      const offset = 60;
      elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
      setTimeout(()=> elm.closest('.scroll-content').scrollTop += elm.closest('ion-item').getBoundingClientRect().top - offset, 150);
      //this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
    }, 250);

    // setTimeout(() => {
    //   const elm = event._elementRef.nativeElement
    //   const offset = 60;
    //   //elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
    //   elm.closest('.scroll-content').scrollTop =  elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset;
    // }, 250);
  }

  protected scroll(elm: any, top: number) {
    if (elm.scrollTop < top) {
      elm.scrollTo(0, elm.scrollTop += 50);
      setTimeout(() => this.scroll(elm, top), 1);
    } else {
      elm.scrollTo(0, top)
    }
  }
}