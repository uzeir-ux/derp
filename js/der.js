$(document).ready(
    function(){
        $('[data-i]').click(
            function(){
                let i = $(this).data('i');
                let input_1 = parseInt($('#input_1').val());
                let input_2 = parseInt($('#input_2').val());
                let result = '';
                switch (i) {
                    case '+':
                             result = input_1 + input_2;
                        break;
                    case '-':
                             result = input_1 - input_2;
                        break;
                    case '*':
                             result = input_1 * input_2;
                        break;
                    case '/':
                             result = input_1 / input_2;
                        break;
                }

                alert(`'П1(${input_1}) ${i} П2(${input_2}) = ${result}`);
            }
        );
    }
);