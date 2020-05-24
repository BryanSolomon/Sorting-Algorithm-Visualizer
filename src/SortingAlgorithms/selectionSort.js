export const selectionSortAnimation = (arr, animation) => {
    const n = arr.length
    for (let i = 0; i < n - 1; ++i) {
        let min = i
        for (let j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min]) {
                min = j
            }
            //this is to show index j is being compare with the min value
            animation.push([j, j, false])
        }
        const temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
        animation.push([min, i, true])//these indexes will still be swapped
    }
    return animation
}