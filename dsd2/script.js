//Variables
var count = 0 //Yes button click count
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const cloud0 = document.getElementById('cloud0');
const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');
const cloud3 = document.getElementById('cloud3');
const results = document.getElementById('results');
const result0 = document.getElementById('result0');

//Question 1 Yes and No button. Actions when they are clicked.
yes1.onclick = function() {
  count ++ ;
    q1.style.display = "none";
    q2.style.display = "inline";
        if (count === 1) {
        cloud0.style.display = "none";
        cloud1.style.display = "block";
    }
}

no1.onclick = function() {
    q1.style.display = "none";
    q2.style.display = "inline";
}


//Question 2 Yes and No button. Actions when they are clicked.
yes2.onclick = function() {
  count ++ ;
    q2.style.display = "none";
    q3.style.display = "inline";
        if (count === 1) {
        cloud0.style.display = "none";
        cloud1.style.display = "block";
    } else if (count === 2) {
        cloud1.style.display = "none";
        cloud2.style.display = "block";
    }
}

no2.onclick = function() {
    q2.style.display = "none";
    q3.style.display = "inline";
}


//Question 3 Yes and No button. Actions when they are clicked.
yes3.onclick = function() {
  count ++ ;
  q3.style.display = "none";
  q4.style.display = "inline";
      if (count === 1) {
      cloud0.style.display = "none";
      cloud1.style.display = "block";
  } else if (count === 2) {
      cloud1.style.display = "none";
      cloud2.style.display = "block";
  }
}

no3.onclick = function() {
  q3.style.display = "none";
  q4.style.display = "inline";
}


//Question 4 Yes and No button. Actions when they are clicked.
yes4.onclick = function() {
  count ++ ;
  q4.style.display = "none";
  q5.style.display = "inline";
      if (count === 1) {
      cloud0.style.display = "none";
      cloud1.style.display = "block";
  } else if (count === 2) {
      cloud1.style.display = "none";
      cloud2.style.display = "block";
  } else if (count === 4) {
      cloud2.style.display = "none";
      cloud3.style.display = "block";
  }
}

no4.onclick = function() {
  q4.style.display = "none";
  q5.style.display = "inline";
}


//Question 5 Yes and No button. Actions when they are clicked.

//function for changing what's shown:
function endOfQuiz() {
  q5.style.display = "none";
  document.getElementById('restart').style.display = "inline";
  document.getElementById('storyBCont').style.display = "inline";
  document.getElementById('quiz').style.display = "none";
  document.getElementById('header').style.display = "none";
  document.getElementById('instruction').style.display = "none";
  cloud0.style.display = "none";
  cloud1.style.display = "none";
  cloud2.style.display = "none";
  cloud3.style.display = "none";
  results.style.display = "inline";
  if (count === 0) {
      result0.style.display = "inline";
  } else if (count === 1) {
      document.getElementById('result1').style.display = "inline";
  } else if (count === 2 || count === 3) {
      document.getElementById('result2').style.display = "inline";
  } else {
      document.getElementById('result3').style.display = "inline";
  }
}

yes5.onclick = function() {
  count ++ ;
  endOfQuiz();
}

no5.onclick = function() {
  endOfQuiz();
}



//Other people stories button - replaces the displayed results with the list of stories.
storyButton.onclick = function() {
    document.getElementById('debtmeter').style.display = "none";
    results.style.display = "none";
    document.getElementById('storyBCont').style.display = "none";
    document.getElementById('stories').style.display = "inline";
    document.getElementById('debtHelpFinalPage').style.display = "inline";
}



//Restart button - resets style values back to their start state and resets the count back to 0
restartbutton.onclick = function() {
    count = 0;
    results.style.display = "none";
    result0.style.display = "none";
    document.getElementById('result1').style.display = "none";
    document.getElementById('result2').style.display = "none";
    document.getElementById('result3').style.display = "none";
    q1.style.display = "inline";
    document.getElementById('restart').style.display = "none";
    document.getElementById('storyBCont').style.display = "none";
    document.getElementById('quiz').style.display = "inline";
    document.getElementById('header').style.display = "flex";
    document.getElementById('instruction').style.display = "inline";
    cloud1.style.display = "none";
    cloud2.style.display = "none";
    cloud3.style.display = "none";
    cloud0.style.display = "block";
    document.getElementById('debtmeter').style.display = "inline";
    document.getElementById('stories').style.display = "none";
    document.getElementById('debtHelpFinalPage').style.display = "none";
}


//embed code append

//get referral domain from url
const domain = window.location.href;
var hostdomainadd = domain.slice(domain.indexOf('?')+10);
var hostdomain = "_".concat(hostdomainadd);

//get all the links
var links = document.getElementsByTagName('a');
var DRStartlink ='https://www.stepchange.org/DebtRemedy.aspx?utm_medium=referral&utm_campaign=LinkOuteach&utm_content=Tool_link&WT.mc_id=800098&utm_source=DSD_Tool_partner';
var newDRStartlink = DRStartlink.concat(hostdomain);
var MAnewslink = 'https://www.stepchange.org/how-we-help/newsletter.aspx?utm_medium=referral&utm_campaign=LinkOuteach&utm_content=Tool_link&WT.mc_id=800098&utm_source=DSD_Tool_partner'
var newMAnewslink = MAnewslink.concat(hostdomain);


//build the function that checks if the links arr DR start and append the domain if they are
function appendlinks(){
  for (var i = 0; i < links.length; i++) {
    var currentlink = links[i].href;
    if(links[i].href == DRStartlink) {
      links[i].setAttribute('href',newDRStartlink);
    } else if ( links[i].href == MAnewslink){
      links[i].setAttribute('href', newMAnewslink);
    }
  }
}
// run the function
appendlinks();
