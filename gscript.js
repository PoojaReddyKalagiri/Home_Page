var galery = {
  "images": [{
    "imgUrl": "download.jpeg"
    ,
     "imageName":  'Beach',
     "imgInfo": 'recreational place',
     "imgDate": "2017-09-21"
  
 }, {"imgUrl" : "download (1).jpeg"
  ,
  "imageName":  'painting',
     "imgInfo": 'done with oil pastels',
     "imgDate": "2017-09-22"
  },
  {
    "imgUrl": "download (2).jpeg"
    ,
    "imageName":  'Logan',
     "imgInfo": 'features Hugh Jackman',
     "imgDate": "2017-09-22"
  },
  {
    "imgUrl": "download (3).jpeg"
    ,
    "imageName":  'Joker',
     "imgInfo": 'Heath Ledger',
     "imgDate": "2016-06-23"
  },
  {
    "imgUrl": "download (4).jpeg"
    ,
    "imageName":  'amazing sunset',

     "imgInfo": 'Tokyo city',
     "imgDate": "2016-05-28"
  },
  {
    "imgUrl": "download (5).jpeg"
    ,
    "imageName":  'Shimla',
     "imgInfo": 'hill station',
     "imgDate": "2014-07-21"
  },
  {
    "imgUrl": "download (6).jpeg"
    ,
    "imageName":  'village',
     "imgInfo": 'India',
     "imgDate": "2016-05-21"
  },
  {
    "imgUrl": "download (7).jpeg"
    ,
    "imageName":  'Finding Nemo',
     "imgInfo": 'English Movie',
     "imgDate": "2016-05-21"
  },
  {
    "imgUrl": "images (2).jpeg"
    ,
    "imageName":  'Albert Einstein',
     "imgInfo": 'Great Scientist',
     "imgDate": "2016-05-28"
  }

  ]
};

galery.images.forEach( function(obj) {

  var x = document.createElement("DIV");
  var imge = new Image();
  imge.src = obj.imgUrl;
  imge.setAttribute("class", "galleryImage");
  imge.setAttribute("alt", obj.imageName);
  x.appendChild(imge);
 document.getElementById("img-container").appendChild(x);
});
