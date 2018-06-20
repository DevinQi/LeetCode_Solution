# Regular Expression Matching

https://leetcode.com/problems/container-with-most-water/description/

### Question Description

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

### Answer

Greedy O(n) Algrithm :  
Using two pointers begins as postion 0 and n (which is the length)  
recursively remove shrink the pointer distance by removing the smaller valueon the two positions  
go through array and solution is in it

Prove:  
lets suppose two pointers are at postion n and m where value(n) < value(m)  
there are two conditions:
	* pair(n,m) is the best solution
	* pair(n,m) is not the best solution:  
		* if pair(n,m) is not the best solution, then the best solution must inside array from n to m  
		* according to the formular "(n * m) * i", i is decrease by 1 ,in order to make the result larger, we must remove the smaller value(n) to get the best solution  
Thus, we will find the best solution if we keep remove the smaller value postion