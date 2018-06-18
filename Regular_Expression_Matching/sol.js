/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    var n = s.length, m = p.length;
    var dp = new Array(n + 1);
    for(let i = 0 ; i <= n ; i++){
    	dp[i] = new Array(m + 1);
        for(let j = 0 ; j <= m; j++){
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    for(let x = 1; x <= m; x++){
        dp[0][x] = p[x-1] === '*'&&dp[0][x-2];
    }
    for(let i = 1; i <= n; i++){
    	for(let j = 1; j <= m; j++){
    		if(s.charAt(i-1) === p.charAt(j-1) || p.charAt(j-1) === '.'){
    			dp[i][j] = dp[i-1][j-1];
    		}else if(p.charAt(j-1) === '*'){
                dp[i][j] = dp[i][j-2] || (s.charAt(i-1) === p.charAt(j-2) ||p.charAt(j-2) === '.') && dp[i-1][j];
    		}
    	}
    }
    return dp[n][m];
};