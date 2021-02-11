var APP_DATA = {
  "scenes": [
    {
      "id": "0-middle",
      "name": "Middle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.073530951413856,
        "pitch": 0.17426410507753687,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 2.0027025892742696,
          "pitch": 0.10612097980026469,
          "rotation": 0,
          "target": "1-front"
        },
        {
          "yaw": -2.292751152687355,
          "pitch": 0.013628783962596813,
          "rotation": 0,
          "target": "2-bar"
        },
        {
          "yaw": -1.5063251602732013,
          "pitch": 0.04407013256773595,
          "rotation": 0,
          "target": "3-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9975390702648363,
          "pitch": 0.02226612789659299,
          "title": "Lounge",
          "text": ""
        }
      ]
    },
    {
      "id": "1-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.663076749743235,
        "pitch": 0.18672928782011233,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 3.0336490959873714,
          "pitch": 0.09643641551106796,
          "rotation": 0,
          "target": "0-middle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.970364759350705,
          "pitch": 0.10573031325952265,
          "title": "Front Desk",
          "text": "Text"
        },
        {
          "yaw": -1.4574175593578964,
          "pitch": 0.08326717742376744,
          "title": "Pool",
          "text": "Text"
        },
        {
          "yaw": 2.284476241616723,
          "pitch": -0.045207203822416275,
          "title": "Lounge",
          "text": ""
        }
      ]
    },
    {
      "id": "2-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.40435915278932555,
          "pitch": 0.02825247082113691,
          "rotation": 0,
          "target": "0-middle"
        },
        {
          "yaw": -1.7856249474589667,
          "pitch": 0.06825885957158206,
          "rotation": 0,
          "target": "3-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.963278186037769,
          "pitch": -0.05532689510075173,
          "title": "Lounge&nbsp;",
          "text": ""
        }
      ]
    },
    {
      "id": "3-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.3087890215066942,
        "pitch": 0.1029851347170272,
        "fov": 1.350113863664377
      },
      "linkHotspots": [
        {
          "yaw": 1.5241455535874184,
          "pitch": 0.050632210905400044,
          "rotation": 0,
          "target": "2-bar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6966845915032955,
          "pitch": 0.36363193354470624,
          "title": "Pool Table",
          "text": "Text"
        },
        {
          "yaw": -1.690864873426662,
          "pitch": 0.18682114960387075,
          "title": "Gym",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
