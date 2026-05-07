export const productProfile = {
  "repository": "adobe-video-audio-delivery-qa-suite",
  "title": "Adobe動画・音声納品検品スイート",
  "domain": "AdobePlugin",
  "hostApp": "PremierePro",
  "rank": 29,
  "ideaNo": 6,
  "overview": "字幕、書き出し設定、AEコンポ依存、MOGRT入力項目、ラウドネス、ノイズを納品単位で検査し、修正証跡を残す。",
  "problem": "動画・音声案件は字幕、MOGRT、AE依存、エンコード、音量検査が別々になり手戻りが出やすい。",
  "differentiation": "編集、モーション、音声、書き出しを横断し、納品前検査を同じ証跡にする。",
  "publish": "BOOTH / GitHub Release",
  "surface": "Premiere Pro panel concept + evidence CLI",
  "entity": "media delivery check",
  "requiredFields": [
    "id",
    "title",
    "source",
    "sequence",
    "exportPreset",
    "loudness",
    "owner",
    "acceptance"
  ],
  "warningField": "noiseProfile",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
