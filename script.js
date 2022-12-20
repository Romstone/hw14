function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    const pal_input = document.getElementById('palindrome_input');
    isPalindrome(pal_input.value);
}

function isPalindrome(str){
    const pal_res = document.getElementById('palindrome_res');
    if (!str.replace(/\s/g, '').length) {
        return pal_res.textContent = false.toString();
    } else if (str.length < 2) {
        return pal_res.textContent = false.toString();
    }
    const str1 = str.toLowerCase();
    const str2 = str1.split('').reverse().join('');
    pal_res.textContent = (str1 === str2).toString();
}

/*function isPalindrome(str) {
    const pal_res = document.getElementById('palindrome_res');
    if (!str.replace(/\s/g, '').length) {
        return pal_res.textContent = false.toString();
    } else if (str.length < 2) {
        return pal_res.textContent = false.toString();
    }
    const str1 = str.toLowerCase().split('');
    for (let i = 0, j = str1.length - 1; i < j; i++, j--) {
        if (str1[i] === str1[j]) {
            return pal_res.textContent = true.toString();
        } else {
            return pal_res.textContent = false.toString();
        }
    }
}*/

function reverseString(){
    // get value from input to str and then call reverseString(str)
    const rev_input = document.getElementById('reverse_input');
    reverseString1(rev_input.value);
}

function reverseString1(str){
    const rev_res = document.getElementById('reverse_result');
    if (!str.replace(/\s/g, '').length) {
        return rev_res.textContent = 'Empty string';
    }
    const str1 = str.split('').reverse().join('');
    return rev_res.textContent = str1;
}

function getCount(){
    // get value from input to str and c and then call countChar(str,c)
    const str_input = document.getElementById('string_value');
    const char_input = document.getElementById('character_value');
    countChar(str_input.value, char_input.value);
}

function countChar(str,c){
    const count_res = document.getElementById('res_calc');
    if (str.length === 0) {
        count_res.textContent = 'Empty string';
        return;
    }
    let count = 0;
    str = str.split('');
    for (const strElement of str) {
        if (strElement === c) {
            count += 1;
        }
    }
    count_res.textContent = count.toString();
}

/*str.replace(/\s/g, '').length is a method which searches all (g as global)
whitespaces (\s) and replaces them with empty space (''), then returns its
length
This method is used to check if the input string contains only spaces */
