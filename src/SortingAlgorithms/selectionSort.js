export const selectionSortAnimation = (arr, animation) => {
    const n = arr.length
    for (let i = 0; i < n - 1; ++i) {
        let min = i
        for (let j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min]) {
                animation.push([j, j, false])
                min = j
            } else {
                animation.push([j, j, false])
            }
        }
        const temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
        animation.push([min, i, true])
    }
    return animation
}