export const bubbleSortAnimation = (arr) => {
    var animation = []//array to push indexes in
    var n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let k = j + 1
            if (arr[j] > arr[k]) {
                const temp = arr[j]
                arr[j] = arr[k];
                arr[k] = temp;
                animation.push([j, k, true])//these indexes will be swapped
            } else {
                animation.push([j, k, false])//these indexes will still be compared but not swapped
            }
        }
    }
    return animation
}