
var blood = [
"9026568054",
"9555867997",
"8948515918",
"9140247615",
"8810824142",
"6388636736",
"7390081130",
"9115247511",
"6393293381",
"6306284218",
"9369985828",
"6394990798",
"8960055357",
"8004080382",
"7754081002",
"9140431055",
"8933050070",
"9369210188",
"9580496023",
"9555876251",
"7081289773",
"7236035459",
"9708153594",
"9336248929",
"9305651970",
"6395980363",
"7054162834",
"8528992012",
"9717166569",
"9368114901",
"8299507908",
"8577001721",
"8318968233",
"8299593865",
"8887807456",
"8368899572",
"9517229493",
"8318968233",
"7380358207",
"7781890843",
"6386134620"
];

var bloodName = [
"Rudraksh Rai",
"Khushi mahroj",
"Yasmeen",
"Prakhar Verma",
"Aryan Verma",
"Yuvraj Singh", 
"Abbas Mehdi Hasan", 
"Shikhar Upadhyay",
"Anuj Singh",
"Abhinav joshi", 
"Anishka Gupta",
"Rishabh dwivedi", 
"Shivang Mishra",
"Kashik Mishra",
"Adarsh gupta",
"Manish Verma",
"Purandev Singh",
"Abhinav Pandey",
"Aditya Nikhil Raj",
"Arpita Singh",
"Annat Tripathi",
"Anushka Shukla",
"Avanish dubey",
"Ayan Ahmad",
"Manjeet Gupta",
"Sumit Yadav",
"Jai bhargava", 
"Mohd. Sami",
"Shruti Shukla",
"Pallavi Raturi",
"Abhishek Kumar pandey",
"MOHD FAIZ QURESHI",
"Ali ahmed",
"Aditya Raj",
"Ayush Kathri",
"Shubham Tripathi",
"Mohd Adnan",
"Ali Ahmad",
"Shadab Ansari",
"Md Danish",
"Mohd Faiz Qureshi"  
];

// poster Numbers and names
var poster =["9142264877",
"9555288026",
"7651978103",
"8057886511",
"8429351328",
"7620720947",
"9120805567",
"9140853269",
"9120953242",
"8931980269",
"7267906352",
"8528728766",
"8726398174",
"7275170307",
"9648367868",
"7754851222",
"8368899572",
"9517229493",
"8318968233",
"7380358207",
"7781890843",
"6386134620"
];

var posterName = [
  "Sinu kumari",
  "Khushboo singh", 
  "Sumi Gaur",
  "Tanu Tiwari",
  "Priyanka Sharma", 
  "NIKITA SINGH",
  "Nuzhat",
  "Arpita Singh", 
  "Aditi Singh", 
  "Anu Kushwaha", 
  "Nandini Singh", 
  "Vaishnavi Agarwal", 
  "Shivani yadav",
  "Priya singh", 
  "Pratibha Umrao", 
  "MANSHA SAHU",
  "Shubham Tripathi",
  "Mohd Adnan",
  "Ali Ahmad",
  "Shadab Ansari",
  "Md Danish",
  "Mohd Faiz Qureshi"  
];

// Speech name and Number

var speech= [
"9101824025",
"9415175584",
"7973882236",
"7458048119",
"9508863897",
"8103139145",
"9651425978",
"6391511377",
"9793048868",
"8604449052",
"9115247511",
"8879367682",
"8081662051",
"6306286303",
"7307906942",
"9369985828",
"8368899572",
"9517229493",
"8318968233",
"7380358207",
"7781890843",
"6386134620"
];

var speechName = [
"Rishav Mishra", 
"Shivansh Chandra",
"Rohan Verma",
"Ayush pathak",
"Sonali kumari", 
"Khushi Singh", 
"Ananya Singhal",
"Eshika Singh Chauhan", 
"Deeksha Bhadauria", 
"Mohd Farhan", 
"Shikhar Upadhyay", 
"Agrima Dwivedi", 
"Khushi yadav",
"Dolly Shahi", 
"Sakshi Mishra", 
"Anishka Gupta",
"Shubham Tripathi",
"Mohd Adnan",
"Ali Ahmad",
"Shadab Ansari",
"Md Danish",
"Mohd Faiz Qureshi"  
];

//function for blood
const inputValBlood = document.querySelector("#name-b");
const submit_btn_b = document.querySelector("#submit-b");
submit_btn_b.addEventListener("click",()=>{
    let val = inputValBlood.value;
    let roll = prompt("Enter Your Phone No: ");
    
    let isValid = false;   
    for(let i=0; i<blood.length; i++){
      if(blood[i] == roll && bloodName[i].toLowerCase() == val.toLowerCase()){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person, please fill name which you had provided at the time of Registration... ");
    }else{
      generatePDFBlood(val);
      alert(val+" , your blood donation certificate is generated successfully...");
    }

  
});

const generatePDFBlood = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./Bld_dn_camp.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Blood Donation Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};



// function for Poster
const inputValPoster = document.querySelector("#name-p");
const submit_btn_p = document.querySelector("#submit-p");
submit_btn_p.addEventListener("click",()=>{
    let val = inputValPoster.value;
    let key = prompt("Enter Your Phone No: ");
    let isValid = false;   
    for(let i=0; i<poster.length; i++){
      if(poster[i] == key){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person..");
    }else{
      generatePDFPoster(val);
      alert(val+" , your certification for poster making competition is generated successfully...");
    }  
});

const generatePDFPoster = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./poster_making.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Poster Making Participation Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};


// function for speech
const submit_btn_s = document.querySelector("#submit-s");
const inputValSpeech = document.querySelector("#name-s");
submit_btn_s.addEventListener("click",()=>{
  let val = inputValSpeech.value;
  let roll = prompt("Enter Your Phone No: ");
    let isValid = false;   
    for(let i=0; i<speech.length; i++){
      if(speech[i] == roll){
        isValid = true;
        break;
      }        
    }
    if(isValid == false){
      alert("You are not a valid person..");
    }else{
      generatePDFSpeech(val);
      alert(val+" , your speech competition certificate is generated successfully...");
    }
});

const generatePDFSpeech = async (name) =>{ 
  const {PDFDocument, StandardFonts, rgb} = PDFLib;
  name = name.toUpperCase();

  const exBytes = await fetch("./Speech_comp.pdf").then((res) =>{
      return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  
  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  
  // Draw a string of text diagonally across the first page 
  
  // xPos ---> line se pahle ki 
  // line ki width 19 charachters
  // 1 character --- 15px 
  let xPos = 170;
  let nameLenth = name.length;
  let offset = (490 - nameLenth*15)/2;
  firstPage.drawText(name, {
  x: xPos + offset,
  y: 240,
  size:25,
  // color: rgb(0, 0.53, 0.71),
  // color: rgb(0, 0, 0),
  font:timesRomanFont,
  // color: rgb(250, 250, 250),
});

const uri = await pdfDoc.saveAsBase64({dataUri:true});
// document.querySelector("#mypdf").src = uri;

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = pdfDataUri;

  // Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save();
console.log("Done creating");

// this was for creating uri and showing in iframe

// const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
// document.getElementById("pdf").src = pdfDataUri;

var file = new File(
  [pdfBytes],
  "NSS Speech Comp Certificate.pdf",
  {
    type: "application/pdf;charset=utf-8",
  }
);
saveAs(file);
};


// generatePDF("Shashwat Shrivastav");
// generatePDF("Mariyam Fatima Rizvi");
// generatePDF("Abhishek kumar pandey");






