# adobe-video-audio-delivery-qa-suite

Adobe動画・音声納品検品スイート は、字幕、書き出し設定、AEコンポ依存、MOGRT入力項目、ラウドネス、ノイズを納品単位で検査し、修正証跡を残す。

## 何を解決するか

動画・音声案件は字幕、MOGRT、AE依存、エンコード、音量検査が別々になり手戻りが出やすい。

## 差別化

編集、モーション、音声、書き出しを横断し、納品前検査を同じ証跡にする。

## 公開先

- BOOTH / GitHub Release

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Premiere Pro panel concept + evidence CLI の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/adobe-video-audio-delivery-qa-suite-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AdobePlugin\created_idea_006_adobe-video-audio-delivery-qa-suite`
- idea ZIP: `D:\AI\AdobePlugin\created_idea_006_adobe-video-audio-delivery-qa-suite\idea_006_adobe-video-audio-delivery-qa-suite.zip`
- PICKUP rank: 29
- Domain: AdobePlugin
- Adobe host: PremierePro
