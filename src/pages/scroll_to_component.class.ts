export class ScrollToComponent {

  protected on_keypress(event: KeyboardEvent) {
    if (event.which === 13) {
      (event.currentTarget as HTMLElement).closest('.scroll-content').scrollTo(0, 0);
      document.getElementById('submit-button').focus();
    }
  }

  public on_focus(event: FocusEvent) {
    setTimeout(() => {
      const elm = (event.currentTarget || event.target) as HTMLElement;
      const offset = 60;
      elm.closest('.scroll-content').scrollTo(0, 0);
      elm.closest('.scroll-content').scrollTo(0, elm.closest('ion-item').getBoundingClientRect().top - offset);
    }, 250);
  }
}