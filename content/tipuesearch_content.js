var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  fqpabi8 \n 個人倉儲:\xa0 https://github.com/mdecp2024/hw-S41323227 \n 個人網站:\xa0 https://mdecp2024.github.io/hw-S41323227 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w14_ex', 'text': '三個圓隨機顏色固定位子 \n 三個圓隨機顏色隨機位子 \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w13_hw', 'text': '1.w13作業，沒混色版\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa02.w13作業，沒混色版 \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n \n \n 完成這次作業後，感覺已經能用程式畫出簡單的圖案了 \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w12_hw', 'text': '\n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w11_hw', 'text': '\n 第一題 \n import math\n\n# 10x10 的字元區域\nwidth = 10\nheight = 10\n\n# 圓心 (5, 5) 以及半徑 r，這裡選擇半徑為 3\ncenter_x = 5\ncenter_y = 5\nradius = 3\n\n# 繪製圓形\nfor y in range(height):\n    for x in range(width):\n        # 計算當前點與圓心的距離\n        distance = math.sqrt((x - center_x) ** 2 + (y - center_y) ** 2)\n        # 如果距離小於等於半徑，則打印 *\n        if distance <= radius:\n            print(\'*\', end=\'\')\n        else:\n            print(\' \', end=\'\')\n    print()  # 換行\n \n \n 第二題 \n from browser import html\nfrom browser import document as doc\nimport math\n\n# 利用 html 建立 canvas 超文件物件\ncanvas = html.CANVAS(width = 400, height = 400)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n\n# 每一格的 pixel 數\ngs = 20\n\n# gs*tc = canvas width and height\n\nctx = canvas.getContext("2d")\n\ndef dRect(lux, luy, w, h, s=1, c=\'#ff0000\'):\n    ctx.lineWidth = s\n    ctx.strokeStyle = c\n    ctx.beginPath()\n    ctx.rect(lux, luy, w, h)\n    ctx.stroke()\n    \ndef grid(width, height, grid_pix):\n    # x 方向共 width 格\n    # y 方向共 height 格\n    # grid_pix, 每一個的 pixel 點數\n    # 利用迴圈與座標增量繪圖\n    for i in range(width):\n        for j in range(height):\n            dRect(i * grid_pix, j * grid_pix, grid_pix, grid_pix, 1, "lightgrey")\n\ndef fill(x, y, color):\n    ctx.fillStyle = color\n    ctx.fillRect(x - 1, y - 1, gs, gs)\n\n# 繪製圓形的邏輯\ndef draw_circle(center_x, center_y, radius):\n    for i in range(10):  # 設定 10x10 網格\n        for j in range(10):\n            # 計算每個格子中心的 (x, y) 座標\n            x_center = (i * gs) + gs / 2\n            y_center = (j * gs) + gs / 2\n            # 計算每個格子與圓心的距離\n            distance = math.sqrt((x_center - center_x) ** 2 + (y_center - center_y) ** 2)\n            # 如果距離小於等於半徑，填充這個格子\n            if distance <= radius:\n                fill(i * gs, j * gs, "black")\n\n# 繪製 10x10 網格\ngrid(10, 10, gs)\n\n# 圓心設在 (5, 5)，半徑設為 5\ncenter_x = 5 * gs  # 圓心的 x 座標\ncenter_y = 5 * gs  # 圓心的 y 座標\nradius = 5 * gs  # 半徑\n\n# 繪製圓形\ndraw_circle(center_x, center_y, radius) \n \xa0 \n 第三題 \n \n 這次的作業雖然都是靠ChatGPT，但是做完作業後我還是有詳細看這次做出來的程式 \n \n n =11\nspace = \'_\'\ncenter = n//2\n#print(center)\n\nfor y in range(n):\n    for x in range(n):\n        print("(",x,",",y,")",sep="") \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w10', 'text': '\n \n 變數和函數命名（snake_case） 變數和函數名稱應使用小寫字母，並以底線分隔單詞（這稱為 snake_case）。 2. 類別命名（CamelCase） 類別名稱應使用首字母大寫，並使用駝峰式命名（這稱為 CamelCase）。每個單詞的首字母都要大寫，不使用底線。 3. 常數命名（UPPERCASE_SNAKE_CASE） 常數名稱應該使用全大寫字母，並使用底線分隔單詞（這稱為 UPPERCASE_SNAKE_CASE）。 4. 模組和包命名（lowercase） 模組和包名稱應該是小寫字母，並且避免使用底線（如果不必要的話）。當有多個單詞時，使用小寫字母並用底線分隔。 5. 私有變數命名（單底線前綴） 如果某個變數或方法不應該被外部使用（即設為私有），可以在變數名稱或方法名稱前加上單個底線 _，表示這是內部屬性。 6. 特殊方法命名（__double_underscore__） Python 中有一些特殊方法，通常是以雙底線包圍的名稱，如 __init__、__str__ 等。這些方法有特殊的用途，通常是 Python 中的內建方法。 7. 函數與變數命名的長度 一般來說，變數名和函數名應該簡短而有意義，避免使用過長或過於簡單的名稱。通常變數和函數的名稱應該能夠清楚表達它的用途。 8. 註解與文檔字串（Docstring） 在 Python 中，函數和類別的開頭應使用文檔字串（docstring）來描述它們的作用和用途。文檔字串應使用三個雙引號 """ 或三個單引號 \'\'\' 包圍。 雖然程式還不太懂，但是這個作業讓我完全學會這五種程式執行方法了 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '我已經會寫簡單的 python 程式了 \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': '硬體 3 考試', 'text': '每六人為一組進行良好的程序練習 \n 透過 Jupyterlab 良好的網頁，輪流指定各組編寫的 HW 3 相關的程式練習，以及網頁內容（localhost 與 Codespaces 環境）編輯。 \n \n \n \n \n', 'tags': '', 'url': '硬體 3 考試.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};