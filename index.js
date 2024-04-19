const employee = {
 name: "Gus",
 streetAddress : "Corncob Lane",   
};// Write your solution in this file!

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { 
    ...obj,
    [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
obj[key] = value;
return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    return { 
    ...
    delete obj.key
    };
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
        delete obj[key];
        return obj;
        }