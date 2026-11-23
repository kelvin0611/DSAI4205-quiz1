# DSAI4205 Final 溫習包 — STATUS

> 新對話開工時：先讀呢個檔，跟「下一步」繼續。每完成一個 html 就更新。
> 每個 html 都要跟 Quiz 2 溫習包嘅做法（出題分析、practice paper 答案、由零講起嘅筆記 + SVG、
> MCQ／fill-in／計算 drill／短答、廣東話解釋 + 英文術語、常見疑問、答案實際跑過核對、
> 單一自包含 HTML、手機／iPad 唔溢出、深色模式）。

## 考試資料
- 形式（參考 2025/26 Sem 1、Sem 2 真卷，Dr Ken FONG）：2 小時，closed book，100 分
  - Section A：MCQ（老師講 10–15 題；舊卷約 20–22 分）
  - Section B：4–5 題長題（約 78–80 分），有 formula sheet（TF-IDF、cosine、PageRank、Google matrix）
- 範圍：L1–L8（Exam Review.pdf）；Kelvin 確認跟 Exam Review，Week 11–12 嘅 Recommendation／NoSQL 唔考
- 最重要參考：lecture/pdf/DSAI4205_Exam_Revision_Questions_202627.pdf（同 2026s2 真卷幾乎一樣）
- 2023s2、2024s1/s2、2025s2 係舊科 COMP4434，只有 PageRank 同 MapReduce pseudocode 有參考價值
- 考試日期：2026-12-05
- 老師講：MCQ 10–15 題；長題全部係 problem solving（計數、畫圖、寫 code，同 Quiz 2 Q1 嗰類），唔考背書
- Exam Review p.2 嘅「MC／長題」表喺 PDF 係空白；Kelvin 之後知道就再更新

## 檔案分組（Kelvin 已確認 2026-11-22）
| 檔案 | 內容 | 狀態 |
|---|---|---|
| final/index.html | 總覽：一分鐘重點、出題分析（手機卡片表）、預測、Revision Qs 全答（PageRank 改 LaTeX + 計法表）、跨課模擬卷、LaTeX formula 表 | ✅ 新格式更新 2026-11-22 |
| final/P1-L1-L2.html | **2026-11-23**：加 Netflix 4V practice（#netflix）。原有內容 + 新增：一分鐘重點、divide & conquer 圖、HDFS block/replication 圖、Dask chunk sum 圖、MapReduce 三色流程圖 | ✅ 新格式更新 2026-11-22 |
| final/P2-L3-L4.html | 原有內容 + 新增：一分鐘重點、lazy evaluation 圖、map vs flatMap、reduceByKey vs groupByKey 圖、DataFrame + UDF 資料流 + 步驟；**2026-11-23 第一批**：#ops2 mapValues／flatMapValues／countByKey／countByValue（H4）、#top2 top-2 URL 三種寫法（H5）、5 MCQ、2 FAQ | ✅ 2026-11-23 |
| final/P3-L5-L6.html | 原有內容 + 新增：一分鐘重點、BPE 流程圖、TF-IDF LaTeX 公式 + 流程、Levenshtein DP 三鄰居圖 + LaTeX、embedding 重點；**2026-11-23 第一批**：Levenshtein 兩擺法並排 + 判斷方法（H1）、BPE segmenter（H2）、新 section 四「RDD 手計 TF-IDF」（H3），section 編號順延到十一 | ✅ 2026-11-23 |
| final/P4-L7.html | **2026-11-23 第一批**：7b complete algorithm、8 MapReduce 改 slide Links.txt、新 section 六 T7 RDD PageRank（fill-in + 收斂），MCQ／短答／FAQ 順延做七–九。PageRank：**新版樣板（2026-11-22 重寫）**：8 個概念卡（一句講完／點解／圖解／例子／易錯）、10+ 幅 SVG 圖同流程圖、LaTeX 公式、2025s1 Q3 逐步表格答案、RDD pipeline 圖、4 drill、20 MCQ、FAQ | ✅ 新格式完成（Kelvin 已確認格式） |
| final/P5-L8.html | **2026-11-23 第一批**：centrality 兩大類卡、eigenvector slide 例子、betweenness 兩個 slide 例子、5 MCQ、2 FAQ。Graph：**新格式（2026-11-22 重寫）**：答題流程圖、6 張筆記概念卡 + 5 張 centrality 概念卡、12 幅 SVG（degree、density、diameter 路徑、CC highlight、BFS 流程、closeness、betweenness diamond、認圖示意）、LaTeX、2026s2 Q5 + 2025s1 Q2c 全答、4 drill、18 MCQ | ✅ 新格式完成 |
| final/mock2.html | （2026-11-23 只係重新 build，令 inline LaTeX render）第二套長題模擬卷：PageRank 3 條（基本、dead end、spider trap + RDD fill-in）、MapReduce 3 條（combinatorial pair + fill-in、filter+count、inverted index 帶次數）、Graph 3 條（基本量度、centrality、有向圖）、marking scheme、FAQ；全部數字 numpy/networkx 核對 | ✅ 完成 2026-11-22 |

