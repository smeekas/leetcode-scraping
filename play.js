
const main=["G","F","A","O","N"];

const sub=["G","F","P"];



function asd(main, tobe) {
    return tobe.every( function (v) {
        return main.includes(v);
    });
};
console.log(asd(main,sub));

// const main="Binary tree";

// console.log(main.includes("Tree".toLowerCase()))