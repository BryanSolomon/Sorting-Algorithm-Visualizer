export const insertionSortAnimation = (arr, animation) => {
    const n = arr.length
    for (let i = 1; i < n; ++i) {
        let key = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > key) {
            animation.push([j + 1, arr[j]])//pushes index and new height into array intead of indexes to be swapped
            arr[j + 1] = arr[j]
            j -= 1
        }
        animation.push([j + 1, key])//pushes index and new height into array intead of indexes to be swapped
        arr[j + 1] = key
    }
    return animation
}