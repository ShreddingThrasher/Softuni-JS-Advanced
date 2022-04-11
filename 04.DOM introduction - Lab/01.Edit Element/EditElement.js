function editElement(ref, match, replacer) {
    // TODO
    let text = ref.textContent;
    let regex = RegExp(match, 'g');
    let newContent = text.replace(regex, replacer);
    ref.textContent = newContent;
}