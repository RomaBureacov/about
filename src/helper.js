/**
 * Creates a table of contents using the page's header tags.
 *
 * Note that this treats every header as the same.
 */
let setupToC = () => {
    const headings = "h1, h2, h3, h4, h5, h6";
    /** @type HTMLElement */
    const ToC = document.querySelector("#TableOfContents");
    const ol = document.createElement("ol");

    /** @type {HTMLHeadingElement[]} */
    const hList = [];
    document.querySelectorAll(headings).forEach(e => hList.push(e));
    hList.reverse();

    const levelOf = (h) => h.tagName[1];

    const algorithm = (previousLevel, parentList) => {
        while (hList.length > 0) {
            const h = hList.pop();
            h.id = (h.id) ? h.id : h.textContent;
            const currentLevel = levelOf(h);

            if (previousLevel > currentLevel) {
                // if next is more shallow...
                // put it back
                hList.push(h);
                return;
            } else if (previousLevel < currentLevel) {
                // if going deeper...
                // put it back
                hList.push(h);
                // make a new list
                const list = document.createElement("ol");
                // make sublist
                algorithm(currentLevel, list);
                // add to parent
                parentList.appendChild(list);
            } else { // they're equal
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = `#${h.id}`;
                a.textContent = h.textContent;
                li.appendChild(a);
                parentList.appendChild(li);
            }
        }
    }

    algorithm(1, ol);

    ToC.appendChild(ol);
}


/**
 * Replaces tags with the class of `lorem-ipsum` with pre-generated lorem ipsum
 * filler text.
 */
let loremIpsum = () => {
    for (let span of document.querySelectorAll(".lorem-ipsum")) {
        let
            a = document.createElement("p"),
            b = document.createElement("p"),
            c = document.createElement("p")
        ;

        a.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a dui tincidunt, tincidunt nulla elementum, rhoncus nulla. Aenean dictum gravida eleifend. Praesent cursus ligula nibh, ut congue nibh semper at. Proin urna nibh, malesuada at mi a, gravida maximus libero. Etiam lacus tellus, pellentesque nec porttitor nec, efficitur in felis. Praesent at cursus massa. In urna erat, eleifend in luctus at, finibus a ipsum. Curabitur varius odio tristique dui lobortis, vitae mattis neque dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed dui erat. Etiam et urna ex."
        b.textContent = "Phasellus ut ullamcorper libero. Phasellus sed elit nec sem interdum convallis sit amet eu risus. Sed tempus felis metus, ut finibus odio laoreet vel. Morbi mollis hendrerit aliquet. Pellentesque vel tellus magna. Pellentesque scelerisque ante vitae aliquam dapibus. Sed efficitur tincidunt vehicula. Morbi scelerisque enim non mauris ullamcorper euismod. Ut sit amet condimentum ligula, bibendum imperdiet nisi. Quisque vel porttitor lectus, ut mattis nulla. Sed sollicitudin finibus orci at scelerisque. Phasellus egestas nisi nunc, vel bibendum ipsum dapibus quis. Maecenas dignissim tortor risus, at rhoncus nisl pretium at."
        c.textContent = "Sed dui erat, pulvinar eget diam eu, tincidunt suscipit justo. Fusce volutpat vel lorem quis pretium. Ut pulvinar lectus vitae consectetur rhoncus. In id sodales ligula. Duis nulla nibh, auctor a sem ut, ultricies scelerisque quam. Aliquam a felis id enim elementum faucibus ut vel ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut quis turpis quis lorem consectetur condimentum posuere ac orci. Vestibulum pulvinar nibh quis porttitor efficitur. Fusce vehicula hendrerit ligula fermentum auctor."
        span.append(a, b, c);
    }
}

// Do the stuff
setupToC();
loremIpsum();