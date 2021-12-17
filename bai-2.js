function bai2() {
    //  let N = prompt('Nhập số lượng phần tử của dãy');
    let N = 10;
    let arr = [];

    // vòng lặp để nhập mảng
    for (let i = 0; i < N; i++) {
        let isValid;
        do {   // vòng lặp này bắt người dùng phải nhập vào 1 số thực
            // mà phải có giá trị khác với các số đã nhập từ trước
            let promptMessage = 'Nhập vào dãy gồm ' + N + 'số khác nhau. '
                + '\nDãy đã nhập: ' + arr.slice(0, i)
                + '\nSố tiếp theo:';

            arr[i] = parseFloat(prompt(promptMessage));

            //kiểm tra xem có trùng với các số đã nhập
            let isUnique = true;
            for (let j = 0; j < i; j++) {
                if (arr[j] === arr[i]) {
                    isUnique = false;
                    break;
                }
            }
            isValid = isUnique && (!isNaN(arr[i]));
        } while (!isValid);
    }

    // vòng lặp để tìm max
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }


    let message = 'Dãy nhập vào: ' + arr + '<br>' +
        'Phần tử lớn nhất: ' + max + '<br>' +
        'Vị trí thứ: ' + (index + 1);
    document.getElementById('result-2').innerHTML = message;

}


