export function submitForm(id: string, event: Event) {
    const form = document.getElementById(id) as HTMLFormElement | null;
    if (form) {
        form.submit();
    }
    event.stopPropagation();
}
