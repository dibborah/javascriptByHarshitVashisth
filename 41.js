// object destruturing

const band = {
    bandName: 'ledZepplin',
    famousSong: 'destiny',
    year: 1969,
    anotherFamousSong: 'wow is it!!!'
}

// without destructuring
// let bandName = band.bandName;
// const famousSong = band.famousSong;

// bandName = 'arijit'

// console.log(bandName);
// console.log(famousSong);

// with destructuring
// let { bandName, famousSong } = band;

// bandName = 'arjit';

// console.log(bandName);
// console.log(famousSong);


// without destructuring changing actual property names when using
// const var1 = band.bandName;
// const var2 = band.famousSong;

// console.log(var1);
// console.log(var2);

// with destructuring changing name using alias
const { bandName: var1, famousSong: var2, ...restProperties } = band;
// const {year, anotherFamousSong} = band;

// console.log(bandName);
// console.log(famousSong);

console.log(var1);
console.log(var2);

// console.log(year);
// console.log(anotherFamousSong);

console.log(restProperties);





