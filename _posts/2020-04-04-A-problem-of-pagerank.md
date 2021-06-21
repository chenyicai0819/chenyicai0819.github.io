---
layout: post
title: "A problem of Pagerank"
date: 2020-04-04
tags: optimization
---

# Pagerank challenging problem

**1. A problem from [Exercise 5.14, Mining of Massive Datasets](http://infolab.stanford.edu/~ullman/mmds/ch5.pdf)**

> Construct, for any integer $$ n $$, a Web such that, depending on $$ \alpha $$, any of the $$ n $$ nodes can have the highest PageRank among those $$ n $$. It is allowed for there to be other nodes in the Web besides these $$ n $$.

**The solution:**

![11](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515120947.svg){: class="center"}

![1](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515120952.svg)

![22](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515120958.svg)

![2](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515120957.svg)

![33](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515121002.svg)

![3](https://raw.githubusercontent.com/yzy1996/Image-Hosting/master/20200515121005.svg)

**Deep thinking:** 

The main idea is how we donate the influence of $$ \alpha $$ in the probability of $$ \pi $$ 

we have

$$
\begin{aligned}
& \pi = \alpha P \pi + (1-\alpha)v \\
& 1^T \pi = 1
\end{aligned}
$$

so we can get

$$
\begin{aligned}
& \pi = (1 - \alpha)(I - \alpha P)^{-1} v \\
& \pi = \frac{1 - \alpha}{\det(I - \alpha P)}(I - \alpha P)^* v
\end{aligned}
$$

here, $$ P \in R^{2n \times 2n} $$ and we only look at $$ \pi[1:n] $$ (nodes $$ A, B, \dots $$). $$ \frac{1 - \alpha}{\det(I - \alpha P)} $$  and $$ v $$ are same roles in each entry of $$ \pi $$ 

let $$ A = (I - \alpha P)^* $$ and we only need to see the sum of each row $$ \sum_{j=1}^{n} A_{ij} $$

**Matlab Code:**

```matlab
syms alpha

n = 2;
P = zeros(2 * n);
v = ones(2 * n, 1) / (2 * n);

for i = n:-1:2
    P(i, i - 1) = 1;
end

for i = 2*n:-1:n+1
    for j = 1:i-n-1
        P(j, i) = 1 / (i - n - 1);
    end
end

P(1, n+1) = 1;

pi = (1 - alpha) * ((eye(2 * n) - alpha * P) \ v);

fplot(pi(1:n),[0 1])
title('PageRank influenced by \alpha')
xlabel('\alpha')
ylabel('pagerank')
legend('A','B')
```

