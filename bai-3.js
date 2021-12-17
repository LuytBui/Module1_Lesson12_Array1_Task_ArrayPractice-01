function bai3() {
    //  let N = prompt('Nhập số lượng phần tử của dãy');
    let N = 10;
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
        do {   // vòng lặp này bắt người dùng phải nhập vào số chứ không phải chữ cái
            let promptMessage = 'Nhập vào dãy gồm ' + N + 'số. '
                + '\nDãy đã nhập: ' + arr.slice(0, i)
                + '\nSố tiếp theo:';

            arr[i] = parseFloat(prompt(promptMessage));
        } while (isNaN(arr[i]));
    }

    // vòng lặp để tìm max kết hợp tính tổng
    let max = arr[0];
    let index = 0;
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        //tìm max
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }

        //tính tổng
        sum += arr[i];
    }
    let average = sum/arr.length;
    let message = 'Dãy nhập vào: ' + arr + '<br>' +
        'Phần tử lớn nhất: ' + max + '<br>' +
        'Giá trị trung bình: ' + average;
    document.getElementById('result-3').innerHTML = message;

}


