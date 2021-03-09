const { DOMParser } = require('xmldom');

export default function handler(req, res) {
  fetch('http://localhost:3000/')
    .then(t => t.text())
    .then(t => {
        const parser = new DOMParser();
	    const doc = parser.parseFromString(t, 'text/html');
        const data = doc.getElementById("__NEXT_DATA__").textContent;
        res.status(200).json(data);
    });
}
