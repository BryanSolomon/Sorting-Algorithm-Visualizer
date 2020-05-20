import React, { Component } from 'react';
import "./SortingStyle.css"

class SortingArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
        this.generateArray = this.generateArray.bind(this)
    }

    componentDidMount() {
        this.generateArray()
    }

    generateArray() {
        const arr = [];
        for (let i = 0; i < 230; ++i) {
            arr.push(randomNumber(5, 590))
        }
        this.setState({
            array: arr
        })
    }

    bubbleSort() {
        var arr = this.state.array
        var isSorted = false
        var lastUnsorted = arr.length - 1
        while (!isSorted) {
            isSorted = true;
            for (let i = 0; i < lastUnsorted; ++i) {
                if (arr[i] > arr[i + 1]) {
                    swap(arr, i, i + 1)
                    isSorted = false
                }
            }
            lastUnsorted--
        }
        this.setState({ array: arr })
    }

    quickSort(arr, low, high) {
        if (low < high) {
            var pi = partition(arr, low, high)

            this.quickSort(arr, low, pi - 1)
            this.quickSort(arr, pi + 1, high)
        }
        this.setState({ array: arr })
    }

    testSort() {
        var arr = this.state.array
        arr.sort((a, b) => a - b)
        this.setState({
            array: arr
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="btns">
                        <button onClick={() => this.generateArray()}>Generate New Array</button>
                        <button onClick={() => this.testSort()}>Standard Sorting Method</button>
                        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button onClick={() => this.quickSort(this.state.array, 0, this.state.array.length - 1)}>Quick sort</button>
                    </div>
                </div>
                <div className="container">
                    {this.state.array.map((i, key) => <div
                        className="bar"
                        key={key}
                        style={{ height: `${i}px` }}
                    />)}
                </div>
            </div>
        );
    }
}

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (arr, low, high) => {
    var pivot = arr[high]
    var i = low - 1
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            i++
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    return i + 1
}

export default SortingArray;