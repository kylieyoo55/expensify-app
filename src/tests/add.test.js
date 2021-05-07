const add=(a,b)=>a+b;
const generateGreeting =(name='anonymous')=>`Hello ${name}`

test('should add 2 numbers',()=>{
    const result=add(3,4);
    expect(result).toBe(7);

    // if(result !== 7){
    //     throw new Error(`You added 4 and 3, the result was ${result},expect 7`)
    // }
});

test('name should be Kylie',()=>{
    const greeting=generateGreeting('Kylie');
    expect(greeting).toBe('Hello Kylie');
})