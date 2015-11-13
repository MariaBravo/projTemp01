function try1
%% Initialization
clear ; close all; clc

fprintf('Loading and Visualizing Data ...\n')

Theta1 = ones(3,3);
x = ones(3,1);
a2 = zeros(3,1);

for i = 1:3
    for j = 1:3
        a2(i) = a2(i) + x(j) * Theta1(i,j);
    end
    a2(i)= sigmoid(a2(i));
end
a2

z = Theta1 * x; a2 = sigmoid (z);
a2

%%a2 = sigmoid (x * Theta1);
%%a2


%%z = sigmoid(x); a2 = sigmoid (Theta1 * z);
%%a2

