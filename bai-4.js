function bai4() {
    let N = prompt('Nhập số lượng phần tử của dãy');
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
            let promptMessage = 'Nhập vào dãy gồm ' + N + 'phần tử. '
                + '\nDãy đã nhập: ' + arr.slice(0, i)
                + '\nPhần tử tiếp theo:';
            arr[i] = parseFloat(prompt(promptMessage));
    }
    let message = 'Dãy nhập vào: ' + arr + '<br>';

    // vòng lặp để đảo ngược chuỗi
    let left = 0;
    let right = arr.length-1;
    while (left<right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    message += 'Dãy đảo ngược: ' + arr;
    document.getElementById('result-4').innerHTML = message;

}


