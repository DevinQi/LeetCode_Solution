/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var prev = 0, end = height.length-1;
    var maxx = 0;
    while(prev < end){
        maxx = Math.max(maxx, Math.min(height[prev], height[end]) * (end - prev));
        if(height[prev] > height[end]){
            end--;
        }else{
            prev++;
        }
    }
    return maxx;  
};