## 點樣改／加頁
- 原始內容喺 final/_src/parts/*.html，模板同 CSS/JS 喺 final/_src/build.py
- 改完 parts 之後：`cd final/_src && python3 build.py <檔名>.html`，輸出喺 _src/out/，再 copy 去 final/
- 圖表答案用 Python（numpy、networkx）核對；pyspark 裝唔到，用 Python 模擬 RDD 邏輯

## 下一步
- **第二批完成（2026-11-23）**：中優先其餘項目 + slide 筆誤統一入易錯框（每頁易錯框 + index #typos 一覽）；低優先唔做。之後：等 Kelvin 溫習時嘅問題補 FAQ／drill。
  - ✅ index：#typos 筆誤一覽；7 頁全部 rebuild（build.py KaTeX √ 修正生效），mock2 拆咗一條太闊嘅公式
  - ✅ P5 第二批 2026-11-23（degree distribution、MSN／PPI + 真實網絡共通點、harmonic 例子、edge betweenness、diameter 特殊圖、Ax = λx + strongly connected、centrality 對比、Krackhardt kite + limitations）
  - ✅ P4 第二批 2026-11-23（PageRank score 圖 C 34.3、toy example、3-cycle + uniqueness、8 GB／10N 數字、r = βMr + (1−β)/N 推導、A–D 收斂 1/3、2/9）
  - ✅ P3 第二批 2026-11-23（stemmer vs lemmatizer + Porter m、POS filter、one-hot、vector space cosine、Jaccard bit vector、相似度 RDD 寫法表、T06 = CBOW + shape）；build.py 修 KaTeX √ 顯示
  - ✅ P2 第二批 2026-11-23（Redis vs RDD、ratings.csv 3 job + DAG、T3 細 operator 輸出、palindrome + inverted index 逐步、word count DataFrame、速度圖、Catalyst 前後、zipWithIndex、sub-query + window 輸出、T4 hills）
  - ✅ P1 第二批 2026-11-23（四層 components、三條路、task graph low/high-level、lazy 證據、dask.delayed + threads 公式、T2 chunk 實驗、rechunk、Dask DataFrame dtype／dask.compute／persist／map_partitions）
- 第一批（2026-11-23 完成，Kelvin 已確認）：H1–H12 + 中優先 #17（Netflix 4V，P1）。第二批（其餘中優先 + slide 筆誤統一入「易錯」框）等 Kelvin 確認第一批先做；低優先唔做。清單狀態喺 ../revision/_audit/AUDIT.md 尾。
  - ✅ P3（H1、H2、H3）2026-11-23
  - ✅ P1（#17 Netflix 4V practice question，#netflix）2026-11-23
  - 下一步：Kelvin 睇完第一批（P1 #netflix、P2 #ops2 #top2、P3 #lev #bpe-seg #tfidfrdd、P4 #complete #mr #t7、P5 #types #eig + betweenness 例子）確認冇問題，就做第二批（AUDIT.md「中優先」其餘 + 📝 slide 筆誤統一入易錯框）。
  - ✅ P5（H10 #eig 老師 5-node eigenvector 例子、H11 betweenness path／bow-tie、H12 #types 兩大類）2026-11-23
  - ✅ P4（H6 #complete、H7 新 section 六 #t7、H8 #mr Links.txt（順手更正舊圖 C → A 嘅錯）、H9 β 字眼；index 一分鐘重點同步改）2026-11-23
  - ✅ P2（H4 operator 表 #ops2 + cross-link 去 P3、H5 top-2 三種寫法 #top2）2026-11-23
  - build.py 修正：inline LaTeX \\( \\) 之前因為 JS 跳脫錯咗，一直冇 render，仲令普通括號被當成數學；已修好（所有頁要重新 build）。
  - 檢查：除咗截圖，仲用一段 Playwright script 搵 `.katex-display` scrollWidth > clientWidth（手機要橫 scroll 嘅公式），有就拆開
- 截圖：container 用 Playwright（node）+ 本機 KaTeX（/opt/npm-tools/node_modules/katex）攔截 CDN，可以睇到 LaTeX render 效果。
- **進行中：完整補讀（2026-11-23 Kelvin 要求）**。之前 session 冇讀晒 lecture：L1–L4 冇讀（靠 Quiz 1/2 溫習包）、L5–L6 只睇標題、Exam Review 只讀前半、slides 嘅圖大部分冇睇、tutorial 冇讀。
  計劃同進度喺 ../revision/_audit/AUDIT.md；文字已抽好喺 ../revision/_audit/*.txt。
  做法：一份份讀（文字 + 圖片頁 contact sheet），每讀完一份即刻將發現寫入 AUDIT.md，全部讀完先改溫習包。可能要分 2–3 個 session。
  **2026-11-23 session 1 進度**：Exam Review、L1–L6 讀晒（文字 + 圖），發現 51 點寫咗入 AUDIT.md。下一個 session 由 L7 圖開始，再 L8 圖、L0、tutorials。睇 AUDIT.md 尾「下一個 session 由呢度繼續」。
  **2026-11-23 session 2 進度**：L7（51 頁全部）、L8（66 頁全部）、L0、T1–T5 solution PDF 讀晒，發現加到第 95 點。**淨低 6 個 notebook（nb_Tutorial_2–7）**，session 3 做；之後整理「要補嘅清單」俾 Kelvin 確認先改。
  **2026-11-23 session 3 進度**：6 個 notebook（T2–T7）讀晒，發現加到第 133 點。**完整補讀完成**。「要補嘅清單」（12 項高優先 + 中／低優先）喺 AUDIT.md 尾，**等 Kelvin 確認先改溫習包**；仲有 3 個問題要佢答（Levenshtein 擺法、低優先做唔做、TF-IDF drill 放邊頁）。
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
- Levenshtein：row/column 擺法同 insert/delete 方向 → 2026-11-23 P3 已加兩擺法並排（老師 slides：target 放 row、↑ = insert；Quiz 2 真卷：source 放 row、↑ = delete）
