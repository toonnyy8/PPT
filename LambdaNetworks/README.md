# LambdaNetworks: Modeling long-range Interactions without Attention 論文報告

[中文版](https://toonnyy8.github.io/PPT/LambdaNetworks/)

[English Version](https://toonnyy8.github.io/PPT/LambdaNetworks/index-en.html)

按 esc 可以預覽每頁

頁面編排:每列代表一個主題

1.  輸入 X 是一堆特徵向量
2.  進行線性轉換轉成 Q, K, V
3.  Q, K, V 進行 feature「map」的 self attention，得到 content lambda
4.  對 V 做全域/區域編碼得到 Vemb 後，與 Q 進行 feature「vector」的匹配，得到 position lambda
5.  將 content lambda 與 position lambda 相加

Q 的每個位置 p 與 Vemb 的每個位置 p 進行匹配：  
h 個 query <-匹配-> v 個 value  
(h,k) <-匹配-> (v,k) => (h,v)
