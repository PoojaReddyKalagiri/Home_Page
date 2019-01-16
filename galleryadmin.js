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
var list=galery.images.forEach(imgShow);

function imgShow(obj) {

  var x = document.createElement("DIV");
  var imge = new Image();
  imge.src = obj.imgUrl;
  imge.setAttribute("id", "galleryImage");
  imge.setAttribute("alt", obj.imageName);
  imge.setAttribute("onclick", "imagePop(this)");
  x.appendChild(imge);
 document.getElementById("img-container").appendChild(x);
};



function showIntro(data){
   var p=data.replace('https://PoojaReddyKalagiri.github.io/','');

        document.getElementById('url').value=p;

        for(var i=0;i<galery.images.length;i++){
              if(galery.images[i].imgUrl===p){
                document.getElementById('name').value=galery.images[i].imageName;
                document.getElementById('information').value=galery.images[i].imgInfo;
                document.getElementById('uDate').value=galery.images[i].imgDate;
                return;
              }
          }

}
var dta;

function imagePop(element){

        dta= element.src;
        var modal=document.getElementById('myModal');
        var imgInd=document.getElementById('img01');
        modal.style.display = "block";
        imgInd.src = dta;
        showIntro(dta);
        var spanClose = document.getElementsByClassName("closeN")[0];
        var spanDelete=document.getElementsByClassName("delete")[0];
        var spanEdit= document.getElementsByClassName("edit")[0];
        spanClose.onclick = function() { 
          modal.style.display = "none";
        } 
        var n=dta.replace('https://PoojaReddyKalagiri.github.io/','');

//delete
      
      spanDelete.onclick= function(){

         if(confirm("Are you sure to delete this item!!")){


             for(var i=0; i<galery.images.length;i++){
                    if(galery.images[i].imgUrl===n){
                       galery.images.splice(i,1);
                       alert("image successfully deleted");
                       modal.style.display= "none";
                       var mylist=document.getElementById("img-container");
                       mylist.removeChild(mylist.childNodes[i]);
                       return;
                    }
             }
         }else{
             alert("You have cancel the process of deletion");
             modal.style.display= "none";
         }
      }


//edit

         spanEdit.onclick=function(){

          var x =document.getElementById('url').value ;
          var y=[];
          for(var i=0;i<galery.images.length;i++){
              if(galery.images[i].imgUrl===n){

                y[0] = x;
                y[1] = document.getElementById('name').value;
                y[2] = document.getElementById('information').value;
                y[3] = document.getElementById('uDate').value;

             if(x.match(/\.(jpeg|jpg|gif|png)$/)==null){
                alert("Invalid Image Url!!");
                return false;
              }
              if(y[1]=="")
              {
                alert("Image Name must be filled!!");
                return false;
              }
              if(y[2]==""){
                alert("information must be filled!!");
                return false;
              }
              var dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
              if(y[3].match(dateReg) ==null){
                alert("Please enter correct date!");
                return false;
              }
              if(isValidDate(y[3])===false){
                alert("Probably you should edit on that date!");
                return false;
              }

                galery.images[i].imgUrl = x;
                galery.images[i].imageName = y[1];
                galery.images[i].imgInfo = y[2];
                galery.images[i].imgDate = y[3];
               


               var z = document.createElement("DIV");
               var imge = new Image();
               imge.src = x;
               imge.setAttribute("id", "galleryImage");
               imge.setAttribute("onclick", "imagePop(this)");
               z.appendChild(imge);
               var mylist=document.getElementById("img-container");

                mylist.replaceChild(z, mylist.childNodes[i]);
                modal.style.display= "none";
                return;
              }

          }
      }
  }

//popup for add image
function addImgPopup(){


                  var modal=document.getElementById('addImgModal');
                  addImgModal.style.display= "block";


                  var spanClose = document.getElementsByClassName("closeN")[1];
                  spanClose.onclick = function() { 
                  addImgModal.style.display = "none";
            }
}

// Adding image
function addImgfn(){


        var modal=document.getElementById('addImgModal');

        var k = galery.images.length;
        console.log(k);

        var nUrl=document.getElementById('url2').value;
        console.log(nUrl);
        var nName=document.getElementById('name2').value;
        var nInformation=document.getElementById('information2').value;
        var nUdate=document.getElementById('uDate2').value;
        console.log(nUdate);
        if(nUrl.match(/\.(jpeg|jpg|gif|png)$/)==null){
          alert("Invalid Image Url!!");
          return false;
        }
        if(nName=="")
        {
          alert("Image Name must be filled!!");
          return false;
        }
        if(nInformation==""){
          alert("information must be filled!!");
          return false;
        } 
        var dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
              if(nUdate.match(dateReg) ==null){
              alert("Please enter correct date!");
                return false;}
        if(isValidDate(nUdate)===false){
          alert("You can't upload a future image!");
          return false;
        }
        galery.images.push({
          "imgUrl" : nUrl,
          "imageName" :nName,
          "imgInfo" :nInformation,
          "imgDate" :nUdate
        });

             var p = galery.images.length;
             imgShow(galery.images[p-1]);
             modal.style.display= "none";


}

// checking whether date is valid or not
function isValidDate(dat){
        console.log(dat);
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
// document.write(today);
var data1 = dat.split('-');
console.log(data1);
if (data1[0] > yyyy){
// alert("You can't upload a future image!");
return false;}
if(data1[0] == yyyy){
      if (data1[1] > mm){
        // alert("You can't upload a future image!");
return false;}
      else {if (data1[1] == mm && data1[2] > dd){
        // alert("You can't upload a future image!");
return false;}
}
 }
}

