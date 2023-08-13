export const fetchTest = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const data_1 = await data.json();
    return data_1;
};
