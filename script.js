// ---------- // ---------- // ---------- // ---------- // ---------- // ---------- //

fetch("https://api.github.com/repos/ahmetalper0/database/contents/images.json")

  .then((response) => response.json())

  .then((data) => {

    const json_data = JSON.parse(atob(data.content));
    const image_container = document.querySelector(".image_container");

    image_container.innerHTML = "";

    json_data.images.forEach((image) => {

      const image_element = document.createElement("img");

      image_element.src = image.url;

      image_element.addEventListener("click", function () {

        fetch(image.url)

          .then((response) => response.blob())

          .then((blob) => {

            var link = document.createElement("a");

            link.href = window.URL.createObjectURL(blob);

            link.download = "image.jpg";

            link.click();

            window.URL.revokeObjectURL(blob);

          })

          .catch((error) => console.error("error", error));

      });

      image_container.insertBefore(image_element, image_container.firstChild);

    });

  })

  .catch((error) => console.error("error", error));

// ---------- // ---------- // ---------- // ---------- // ---------- // ---------- //

const button = document.querySelector(".prompt-button");
const input = document.querySelector(".prompt");

button.addEventListener("click", function () {

  const input_value = input.value;

  input.value = "";

  fetch(`https://bcf100d0-03fd-4a16-a728-8612d35e60e5.deepnoteproject.com?prompt=${input_value}`)
    
  .then((response) => response.json())

  .then((data) => {
    
    console.log("data : ", data);

  })

  .catch((error) => console.error("error", error));

});

// ---------- // ---------- // ---------- // ---------- // ---------- // ---------- //