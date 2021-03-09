const { DOMParser } = require('xmldom');
const { PUBLIC_URL} = process.env;

export default function handler(req, res) {
  fetch(PUBLIC_URL)
    .then(t => t.text())
    .then(t => {
        const parser = new DOMParser();
	    const doc = parser.parseFromString(t, 'text/html');
        const data = doc.getElementById("__NEXT_DATA__").textContent;
        res.status(200).json(data);
    });
}
