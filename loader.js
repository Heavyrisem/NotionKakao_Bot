
// Get Code From Github master branch
const jsoup = org.jsoup.Jsoup.connect("https://raw.githubusercontent.com/Heavyrisem/NotionKakao_Bot/master/main.js" + "?date=" + Date.now()).get();
jsoup.outputSettings().prettyPrint(false);
const CODE_jsoup = jsoup.wholeText();
Log.debug(CODE_jsoup);
eval(CODE_jsoup);