const nums = [1, 1, 1, 2, 2, 3]
const k = 3

/** 
- use bucket sort where the index represents frequency
  instead of element value
  - using nums as example: nums = [1, 1, 1, 2, 2, 3]
    - instead of [0, 3, 2, 1] where 1 was in the array 3 times for example
    - should be [[1, 2, 3], [1, 2], [1], []]
      - this means that 1, 2, and 3 was called at least 1 time (1st index)
      - 1 and 2 was called at least 2 times (2nd index)
      - 1 was called at least 3 times (3rd index)

  - to return the proper k value:
    - there will always be an element of the bucket where the length is
      equal to k, and it will always be the correct return value
    - we just need to loop through the whole bucket to find it
**/

const topKFreq = (nums: number[]) => {
  // instantiate an array of array so that push func will not be undefined
  const bucket: number[][] = Array.from({ length: nums.length}, () => [])
  const frequencyCounter = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const currentFrequency = frequencyCounter.get(nums[i])

    if (currentFrequency) {
      // need to save frequency in order to know 
      // which bucket/index to add the value
      frequencyCounter.set(nums[i], currentFrequency + 1)
      bucket[currentFrequency].push(nums[i])
    } else {
      frequencyCounter.set(nums[i], 1)
      bucket[0].push(nums[i])
    }
  }

  for (let i = bucket.length - 1; i >= 0; i-- ) {
    if (bucket[i].length === k) {
      // loop through the list and match k with bucket
      return bucket[i]
    }
  }
  
  return []
}

const answer = topKFreq(nums)

console.log('answer', answer)
