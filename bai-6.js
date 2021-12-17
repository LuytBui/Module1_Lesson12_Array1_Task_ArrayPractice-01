function bai6() {
    // let N = prompt('Nhập số lượng phần tử của mảng');
    let N = 10;
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
        let promptMessage = 'Nhập vào dãy gồm ' + N + 'phần tử. '
            + '\nDãy đã nhập: ' + arr.slice(0, i)
            + '\nPhần tử tiếp theo:';

        arr[i] = parseFloat(prompt(promptMessage));
    }

    let V = parseFloat(prompt('Nhập giá trị muốn tìm kiếm:'));
    // vòng lặp để tìm V
    isFound = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] ==V ) {
            isFound = true;
            break;
        }
    }


    let message = 'Dãy nhập vào: ' + arr + '<br>';
    message += 'Giá trị tìm kiếm: ' + V + '<br>';
    message += isFound? 'Tìm được giá trị trong chuỗi' : 'Không tìm được giá trị trong chuỗi';
    document.getElementById('result-6').innerHTML = message;
    document.getElementById('result-6').scrollIntoView();
}


