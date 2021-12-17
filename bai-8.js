function bai8() {
    let N = prompt('Nhập số lượng phần tử của mảng');
    // let N = 10;
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
        let promptMessage = 'Nhập vào dãy gồm ' + N + 'phần tử. '
            + '\nDãy đã nhập: ' + arr.slice(0, i)
            + '\nPhần tử tiếp theo:';

        arr[i] = parseFloat(prompt(promptMessage));
    }
    let message = 'Dãy nhập vào: ' + arr + '<br>';

    // sắp xếp theo chiều tăng dần:
    arr.sort();
    // sắp xếp theo chiều giảm dần:
    arr.reverse();
    message += 'Dãy được sắp xếp: ' + arr + '<br>';

    document.getElementById('result-8').innerHTML = message;
    document.getElementById('result-8').scrollIntoView();
}


