export const insertionSortAnimation = (arr, animation) => {
    const n = arr.length
    for (let i = 1; i < n; ++i) {
        const key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            animation.push([j, j + 1, true])
            j = j - 1
        }
        if (arr[0] > arr[1]) {
            animation.push([0, 1, true])
        } else {
            animation.push([0, 1, false])
        }
        arr[j + 1] = key
    }
    return animation
}