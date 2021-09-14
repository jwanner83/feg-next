const settings = {
  "name": "feg-gossau",
  "state": {
    "frontity": {
      "url": "https://feg-gossau.ch",
      "title": "FEG Gossau",
      "description": "Freie Evangelische Gemeinde in Gossau"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Agenda",
              "/agenda"
            ],
            [
              "Predigten",
              "/predigten"
            ],
            [
              "News",
              "/news/"
            ]
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://feg-gossau.ch",
          postTypes: [
            {
              type: "predigten",
              endpoint: "predigten",
              archive: "/predigten"
            },
            {
              type: "news",
              endpoint: "news",
              archive: "/news"
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
