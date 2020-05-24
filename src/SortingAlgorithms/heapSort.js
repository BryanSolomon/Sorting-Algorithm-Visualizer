export const heapSortAnimation = (arr, animation) => {
    const n = arr.length
    for (let i = n / 2 - 1; i >= 0; --i) {
        animation = heapify(arr, n, i, animation)
    }
    for (let i = n - 1; i > 0; --i) {
        const temp = arr[0];
        arr[0] = arr[i]
        arr[i] = temp
        animation.push([0, i, true])
        animation = heapify(arr, i, 0, animation)
    }
    return animation
}

const heapify = (arr, n, i, animation) => {
    let largest = i
    const l = 2 * i + 1
    const r = 2 * i + 2

    if (l < n && arr[l] > arr[largest]) {
        largest = l
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r
    }

    if (largest !== i) {
        const swap = arr[i]
        arr[i] = arr[largest]
        arr[largest] = swap
        animation.push([i, largest, true])//these indexes will be swapped
        animation = heapify(arr, n, largest, animation)
    } else {
        animation.push([i, largest, false])//these indexes will still be compared but not swapped
    }
    return animation
}