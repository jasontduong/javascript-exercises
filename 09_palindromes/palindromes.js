const palindromes = string => {
   const remove = string.toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "")
    .replace(/\s+/g,'');

    const reverse = remove.split("").reverse().join("");

    return reverse === remove;
};

// Do not edit below this line
module.exports = palindromes;
