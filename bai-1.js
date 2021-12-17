function bai1(){
    // let N = prompt('Nhập số lượng phần tử của mang');
    let N = 10;
    let arr = [];
    let count=0;
    for (let i = 0; i<N; i++){
        do{   // vòng lặp này bắt người dùng phải nhập đúng số thực
            arr[i] = parseFloat(prompt('Nhập phần tử thứ ' + (i+1)));
        } while (isNaN(arr[i]));

        if (arr[i] >=10){
            count++;
        }
    }
    let message = 'Mảng nhập vào: '+ arr + '<br>'+
                    'Số phần tử lớn hơn hoặc bằng 10: '+ count;
    document.getElementById('result-1').innerHTML = message;
}