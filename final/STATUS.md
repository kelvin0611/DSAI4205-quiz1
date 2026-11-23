# DSAI4205 Final 溫習包 — STATUS

> 新對話開工時：先讀呢個檔，跟「下一步」繼續。每完成一個 html 就更新。
> 每個 html 都要跟 Quiz 2 溫習包嘅做法（出題分析、practice paper 答案、由零講起嘅筆記 + SVG、
> MCQ／fill-in／計算 drill／短答、廣東話解釋 + 英文術語、常見疑問、答案實際跑過核對、
> 單一自包含 HTML、手機／iPad 唔溢出、深色模式）。

## 考試資料
- 形式（參考 2025/26 Sem 1、Sem 2 真卷，Dr Ken FONG）：2 小時，closed book，100 分
  - Section A：MCQ（老師講 10–15 題；舊卷約 20–22 分）
  - Section B：4–5 題長題（約 78–80 分），有 formula sheet（TF-IDF、cosine、PageRank、Google matrix）
- 範圍：L1–L8（Exam Review.pdf）
- 最重要參考：lecture/pdf/DSAI4205_Exam_Revision_Questions_202627.pdf（同 2026s2 真卷幾乎一樣）
- 2023s2、2024s1/s2、2025s2 係舊科 COMP4434，只有 PageRank 同 MapReduce pseudocode 有參考價值
- 考試日期：2026-12-05
- 老師講：MCQ 10–15 題；長題全部係 problem solving（計數、畫圖、寫 code，同 Quiz 2 Q1 嗰類），唔考背書
- Exam Review p.2 嘅「MC／長題」表喺 PDF 係空白；Kelvin 之後知道就再更新

## 檔案分組（Kelvin 已確認 2026-11-22）
| 檔案 | 內容 | 狀態 |
|---|---|---|
| final/index.html | 總覽：一分鐘重點、出題分析（手機卡片表）、預測、Revision Qs 全答（PageRank 改 LaTeX + 計法表）、跨課模擬卷、LaTeX formula 表 | ✅ 新格式更新 2026-11-22 |
| final/P1-L1-L2.html | 原有內容 + 新增：一分鐘重點、divide & conquer 圖、HDFS block/replication 圖、Dask chunk sum 圖、MapReduce 三色流程圖 | ✅ 新格式更新 2026-11-22 |
| final/P2-L3-L4.html | 原有內容 + 新增：一分鐘重點、lazy evaluation 圖、map vs flatMap、reduceByKey vs groupByKey 圖、DataFrame + UDF 資料流 + 步驟 | ✅ 新格式更新 2026-11-22 |
| final/P3-L5-L6.html | 原有內容 + 新增：一分鐘重點、BPE 流程圖、TF-IDF LaTeX 公式 + 流程、Levenshtein DP 三鄰居圖 + LaTeX、embedding 重點 | ✅ 新格式更新 2026-11-22 |
| final/P4-L7.html | PageRank：**新版樣板（2026-11-22 重寫）**：8 個概念卡（一句講完／點解／圖解／例子／易錯）、10+ 幅 SVG 圖同流程圖、LaTeX 公式、2025s1 Q3 逐步表格答案、RDD pipeline 圖、4 drill、20 MCQ、FAQ | ✅ 新格式完成（Kelvin 已確認格式） |
| final/P5-L8.html | Graph：**新格式（2026-11-22 重寫）**：答題流程圖、6 張筆記概念卡 + 5 張 centrality 概念卡、12 幅 SVG（degree、density、diameter 路徑、CC highlight、BFS 流程、closeness、betweenness diamond、認圖示意）、LaTeX、2026s2 Q5 + 2025s1 Q2c 全答、4 drill、18 MCQ | ✅ 新格式完成 |
| final/mock2.html | 第二套長題模擬卷：PageRank 3 條（基本、dead end、spider trap + RDD fill-in）、MapReduce 3 條（combinatorial pair + fill-in、filter+count、inverted index 帶次數）、Graph 3 條（基本量度、centrality、有向圖）、marking scheme、FAQ；全部數字 numpy/networkx 核對 | ✅ 完成 2026-11-22 |

## 點樣改／加頁
- 原始內容喺 final/_src/parts/*.html，模板同 CSS/JS 喺 final/_src/build.py
- 改完 parts 之後：`cd final/_src && python3 build.py <檔名>.html`，輸出喺 _src/out/，再 copy 去 final/
- 圖表答案用 Python（numpy、networkx）核對；pyspark 裝唔到，用 Python 模擬 RDD 邏輯

## 下一步
- Kelvin 要求：筆記要詳細（佢從未讀過 notes）、唔好資訊堆埋一齊、多圖同流程圖、數學用 LaTeX、淺色版（Quiz 2 配色）
- Kelvin 已確認新格式（2026-11-22）。6 頁全部已更新（P4、P5 完全重寫；index、P1–P3 加概念卡、圖、LaTeX、手機卡片表）
- 所有字多嘅表（≥3 欄、平均每格 >14 字）會由 JS 自動喺手機變卡片；唔想變就加 class="nostack"
- LaTeX 經 KaTeX CDN 喺瀏覽器 render（container 預覽唔到，要 Kelvin 喺手機確認）
- mock2.html 已完成（nav 有「模擬卷 2」，index 第四部分尾有連結）
- 下一步：等 Kelvin 溫習時嘅問題，補 FAQ／drill；如果知道老師邊課考 MC 邊課考長題，更新 index 預測表
- 新格式：每個概念一張 .concept 卡，用 .lab 標籤分「一句講完／點解／圖解／例子／易錯」；每 section 開頭 .key「一分鐘重點」；
  文字多嘅表加 class="stack"（手機變卡片）；公式用 $$...$$ 同 \( \)（KaTeX CDN）；步驟用 ol.steps
- 5 個 P 頁同 index 全部完成；等 Kelvin push 上 GitHub Pages（https://kelvin0611.github.io/DSAI4205-quiz1/final/）
- 之後按 Kelvin 溫習時嘅問題補 FAQ／drill；如果老師講咗邊課考 MC 邊課考長題，更新 index 預測表

## 內容來源備註
- P1、P2、P3 部分筆記、MCQ、填充直接由 Quiz 1（_src/q1.html）同 Quiz 2（_src/q2.html）溫習包抽出（build.py 嘅 {{SEC}}、{{BLK}}、{{MCQ}}、{{CONCEPT}}、{{Q2EXAM}} placeholder）
- 新寫內容：index 全部、P4、P5 全部，同 P1–P3 嘅期考專用部分

## Kelvin 唔熟／想補嘅位
- Levenshtein：row/column 擺法同 insert/delete 方向（Quiz 2 擺錯咗）
