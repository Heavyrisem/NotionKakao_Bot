
// Get Code From Github master branch
const CODE_jsoup = org.jsoup.Jsoup.connect("https://raw.githubusercontent.com/Heavyrisem/NotionKakao_Bot/master/main.js").get();
result.outputSettings().prettyPrint(false);
eval(CODE_jsoup);