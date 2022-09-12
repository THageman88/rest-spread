let filterOdds = (...arguments) => arguements.fiter(num => num % 2 === 0);

const findMins = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)];

const removeRandomItem = item => {
    let idx = Math.floor(Math.random() * item.length);
    return [...item.slice(0, idx), ...item.slice(idx + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {
        ...obj
    }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    letNewObj = {
        ...obj
    };
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
}

const update = (obj, key, value) => {
    let newObj = {
        ...obj
    }
    newObj[key] = value;
    return newObj;
}