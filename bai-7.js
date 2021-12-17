function bai7() {
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

    let V = parseFloat(prompt('Nhập giá trị muốn xóa:'));
    // vòng lặp để tìm và xóa V
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === V) {
                // dồn mảng, xóa phần tử cuối
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;   //quan trọng
        }
    }


    message += 'Giá trị tìm kiếm: ' + V + '<br>';
    message += 'Dãy mới: ' + arr + '<br>';
    message += 'Chiều dài dãy mới: ' + arr.length + '<br>';

    document.getElementById('result-7').innerHTML = message;
    document.getElementById('result-7').scrollIntoView();
}


