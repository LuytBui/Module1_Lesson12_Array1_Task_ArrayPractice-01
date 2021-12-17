function bai9() {
    let arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrB = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let arrC=[];


    // vòng lặp để gộp bảng A vào mảng C
    for (let i = 0; i < arrA.length; i++) {
        arrC[i] = arrA[i];
    }
    // vòng lặp để gộp bảng B vào mảng C
    for (let i = 0; i < arrB.length; i++) {
        arrC[arrA.length + i] = arrB[i];
    }
    let message = 'Dãy A: ' + arrA + '<br>';
    message += 'Dãy B: ' + arrB + '<br>';
    message += 'Dãy C: ' + arrC + '<br>';

    document.getElementById('result-9').innerHTML = message;
    document.getElementById('result-9').scrollIntoView();
}


