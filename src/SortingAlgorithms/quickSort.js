
export const quickSortAnimation = (arr, start, end, animation) => {
    if (start < end) {
        const pi = partition(arr, start, end, animation);
        quickSortAnimation(arr, start, pi - 1, animation);
        quickSortAnimation(arr, pi + 1, end, animation);
    }
    return animation
}

const partition = (arr, start, end, animation) => {
    const pivot = arr[end];
    var pi = start
    for (let i = start; i < end; ++i) {
        if (arr[i] <= pivot) {
            animation.push([i, pi, true])//these indexes will be swapped
            swap(arr, i, pi)
            pi++
        } else {
            animation.push([i, pi, false])//these indexes will still be compared but not swapped
        }
    }
    animation.push([pi, end, true])//these indexes will be swapped
    swap(arr, pi, end)
    return pi
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}