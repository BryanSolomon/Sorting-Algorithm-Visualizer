import React, { Component } from 'react';
import "./SortingStyle.css"

class SortingArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            sorted: null,
            inProgress: false
        }
        this.generateArray = this.generateArray.bind(this)
    }

    componentDidMount() {
        this.generateArray()
    }

    generateArray() {
        if (this.state.inProgress === true) {
            return
        }
        const arr = [];
        for (let i = 0; i < 100; ++i) {
            arr.push(randomNumber(5, 590))
        }
        this.setState({
            array: arr,
            sorted: false
        })
    }

    bubbleSort() {
        if (this.state.sorted === true) {
            return
        }
        this.setState({ inProgress: true })
        var arr = this.state.array
        var n = this.state.array.length;
        for (let i = 0; i < n - 1; i++) {
            setTimeout(() => {
                for (let j = 0; j < n - i - 1; j++) {
                    setTimeout(() => {
                        if (arr[j] > arr[j + 1]) {
                            const temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                        this.setState({ array: arr })
                    }, 1);
                }
            }, 1);
        }
        this.setState({
            sorted: true,
            inProgress: false
        })
    }

    quickSort(arr, start, end) {
        if (start < end) {
            var pi = partition(arr, start, end);

            this.quickSort(arr, start, pi - 1);
            this.quickSort(arr, pi + 1, end);
        }
        this.setState({
            array: arr,
            sorted: true
        })
    }

    testSort() {
        var arr = this.state.array
        arr.sort((a, b) => a - b)
        this.setState({
            array: arr,
            sorted: true
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
                    <div className="logoContainer">
                        <span className="logo">Sorting Algorithm Visualizer</span>
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

const partition = (arr, start, end) => {
    const pivot = arr[end];
    var i = (start - 1);

    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;

            const swapTemp = arr[i];
            arr[i] = arr[j];
            arr[j] = swapTemp;
        }
    }

    const swapTemp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = swapTemp;

    return i + 1;
}

const loopWithCallback = (callback, i, limit) => {
    if (i > limit) return

    setTimeout(() => {
        callback(loopWithCallback(callback, i + 1, limit))
    }, 100)

}

export default SortingArray;