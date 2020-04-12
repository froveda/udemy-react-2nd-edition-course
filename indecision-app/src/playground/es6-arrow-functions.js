const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Fabricio Roveda'));

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShort('Fabricio Roveda'));