
const fileList = document.getElementById("file-list");

fetch("data.json")
.then(response => response.json())
.then(data => {
  for (const key in data) {
    const ul = document.createElement("ul");
    ul.innerHTML = `<strong>${key}:</strong>`;
    fileList.appendChild(ul);

    data[key].forEach(file => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${file.url}">${file.name}</a>`;
      ul.appendChild(li);
    });
  }
});