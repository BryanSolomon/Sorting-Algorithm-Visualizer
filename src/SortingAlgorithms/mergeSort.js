export const mergeSortAnimation = (arr) => {
    const animation = []
    if (arr.length < 2) {
        return arr
    }
    mergeSort(arr, 0, arr.length - 1, animation)
    return animation
}

const mergeSort = (arr, l, r, animation) => {
    // console.log(animation)
    if (l === r) {
        return
    }
    const m = Math.floor((l + r) / 2)
    mergeSort(arr, l, m, animation)
    mergeSort(arr, m + 1, r, animation)
    merge(arr, l, m, r, animation)
}

const merge = (arr, l, m, r, animation) => {
    const n1 = m - l + 1
    const n2 = r - m
    const L = []
    const Lindex = []
    const R = []
    const Rindex = []

    for (let i = 0; i < n1; ++i) {
        L.push(arr[l + i])
        Lindex.push(l + i)
    }
    for (let i = 0; i < n2; ++i) {
        R.push(arr[m + 1 + i])
        Rindex.push(m + 1 + i)
    }

    let i = 0
    let j = 0
    let k = l

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            animation.push([k, L[i]])
            i++
        } else {
            arr[k] = R[j]
            animation.push([k, R[j]])
            j++
        }
        k++
    }

    while (i < n1) {
        arr[k] = L[i]
        animation.push([k, L[i]])
        i++
        k++
    }

    while (j < n2) {
        arr[k] = R[j]
        animation.push([k, R[j]])
        j++
        k++
    }
}