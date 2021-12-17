function bai5() {
    let N = prompt('Nhập số lượng phần tử của mảng');
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
            let promptMessage = 'Nhập vào dãy gồm ' + N + 'phần tử. '
                + '\nDãy đã nhập: ' + arr.slice(0, i)
                + '\nPhần tử tiếp theo:';

            arr[i] = parseFloat(prompt(promptMessage));
    }


    // vòng lặp để đếm số âm
    let count = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] <0){
            count++;
        }
    }

    let message = 'Dãy nhập vào: ' + arr + '<br>';
    message += 'Số lượng số âm: ' + count;
    document.getElementById('result-5').innerHTML = message;

}


