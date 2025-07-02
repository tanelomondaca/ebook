const Epub = require("epub-gen");
const fs = require("fs");
const mammoth = require("mammoth");

// Leemos y convertimos el archivo .docx
mammoth.convertToHtml({ path: "./capitulo9.docx" })
  .then(result => {
    const html = result.value; // Contenido HTML limpio
    // console.log(html); // Puedes ver cómo quedó si quieres

    const options = {
      title: "Capítulo 9: VIDA Y ESCRITOS DE JOHN BROWN DE HADDINGTON",
      author: "Joel Beeke",
      output: "./mi-libro-cap-9.epub",
      cover: "./espiritualidad9.jpg", // Asegúrate de tener una portada
      lang: "es",
      content: [
        {
          title: "Capítulo 9: VIDA Y ESCRITOS DE JOHN BROWN DE HADDINGTON",
          data: html // Aquí va el contenido convertido desde Word
        }
      ]
    };

    return new Epub(options).promise;
  })
  .then(() => {
    console.log("✅ ¡EPUB generado desde Word!");
  })
  .catch(err => {
    console.error("❌ Error:", err);
  });
