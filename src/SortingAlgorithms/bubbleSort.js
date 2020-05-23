export const bubbleSortAnimation = (arr) => {
    var animation = []
    var n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let k = j + 1
            if (arr[j] > arr[k]) {
                const temp = arr[j]
                arr[j] = arr[k];
                arr[k] = temp;
                animation.push([j, k, true])
            } else {
                animation.push([j, k, false])
            }
        }
    }
    return animation
}