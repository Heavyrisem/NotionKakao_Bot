const scriptName = "runner";

let unreadMessageCount = 0;



/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  unreadMessageCount++;
  
  if (msg === "슉") {
    // replier.reply("슈슉.슉.슈.ㅅ.시.시발롬아");
    // const env = Bridge.getScopeOf("env");
    // debug(env);
  }

  if (msg === "재시작") {
    Api.reload();
  }
  if (msg === "ㅁㄴㅇㄹ") {
    replier.reply(sender);
    replier.reply(imageDB.getProfileImage());
  }

  if (msg.startsWith("eval ")) {
    try {
      replier.reply(eval(msg.replace("eval ", "")));
    } catch (err) {
      replier.reply(err);
    }
  }
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}