# Regular Expression Matching

https://leetcode.com/problems/regular-expression-matching/description/

### Question Description

Given an input string(s) and a pattern (p), implement regular expression matching with support for '.' and '*'
* s could be empty and contains only lowercase letters a-z.
* p could be empty and contains only lowercase letters a-z, and characters like . or *

### Answer

We are using dp to solve this question   
There are two main conditions in question:   
1. **Current character is not a '*'** :   
   Just check s[i] == p[j] || p[j] == '.' : dp[i][j] = dp[i-1][i-1]
2. **If current character is '*'** :   
   * if p[j-1] != s[i] : dp[i][j] = dp[i][j-2];  //count * as empty
   * if p[j-1] == s[i] || p[j-1] == '.' : dp[i][j] = dp[i][j-2] || (s.charAt(i-1) === p.charAt(j-2) ||p.charAt(j-2) === '.') && dp[i-1][j]; 
      * dp[i][j-1] means a* count as single a*a
      * dp[i][j-2] means a* count as empty  
