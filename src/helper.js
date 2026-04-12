

// set up table of contents
/** @type HTMLElement */
const ToC = document.querySelector("#TableOfContents");
const ol = document.createElement("ol");

for (let h of document.querySelectorAll("h1")) {
    h.id = h.id ? h.id : h.textContent;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${h.id}`
    a.textContent = h.textContent;

    li.appendChild(a);
    ol.appendChild(li);

    // add a reference back to the beginning
    const h_a = document.createElement("a")
    h_a.textContent = h.textContent;
    h_a.href = "#top"
    h.textContent = "";
    h.appendChild(h_a);
}

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

ToC.appendChild(ol);