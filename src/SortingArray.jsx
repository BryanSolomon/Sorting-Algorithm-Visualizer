import React, { Component } from 'react';
import "./SortingStyle.css"
import { bubbleSortAnimation } from "./SortingAlgorithms/bubbleSort"
import { quickSortAnimation } from './SortingAlgorithms/quickSort'
import { heapSortAnimation } from "./SortingAlgorithms/heapSort"
import { selectionSortAnimation } from './SortingAlgorithms/selectionSort'
import { insertionSortAnimation } from './SortingAlgorithms/insertionSort'
import { mergeSortAnimation } from './SortingAlgorithms/mergeSort'

const SPEED = 3

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
        if (this.state.inProgress) {
            return
        }
        const arr = [];
        for (let i = 0; i < 230; ++i) {
            arr.push(randomNumber(5, 590))
        }
        this.setState({
            array: arr,
            sorted: false
        })
    }

    animateBubbleSort() {
        if (this.state.sorted === true) {
            return
        }
        // this.setState({ inProgress: true })
        let animation = bubbleSortAnimation(this.state.array);
        console.log(animation)
        for (let i = 0; i < animation.length; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index1, index2, swap] = animation[i]
            const index1Style = bars[index1].style
            const index2Style = bars[index2].style
            if (swap) {
                setTimeout(() => {
                    let temp = index1Style.height
                    index1Style.height = index2Style.height
                    index2Style.height = temp
                }, i * SPEED);
            }
            setTimeout(() => {
                index1Style.backgroundColor = "red"
                index2Style.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                index1Style.backgroundColor = "turquoise"
                index2Style.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                inProgress: false,
                array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    animateQuickSort(arr, start, end) {
        if (this.state.sorted === true) {
            return
        }
        let animation = []
        animation = quickSortAnimation(arr, start, end, animation)
        console.log(animation)
        for (let i = 0; i < animation.length; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index1, index2, swap] = animation[i]
            const index1Style = bars[index1].style
            const index2Style = bars[index2].style
            if (swap) {
                setTimeout(() => {
                    let temp = index1Style.height
                    index1Style.height = index2Style.height
                    index2Style.height = temp
                }, i * SPEED);
            }
            setTimeout(() => {
                index1Style.backgroundColor = "red"
                index2Style.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                index1Style.backgroundColor = "turquoise"
                index2Style.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    animateHeapSort(arr) {
        if (this.state.sorted === true) {
            return
        }
        let animation = []
        animation = heapSortAnimation(arr, animation)
        // console.log(animation)
        for (let i = 0; i < animation.length; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index1, index2, swap] = animation[i]
            const index1Style = bars[index1].style
            const index2Style = bars[index2].style
            if (swap) {
                setTimeout(() => {
                    let temp = index1Style.height
                    index1Style.height = index2Style.height
                    index2Style.height = temp
                }, i * SPEED);
            }
            setTimeout(() => {
                index1Style.backgroundColor = "red"
                index2Style.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                index1Style.backgroundColor = "turquoise"
                index2Style.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                // array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    animateSelectionSort() {
        if (this.state.sorted === true) {
            return
        }
        let animation = []
        animation = selectionSortAnimation(this.state.array, animation)
        // console.log(animation)
        for (let i = 0; i < animation.length; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index1, index2, swap] = animation[i]
            const index1Style = bars[index1].style
            const index2Style = bars[index2].style
            if (swap) {
                setTimeout(() => {
                    let temp = index1Style.height
                    index1Style.height = index2Style.height
                    index2Style.height = temp
                }, i * SPEED);
            }
            setTimeout(() => {
                index1Style.backgroundColor = "red"
                index2Style.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                index1Style.backgroundColor = "turquoise"
                index2Style.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                // array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    animateInsertionSort() {
        if (this.state.sorted === true) {
            return
        }
        let animation = []
        animation = insertionSortAnimation(this.state.array, animation)
        console.log(animation)
        for (let i = 0; i < animation.length; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index1, index2, swap] = animation[i]
            const index1Style = bars[index1].style
            const index2Style = bars[index2].style
            if (swap) {
                setTimeout(() => {
                    let temp = index1Style.height
                    index1Style.height = index2Style.height
                    index2Style.height = temp
                }, i * SPEED);
            }
            setTimeout(() => {
                index1Style.backgroundColor = "red"
                index2Style.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                index1Style.backgroundColor = "turquoise"
                index2Style.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                // array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    animateMergeSort() {
        if (this.state.sorted === true) {
            return
        }
        const animation = mergeSortAnimation(this.state.array)
        for (let i = 0; i < animation.length - 1; ++i) {
            const bars = document.getElementsByClassName('bar')
            const [index, newHeight] = animation[i]
            const indexStyle = bars[index].style
            setTimeout(() => {
                indexStyle.height = `${newHeight}px`
            }, i * SPEED);
            setTimeout(() => {
                indexStyle.backgroundColor = "red"
            }, i * SPEED);
            setTimeout(() => {
                indexStyle.backgroundColor = "turquoise"
            }, i * SPEED + 8);
        }
        setTimeout(() => {
            this.setState({
                sorted: true,
                // array: this.state.array.sort((a, b) => a - b)
            })
        }, animation.length * SPEED);
    }

    render() {
        return (
            <div>
                <nav className="header">
                    <span className="logo">Sorting Algorithm Visualizer</span>
                    <ul className="btns">
                        <li><button className="newArrBtn" onClick={() => this.generateArray()}>Generate New Array</button></li>
                        <li><button onClick={() => this.animateBubbleSort()}>Bubble Sort</button></li>
                        <li><button onClick={() => this.animateQuickSort(this.state.array, 0, this.state.array.length - 1)}>Quick sort</button></li>
                        <li><button onClick={() => this.animateHeapSort(this.state.array)}>Heap Sort</button></li>
                        <li><button onClick={() => this.animateSelectionSort()}>Selection Sort</button></li>
                        <li><button onClick={() => this.animateInsertionSort()}>Insertion Sort</button></li>
                        <li><button onClick={() => this.animateMergeSort()}>Merge Sort</button></li>
                    </ul>
                </nav>
                <div className="container">
                    {this.state.array.map((i, key) =>
                        <div
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

export default SortingArray;