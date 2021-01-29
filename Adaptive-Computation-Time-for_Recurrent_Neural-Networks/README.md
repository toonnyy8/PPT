# Adaptive Computation Time for Recurrent Neural Network 報告

[中文連結](https://toonnyy8.github.io/PPT/Adaptive-Computation-Time-for-Recurrent-Neural-Network/index.html)  
[英文連結](https://toonnyy8.github.io/PPT/Adaptive-Computation-Time-for-Recurrent-Neural-Network/index-en.html)

ponder*loss = τ \* ponder_cost  
ponder_cost = ponder_1+ponder_2+...ponder_T  
ponder_t = N(t)+R(t)  
其中，N(t)可視為常數(對計算梯度沒有貢獻  
而 R(t)=1-(ht_1+ht_2+...ht*(N(t)-1))
