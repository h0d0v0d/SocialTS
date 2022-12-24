import React from 'react';

const Loading: React.FC<{size: number}> = (props) => {

    /* let size;
    if (props.size === 'small') {
        size = '40px'
    } 
    if (props.size === 'medium') {
        size = '140px'
    } 
    if (props.size === 'big') {
        size = '200px'
    }  */

    return (
        
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', backgroundColor: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto'}} width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="30" cy="50" fill="#e90c59" r="20">
                <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
                </circle>
                <circle cx="70" cy="50" fill="#46dff0" r="20">
                <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
                </circle>
                <circle cx="30" cy="50" fill="#e90c59" r="20">
                <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
                <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
                </circle>
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', backgroundColor: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto'}} width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="84" cy="50" r="10" fill="#e15b64">
                <animate attributeName="r" repeatCount="indefinite" dur="0.4807692307692307s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                <animate attributeName="fill" repeatCount="indefinite" dur="1.923076923076923s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64" begin="0s"></animate>
            </circle><circle cx="16" cy="50" r="10" fill="#e15b64">
            <animate attributeName="r" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            </circle><circle cx="50" cy="50" r="10" fill="#f47e60">
            <animate attributeName="r" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4807692307692307s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.4807692307692307s"></animate>
            </circle><circle cx="84" cy="50" r="10" fill="#f8b26a">
            <animate attributeName="r" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.9615384615384615s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.9615384615384615s"></animate>
            </circle><circle cx="16" cy="50" r="10" fill="#abbd81">
            <animate attributeName="r" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.4423076923076923s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="1.923076923076923s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.4423076923076923s"></animate>
            </circle></svg>
        </>
    );
};

export default Loading;