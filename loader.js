
// Get Code From Github master branch
const jsoup = org.jsoup.Jsoup.connect("https://raw.heavyrisem.xyz/raw/NotionKakao_Bot/main.js").get();
jsoup.outputSettings().prettyPrint(false);
const CODE_jsoup = jsoup.wholeText();
Log.debug(CODE_jsoup);
eval(CODE_jsoup);