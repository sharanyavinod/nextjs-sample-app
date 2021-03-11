const { DOMParser } = require('xmldom');
const { PUBLIC_URL, REACT_APP_AEM_PROJECT_ROOT} = process.env;

export default function handler(req, res) {
  let { path = '' } = req.query;
  if(path) {
      path = path.split(REACT_APP_AEM_PROJECT_ROOT)[1];
  }

  fetch(PUBLIC_URL + (path || ''))
    .then(t => t.text())
    .then(t => {
        const parser = new DOMParser();
	    const doc = parser.parseFromString(t, 'text/html');
        const data = doc.getElementById("__NEXT_DATA__").textContent;
        res.status(200).json(data);
    });
}
