export const generateHtmlFrame = (matrix) =>
    "<pre>" + matrix.map((row) => row.join("")).join("<br>") + "</pre>";
