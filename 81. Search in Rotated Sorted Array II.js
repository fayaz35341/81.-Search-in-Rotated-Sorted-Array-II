/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let n=nums.length
    let l=0
    let h=n-1
    while (h>=l){
        let mid=Math.floor((l+h)/2) 
        if (nums[mid]===target){
            return true
        }
        if (nums[l]===nums[mid] && nums[mid]===nums[h]) {
            l+=1
            h-=1
            continue 
        }
        if (nums[l]<=nums[mid]){
            if (nums[l]<=target && target<nums[mid]) {
                h=mid-1
            }
            else{
                l=mid+1
            }
        }else{
            if (nums[mid]<target && target<=nums[h]){
                l=mid+1
            }
            else{
                h=mid-1
            }
        }
    }
    return false
    
};
