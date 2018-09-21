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

//Tracking
var dataLayer = dataLayer || [];
var qNum = 1;

//Question 1 Yes and No button. Actions when they are clicked.
yes1.onclick = function() {
  count ++ ;
    q1.style.display = "none";
    q2.style.display = "inline";
        if (count === 1) {
        cloud0.style.display = "none";
        cloud1.style.display = "block";
    }
    sendEvent(qNum,'yes');
    qNum++;
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
    sendEvent(qNum,'yes');
    qNum++;
}

no2.onclick = function() {
    q2.style.display = "none";
    q3.style.display = "inline";
    sendEvent(qNum,'no');
    qNum++;
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
  sendEvent(qNum,'yes');
  qNum++;
}

no3.onclick = function() {
  q3.style.display = "none";
  q4.style.display = "inline";
  sendEvent(qNum,'no');
  qNum++;
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
  sendEvent(qNum,'yes');
  qNum++;
}

no4.onclick = function() {
  q4.style.display = "none";
  q5.style.display = "inline";
  sendEvent(qNum,'no');
  qNum++;
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
  sendEvent(qNum,'yes');
}

no5.onclick = function() {
  endOfQuiz();
  sendEvent(qNum,'no');
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
    qNum = 1;
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

//Tracking Links

function sendEvent(question, answer) {
	var wtTag;
	var gaTag = new Array();
	gaTag = {'event':'GAevent', 'eventCategory':'DAW Tool', 'eventAction':'Click', 'eventLabel':''};

	if(question==5) {
		wtTag=question+'-'+answer+'-completed';
		gaTag['eventLabel'] = question+'-'+answer+'-completed';
	} else {
		wtTag = question+'-'+answer;
		gaTag['eventLabel']= question+'-'+answer;;
	}

	if (typeof dcsMultiTrack === 'function') {
		//dcsMultiTrack('DCSext.60-sec-debt-test',wtTag);
	alert(wtTag);
	}
	dataLayer.push(gaTag);
	//alert(gaTag['eventAction']);
}
