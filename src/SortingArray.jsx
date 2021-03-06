import React, { Component } from 'react';
import "./SortingStyle.css"
import { bubbleSortAnimation } from "./SortingAlgorithms/bubbleSort"
import { quickSortAnimation } from './SortingAlgorithms/quickSort'
import { heapSortAnimation } from "./SortingAlgorithms/heapSort"
import { selectionSortAnimation } from './SortingAlgorithms/selectionSort'
import { insertionSortAnimation } from './SortingAlgorithms/insertionSort'
import { mergeSortAnimation } from './SortingAlgorithms/mergeSort'
/**
 * Project: Sorting Algorithm visualizer
 * Author: Bryan Solomon
 * 
 * This webapp simulates different sorting algorithms in
 * using randomly generates arrays
 */
const SPEED = 5 //animation speed in miliseconds 
var inProgress = false

class SortingArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            sorted: null,
        }
        this.generateArray = this.generateArray.bind(this)
    }

    componentDidMount() {
        this.generateArray()
    }

    /** 
     * Generates random values and pushes them into array
     */
    generateArray() {
        if (inProgress) {
            return
        }
        const arr = [];
        for (let i = 0; i < 140; ++i) {
            arr.push(randomNumber(5, 525))
        }
        this.setState({
            array: arr,
            sorted: false
        })
    }
    /** 
     * An animation array is filled with indexes and a boolean swap of that the algorithm(s) 
     * go through to sort array. If swap is true, the array heights at those index are swapped. 
     * Otherwise they will still be colored red to indecate being compared, but won't be swapped
     */
    animateSortingAlgorithm(algorithm) {
        if (this.state.sorted === true) {
            return
        }
        inProgress = true
        let animation = []
        switch (algorithm) {
            case "bubble":
                animation = bubbleSortAnimation(this.state.array)
                break
            case "quick":
                animation = quickSortAnimation(this.state.array, 0, this.state.array.length - 1, animation)
                break
            case "heap":
                animation = heapSortAnimation(this.state.array, animation)
                break
            case "selection":
                animation = selectionSortAnimation(this.state.array, animation)
                break
            case "insertion":
                animation = insertionSortAnimation(this.state.array, animation)
                break
            default:
                return
        }
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
            })
            inProgress = false
        }, animation.length * SPEED);
    }

    /** 
     * Merge sort and insertion sort do not swap values, so the animation process is different. 
     * The animation array will contain index and new height, and this function will override 
     * the height at those indexes with the new height
     */
    animationOtherAlgorithms(algorithm) {
        if (this.state.sorted === true) {
            return
        }
        let animation = []
        if (algorithm === "merge") {
            animation = mergeSortAnimation(this.state.array, animation)
        } else if (algorithm === "insertion") {
            animation = insertionSortAnimation(this.state.array, animation)
        }
        console.log(animation)
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
            })
        }, animation.length * SPEED);
    }

    render() {
        return (
            <div>
                <nav className="header">
                    <span className="logo">Sorting Algorithm Visualizer</span>
                    <ul className="btns">
                        <li><button className="newArrBtn" onClick={() => inProgress ? null : this.generateArray()}>Generate New Array</button></li>
                        <li><button onClick={() => inProgress ? null : this.animateSortingAlgorithm("bubble")}>Bubble Sort</button></li>
                        <li><button onClick={() => inProgress ? null : this.animateSortingAlgorithm("quick")}>Quick sort</button></li>
                        <li><button onClick={() => inProgress ? null : this.animateSortingAlgorithm("heap")}>Heap Sort</button></li>
                        <li><button onClick={() => inProgress ? null : this.animationOtherAlgorithms("merge")}>Merge Sort</button></li>
                        <li><button onClick={() => inProgress ? null : this.animateSortingAlgorithm("selection")}>Selection Sort</button></li>
                        <li><button onClick={() => inProgress ? null : this.animationOtherAlgorithms("insertion")}>Insertion Sort</button></li>
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

/**
 * Sorting algorithm to generate number within a specified range
 */
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

export default SortingArray;