let the_input = document.getElementById('the_input'); // input
let add_btn = document.getElementById('add_btn'); // +
let sub_btn = document.getElementById('sub_btn'); //-
let equal_btn = document.getElementById('equal_btn'); // =
let erase_all_btn = document.getElementById('erase_all_btn'); //borrar
let result_section = document.getElementById('result');
let operation = [];
let final_result = document.createElement('p');

const build_operation = () => {
    operation.push(Number(the_input.value));

}

const add = () => {
    build_operation();
    operation.push('+');
    console.log(operation);  
    clear_input();
}

const substract = () => {
    build_operation();
    operation.push('-');
    console.log(operation);
    clear_input();
}

const apply_operation = () => {
    build_operation();
    clear_input();
    let final_operation = operation.join('');
    let the_result = eval(final_operation);
    final_result.innerHTML=the_result;
    result_section.appendChild(final_result);
}

const clear_operation = () => {
    operation = [];
    clear_input();
    result_section.removeChild(final_result);
}

const clear_input = () => {
    the_input.value='';
}

add_btn.addEventListener('click', add );
sub_btn.addEventListener('click', substract );
equal_btn.addEventListener('click', apply_operation ); //convierte todo a numero desde string
erase_all_btn.addEventListener('click', clear_operation);