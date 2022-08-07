export function getBaseElementOrFail(elementId: string): Element {
    const element = document.getElementById(elementId);
    if (element === null) throw new Error(`Could not found the #${elementId} element!`);
    return element;
}
