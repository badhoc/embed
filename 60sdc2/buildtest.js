jQuery(document).ready(function() {
	var items = document.querySelectorAll('.stepchange-tool') //Get all occurrences of class 'stepchange-tool' on the page
	for(var i=0;i<=items.length-1;i++) { //Loop through
		var node=items[i];
		if(node.id == "_60sdc") {
			jQuery(node).append(buildTest());  //Replace the stepchange-tool node with the iframe
		}
	}

	addScript("//embed.stepchange.org/60sdc/js/respond.js");
	addScript("//embed.stepchange.org/60sdc/js/script.js");
});

function addScript(name) {
	var script = document.createElement("script");
	script.src=name;
	script.type = "text/javascript";
	document.body.appendChild(script);
}
 
function buildTest() {	
	var tool = jQuery("<link href=\"//embed.stepchange.org/60sdc/css/reset.css\" rel=\"stylesheet\" type=\"text/css\" />" +
	"<link href=\"//embed.stepchange.org/60sdc/css/style.css\" rel=\"stylesheet\" type=\"text/css\" />" +
	"<section id=\"dawTool\">" +
  "<h2 class=\"mainTitle\">How close are you to a debt problem?</h2>" +
  "<div class=\"clear\">&nbsp;</div>" +
  "<div class=\"debtmeter\">" +
  	"<div class=\"cloud highlight\"></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/0.png\" alt=\"You're fine\"/><span class=\"hide\">You&rsquo;re fine</span></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/1.png\" alt=\"Time to bduget\"/><span class=\"hide\">Time to budget</span></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/2.png\" alt=\"May need help\"/><span class=\"hide\">May need help</span></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/3.png\" alt=\"You should get help\" /><span class=\"hide\">You should get advice</span></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/4.png\" alt=\"You need help\" /><span class=\"hide\">You need help</span></div>" +
    "<div class=\"cloud\"><img src=\"//embed.stepchange.org/60sdc/images/5.png\" alt=\"Speak to us now\" /><span class=\"hide\">Speak to us now</span></div>" +
    "<div class=\"clear\">&nbsp;</div>" +
  "</div>" +
  "<h2 class=\"subTitle\">Answer 5 quick questions to find out.<br />It shouldn&rsquo;t take more than a minute to understand more about your current financial situation.</h2>" +
  "<div class=\"dsdtabs\"><div class=\"dsdtab\"><a href=\"#\">Other people&rsquo;s stories</a></div><div class=\"dsdtab selected\"><a href=\"#\">Results</a></div></div>" +
  "<div class=\"clear\"></div>" +
  "<div id=\"dawContent\">" +
    "<div class=\"contentBox\">" +
        "<div class=\"circle hide\">1</div>" +
        "<div class=\"title\">&nbsp;</div>" +
        "<a class=\"button\" href=\"#\" id=\"yes\">Yes</a><a class=\"button\" href=\"#\" id=\"no\">No</a>" +
    "</div>" +
  "</div>" +
  "<div class=\"dawFooter\"><a class=\"button\" href=\"#\" id=\"restart\">Restart test</a>" +
  "<div class=\"clear\">&nbsp;</div>" +
  "</div>" +
"</section>");
	return tool;
}