export class ScrollToComponent {
    protected on_keypress(event: KeyboardEvent) {
        if (event.which === 13) (event.currentTarget as HTMLElement).closest('form').focus();
      }
    
      public on_focus(event: FocusEvent) {
        const elm = (event.currentTarget as HTMLElement);
        const offset = parseInt(!!elm.attributes["scroll"] ? elm.attributes["scroll"].value : '0');
        setTimeout(() => elm.closest('.scroll-content').scrollTo(0, 95 * (parseInt(elm.attributes["tabindex"].value) - 1) + offset), 20);
      }
}